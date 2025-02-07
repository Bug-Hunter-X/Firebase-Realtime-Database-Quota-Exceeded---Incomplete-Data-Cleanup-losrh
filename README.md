# Firebase Realtime Database Quota Exceeded Error

This repository demonstrates a scenario where a Firebase Realtime Database project hits the quota limit, even though the actual data usage seems low. This is caused by incomplete data cleanup.  If a client-side `onDisconnect()` handler fails (e.g., due to network interruption), data might persist, accumulating over time and causing quota issues. 

The `bug.js` file shows the problematic code, and `solution.js` offers improved handling.

## Reproduction Steps:

1. Clone this repository.
2. Set up a Firebase project.
3. Replace placeholders in the code with your Firebase config.
4. Run `bug.js` multiple times (simulating intermittent connection issues).
5. Monitor your Firebase console to observe quota usage increasing despite seemingly infrequent writes.

## Solution:

The `solution.js` file shows how to implement more robust data cleanup using server-side functions or a more robust client-side strategy with retries and better error handling.