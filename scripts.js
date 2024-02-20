// Display the product card input form by default
let videoElement = document.querySelector('video')
let videoSource = document.querySelector('video source')
generateProductCardInputForm()

// Add event listener to all template buttons
let allTemplateBtns = document.querySelectorAll('.template-button')

console.log(videoSource)
allTemplateBtns.forEach((button) => {
  button.addEventListener('click', () => {
    let templateName = button.innerText

    let inputsContainer = document.querySelector('.user-input__container')

    inputsContainer.style.opacity = '0'

    setTimeout(() => {
      switch (templateName) {
        case 'Product Card':
          generateProductCardInputForm()
          videoElement ? (videoSource.src = './assets/productCard.mp4') : null
          break
        case 'Shipping Tracker':
          generateShippingTrackerForm()
          videoElement ? (videoSource.src = './assets/shippingTracker.mp4') : null
          break
        case 'Metafield Accordion':
          generateAccordionMetafieldsInputForm()
          videoElement ? (videoSource.src = './assets/metafieldAccordion.mp4') : null
          break
        case 'Discount code banner':
          generateDiscountCodeBannerInputForm()
          videoElement ? (videoSource.src = './assets/metafieldAccordion.mp4') : null
          break
        case 'Aftership':
          generateAftershipInputForm()
          videoElement ? (videoSource.src = './assets/metafieldAccordion.mp4') : null
          break
        case 'Collection Image Grid (2x2)':
          generateCollectionImageGridInputForm()
          break
        case 'Collection Image Carousel':
          generateCollectionImageCarouselInputForm()
          break
        case 'Collection Image Block':
          generateCollectionImageBlockInputForm()
          break
        case 'Shop The Look':
          generateShopTheLookInputForm()
          break
        default:
          console.log('No template selected')
          break
      }

      // Reload the video
      videoElement ? (videoElement.style.opacity = '0') : null
      setTimeout(() => {
        videoElement ? videoElement.load() : null
        videoElement ? (videoElement.style.opacity = '1') : null
      }, 800)
      inputsContainer.style.opacity = '1'
    }, 100)

    // Remove 'active' class from all buttons
    allTemplateBtns.forEach((btn) => {
      btn.classList.remove('active')
    })

    // Add 'active' class to the clicked button
    button.classList.add('active')
  })
})

let htmlCodeFromAPI = '<p>hello world</p>'
let cssCodeFromAPI = 'body { /* Your styles */}'
let jsCodeFromAPI = "function helloWorld() { console.log('Hello World') }"
// Add event listener to all copy buttons
document.querySelectorAll('.copyButton').forEach((button) => {
  button.addEventListener('click', async function () {
    // Get the id of the textarea from the data-copy-target attribute
    let copyTargetId = button.getAttribute('data-copy-target')
    console.log(copyTargetId)

    // Get the icons
    let checkIcon = button.querySelector('.fa-check')
    let clipboardIcon = button.querySelector('.fa-clipboard')

    // Hide the clipboard icon and show the check icon
    clipboardIcon.style.opacity = '0'
    checkIcon.style.opacity = '1'

    // After a delay, hide the check icon and show the clipboard icon
    setTimeout(() => {
      checkIcon.style.opacity = '0'
      clipboardIcon.style.opacity = '1'
    }, 1000)

    // Copy the text to the clipboard
    try {
      console.log('Copying')
      if (copyTargetId === '#html-output') {
        console.log('Copying HTML')
        await navigator.clipboard.writeText(htmlCodeFromAPI)
      }
      if (copyTargetId === '#css-output') {
        await navigator.clipboard.writeText(cssCodeFromAPI)
      }
      if (copyTargetId === '#javascript-output') {
        await navigator.clipboard.writeText(jsCodeFromAPI)
      }
    } catch (err) {
      alert('Failed to copy: ' + err)
    }
  })
})

// Functions below are used to generate the input forms for each template

// IN PRODUCTION

function generateProductCardInputForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
    <p class="inputs-label">Enter your product details</p>
        <div class="inputs">
          <label for="productId">Product ID</label>
          <input type="text" id="productId" name="productId" placeholder="Enter the product ID" value=6903319298186 />
          <label for="variantId">Variant ID</label>
          <input type="text" id="variantId" name="variantId" placeholder="Enter the variant ID" value=41380502896778 />
          <label for="tapcartAction">Tapcart Action</label>
          <select id="tapcartAction" name="tapcartAction">
            <option value="openProduct">Open Product</option>
            <option value="addToCart">Add to Cart</option>
          </select>
          <div class="sumbit-button__container">
            <button class="submit-button" onclick="inputFormSubmit('Product Card')">Submit</button>
            <p id="network-fetch"class="inputs-label note">Fetching the code ...</p>
        </div>
    `
}

function generateShippingTrackerForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
          <p class="inputs-label">Enter your shipping tracker details</p>
              <div class="inputs">
                  <label for="shippingTrackerMessage">Shipping Tracker Message</label>
                  <input type="text" id="shippingTrackerMessage" name="shippingTrackerMessage" placeholder="Example: You did it!  Your shipping is FREE!" />
                  <label for="shippingTrackerThreshold">Shipping Tracker Threshold amount</label>
                  <input type="text" id="shippingTrackerThreshold" name="shippingTrackerThreshold" placeholder="Example: 40" />
                  <label for="shippingTrackerCurrencyCode">Currency Code (accepts 1 currency code)</label>
                  <input type="text" id="shippingTrackerCurrencyCode" name="shippingTrackerCurrencyCode" placeholder="Example: USD, GBD"></input>
                  <label for="shippingTrackerCurrency">Shipping Tracker Currency</label>
                  <select id="shippingTrackerCurrency" name="shippingTrackerCurrency">
                      <option value="$">$</option>
                      <option value="£">£</option>
                      <option value="€">€</option>
                      <option value="¥">¥</option>
                  </select>
                  <div class="sumbit-button__container">
                      <button class="submit-button" onclick="inputFormSubmit('Shipping Tracker')">Submit</button>
                  </div>
                  <p id="network-fetch"class="inputs-label note">Fetching the code ...</p>
              </div>
      `
}

function generateAccordionMetafieldsInputForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
          <p class="inputs-label">Enter your accordion metafield details</p>
              <div class="inputs">
                  <label for="accordionTitle">Accordion Title</label>
                  <input type="text" id="accordionTitle" name="accordionTitle" placeholder="Enter your accordion title" value="Ingredients"/>
                  <label for="metafieldNamespace">Namespace</label>
                  <input type="text" value="custom" id="metafieldNamespace" name="metafieldNamespace" placeholder="Enter your metafield namespace" />
                  <label for="metafieldKey">Key</label>
                  <input type="text" id="metafieldKey" name="metafieldKey" placeholder="Enter your metafield key" value="custom_block_cms_demo"/>
                  <div class="sumbit-button__container">
                      <button class="submit-button" onclick="inputFormSubmit('Accordion Metafields')">Submit</button>
                  </div>
                  <p class="inputs-label note">Note: You will need to declare the metafield in your Customizations dashboard.  <a href="https://app.tapcart.com/settings/customizations" target=" _blank">Enable your metafields here.</a></p>
                  <p id="network-fetch"class="inputs-label note">Fetching the code ...</p>
              </div>
      `
}

function generateDiscountCodeBannerInputForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
    <p class="inputs-label">Enter your discount code banner details</p>
        <div class="inputs">
          <label for="discountCode">Discount Code</label>
          <input type="text" id="discountCode" name="discountCode" placeholder="Enter your discount code" />
          <label for="buttonText">Button Text</label>
          <input type="text" id="buttonText" name="buttonText" placeholder="Enter your button text" />
          <label for="buttonBackgroundColor">Button Background Color (click the color to open the color picker)</label>
          <input type="color" value="#e6f457" id="buttonBackgroundColor" name="buttonBackgroundColor" title="Select your button background color" />
          <div class="sumbit-button__container">
            <button class="submit-button" onclick="inputFormSubmit('Discount code banner')">Submit</button>
        </div>
        <p id="network-fetch"class="inputs-label note">Fetching the code ...</p>
    `
}

function generateAftershipInputForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
    <p class="inputs-label">Enter your Aftership details</p>
        <div class="inputs">
          <label for="aftershipAppKey">Aftership APP Key</label>
          <input type="text" id="aftershipAppKey" name="aftershipAppKey" placeholder="Enter your Aftership APP Key" />
          <div class="sumbit-button__container">
            <button class="submit-button" onclick="inputFormSubmit('Aftership')">Submit</button>
        </div>
        <p id="network-fetch"class="inputs-label note">Fetching the code ...</p>
    `
}

function generateShopTheLookInputForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
    <p class="inputs-label">Enter your Shop The Look details</p>
        <div class="inputs">
          <label for="shopTheLookStoreName">Store Name</label>
          <input type="text" id="shopTheLookStoreName" name="shopTheLookStoreName" placeholder="Enter your store handle" />

          <label for="shopTheLookStorefrontToken">Shopify Storefront API Token</label>
          <input type="text" id="shopTheLookStorefrontToken" name="shopTheLookStorefrontToken" placeholder="Enter your Shopify Storefront API Token" />


          <label for="shopTheLookImageUrl">Image URL</label>
          <input type="text" id="shopTheLookImageUrl" name="shopTheLookImageUrl" placeholder="Enter your image's URL" />

          <div class="accordion">
            <div id="details" class="accordion_panel_block">
              <div class="accordion-header">
                <p>Product 1 Details</p>
                <i class="fa-solid fa-chevron-right svg_arrow"></i>
              </div>
              <div class="accordion-panel">
                <div class="metafield-content">
                <label for="shopTheLookProductId_1">Product ID</label>
                <input type="text" id="shopTheLookProductId_1" name="shopTheLookProductId_1" placeholder="Enter the product ID" />
      
                <label for="shopTheLookProduct_1_xCord">Enter the product's X cooridinate</label>
                <input type="text" id="shopTheLookProduct_1_xCord" name="shopTheLookProduct_1_xCord" placeholder="e.g 30%" />
                <label for="shopTheLookProduct_1_yCord">Enter the product's Y cooridinate</label>
                <input type="text" id="shopTheLookProduct_1_yCord" name="shopTheLookProduct_1_yCord" placeholder="e.g 50%" />
                
                </div>
              </div>
            </div>
          </div>

          <div class="accordion">
            <div id="details" class="accordion_panel_block">
              <div class="accordion-header">
                <p>Product 2 Details</p>
                <i class="fa-solid fa-chevron-right svg_arrow"></i>
              </div>
              <div class="accordion-panel">
                <div class="metafield-content">
                <label for="shopTheLookProductId_2">Product ID</label>
                <input type="text" id="shopTheLookProductId_2" name="shopTheLookProductId_2" placeholder="Enter the product ID" />
      
                <label for="shopTheLookProduct_2_xCord">Enter the product's X cooridinate</label>
                <input type="text" id="shopTheLookProduct_2_xCord" name="shopTheLookProduct_2_xCord" placeholder="e.g 30%" />
                <label for="shopTheLookProduct_2_yCord">Enter the product's Y cooridinate</label>
                <input type="text" id="shopTheLookProduct_2_yCord" name="shopTheLookProduct_2_yCord" placeholder="e.g 50%" />
                
                </div>
              </div>
            </div>
          </div>




        
          
          <div class="sumbit-button__container">
            <button class="submit-button" onclick="inputFormSubmit('Shop The Look')">Submit</button>
        </div>
        <p id="network-fetch"class="inputs-label note">Fetching the code ...</p>
    `

  const accordionHeaders = document.querySelectorAll('.accordion-header')
  const accordionPanels = document.querySelectorAll('.accordion-panel')

  // Add a click event listener to each header
  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      header.classList.toggle('active')
      header.classList.toggle('open')
      const panel = header.nextElementSibling
      panel.classList.toggle('active')
    })
  })
}

