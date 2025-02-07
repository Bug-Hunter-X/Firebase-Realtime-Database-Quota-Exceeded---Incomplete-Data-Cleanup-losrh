The solution involves improving the reliability of your `onDisconnect()` handlers. Instead of relying solely on client-side cleanup, consider using a combination of techniques:

1. **Server-Side Cleanup:** Employ Cloud Functions to periodically check and clean up any orphaned data.

2. **Robust Client-Side Handling:** Implement retry mechanisms in your `onDisconnect()` handler. If the removal fails, try again after a delay, with exponential backoff to avoid overwhelming the database.

3. **Data Validation:** Add client-side validation to ensure data is only written if it is expected. This minimizes the potential for accidental data accumulation.

```javascript
// solution.js
// ... Firebase initialization ...

const db = firebase.database();
const userId = 'user123';

const removeDataOnDisconnect = () => {
  const userRef = db.ref(`/users/${userId}`);
  userRef.onDisconnect().remove().catch(error => {
    console.error('Failed to remove data on disconnect:', error);
    // Implement retry logic here with exponential backoff
  });
};

// ... other code ...
```