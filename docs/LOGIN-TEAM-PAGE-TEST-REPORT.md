# Login → Team Page Test Report

## 1. Purpose

This document records the happy-path testing performed for the Login → Team Page flow. The purpose was to confirm that a valid user can authenticate successfully and reach the Team Page, and that the main Team Page functionality is displayed correctly.

---

## 2. Test Cases

| Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|
| Sign in with valid credentials | User is authenticated successfully | User signed in successfully | PASS |
| Successful login redirect | User is redirected to the Team Page | Team Page displayed after login | PASS |
| Display team information | Group 53 information is displayed correctly | Team information displayed correctly | PASS |
| Display team member cards | All team members are displayed with their expected information | Member cards rendered correctly | PASS |
| Display member photo/avatar | Member photo is displayed, or initials are shown when no photo is available | Photo/avatar displayed correctly | PASS |
| Display member roles and blurbs | Each member's role and blurb are displayed correctly | Roles and blurbs displayed correctly | PASS |
| Long member blurb | Longer text can be expanded using the available text handling | Long-text expansion worked correctly | PASS |

---

## 3. Bugs Found

No bugs were identified during the happy-path testing.

**Outstanding issues:** None.

---

## 4. Conclusion

The main Login → Team Page flow worked as expected on the deployed application. Valid authentication successfully redirected the user to the Team Page, and the main team member information and long-text functionality were displayed correctly.

The feature passed happy-path testing and was handed over for edge-case testing.
