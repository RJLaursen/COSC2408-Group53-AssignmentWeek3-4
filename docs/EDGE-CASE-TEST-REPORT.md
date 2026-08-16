# Edge Case Test Report

## 1. Purpose

This document records the basic edge-case testing performed for the Team Page and authentication functionality. The purpose was to confirm that common invalid or unusual inputs do not cause the application to break or behave unexpectedly.

---

## 2. Test Cases

| Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|
| Open the Team Page while logged out | User should not be able to view the Team Page and should be sent back to sign in | I was redirected back to the sign-in page and could not access the Team Page | PASS |
| Team member has no profile photo | A placeholder/avatar should appear instead of a broken or missing image | The member initials were shown correctly as the placeholder | PASS |
| Team member has a very long blurb | The text should stay readable and not break the card layout | The text stayed readable and the Read More option worked correctly | PASS |
| Team member has a long name or role | The name/role should still fit without overlapping or breaking the card | The text stayed inside the card and remained readable | PASS |
| View the Team Page on a smaller screen | The layout should adjust so the cards and text are still usable | The cards stacked properly and the page was still easy to read | PASS |

---

## 3. Bugs Found

No bugs were identified during the edge-case testing.

**Outstanding issues:** None.

---

## 4. Conclusion

The tested authentication and Team Page edge cases behaved as expected. Missing profile photos, longer member descriptions, invalid login attempts, protected page access, and smaller screen sizes were handled without observed issues.

The Team Page is ready for review by another developer.
