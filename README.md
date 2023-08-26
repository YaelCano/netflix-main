 1. In the config.json file, we define the data for the header, cards, table, and footer sections of the website. 

```json

<!DOCTYPE html>
<html lang="en" data-bs-theme="auto">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
  <meta name="generator" content="Hugo 0.115.4">
  <title>NETFLIX</title>
  <script src="assets/js/color-modes.js"></script>
  <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/pricing/">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
  <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="pricing.css" rel="stylesheet">
  <script src="assets/dist/js/bootstrap.bundle.min.js" defer></script>
  <script src="main.js"></script>
</head>

<body>
 

</body>
</html>
Step 2: Add the header
Add the header section to the index.html file.

<header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <img src="assets/brand/Netflix-Logo.wine.svg" alt="" width="190" height="50">
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Sign In</a>
          <a class="py-2 link-body-emphasis text-decoration-none" href="#">About Us</a>
        </nav>
      </div>
      <div
{
    "section": {
        "titulo": "Choose the plan that’s right for you",
        "parrafo": [
            {
                "icon": "<svg class='bi bi-lightning' width='24' height='24' class=''><use xlink:href='#check'/></svg> ",
                "text": "Watch all you want. Ad-free."
            },
            {
                "icon": "<svg class='bi bi-lightning' width='24' height='24' class='''><use xlink:href='#check'/></svg> ",
                "text": "Recommendations just for you."
            },
            {
                "icon": "<svg class='bi bi-lightning' width='24' height='24' class='''><use xlink:href='#check'/></svg> ",
                "text": "Change or cancel your plan anytime."
            }
        ]

    },

    "cartas": {
        "cardcontent": [
            {
                "header": "Basic",
                "Body": {
                    "Border": {
                        "border_red": "<div class='card mb-4 rounded-0 shadow-sm'>",
                        "background": "<div class='card-header py-3'>",
                        "button": "'w-100 btn btn-lg btn-outline-danger rounded-0'"
                    },
                    "precio": "<h1 class='card-title pricing-card-title'><small class='text-body-secondary fw-light'>COP</small>16,900</h1>",
                    "servicios": {
                        "device": "1 devices",
                        "support": "Priority email support",
                        "Help": "Help center support"
                    }
                }
            },
            {
                "header": "Standard",
                "Body": {
                    "Border": {
                        "border_red": "<div class='card mb-4 rounded-0 shadow-sm'>",
                        "background": "<div class='card-header py-3'>",
                        "button": "'w-100 btn btn-lg btn