// NOT IN PROUDCTION

function generateCollectionImageGridInputForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
    <p class="inputs-label">Enter your collection details</p>
        <div class="inputs">
          <label for="merchantId">App ID</label>
          <input type="text" id="merchantId" name="merchantId" placeholder="Enter your app ID" />
          <label for="collectionId">Collection ID</label>
          <input type="text" id="collectionId" name="collectionId" placeholder="Enter your collection ID" />
          <div class="sumbit-button__container">
            <button class="submit-button" onclick="inputFormSubmit()">Submit</button>
        </div>
    `
}

function generateCollectionImageCarouselInputForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
    <p class="inputs-label">Enter your collection details</p>
        <div class="inputs">
          <label for="merchantId">App ID</label>
          <input type="text" id="merchantId" name="merchantId" placeholder="Enter your app ID" />
          <label for="collectionId">Collection ID</label>
          <input type="text" id="collectionId" name="collectionId" placeholder="Enter your collection ID" />
          <div class="sumbit-button__container">
            <button class="submit-button" onclick="inputFormSubmit()">Submit</button>
        </div>
    `
}

function generateCollectionImageBlockInputForm() {
  let inputSection = document.querySelector('.user-input__container')
  inputSection.innerHTML = `
    <p class="inputs-label">Enter your collection details</p>
        <div class="inputs">
          <label for="merchantId">App ID</label>
          <input type="text" id="merchantId" name="merchantId" placeholder="Enter your app ID" />
          <label for="collectionId">Collection ID</label>
          <input type="text" id="collectionId" name="collectionId" placeholder="Enter your collection ID" />
          <div class="sumbit-button__container">
            <button class="submit-button" onclick="inputFormSubmit()">Submit</button>
        </div>
    `
}

// Function to submit the input values to the backend
let htmlCodeElement = document.querySelector('.language-html')
let cssCodeElement = document.querySelector('.language-css')
let jsCodeElement = document.querySelector('.language-javascript')

