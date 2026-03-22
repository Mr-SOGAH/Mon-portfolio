{
  "buildCommand": null,
  "outputDirectory": ".",
  "framework": null,
  "rewrites": [
    { "source": "/(.*)", "destination": "/$1" }
  ],
  "headers": [
    {
      "source": "/(.*).pdf",
      "headers": [
        { "key": "Content-Type", "value": "application/pdf" },
        { "key": "Content-Disposition", "value": "inline" }
      ]
    }
  ]
}
