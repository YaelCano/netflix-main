 1. In the `pricing/config.json` file, we define the data for the pricing section, including the title, paragraphs, cards, table, and footer.

```json
{
    "section": {
        "titulo": "Select your plan",
        "parrafo": [
            {
                "image": "<td><svg class='bi' width='24' height='24'><use xlink:href='#check'/></svg>",
                "text": "Watch all you want. Ad-free."
            },
            {
                "image": "<td><svg class='bi' width='24' height='24'><use xlink:href='#check'/></svg>",
                "text": "Recommendations just for you."
            },
            {
                "image": "<td><svg class='bi' width='24' height='24'><use xlink:href='#check'/></svg>",
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
                        "button": "'w-100 btn btn-lg btn-danger rounded-0'"
                    },
                    "precio": "<
}