function inputFormSubmit(templateName) {
  console.log('Sending data for', templateName)

  // Dummy data
  let shopName = 'emmys-tapcart-boutique'
  let storeFrontToken = '9d333a2eb23e53d0c2bb4dadf400aa4a'

  let templateType = document.querySelector('.template-button.active').dataset.templatetype
  let templateAction = document.querySelector('#tapcartAction')?.value
  let productId = document.querySelector('#productId')?.value
  let variantId = document.querySelector('#variantId')?.value
  let shippingTrackerMessage = document.querySelector('#shippingTrackerMessage')?.value
  let shippingTrackerThreshold = document.querySelector('#shippingTrackerThreshold')?.value
  let shippingTrackerCurrency = document.querySelector('#shippingTrackerCurrency')?.value
  let shippingTrackerCurrencyCode = document.querySelector('#shippingTrackerCurrencyCode')?.value
  let accordionTitle = document.querySelector('#accordionTitle')?.value
  let metafieldNamespace = document.querySelector('#metafieldNamespace')?.value
  let metafieldKey = document.querySelector('#metafieldKey')?.value
  let discountCode = document.querySelector('#discountCode')?.value
  let buttonText = document.querySelector('#buttonText')?.value
  let buttonBackgroundColor = document.querySelector('#buttonBackgroundColor')?.value
  let aftershipAppKey = document.querySelector('#aftershipAppKey')?.value
  let shopTheLookStoreName = document.querySelector('#shopTheLookStoreName')?.value
  let shopTheLookStorefrontToken = document.querySelector('#shopTheLookStorefrontToken')?.value
  let shopTheLookImageUrl = document.querySelector('#shopTheLookImageUrl')?.value
  let shopTheLookProductId_1 = document.querySelector('#shopTheLookProductId_1')?.value
  let shopTheLookProduct_1_xCord = document.querySelector('#shopTheLookProduct_1_xCord')?.value
  let shopTheLookProduct_1_yCord = document.querySelector('#shopTheLookProduct_1_yCord')?.value
  let shopTheLookProductId_2 = document.querySelector('#shopTheLookProductId_2')?.value
  let shopTheLookProduct_2_xCord = document.querySelector('#shopTheLookProduct_2_xCord')?.value
  let shopTheLookProduct_2_yCord = document.querySelector('#shopTheLookProduct_2_yCord')?.value


  let data = {
    type: templateType,
    productId: productId,
    variantId: variantId,
    action: templateAction,
    shippingMessage: shippingTrackerMessage,
    shippingThreshold: shippingTrackerThreshold,
    currencySign: shippingTrackerCurrency,
    currencyCode: shippingTrackerCurrencyCode,
    accordionTitle: accordionTitle,
    metafieldNamespace: metafieldNamespace,
    metafieldKey: metafieldKey,
    discountCode: discountCode,
    buttonText: buttonText,
    buttonBackgroundColor: buttonBackgroundColor,
    appKey: aftershipAppKey,
    storeName: shopTheLookStoreName,
    token: shopTheLookStorefrontToken,
    imageURL: shopTheLookImageUrl,
    products: [
      {
        productId: shopTheLookProductId_1?.toString(),
        xCord: shopTheLookProduct_1_xCord,
        yCord: shopTheLookProduct_1_yCord
      },
      {
        productId: shopTheLookProductId_2?.toString(),
        xCord: shopTheLookProduct_2_xCord,
        yCord: shopTheLookProduct_2_yCord
      }
    ]
  }

  console.log(data)
  let networkStatus = document.getElementById('network-fetch')
  networkStatus.style.opacity = '1'
  let responseStatus
  fetch(`https://dj7yks-3000.csb.app/${templateType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      responseStatus = response.status
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.text()
    })
    .then((data) => {
      networkStatus.style.opacity = '0'
      console.log(data)
      parseCodeData(data)
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error)
      networkStatus.style.color = 'red'
      networkStatus.style.fontWeight = 'bold'
      networkStatus.innerText = `Response status: ${responseStatus} - There was an error fetching the code.  Ensure you have entered the correct details and try again.`
      networkStatus.style.opacity = '1'
      htmlCodeElement.textContent = 'There was an error fetching the code.  Ensure you have entered the correct details and try again.'
      cssCodeElement.textContent = 'There was an error fetching the code.  Ensure you have entered the correct details and try again.'
      jsCodeElement.textContent = 'There was an error fetching the code.  Ensure you have entered the correct details and try again.'
    })

  function parseCodeData(responseData) {
    let htmlRegex = /RESPONSE-HTML(.*)RESPONSE-CSS/s
    let cssRegex = /RESPONSE-CSS(.*?)RESPONSE-JS/s
    let jsRegex = /RESPONSE-JS(.*)/s

    let htmlMatch = htmlRegex.exec(responseData)
    let cssMatch = responseData.match(cssRegex)
    let jsMatch = jsRegex.exec(responseData)

    if (htmlMatch) {
      // Get the first capture group, which is the text between the markers
      let htmlBetween = htmlMatch[1]
      console.log(htmlBetween)
      htmlCodeFromAPI = htmlBetween
      document.querySelector('.language-html').textContent = htmlBetween
      document.querySelector('.language-html').removeAttribute('data-highlighted')
      hljs.highlightAll()
    }

    if (cssMatch) {
      // Get the first capture group, which is the text between the markers
      let cssBetween = cssMatch[1]
      cssCodeFromAPI = cssBetween
      document.querySelector('.language-css').textContent = cssBetween
      document.querySelector('.language-css').removeAttribute('data-highlighted')
      hljs.highlightAll()
    }

    if (jsMatch) {
      // Get the first capture group, which is the text between the markers
      let jsBetween = jsMatch[1]
      jsCodeFromAPI = jsBetween
      document.querySelector('.language-javascript').textContent = jsBetween
      document.querySelector('.language-javascript').removeAttribute('data-highlighted')
      hljs.highlightAll()
    }
  }
}
