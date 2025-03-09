# GitHub Workflow Setup Guide

This document provides instructions on how to set up the GitHub workflows in this repository.

## Setting Up Secrets

Several workflows in this repository require GitHub secrets to function properly. Here's how to set them up:

### 1. Vercel Deployment Secrets

The Vercel deployment workflow requires the following secrets:

- `VERCEL_TOKEN`: An authentication token from Vercel
- `VERCEL_PROJECT_ID`: Your Vercel project ID
- `VERCEL_ORG_ID`: Your Vercel organization ID

To set these up:

1. Go to [Vercel](https://vercel.com/) and log in to your account
2. Navigate to your account settings
3. Go to the "Tokens" tab and create a new token
4. Copy the token value

Then, in your GitHub repository:

1. Go to Settings > Secrets and variables > Actions
2. Click "New repository secret"
3. Create secrets for each of the required values:
   - Name: `VERCEL_TOKEN`, Value: (your token)
   - Name: `VERCEL_PROJECT_ID`, Value: (your project ID, found in Vercel project settings)
   - Name: `VERCEL_ORG_ID`, Value: (your org ID, found in Vercel organization settings)

### 2. GitHub Token (Automatic)

The `GITHUB_TOKEN` is provided automatically by GitHub Actions and doesn't need to be manually configured. This token is used for:

- Creating releases
- Managing issues and pull requests
- Running CodeQL analysis

## Testing Workflows

### Testing the Release Workflow

To test the release workflow:

1. Create a new tag:
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```

2. The release workflow will automatically trigger and create a release with a changelog.

### Testing the CI Workflow

The CI workflow runs automatically on:
- Pushes to the main and development branches
- Pull requests to the main branch

You can view the results in the "Actions" tab of your GitHub repository.

## Workflow Badge Status

The README file includes badges that show the status of your workflows. These badges will update automatically based on the status of your workflows.

## Troubleshooting

If you encounter issues with any workflows:

1. Check the workflow run logs in the GitHub Actions tab
2. Verify that all required secrets are set correctly
3. Ensure that the workflow YAML files are correctly formatted

For more help, refer to the [GitHub Actions documentation](https://docs.github.com/en/actions). 