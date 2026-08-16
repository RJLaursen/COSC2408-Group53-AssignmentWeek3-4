# Edge Case Test Report

## 1. Purpose

This document records the basic edge-case testing performed for the Team Page and authentication functionality. The purpose was to confirm that common invalid or unusual inputs do not cause the application to break or behave unexpectedly.

---

## 2. Test Cases

| Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|
| Submit login with invalid credentials | User remains on login page and an appropriate error is displayed | Error displayed and login unsuccessful | PASS |
| Attempt to access Team Page while logged out | User is prevented from accessing the protected page and redirected to login | User redirected to login | PASS |
| Team member has no profile photo | Initials/avatar placeholder is displayed instead of a broken image | Initials displayed correctly | PASS |
| Team member has an unusually long blurb | Text remains readable without breaking or overflowing the layout | Text displayed correctly | PASS |
| View Team Page at a smaller screen size | Team member cards adjust to the available screen width | Layout remained usable | PASS |

---

## 3. Bugs Found

No bugs were identified during the edge-case testing.

**Outstanding issues:** None.

---

## 4. Conclusion

The tested authentication and Team Page edge cases behaved as expected. Missing profile photos, longer member descriptions, invalid login attempts, protected page access, and smaller screen sizes were handled without observed issues.

The Team Page is ready for review by another developer.
