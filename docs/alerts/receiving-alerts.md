---
sidebar_position: 2
---

# Receiving Alerts

Learn how to view your received alerts

## Alert Frequency

Alerts are sent based on the frequency you selected when creating your alert:

- **Daily**: Receive updates once per day
- **Weekly**: Get a summary of new matches every week
- **Real-time**: Get immediate notifications when new businesses are found

You can adjust the frequency at any time by editing your alert settings.

## Email Notifications

All alert notifications are sent to the email address associated with your Scout account:

1. Make sure your account email is up to date
2. Check your email at the frequency you selected
3. Look for emails from Scout with the subject line "New Business Alert"

![Sample Alert Email](/img/docusaurus.png)

## Managing Notifications

If you're receiving too many or too few notifications:

1. Log in to your Scout account
2. Go to the Alerts section
3. Edit your alert criteria to be more or less specific
4. Adjust your notification frequency if needed

## What's Next?

- [Create a new alert](create-alert.md)
- [View your alerts](view-alerts.md)
- [Edit alert settings](edit-alert.md)

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
