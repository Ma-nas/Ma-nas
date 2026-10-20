# Security Policy

## Supported Versions

This is a profile repository. Security policies apply to the linked projects.

| Project | Maintained |
|---|---|
| [EvalForge](https://github.com/Ma-nas/EvalForge) | ✅ Yes |
| [TourismCo.](https://github.com/Ma-nas/TourismCo.) | ✅ Yes |
| [AI Test Case Generator](https://github.com/Ma-nas/Ai-test-case-generator) | ✅ Yes |
| [Adaptive Proximal Gradient](https://github.com/Ma-nas/Mini_project) | ✅ Yes |

## Reporting a Vulnerability

If you discover a security vulnerability in any of my projects, please **do not open a public GitHub Issue**.

Instead, email me directly at **mm7390180@gmail.com** with:

- A description of the vulnerability
- Steps to reproduce
- Potential impact
- (Optional) A suggested fix

I will acknowledge your report within **48 hours** and provide a timeline for the fix.

---

## Known Security Considerations

- None of my projects should have API keys committed to the repository. All secrets are managed via `.env` files (never committed) or environment variables in CI.
- If you find an accidentally committed secret, please report it immediately so I can rotate it.
