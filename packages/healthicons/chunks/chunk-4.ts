import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsROutlineIcon],svg[healthicons-r-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 0 1 3-3h10a9 9 0 0 1 4.306 16.905l4.377 8.753a3 3 0 0 1-5.366 2.684L24.146 27H19v9a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V26a1 1 0 0 1 1-1h6.764a1 1 0 0 1 .894.553l5.448 10.894a1 1 0 1 0 1.788-.894l-4.834-9.669a1 1 0 0 1 .525-1.376A7.003 7.003 0 0 0 26 11zm1 3a1 1 0 0 1 1-1h8a5 5 0 0 1 0 10h-8a1 1 0 0 1-1-1zm2 1v6h7a3 3 0 1 0 0-6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsROutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRadiologyIcon],svg[healthicons-radiology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm22.5 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M13 22a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-5c0-.597-.273-1.14-.57-1.556a5.7 5.7 0 0 0-1.18-1.189c-.629-.48-1.425-.914-2.25-1.123v-2.985h1.4c.99 0 2.237.395 3.312.848a19 19 0 0 1 1.76.855l.022.013l.005.002L32 32c.501-.865.501-.865.5-.866l-.003-.002l-.01-.005l-.032-.018a13 13 0 0 0-.535-.288a21 21 0 0 0-1.432-.67c-1.125-.473-2.679-1.005-4.088-1.005H25V27h.8c.749 0 1.685.215 2.485.457a17 17 0 0 1 1.311.458l.016.007l.004.001L30 27l.384-.923l-.003-.002l-.007-.003l-.025-.01l-.088-.035q-.114-.046-.317-.121c-.267-.1-.643-.23-1.079-.363c-.85-.258-2.014-.543-3.065-.543H25v-2h-2v2h-1.1c-1.2 0-2.292.284-3.069.556a11 11 0 0 0-1.206.511l-.076.04l-.023.012l-.007.004l-.003.002s-.002 0 .484.875l.485.874l.007-.003l.046-.024q.065-.034.198-.097c.177-.082.437-.194.758-.306C20.142 27.216 21 27 21.9 27H23v2.146h-1.8c-1.61 0-3.065.53-4.088 1.028a12 12 0 0 0-1.584.932l-.097.07l-.028.022l-.009.006l-.003.003h-.001c0 .001-.001.002.61.793s.611.792.61.792l.014-.01l.065-.047a10 10 0 0 1 1.3-.763c.876-.428 2.02-.825 3.211-.825H23v3.017a6.9 6.9 0 0 0-2.273 1.134a5.5 5.5 0 0 0-1.166 1.162c-.297.413-.561.947-.561 1.54h-5a1 1 0 0 1-1-1zm13.97 15.899A.4.4 0 0 1 27 38h-6a.4.4 0 0 1 .028-.1c.028-.07.077-.162.158-.274c.163-.227.416-.483.744-.73c.658-.495 1.46-.84 2.104-.896c.553.013 1.325.328 2.002.845c.332.253.595.521.766.761c.085.119.138.218.168.293" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRadiologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRadiologyNegativeIcon],svg[healthicons-radiology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRadiologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm15 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-10 2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5c0-.593.264-1.127.56-1.54a5.5 5.5 0 0 1 1.167-1.162A6.9 6.9 0 0 1 23 34.164v-3.018h-1.8c-1.19 0-2.335.398-3.212.826a10 10 0 0 0-1.299.763l-.065.047l-.013.01L16 32a66 66 0 0 1-.61-.792l.001-.001l.003-.003l.009-.006l.028-.021q.035-.028.097-.07q.124-.091.348-.236c.295-.191.718-.444 1.236-.697c1.023-.499 2.479-1.027 4.088-1.027H23V27h-1.1c-.9 0-1.758.216-2.406.444a8 8 0 0 0-1.002.427l-.007.003L18 27l-.485-.874l.001-.001l.003-.002l.008-.004l.022-.012a5 5 0 0 1 .343-.17c.227-.105.547-.243.94-.38C19.607 25.283 20.7 25 21.9 25H23v-2h2v2h.8c1.051 0 2.215.285 3.065.543a19 19 0 0 1 1.484.52l.025.01l.007.002l.003.002L30 27l-.384.923l-.004-.001l-.016-.007l-.013-.005l-.057-.023l-.276-.105a17 17 0 0 0-.965-.325c-.8-.242-1.736-.457-2.485-.457H25v2.146h1.4c1.41 0 2.963.532 4.088 1.006a21 21 0 0 1 1.968.957l.031.018l.012.007h.002L32 32l-.501.865l-.005-.002l-.023-.013l-.095-.053a19 19 0 0 0-1.664-.802c-1.075-.453-2.321-.849-3.312-.849H25v2.986c.825.21 1.621.643 2.25 1.123a5.8 5.8 0 0 1 1.18 1.189c.297.416.57.959.57 1.556h5a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1zm13 17a.4.4 0 0 0-.03-.101a1.5 1.5 0 0 0-.168-.293a3.8 3.8 0 0 0-.766-.761c-.677-.517-1.449-.832-2.002-.845c-.644.056-1.446.4-2.104.896a3.6 3.6 0 0 0-.744.73c-.08.112-.13.205-.158.275A.3.3 0 0 0 21 38z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRadiologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRadiologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRadiologyOutlineIcon],svg[healthicons-radiology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M14 21a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5c0-.593.264-1.127.56-1.54a5.5 5.5 0 0 1 1.167-1.162A6.9 6.9 0 0 1 23 34.164v-3.018h-1.8c-1.19 0-2.335.398-3.212.826a10 10 0 0 0-1.299.763l-.065.047l-.013.01L16 32a66 66 0 0 1-.61-.792l.001-.001l.003-.003l.009-.006l.028-.021q.035-.028.097-.07q.124-.091.348-.236c.295-.191.718-.444 1.236-.697c1.023-.499 2.479-1.027 4.088-1.027H23V27h-1.1c-.9 0-1.758.216-2.406.444a8 8 0 0 0-1.002.427l-.007.003L18 27l-.485-.874l.001-.001l.003-.002l.008-.004l.022-.012a5 5 0 0 1 .343-.17c.227-.105.547-.243.94-.38C19.607 25.283 20.7 25 21.9 25H23v-2h2v2h.8c1.051 0 2.215.285 3.065.543a19 19 0 0 1 1.484.52l.025.01l.007.002l.003.002L30 27l-.384.923l-.004-.001l-.016-.007a8 8 0 0 0-.346-.133a17 17 0 0 0-.965-.325c-.8-.242-1.736-.457-2.485-.457H25v2.146h1.4c1.41 0 2.963.532 4.088 1.006a21 21 0 0 1 1.968.957l.031.018l.01.005l.002.002h.002L32 32l-.501.865l-.005-.002l-.023-.013l-.095-.053a19 19 0 0 0-1.664-.802c-1.075-.453-2.321-.849-3.312-.849H25v2.986c.825.21 1.621.643 2.25 1.123a5.8 5.8 0 0 1 1.18 1.189c.297.416.57.959.57 1.556h5a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1zm13 17a.4.4 0 0 0-.03-.101a1.5 1.5 0 0 0-.168-.293a3.8 3.8 0 0 0-.766-.761c-.677-.517-1.449-.832-2.002-.845c-.644.056-1.446.4-2.104.896a3.6 3.6 0 0 0-.744.73c-.08.112-.13.205-.158.275A.3.3 0 0 0 21 38zm1.5-23.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path></svg:g>`,
})
export class HealthiconsRadiologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultIcon],svg[healthicons-rdt-result-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 14v-2a2 2 0 1 0-4 0v2zm0 2h-4v9a2 2 0 1 0 4 0z"></svg:path><svg:path fill-rule="evenodd" d="M10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2zm10 32a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0-23a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4m13.593.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 30 9.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 28 9.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1m2 12a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 27zm0 9a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm6.873-10.428A1 1 0 0 1 38 26.5v5a1 1 0 1 1-2 0v-2.958a1 1 0 0 1-.721-1.692l1-1.043a1 1 0 0 1 1.094-.235" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultInvalidIcon],svg[healthicons-rdt-result-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 12v13a2 2 0 1 1-4 0V12a2 2 0 1 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm6 36a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.5-7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0zm17.593-3.974a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 30 9.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 28 9.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1m2 12a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 27zm0 9a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm6.873-10.428A1 1 0 0 1 38 26.5v5a1 1 0 1 1-2 0v-2.958a1 1 0 0 1-.721-1.692l1-1.043a1 1 0 0 1 1.094-.235" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultInvalidNegativeIcon],svg[healthicons-rdt-result-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultInvalidNegative0)"><svg:path d="M18 40a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.5-7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill-rule="evenodd" d="M14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0zm6 0v13a2 2 0 1 1-4 0V12a2 2 0 1 1 4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm18.85 4.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultInvalidOutlineIcon],svg[healthicons-rdt-result-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 38a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill-rule="evenodd" d="M18 8a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4m2 17V12a2 2 0 1 0-4 0v13a2 2 0 1 0 4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm12 2H12v36h12z" clip-rule="evenodd"></svg:path><svg:path d="M30.85 8.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedIcon],svg[healthicons-rdt-result-mixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M11 23h2v2h-2a1 1 0 1 1 0-2m11 2h-2v-2h2zm-7-2h3v2h-3zm9 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m36 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm2 6a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidIcon],svg[healthicons-rdt-result-mixed-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M22 23h-2v2h2zm-11 0h7v2h-7a1 1 0 1 1 0-2m13 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidNegativeIcon],svg[healthicons-rdt-result-mixed-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultMixedInvalidNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-6 2h2v2h-2zm-2 2h-7a1 1 0 1 1 0-2h7zm8 0h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m6.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultMixedInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidOutlineIcon],svg[healthicons-rdt-result-mixed-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M11 21a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6zm11 2h-2v2h2zm-11 2h7v-2h-7a1 1 0 1 0 0 2m13 0h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidRectangularIcon],svg[healthicons-rdt-result-mixed-invalid-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M20 23h2v2h-2zm-2 0h-7a1 1 0 1 0 0 2h7zm8 2h-2v-2h2a1 1 0 1 1 0 2m-15 2a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6z"></svg:path><svg:path d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm4.231.335A5 5 0 0 0 29.001 20H38a4 4 0 0 0-3.091 1.461A3.5 3.5 0 0 0 32.5 20.5c-.866 0-1.658.314-2.269.835M34 24a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-3.769 2.665A5 5 0 0 1 29.001 28h8.996a4 4 0 0 1-3.088-1.461a3.5 3.5 0 0 1-2.409.961a3.5 3.5 0 0 1-2.269-.835M42 24v-4h-4a4 4 0 0 1 4 4m0 0v4h-3.997A4 4 0 0 0 42 24M8 20a5 5 0 0 0-2 4v-4zm0 8H6v-4a4.99 4.99 0 0 0 2 4m12-5h2v2h-2zm-2 2h-7a1 1 0 1 1 0-2h7zm6-2h2a1 1 0 1 1 0 2h-2zM6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zm12-25a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H29zm-6.5 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39"></svg:path><svg:path d="M36 13v2a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidRectangularNegativeIcon],svg[healthicons-rdt-result-mixed-invalid-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultMixedInvalidRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M20 23h2v2h-2zm-2 2h-7a1 1 0 1 1 0-2h7zm8-4a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-2 2h2a1 1 0 1 1 0 2h-2zM10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultMixedInvalidRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedInvalidRectangularOutlineIcon],svg[healthicons-rdt-result-mixed-invalid-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6m-16 3a1 1 0 0 0 1 1h7v-2h-7a1 1 0 0 0-1 1m17 0a1 1 0 0 0-1-1h-2v2h2a1 1 0 0 0 1-1m-5-1h-2v2h2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm2-10v10h36V19zm7 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedInvalidRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedNegativeIcon],svg[healthicons-rdt-result-mixed-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultMixedNegative0)"><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-13 2h-2a1 1 0 1 0 0 2h2zm5 0h-3v2h3zm2 0h2v2h-2zm6 2h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm.85-18.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultMixedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultMixedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedOutlineIcon],svg[healthicons-rdt-result-mixed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 21a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6zm0 2h2v2h-2a1 1 0 1 1 0-2m11 2h-2v-2h2zm-7-2h3v2h-3zm9 2h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 31a7 7 0 1 1 0-14h26a7 7 0 1 1 0 14zm0-12h26a5 5 0 0 1 0 10H11a5 5 0 0 1 0-10m2 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedRectangularIcon],svg[healthicons-rdt-result-mixed-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 23h-2a1 1 0 1 0 0 2h2zm13 2h-2v-2h2a1 1 0 1 1 0 2m-6-2h2v2h-2zm-2 2h-3v-2h3z"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedRectangularNegativeIcon],svg[healthicons-rdt-result-mixed-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultMixedRectangularNegative0)"><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-13 2h-2a1 1 0 1 0 0 2h2zm5 0h-3v2h3zm2 0h2v2h-2zm6 2h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm4.85-18.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultMixedRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultMixedRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultMixedRectangularOutlineIcon],svg[healthicons-rdt-result-mixed-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6m-16 3a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1m17 0a1 1 0 0 0-1-1h-2v2h2a1 1 0 0 0 1-1m-12 1v-2h3v2zm7 0h-2v-2h2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 31a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm0-2V19h36v10zm7 4a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultMixedRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegIcon],svg[healthicons-rdt-result-neg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M11 23h2v2h-2a1 1 0 1 1 0-2m15 2H15v-2h11a1 1 0 1 1 0 2"></svg:path><svg:path fill-rule="evenodd" d="M4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m36 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm2 6a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidIcon],svg[healthicons-rdt-result-neg-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M26 23H11a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidNegativeIcon],svg[healthicons-rdt-result-neg-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultNegInvalidNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h15a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m6.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidOutlineIcon],svg[healthicons-rdt-result-neg-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m18-1H11a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidRectangularIcon],svg[healthicons-rdt-result-neg-invalid-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M26 23H11a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m6 8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 2a.5.5 0 0 1 0 1H15v-1zM27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm3.5 2a.5.5 0 0 0 0-1H29v1z" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 0 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 0 1 1.872.702zM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidRectangularNegativeIcon],svg[healthicons-rdt-result-neg-invalid-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultNegInvalidRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 23h15a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2m0 4a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-.15-15.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegInvalidRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegInvalidRectangularOutlineIcon],svg[healthicons-rdt-result-neg-invalid-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6 19v10h36V19zM4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" clip-rule="evenodd"></svg:path><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-5.5 3.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M26 23H11a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m3.593-12.974a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zm12-25a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H29zm-6.5 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M36 13v2a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegInvalidRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegNegativeIcon],svg[healthicons-rdt-result-neg-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultNegNegative0)"><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6zm-13 2h-2a1 1 0 1 0 0 2h2zm2 2h11a1 1 0 1 0 0-2H15z" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm.85-18.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegOutlineIcon],svg[healthicons-rdt-result-neg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h2v2h-2a1 1 0 1 1 0-2m15 2H15v-2h11a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 31a7 7 0 1 1 0-14h26a7 7 0 1 1 0 14zm0-12h26a5 5 0 0 1 0 10H11a5 5 0 0 1 0-10m2 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegRectangularIcon],svg[healthicons-rdt-result-neg-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 23h-2a1 1 0 1 0 0 2h2zm2 2h11a1 1 0 1 0 0-2H15z"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegRectangularNegativeIcon],svg[healthicons-rdt-result-neg-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultNegRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-18-1h-2a1 1 0 1 0 0 2h2zm2 2h11a1 1 0 1 0 0-2H15zm-7-1a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m2.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegRectangularOutlineIcon],svg[healthicons-rdt-result-neg-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-1-3a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1m17 0a1 1 0 0 1-1 1H15v-2h11a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 31a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm0-2V19h36v10zm7 4a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegativeIcon],svg[healthicons-rdt-result-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultNegative0)"><svg:path d="M20 38a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill-rule="evenodd" d="M18 8a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4m2 6v-2a2 2 0 1 0-4 0v2zm0 2h-4v9a2 2 0 1 0 4 0z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2zm20.85 2.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNegativeNegativeIcon],svg[healthicons-rdt-result-negative-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0v48h48V0zM12.485 3a2 2 0 0 0-2 2v38a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-12zm19.709 31.68c1.4 0 2.383-.723 2.383-2.013v-.018c0-1.132-.742-1.606-2.059-1.949c-1.122-.288-1.4-.427-1.4-.854v-.018c0-.316.287-.566.834-.566c.446 0 .89.158 1.364.436a.685.685 0 0 0 .362.102a.657.657 0 0 0 .668-.659a.651.651 0 0 0-.316-.566c-.584-.37-1.27-.575-2.06-.575c-1.325 0-2.272.78-2.272 1.958v.018c0 1.29.845 1.652 2.152 1.986c1.086.278 1.308.464 1.308.826v.018c0 .38-.352.613-.937.613c-.63 0-1.168-.223-1.66-.585a.686.686 0 0 0-.408-.13a.657.657 0 0 0-.668.659c0 .223.111.427.269.538a4.19 4.19 0 0 0 2.44.78zm4.814-.313a.519.519 0 0 1-.506-.53v-3.38l-.36.097a.803.803 0 0 1-.18.028a.46.46 0 0 1-.447-.46c0-.217.133-.399.34-.462l.66-.202c.193-.056.34-.09.48-.09h.013c.28 0 .507.237.507.53v3.939c0 .293-.227.53-.507.53zm-4.815 8.993c1.401 0 2.384-.723 2.384-2.013v-.019c0-1.132-.742-1.605-2.059-1.948c-1.122-.288-1.4-.427-1.4-.854v-.018c0-.316.287-.566.834-.566c.446 0 .89.157 1.364.436a.685.685 0 0 0 .362.102a.657.657 0 0 0 .668-.659a.651.651 0 0 0-.316-.566c-.584-.371-1.27-.575-2.06-.575c-1.325 0-2.272.78-2.272 1.958v.018c0 1.29.845 1.652 2.152 1.986c1.086.278 1.308.464 1.308.825v.019c0 .38-.352.612-.937.612c-.63 0-1.168-.222-1.66-.584a.687.687 0 0 0-.408-.13a.657.657 0 0 0-.668.659c0 .222.111.426.269.538a4.19 4.19 0 0 0 2.44.78zm.038-19.239a.709.709 0 0 1-.715-.714v-4.52h-1.372a.661.661 0 0 1-.659-.658c0-.362.297-.659.659-.659h4.174c.361 0 .658.297.658.66a.661.661 0 0 1-.658.658h-1.373v4.519a.709.709 0 0 1-.714.714zm.584-8.55c1.039 0 1.725-.306 2.31-.816a.672.672 0 0 0 .24-.51a.67.67 0 0 0-.667-.66a.668.668 0 0 0-.427.158c-.408.325-.807.51-1.41.51c-1.113 0-1.883-.927-1.883-2.04v-.02c0-1.113.789-2.022 1.883-2.022c.51 0 .928.167 1.327.464a.75.75 0 0 0 .426.14c.39 0 .705-.307.705-.697c0-.25-.13-.454-.278-.566c-.538-.399-1.196-.658-2.17-.658c-1.995 0-3.386 1.512-3.386 3.358v.019c0 1.865 1.42 3.34 3.33 3.34zM20.485 11v2h-4v-2a2 2 0 0 1 4 0zm2 4v-4a4 4 0 1 0-8 0v14a4 4 0 0 0 8 0V15zm-6 10V15h4v10a2 2 0 1 1-4 0zm0 7.113a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm5 5.907a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNegativeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNoTestIcon],svg[healthicons-rdt-result-no-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M40 24a6 6 0 0 1-6 6h-1.434l-4.803-5.055A2 2 0 0 0 26 22h-1.035l-3.8-4H34a6 6 0 0 1 6 6m-4 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-5.248-.75a.751.751 0 1 1 .002 1.502a.751.751 0 0 1-.002-1.502" clip-rule="evenodd"></svg:path><svg:path d="M12 24a2 2 0 0 1 2-2h2.688l-3.716-3.912A6.002 6.002 0 0 0 14 30h10.29l-3.801-4H14a2 2 0 0 1-2-2"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-2 0c0 5.108-2.128 9.72-5.546 12.996L11.657 10.898A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18M24 42c4.113 0 7.903-1.38 10.934-3.7L10.278 12.35A17.93 17.93 0 0 0 6 24c0 9.941 8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNoTestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNoTestNegativeIcon],svg[healthicons-rdt-result-no-test-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultNoTestNegative0)"><svg:path d="M34.5 22.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M31.504 24a.751.751 0 1 0-1.502.002a.751.751 0 0 0 1.502-.002"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 5.108-2.128 9.72-5.546 12.996L11.657 10.898A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18m-14.237.945L32.566 30H34a6 6 0 0 0 0-12H21.164l3.8 4H26a2 2 0 0 1 1.763 2.945M10.278 12.35L34.934 38.3A17.92 17.92 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.443 1.61-8.51 4.278-11.65m2.694 5.738L16.688 22H14a2 2 0 1 0 0 4h6.489l3.8 4H14a6 6 0 0 1-1.028-11.912" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultNoTestNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultNoTestNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultNoTestOutlineIcon],svg[healthicons-rdt-result-no-test-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M36 24a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-5.248-.75a.751.751 0 1 1 .002 1.502a.751.751 0 0 1-.002-1.502"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-9.066 14.3A17.92 17.92 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.443 1.61-8.51 4.278-11.65L15.647 18H14a6 6 0 0 0 0 12h13.048zM11.657 10.898L18.406 18H34a6 6 0 0 1 0 12h-4.193l6.647 6.996A17.95 17.95 0 0 0 42 24c0-9.941-8.059-18-18-18a17.94 17.94 0 0 0-12.343 4.898M38 24.001a4 4 0 0 0-4-4H20.306l1.9 1.999H26a2 2 0 0 1 .006 4l1.9 2H34a4 4 0 0 0 4-4m-28 0a4 4 0 0 1 4-4h3.547l1.9 1.999H14a2 2 0 0 0 0 4h9.247l1.901 2H14a4 4 0 0 1-4-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultNoTestOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultOutStockIcon],svg[healthicons-rdt-result-out-stock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.707 6.293a1 1 0 0 1 0 1.414L25.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L24 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.415L22.586 10l-2.293-2.293a1 1 0 1 1 1.415-1.414L24 8.586l2.293-2.293a1 1 0 0 1 1.414 0m-8.509 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504z"></svg:path><svg:path fill-rule="evenodd" d="m37 37.5l-12 4.523V31.64a3.5 3.5 0 0 0 3.802 1.088L37 29.996zm-3.684-2.051a1 1 0 0 0-.632-1.898l-4.5 1.5a1 1 0 0 0 .632 1.898zm-8.989-20.394a1 1 0 0 0-.654 0l-12.998 4.5l-.023.007a1 1 0 0 0-.442.325l-3.99 4.988a1 1 0 0 0 .464 1.574l13.5 4.5a1 1 0 0 0 1.135-.376L24 26.743l2.68 3.83a1 1 0 0 0 1.136.376l13.5-4.5a1 1 0 0 0 .465-1.574l-3.99-4.988a1 1 0 0 0-.466-.333zM24 23.942l9.943-3.442L24 17.058L14.057 20.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultOutStockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultOutStockNegativeIcon],svg[healthicons-rdt-result-out-stock-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultOutStockNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21.708 6.293a1 1 0 1 0-1.415 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L24 8.586zm-2.51 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504zM37 37.5l-12 4.523V31.64a3.5 3.5 0 0 0 3.802 1.088L37 29.996zm-3.184-2.051a1 1 0 0 0-.632-1.898l-4.5 1.5a1 1 0 0 0 .632 1.898zm-9.489-20.394a1 1 0 0 0-.654 0l-12.682 4.39a1 1 0 0 0-.93.397l-3.744 5.056a1 1 0 0 0 .482 1.542l13.474 4.564a1 1 0 0 0 1.153-.393L24 26.75l2.574 3.861a1 1 0 0 0 1.153.393l13.474-4.564a1 1 0 0 0 .483-1.542l-3.745-5.056a1 1 0 0 0-.93-.397zM24 23.975l-9.936-3.478L24 17.059l9.936 3.44z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultOutStockNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultOutStockNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultOutStockOutlineIcon],svg[healthicons-rdt-result-out-stock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.707 7.707a1 1 0 0 0-1.414-1.414L24 8.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10zm6.242 24.477a1 1 0 0 1-.633 1.265l-4.5 1.5a1 1 0 0 1-.632-1.898l4.5-1.5a1 1 0 0 1 1.265.633"></svg:path><svg:path fill-rule="evenodd" d="M6.684 26.449L10 27.554V36a1 1 0 0 0 .673.945l12.992 4.497a1 1 0 0 0 .637.011l.014-.004l.015-.005l12.996-4.499A1 1 0 0 0 38 36v-8.446l3.316-1.105a1 1 0 0 0 .465-1.574l-4-5a1 1 0 0 0-.456-.32l-12.998-4.5a1 1 0 0 0-.654 0l-12.998 4.5a1 1 0 0 0-.456.32l-4 5a1 1 0 0 0 .465 1.574m14.635 4.124l1.681-2.4v10.923l-11-3.808V28.22l8.184 2.728a1 1 0 0 0 1.135-.376M14.057 20.5L24 23.942l9.943-3.442L24 17.058zm12.624 10.074L25 28.172v10.924l11-3.808V28.22l-8.184 2.728a1 1 0 0 1-1.135-.376M11.34 21.676l-2.663 3.329l5.511 1.837l5.92 1.973l2.313-3.303l-.135-.047zm27.983 3.329l-2.663-3.33l-11.081 3.837l2.313 3.303z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultOutStockOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultOutlineIcon],svg[healthicons-rdt-result-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 40a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.5-7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill-rule="evenodd" d="M14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0zm6 0v2h-4v-2a2 2 0 1 1 4 0m-4 13v-9h4v9a2 2 0 1 1-4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2zm2 0h12v36H12z" clip-rule="evenodd"></svg:path><svg:path d="M30.85 8.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfIcon],svg[healthicons-rdt-result-pf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 23h-2a1 1 0 1 0 0 2h2zm2 2h7v-2h-7zm11 0h-2v-2h2a1 1 0 1 1 0 2"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidIcon],svg[healthicons-rdt-result-pf-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M22 23H11a1 1 0 1 0 0 2h11zm2 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m6 8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5M27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H29v1h1.5a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidNegativeIcon],svg[healthicons-rdt-result-pf-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPfInvalidNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h11v2H11a1 1 0 1 1 0-2m13 2h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path><svg:path d="M17 34.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5M30.5 11a.5.5 0 0 1 0 1H29v-1z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m10 8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-4.564 29.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPfInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidOutlineIcon],svg[healthicons-rdt-result-pf-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m14-1H11a1 1 0 1 0 0 2h11zm5 1a1 1 0 0 0-1-1h-2v2h2a1 1 0 0 0 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5M27 10a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H29v1h1.5a.5.5 0 0 0 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidRectangularIcon],svg[healthicons-rdt-result-pf-invalid-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M22 23H11a1 1 0 1 0 0 2h11zm2 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidRectangularNegativeIcon],svg[healthicons-rdt-result-pf-invalid-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultPfInvalidRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-9-1H11a1 1 0 1 0 0 2h11zm2 2h2a1 1 0 1 0 0-2h-2zM8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m2.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPfInvalidRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfInvalidRectangularOutlineIcon],svg[healthicons-rdt-result-pf-invalid-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h11v2H11a1 1 0 1 1 0-2m16 1a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 31a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm0-2V19h36v10zm7 4a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfInvalidRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfNegativeIcon],svg[healthicons-rdt-result-pf-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPfNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm0-4h2v2h-2a1 1 0 1 1 0-2m11 2h-7v-2h7zm2 0h2a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m6.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPfNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPfNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfOutlineIcon],svg[healthicons-rdt-result-pf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6m-13 2h-2a1 1 0 1 0 0 2h2zm2 2h7v-2h-7zm11 0h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfRectangularIcon],svg[healthicons-rdt-result-pf-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M10 24a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1m14 1h2a1 1 0 1 0 0-2h-2zm-9-2h7v2h-7z"></svg:path><svg:path fill-rule="evenodd" d="M4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm2 6a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfRectangularNegativeIcon],svg[healthicons-rdt-result-pf-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultPfRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 23h2v2h-2a1 1 0 1 1 0-2m4 0h7v2h-7zm9 2h2a1 1 0 1 0 0-2h-2zm-13 2a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-.15-15.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPfRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPfRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPfRectangularOutlineIcon],svg[healthicons-rdt-result-pf-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6m-16 3a1 1 0 0 0 1 1h2v-2h-2a1 1 0 0 0-1 1m12-1h-7v2h7zm5 1a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm2-10v10h36V19zm7 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPfRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPositiveIcon],svg[healthicons-rdt-result-positive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 14v-2a2 2 0 1 0-4 0v2zm-4 2v5h4v-5zm0 9v-2h4v2a2 2 0 1 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M10 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2zm10 32a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0-23a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4" clip-rule="evenodd"></svg:path><svg:path d="M30.85 8.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPositiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPositiveNegativeIcon],svg[healthicons-rdt-result-positive-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPositiveNegative0)"><svg:path d="M18 40a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-1.5-7.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill-rule="evenodd" d="M14 12a4 4 0 0 1 8 0v13a4 4 0 0 1-8 0zm6 0v2h-4v-2a2 2 0 1 1 4 0m-4 9v-5h4v5zm0 2v2a2 2 0 1 0 4 0v-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm18.85 4.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPositiveNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPositiveNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPositiveOutlineIcon],svg[healthicons-rdt-result-positive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 38a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill-rule="evenodd" d="M18 8a4 4 0 0 0-4 4v13a4 4 0 0 0 8 0V12a4 4 0 0 0-4-4m2 6v-2a2 2 0 1 0-4 0v2zm-4 2v5h4v-5zm0 9v-2h4v2a2 2 0 1 1-4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm12 2H12v36h12z" clip-rule="evenodd"></svg:path><svg:path d="M30.85 8.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 1 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 28 9.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 30 9.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M28.5 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v4a1 1 0 1 1-2 0v-4h-1a1 1 0 0 1-1-1M30 27.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .472.333a1 1 0 1 0 1.886-.666A2.5 2.5 0 0 0 31.5 25h-1a2.5 2.5 0 0 0 0 5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.472-.333a1 1 0 1 0-1.886.666A2.5 2.5 0 0 0 30.5 33h1a2.5 2.5 0 0 0 0-5h-1a.5.5 0 0 1-.5-.5m.5 8.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1-2.358-1.667a1 1 0 1 1 1.886-.666a.5.5 0 0 0 .472.333h1a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.358 1.667a1 1 0 1 1-1.886.666A.5.5 0 0 0 31.5 36zm7.5-9.5a1 1 0 0 0-1.721-.692l-1 1.041A1 1 0 0 0 36 28.542V31.5a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPositiveOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvIcon],svg[healthicons-rdt-result-pv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 23h-2a1 1 0 1 0 0 2h2zm2 2h3v-2h-3zm11 0h-6v-2h6a1 1 0 1 1 0 2"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm28-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidIcon],svg[healthicons-rdt-result-pv-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39"></svg:path><svg:path fill-rule="evenodd" d="M14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H15v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1m-22 7h-2a1 1 0 1 0 0 2h2zm2 0v2h7v-2zm9 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm30-6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidNegativeIcon],svg[healthicons-rdt-result-pv-invalid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPvInvalidNegative0)"><svg:path d="M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M29 24a3 3 0 0 0-3-3H11a3 3 0 1 0 0 6h15a3 3 0 0 0 3-3m-18-1h2v2h-2a1 1 0 1 1 0-2m4 2v-2h7v2zm11 0h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path d="M16.5 35H15v-1h1.5a.5.5 0 0 1 0 1m14-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m7.593-12.974a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39M14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm13-22a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H29v1a1 1 0 1 1-2 0zm-3.564 28.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 0 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM36 15a1 1 0 1 1-2 0v-2a1 1 0 1 1 0-2c0-.327.09-.794.389-1.21c.335-.465.885-.79 1.611-.79a1 1 0 0 1 0 2a1 1 0 0 1 0 2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPvInvalidNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidOutlineIcon],svg[healthicons-rdt-result-pv-invalid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 31a7 7 0 1 1 0-14h26a7 7 0 1 1 0 14zm0-12h26a5 5 0 0 1 0 10H11a5 5 0 0 1 0-10m2 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path><svg:path fill-rule="evenodd" d="M29 24a3 3 0 0 0-3-3H11a3 3 0 1 0 0 6h15a3 3 0 0 0 3-3m-18-1h2v2h-2a1 1 0 1 1 0-2m4 2v-2h7v2zm11 0h-2v-2h2a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidRectangularIcon],svg[healthicons-rdt-result-pv-invalid-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M18 23h-7a1 1 0 1 0 0 2h7zm2 2h6a1 1 0 1 0 0-2h-6z"></svg:path><svg:path fill-rule="evenodd" d="M6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m5 9a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidRectangularNegativeIcon],svg[healthicons-rdt-result-pv-invalid-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultPvInvalidRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 .001h48v48H0zM6 30a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm32-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-13-1h-7a1 1 0 1 0 0 2h7zm2 2h6a1 1 0 1 0 0-2h-6zM8 24a3 3 0 0 0 3 3h15a3 3 0 1 0 0-6H11a3 3 0 0 0-3 3m2.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPvInvalidRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidRectangularOutlineIcon],svg[healthicons-rdt-result-pv-invalid-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-1-3a1 1 0 0 1 1-1h7v2h-7a1 1 0 0 1-1-1m17 0a1 1 0 0 1-1 1h-6v-2h6a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 31a2 2 0 0 1-2-2V19a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm0-2V19h36v10zm7 4a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvNegativeIcon],svg[healthicons-rdt-result-pv-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRdtResultPvNegative0)"><svg:path d="M40 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill-rule="evenodd" d="M11 21a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6zm0 2h2v2h-2a1 1 0 1 1 0-2m7 0h-3v2h3zm2 2h6a1 1 0 1 0 0-2h-6z" clip-rule="evenodd"></svg:path><svg:path d="M15 35h1.5a.5.5 0 0 0 0-1H15zm15.5-23H29v-1h1.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6m6.85-12.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm-5.5 30a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPvNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPvNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvOutlineIcon],svg[healthicons-rdt-result-pv-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6m-13 2h-2a1 1 0 1 0 0 2h2zm2 2h3v-2h-3zm11 0h-6v-2h6a1 1 0 1 1 0 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 24a7 7 0 0 0 7 7h26a7 7 0 1 0 0-14H11a7 7 0 0 0-7 7m33-5H11a5 5 0 0 0 0 10h26a5 5 0 0 0 0-10M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvRectangularIcon],svg[healthicons-rdt-result-pv-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M11 23h2v2h-2a1 1 0 1 1 0-2m9 2h6a1 1 0 0 0 .996-1.09l-.001-.012A1 1 0 0 0 26 23h-6zm-5 0h3v-2h-3z"></svg:path><svg:path fill-rule="evenodd" d="M4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 27a3 3 0 1 1 0-6h15a3 3 0 0 1 2.988 3.269l-.003.038A3 3 0 0 1 26 27zm2 6a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvRectangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvRectangularNegativeIcon],svg[healthicons-rdt-result-pv-rectangular-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRdtResultPvRectangularNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm4 28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm36-4a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M11 23h2v2h-2a1 1 0 1 1 0-2m7 2h-3v-2h3zm2 0h6a1 1 0 1 0 0-2h-6zm-9 2a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6zm-.15-15.895c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm2 2h1.5a.5.5 0 0 0 0-1H15zM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1m-8 27a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRdtResultPvRectangularNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRdtResultPvRectangularNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvRectangularOutlineIcon],svg[healthicons-rdt-result-pv-rectangular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.85 11.105c.238-.105.495-.131.743-.079s.485.185.677.39a1 1 0 0 0 1.46-1.368a3.3 3.3 0 0 0-1.722-.978a3.2 3.2 0 0 0-1.966.206a3.4 3.4 0 0 0-1.495 1.304A3.6 3.6 0 0 0 8 12.5c0 .678.188 1.346.547 1.92s.877 1.031 1.495 1.304a3.2 3.2 0 0 0 1.966.206a3.3 3.3 0 0 0 1.722-.978a1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.2 1.2 0 0 1-.742-.079a1.4 1.4 0 0 1-.609-.537A1.6 1.6 0 0 1 10 12.5c0-.31.087-.61.242-.858c.156-.248.37-.432.609-.537M38 22a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-7 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path fill-rule="evenodd" d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6m-16 3a1 1 0 0 0 1 1h2v-2h-2a1 1 0 0 0-1 1m17 0a1 1 0 0 1-1 1h-6v-2h6a1 1 0 0 1 1 1m-12-1v2h3v-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm2-10v10h36V19zm7 14a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path><svg:path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503l-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39M35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvRectangularOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsReferralIcon],svg[healthicons-referral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 6a2 2 0 0 0-2 2v1H6v19h22V9h-5V8a2 2 0 0 0-2-2zm8 12a2 2 0 0 0 2-2v-1h3v11h-5v-6h-8v6H8V15h3v1a2 2 0 0 0 2 2zM8 11h3v2H8zm18 2h-3v-2h3zm-7 9v4h-4v-4zM16 8v3h-3v2h3v3h2v-3h3v-2h-3V8z" clip-rule="evenodd"></svg:path><svg:path d="M30 27a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4m4 6c-2.67 0-8 1.462-8 4.364V40h-9c-.729 0-1.202-.263-1.503-.602C15.18 39.041 15 38.537 15 38v-3.586l3.293 3.293l1.414-1.414L14 30.586l-5.707 5.707l1.414 1.414L13 34.414V38c0 .963.32 1.959 1.003 2.727C14.702 41.513 15.729 42 17 42h25v-4.636C42 34.462 36.67 33 34 33"></svg:path></svg:g>`,
})
export class HealthiconsReferralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsReferralNegativeIcon],svg[healthicons-referral-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsReferralNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM34 31c1.934 0 3.5-1.566 3.5-3.5S35.934 24 34 24a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5m-8 6.364C26 34.462 31.33 33 34 33s8 1.462 8 4.364V42H17c-1.271 0-2.298-.487-2.997-1.273C13.32 39.959 13 38.963 13 38v-3.586l-3.293 3.293l-1.414-1.414l5-5l.707-.707l.707.707l5 5l-1.414 1.414L15 34.414V38c0 .537.18 1.041.497 1.398c.301.339.774.602 1.503.602h9zM13 6a2 2 0 0 0-2 2v1H6v19h22V9h-5V8a2 2 0 0 0-2-2zm-5 5h3v2H8zm0 4h3v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1h3v11h-5v-6h-8v6H8zm18-2h-3v-2h3zm-7 9v4h-4v-4zM16 8v3h-3v2h3v3h2v-3h3v-2h-3V8z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsReferralNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsReferralNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsReferralOutlineIcon],svg[healthicons-referral-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 9v3h-3v2h3v3h2v-3h3v-2h-3V9z"></svg:path><svg:path fill-rule="evenodd" d="M13 6a3 3 0 0 0-3 3v1H6v19h22V10h-4V9a3 3 0 0 0-3-3zm8 14a3 3 0 0 0 3-3v-1h2v11h-5v-6h-8v6H8V16h2v1a3 3 0 0 0 3 3zM12 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1zm-4 3h2v2H8zm18 2h-2v-2h2zm-7 9v4h-4v-4zm11 5a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4m4-2a2 2 0 1 0 0 4a2 2 0 1 0 0-4m0 7c-2.67 0-8 1.462-8 4.364V40h-9c-.729 0-1.202-.263-1.503-.602C15.18 39.041 15 38.537 15 38v-3.586l3.293 3.293l1.414-1.414L14 30.586l-5.707 5.707l1.414 1.414L13 34.414V38c0 .963.32 1.959 1.003 2.727C14.702 41.513 15.729 42 17 42h25v-4.636C42 34.462 36.67 33 34 33m-5.706 3.867c-.283.285-.294.441-.294.497V40h12v-2.636c0-.056-.01-.212-.294-.497c-.3-.303-.805-.634-1.506-.94C36.788 35.308 35.06 35 34 35s-2.788.31-4.2.926c-.701.306-1.205.638-1.506.941" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsReferralOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRefusedIcon],svg[healthicons-refused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 9v16.731c0 .987 1.277 1.377 1.829.56l2.724-4.036a2.552 2.552 0 0 1 4.36 2.642l-6.938 12.816A12 12 0 0 1 22.422 44H21c-6.627 0-12-5.373-12-12V15a2 2 0 1 1 4 0v10.111h2V9a2 2 0 1 1 4 0v14h2V6a2 2 0 1 1 4 0v17h2V9a2 2 0 1 1 4 0"></svg:path>`,
})
export class HealthiconsRefusedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRefused24pxIcon],svg[healthicons-refused-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.043 18.554a40 40 0 0 0 1.79-2.5l-.027-.017l1.755-2.507A2.508 2.508 0 0 0 17 10.085V6.5a2.5 2.5 0 0 0-3.039-2.442a2.5 2.5 0 0 0-4.922 0a2.5 2.5 0 0 0-3 2A2.5 2.5 0 0 0 3 8.5V15c0 1.884.811 3.672 2.226 4.977C6.637 21.28 8.536 22 10.5 22s3.863-.72 5.275-2.023c.364-.336.77-.796 1.19-1.323l.006.004zM8.5 6a.5.5 0 0 1 .5.5V12h2V4.5a.5.5 0 0 1 1 0V12h2V6.5a.5.5 0 0 1 1 0v5.423c0 1.308 1.678 1.848 2.44.784l.654-.912a.508.508 0 0 1 .83.587l-3.489 4.982c-.379.479-.726.875-1.017 1.144C13.392 19.455 11.983 20 10.5 20s-2.891-.545-3.918-1.492C5.558 17.563 5 16.299 5 15V8.5a.5.5 0 0 1 1 0V13h2V6.5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRefused24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRefusedNegativeIcon],svg[healthicons-refused-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRefusedNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM31 25.731V9a2 2 0 1 0-4 0v14h-2V6a2 2 0 1 0-4 0v17h-2V9a2 2 0 1 0-4 0v16.111h-2V15a2 2 0 1 0-4 0v17c0 6.627 5.373 12 12 12h1.422a12 12 0 0 0 10.553-6.287l6.938-12.816a2.552 2.552 0 0 0-4.36-2.642L32.83 26.29c-.552.817-1.829.427-1.829-.56" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRefusedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRefusedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRefusedOutlineIcon],svg[healthicons-refused-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.5 6A1.5 1.5 0 0 1 24 7.5V23h2V10.5a1.5 1.5 0 0 1 3 0v15.586c0 1.904 2.41 2.73 3.579 1.227l3.186-4.097a1.518 1.518 0 0 1 2.496 1.72L31.057 36.8a10.81 10.81 0 0 1-9.243 5.2C15.842 42 11 37.158 11 31.186V16.5a1.5 1.5 0 0 1 3 0v8.618h2V10.5a1.5 1.5 0 0 1 3 0V23h2V7.5A1.5 1.5 0 0 1 22.5 6m-3.496 1.339a3.5 3.5 0 0 1 6.992 0A3.5 3.5 0 0 1 31 10.5v15.586l3.187-4.097a3.518 3.518 0 0 1 5.784 3.986l-7.204 11.862A12.81 12.81 0 0 1 21.814 44C14.737 44 9 38.263 9 31.186V16.5a3.5 3.5 0 0 1 5-3.163V10.5a3.5 3.5 0 0 1 5.004-3.161" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRefusedOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRefusedOutline24pxIcon],svg[healthicons-refused-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.043 18.554a40 40 0 0 0 1.79-2.5l-.027-.017l1.755-2.507A2.508 2.508 0 0 0 17 10.085V6.5a2.5 2.5 0 0 0-3.039-2.442a2.5 2.5 0 0 0-4.922 0a2.5 2.5 0 0 0-3 2A2.5 2.5 0 0 0 3 8.5V15c0 1.884.811 3.672 2.226 4.977C6.637 21.28 8.536 22 10.5 22s3.863-.72 5.275-2.023c.364-.336.77-.796 1.19-1.323l.006.004zM8.5 6a.5.5 0 0 1 .5.5V12h2V4.5a.5.5 0 0 1 1 0V12h2V6.5a.5.5 0 0 1 1 0v5.423c0 1.308 1.678 1.848 2.44.784l.654-.912a.508.508 0 0 1 .83.587l-3.489 4.982c-.379.479-.726.875-1.017 1.144C13.392 19.455 11.983 20 10.5 20s-2.891-.545-3.918-1.492C5.558 17.563 5 16.299 5 15V8.5a.5.5 0 0 1 1 0V13h2V6.5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRefusedOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegisterBookIcon],svg[healthicons-register-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M36.99 29.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM34.5 16v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3zM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612-2.077c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612-5.923c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3z"></svg:path><svg:path fill-rule="evenodd" d="M42 10.984q.609.134 1.243.287a.99.99 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987c-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.01 1.01 0 0 1 4 37.775V12.237a.99.99 0 0 1 .757-.966q.634-.153 1.243-.287v-.46c0-.885.589-1.694 1.484-1.92c6.15-1.546 10.628.092 15.757 2.477q.375.077.759.16q.384-.083.76-.16c5.128-2.385 9.606-4.023 15.756-2.476A1.97 1.97 0 0 1 42 10.524zm-2 22.984V10.537c-5.658-1.415-9.683.135-15 2.64v23.242l.003.002l.002.001l.009.003h.003l.006-.002c4.909-2.222 9.191-3.483 14.923-2.437a.06.06 0 0 0 .047-.011zm-17.003 2.453l.003-.002V13.177c-5.317-2.504-9.342-4.055-15-2.64v23.431l.007.007a.06.06 0 0 0 .048.012c5.73-1.047 10.013.214 14.922 2.435l.008.003h.001z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRegisterBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegisterBookNegativeIcon],svg[healthicons-register-book-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRegisterBookNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25 13.177V36.42l.003.002l.01.004h.002l.008-.002c4.909-2.223 9.191-3.483 14.923-2.437a.06.06 0 0 0 .047-.011l.007-.007V10.537c-5.658-1.415-9.683.136-15 2.64m17-2.193v-.46c0-.885-.589-1.694-1.484-1.92c-6.15-1.546-10.628.092-15.757 2.477q-.375.077-.759.16q-.384-.083-.76-.16c-5.128-2.385-9.606-4.023-15.756-2.476A1.97 1.97 0 0 0 6 10.524v.46q-.609.134-1.243.287a.99.99 0 0 0-.757.965v25.539c0 .633.583 1.105 1.204.987c6.213-1.185 10.4-1.268 16.122-.4a3 3 0 0 0 5.348 0c5.721-.868 9.91-.785 16.122.4A1.012 1.012 0 0 0 44 37.775V12.236a.99.99 0 0 0-.757-.965A64 64 0 0 0 42 10.984m-19 2.193c-5.317-2.504-9.342-4.055-15-2.64v23.431l.002.002l.001.002l.004.003a.06.06 0 0 0 .048.012c5.73-1.047 10.013.213 14.922 2.435l.008.003h.001l.011-.004l.003-.002zM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612-2.077c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612-5.923c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3zm16.49 11.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM34.5 16v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRegisterBookNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRegisterBookNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegisterBookOutlineIcon],svg[healthicons-register-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.01 21.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612 5.923c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612 2.077c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm25.98 0c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3zm14-2v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3z"></svg:path><svg:path fill-rule="evenodd" d="m24 11.24l.258-.055c4.996-2.406 9.301-4.136 15.268-2.608A1.97 1.97 0 0 1 41 10.492v.281q1.079.217 2.243.498a.99.99 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987c-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.01 1.01 0 0 1 4 37.775V12.236a.99.99 0 0 1 .757-.965A60 60 0 0 1 7 10.773v-.281c0-.88.583-1.687 1.474-1.915c5.967-1.528 10.272.202 15.268 2.608zm1 1.807c4.98-2.404 8.734-3.88 14-2.54v22.548q0 .002-.008.008a.06.06 0 0 1-.052.013c-4.9-.898-8.681.037-12.795 1.826A3 3 0 0 0 25 34.171zm-2 .001v21.123a3 3 0 0 0-1.145.731c-4.114-1.79-7.896-2.724-12.795-1.826a.06.06 0 0 1-.053-.013h-.001L9 33.054V10.507c5.266-1.34 9.02.137 14 2.541m19-.015q-.51-.116-1-.218v20.24c0 1.31-1.21 2.21-2.421 1.989c-3.776-.693-6.8-.193-10.073 1.052c4.573-.533 8.428-.402 13.494.487zM19.494 36.096c-3.272-1.245-6.297-1.745-10.073-1.052C8.211 35.266 7 34.365 7 33.055v-20.24q-.49.102-1 .218v23.55c5.066-.889 8.92-1.02 13.494-.487" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRegisterBookOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegularPatientIcon],svg[healthicons-regular-patient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M34 16c0 5.525-4.475 10-10 10s-10-4.475-10-10S18.475 6 24 6s10 4.475 10 10m-10 8c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8" clip-rule="evenodd"></svg:path><svg:path d="M24 28c-6.007 0-18 3.035-18 8v6h18zm4 1h-2v5h5v-2h-1.45l.25-.25q.9-.9 1.962-1.325A5.8 5.8 0 0 1 33.95 30q1.925 0 3.487 1.1A5.93 5.93 0 0 1 39.65 34h2.1q-.7-2.675-2.862-4.337Q36.725 28 33.95 28q-1.5 0-2.975.525T28.35 30.35l-.35.4zm.35 7h-2.1q.7 2.675 2.863 4.337Q31.275 42 34.05 42q1.5 0 2.938-.562q1.437-.563 2.662-1.788l.35-.4V41h2v-5h-5v2h1.45l-.25.25q-.9.9-1.963 1.325A5.8 5.8 0 0 1 34.05 40a5.9 5.9 0 0 1-3.487-1.1A5.93 5.93 0 0 1 28.35 36"></svg:path></svg:g>`,
})
export class HealthiconsRegularPatientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegularPatientOutlineIcon],svg[healthicons-regular-patient-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M34 16c0 5.525-4.475 10-10 10s-10-4.475-10-10S18.475 6 24 6s10 4.475 10 10m-10 8c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8" clip-rule="evenodd"></svg:path><svg:path d="M24 28c-6.007 0-18 3.035-18 8v6h18v-2H8v-4c0-.37.22-.979 1.223-1.788c.981-.791 2.443-1.545 4.215-2.197C16.98 30.712 21.247 30 24 30zm4 1h-2v5h5v-2h-1.45l.25-.25q.9-.9 1.962-1.325A5.8 5.8 0 0 1 33.95 30q1.925 0 3.487 1.1A5.93 5.93 0 0 1 39.65 34h2.1q-.7-2.675-2.862-4.337Q36.725 28 33.95 28q-1.5 0-2.975.525T28.35 30.35l-.35.4zm.35 7h-2.1q.7 2.675 2.863 4.337Q31.275 42 34.05 42q1.5 0 2.938-.562q1.437-.563 2.662-1.788l.35-.4V41h2v-5h-5v2h1.45l-.25.25q-.9.9-1.963 1.325A5.8 5.8 0 0 1 34.05 40a5.9 5.9 0 0 1-3.487-1.1A5.93 5.93 0 0 1 28.35 36"></svg:path></svg:g>`,
})
export class HealthiconsRegularPatientOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsResilientAndMigrationSensitiveHealthSystemIcon],svg[healthicons-resilient-and-migration-sensitive-health-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 34.512v-6.104c.274-.03.641-.079 1.038-.15a10 10 0 0 0 1.311-.32c.415-.136.893-.336 1.263-.647s.65-.746.857-1.13c.215-.402.397-.84.542-1.234c.27-.735.437-1.381.461-1.478a1 1 0 0 0-1.036-1.25h-.004l-.007.001l-.027.002l-.095.008c-.08.007-.195.017-.335.033c-.278.03-.66.08-1.076.154a10 10 0 0 0-1.31.32c-.415.136-.893.336-1.264.648q-.171.145-.318.318v-2.275c.274-.03.641-.079 1.038-.15a10 10 0 0 0 1.311-.32c.415-.136.893-.336 1.263-.647s.65-.746.857-1.13c.215-.402.397-.84.542-1.234c.27-.735.437-1.381.461-1.478a1 1 0 0 0-1.036-1.25h-.004l-.007.001l-.027.002l-.095.008c-.08.007-.195.017-.335.033c-.278.03-.66.08-1.076.154a10 10 0 0 0-1.31.32c-.415.136-.893.336-1.264.647c-.37.311-.65.746-.856 1.13a8 8 0 0 0-.246.504a16 16 0 0 0-.378-1.166a10 10 0 0 0-.541-1.233c-.206-.384-.486-.818-.856-1.129c-.371-.31-.849-.511-1.264-.648a10 10 0 0 0-1.31-.32a16 16 0 0 0-1.506-.194l-.027-.002h-.011a1 1 0 0 0-1.036 1.25c.024.096.19.742.461 1.477c.145.393.327.832.542 1.234c.206.384.486.819.856 1.13c.371.31.849.511 1.264.647a10 10 0 0 0 1.31.32a16 16 0 0 0 1.28.175v2.568a3 3 0 0 0-.56-.636c-.37-.312-.848-.512-1.263-.648a10 10 0 0 0-1.31-.32a16 16 0 0 0-1.411-.187l-.095-.008l-.027-.002h-.011a1 1 0 0 0-1.036 1.25c.024.096.19.742.461 1.478c.145.393.327.83.542 1.233c.206.384.486.819.856 1.13c.371.31.849.511 1.264.647c.434.143.898.246 1.31.32a16 16 0 0 0 1.28.175v7.962a323 323 0 0 0-1.554-1.268l-.005-.004C15.33 28.264 7.749 22.102 8.006 14.304c.096-2.76 1.488-5.405 3.743-6.963c4.222-2.922 9.436-.604 12.25 2.74c2.815-3.344 8.03-5.679 12.251-2.74c2.255 1.558 3.647 4.204 3.743 6.963c.28 7.89-7.534 14.19-13.707 19.168q-.658.53-1.286 1.04"></svg:path><svg:path d="M20.053 16.322a7 7 0 0 1-.367-.818c.303.06.604.132.868.219c.333.11.523.214.601.28c.078.065.213.233.379.541c.131.246.256.53.367.819a7 7 0 0 1-.868-.22c-.333-.109-.523-.213-.601-.279c-.078-.065-.213-.233-.379-.542m5.805 2.935a8 8 0 0 0 .867-.219c.334-.11.524-.214.602-.28c.078-.065.213-.233.379-.542c.131-.245.255-.529.367-.818a8 8 0 0 0-.868.219c-.334.11-.523.214-.601.28c-.078.065-.214.233-.38.542c-.13.245-.255.529-.366.818m0 7a8 8 0 0 0 .867-.219c.334-.11.524-.214.602-.28c.078-.065.213-.233.379-.542c.131-.245.255-.529.367-.818a8 8 0 0 0-.868.219c-.334.11-.523.214-.601.28c-.078.065-.214.233-.38.542c-.13.245-.255.529-.366.818m-5.805-2.935a7 7 0 0 1-.367-.818c.303.06.604.132.868.22c.333.109.523.213.601.279c.078.065.213.233.379.542c.131.245.256.529.367.818a8 8 0 0 1-.868-.219c-.333-.11-.523-.214-.601-.28c-.078-.065-.213-.233-.379-.542m-9.876 12.685c-.389-.533-.803-.95-1.22-1.372l-1.616-1.95q-.194-.314-.385-.607c-.457-.705-.862-1.33-.938-1.97c-.096-.817.203-5.717.468-6.459c.266-.741 1.796-1.157 2.325.503c.26.819.343 1.872.418 2.828c.076.98.145 1.858.39 2.272c.485.818 2.045 2.853 2.045 2.853l-1.346-2.547s-.205-.352-.097-1.021c.108-.67.92-1.606 1.301-.862c.382.743 1.049 1.414 1.049 1.414l2.355 2.829s.768.992.789 1.536c.015.387.187 1.78.285 2.553V37h-5.823zM16 41a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm21.774-4.993c.387-.533.8-.95 1.216-1.372c.547-.555 1.1-1.115 1.61-1.95q.194-.314.384-.607c.456-.705.86-1.33.934-1.97c.096-.817.156-5.717-.108-6.459c-.265-.741-1.79-1.157-2.317.503c-.26.819-.342 1.872-.416 2.828c-.077.98-.145 1.858-.39 2.272c-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862c-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043c-.145.516-.31 1.1-.362 1.51V37h5.773zM32 41a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"></svg:path></svg:g>`,
})
export class HealthiconsResilientAndMigrationSensitiveHealthSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsResilientAndMigrationSensitiveHealthSystem24pxIcon],svg[healthicons-resilient-and-migration-sensitive-health-system-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="healthiconsResilientAndMigrationSensitiveHealthSystem24px0" d="M12.717 11.238v4.015l.271-.22c2.705-2.186 6.129-4.953 6.006-8.418c-.042-1.212-.652-2.374-1.64-3.058c-1.85-1.29-4.134-.126-5.368 1.342c-1.233-1.468-3.517-2.626-5.368-1.342c-.988.684-1.597 1.846-1.64 3.058c-.112 3.425 3.21 6.131 5.887 8.312l.35.285v-4.416l-.091-.013c-.189-.03-.4-.07-.596-.13a1.6 1.6 0 0 1-.558-.278a1.6 1.6 0 0 1-.37-.503a4 4 0 0 1-.231-.565a7 7 0 0 1-.18-.626L9.18 8.64l-.003-.012v-.005a.377.377 0 0 1 .382-.456h.016l.044.003a7 7 0 0 1 .646.068c.188.029.399.07.595.13c.188.058.398.143.558.278c.16.134.28.328.37.503c.067.132.126.273.176.41h.002c.085-.157.195-.32.335-.438a1.6 1.6 0 0 1 .559-.277c.195-.06.406-.101.595-.13a7 7 0 0 1 .646-.069l.043-.002h.016a.376.376 0 0 1 .38.464l-.001.008l-.01.043a7 7 0 0 1-.179.625a4 4 0 0 1-.232.565a1.6 1.6 0 0 1-.369.504c-.16.134-.37.22-.558.277a4 4 0 0 1-.474.11M4.48 18.508c.243.289.663.703.663.703s.255.25.435.25H6.87c.137 0 .23-.075.338-.163l.092-.072c.208-.155.385-.442.506-.677c.124-.242.171-.462.173-.734a2.05 2.05 0 0 0-.195-.873l-.744-1.513s-.32-.648-.367-.737a.87.87 0 0 0-.769-.444a.24.24 0 0 0-.23.172l-.033.127a7.6 7.6 0 0 0-.21 1.836v.256H4.92v-.256c0-.844.111-1.506.225-1.96a5 5 0 0 1 .21-.662l.017-.037l.005-.01l.001-.004v-.001l.009.003l-.008-.003l.037-.079l.58-1.625a.87.87 0 0 0-.053-.704l-.036-.067a.797.797 0 0 0-1.432.052L3.1 14.368a1 1 0 0 0-.085.354c-.013.29-.03.86.01 1.264c.089.892.677 1.594 1.372 2.421zm3.383 1.484v.752a.256.256 0 0 1-.256.256h-2.56a.256.256 0 0 1-.255-.256v-.752zm11.657-1.484c-.242.289-.662.703-.662.703s-.256.25-.435.25H17.13c-.137 0-.23-.075-.339-.163l-.092-.072c-.207-.155-.385-.442-.506-.677a1.5 1.5 0 0 1-.173-.734c-.002-.287.07-.616.196-.873l.744-1.513s.319-.648.367-.737a.87.87 0 0 1 .768-.444c.107 0 .202.07.23.172l.033.127a7.6 7.6 0 0 1 .21 1.836v.256h.512v-.256a8 8 0 0 0-.225-1.96a5 5 0 0 0-.211-.662l-.016-.037l-.005-.01l-.002-.004v-.001l-.037-.079l-.58-1.625a.87.87 0 0 1 .053-.704l.035-.067a.797.797 0 0 1 1.432.052l1.375 3.082q.076.17.085.354c.013.29.03.86-.01 1.264c-.088.892-.677 1.594-1.371 2.421zm-.906-4.796l.008-.003zm-2.476 6.28v.752c0 .141.114.256.256.256h2.559a.256.256 0 0 0 .256-.256v-.752z"></svg:path></svg:defs><svg:mask id="healthiconsResilientAndMigrationSensitiveHealthSystem24px1" fill="none"><svg:use href="#healthiconsResilientAndMigrationSensitiveHealthSystem24px0"></svg:use></svg:mask><svg:g fill="currentColor"><svg:use href="#healthiconsResilientAndMigrationSensitiveHealthSystem24px0"></svg:use><svg:path d="M12.717 15.253h-2v4.19l3.258-2.635zm0-4.015l-.347-1.97l-1.653.291v1.679zm.271 3.796l-1.257-1.556zm6.006-8.419l-1.999.07v.001zm-1.64-3.058l-1.144 1.64l.005.004zm-5.368 1.342l-1.531 1.286l1.531 1.824l1.532-1.824zM6.618 3.557L7.758 5.2zm-1.64 3.058l-1.998-.07v.004zm5.887 8.312l-1.263 1.55zm.35.285L9.949 16.76l3.266 2.669v-4.217zm0-4.416h2V9.055l-1.725-.24zm-.091-.013l.304-1.977zm-.596-.13l.586-1.913zm-.558-.278l-1.288 1.53zm-.37-.503l1.784-.906zm-.231-.565l-1.895.64zm-.142-.476l-1.935.505zm-.037-.15l-1.949.452l.003.009zm-.01-.042l-1.952.437l.002.007l.002.007zm-.003-.012l-1.953.43l.002.008zm0-.003l-1.986.242l.012.095l.02.093zm0-.002l1.985-.242l-.012-.092l-.02-.09zm.037-.262l1.753.963l.001-.001zm.345-.194l.083-1.999H9.64zm.001 0l.086-1.998h-.003zm.003 0l.094-1.998H9.65zm.012 0l.108-1.997H9.67zm.044.003l.116-1.997h-.009zm.153.01l.163-1.993zm.493.058l.304-1.977zm.595.13l.585-1.912zm.558.278l-1.287 1.53zm.37.503l1.783-.906zm.176.41l-1.875.696l.484 1.304h1.392zm.002 0v2h1.19l.568-1.047zm.335-.438l1.287 1.53zm.559-.277l.585 1.912zm.595-.13l.304 1.976zm.492-.058l.163 1.994zm.154-.01l-.108-1.998h-.01zm.043-.003l-.093-1.998h-.015zm.012 0l-.086-1.999h-.007zm.003 0l-.082-1.999h-.004zm.001 0l-.08-2l-.002.001zm.354.212l-1.801.868zm.027.252l-1.944-.469l-.004.016l-.004.016zm-.002.008l1.948.452l.002-.007l.002-.007zm-.01.043l1.947.46l.002-.009zm-.037.15l1.935.504zm-.142.475l-1.895-.64zm-.232.565l1.784.906zm-.369.504l1.287 1.53zm-.558.277l-.586-1.913zM5.143 19.21l-1.405 1.424l.008.007zm-.662-.703l1.533-1.285h-.001zm2.727.79l1.26 1.554zm.092-.072l1.194 1.604zm.506-.677l-1.779-.914zm.173-.734l2 .016zm-.195-.873l-1.795.883zm-.744-1.513l1.794-.882zm-.367-.737l-1.763.943zm-.999-.272l-1.929-.529zm-.033.127l-1.94-.484zm-.21 2.092v2h2v-2zm-.511 0h-2v2h2zm0-.256h-2zm.225-1.96l1.94.483zm.157-.523l1.88.683zm.054-.139l-1.846-.77zm.016-.037l-1.824-.822l-.004.01zm.005-.01l-1.817-.838l-.003.008l-.004.007zm.001-.004l-1.813-.845l-.003.008zm0-.001l-1.809-.852l-.003.007zm.009.003L4.7 15.59l1.535-3.69zm.029-.082l1.81.852l.04-.088l.033-.092zm.58-1.625l1.883.673zm-.053-.704l1.763-.944zm-.036-.067l-1.763.944zm-1.124-.301L5.84 12.63zm-.308.353L2.65 10.47zM3.1 14.368l-1.826-.814zm-.085.354l-1.998-.09zm.01 1.264l1.99-.198zm1.372 2.421l1.532-1.285zm3.466 1.585h2v-2h-2zm-3.071 0v-2h-2v2zm14.066-.78l1.397 1.43l.008-.008zm.662-.704l-1.532-1.286l-.001.001zm-2.728.79l1.26-1.554zm-.092-.072l-1.193 1.604zm-.506-.677l1.78-.914zm-.173-.734l2-.016zm.196-.873l-1.795-.883zm.744-1.513l-1.795-.883zm.367-.737l1.763.943zm.998-.272l-1.929.529zm.033.127l1.94-.484zm.21 2.092h-2v2h2zm.512 0v2h2v-2zm-.225-2.217l1.94-.484zm-.157-.522l-1.88.683zm-.054-.139l-1.846.772zm-.016-.037l1.827-.813l-.004-.009zm-.005-.01l1.823-.823l-.003-.007l-.004-.008zm-.002-.004l1.817-.837l-.004-.008zm0-.001l1.813-.845l-.004-.007zm-.037-.079l-1.884.672l.033.092l.041.088zm-.58-1.625l-1.884.673zm.053-.704l1.763.943zm.035-.067l1.763.944zm1.125-.301l1.057-1.698zm.307.353l1.827-.815zm1.375 3.082l1.827-.814zm.085.354l-1.998.09zm-.01 1.264l-1.99-.198zm-1.371 2.421l-1.532-1.285zm-.99-4.695l-.85-1.81L19.3 15.59zm-2.476 6.28v-2h-2v2zm3.07 0h2v-2h-2zm-4.49-4.74v-4.014h-4v4.015zm-2.987-1.774l-.271.22l2.515 3.11l.271-.22zm5.264-6.792c.036 1.022-.441 2.105-1.473 3.329c-1.033 1.226-2.41 2.346-3.79 3.463l2.514 3.111c1.323-1.07 3.011-2.426 4.335-3.996c1.325-1.573 2.498-3.606 2.412-6.049zm-.78-1.485c.445.307.759.872.78 1.484l3.998-.14c-.063-1.812-.968-3.571-2.5-4.632zm-2.697.984c.419-.498.999-.913 1.544-1.091c.497-.163.847-.107 1.148.103l2.288-3.28C16.95.835 15.232.828 13.816 1.292c-1.368.448-2.547 1.35-3.361 2.32zM7.758 5.2c.303-.21.656-.266 1.155-.103c.545.178 1.124.591 1.542 1.088l3.063-2.572c-.816-.971-1.996-1.871-3.363-2.318C8.74.833 7.025.84 5.479 1.913zm-.78 1.485c.02-.612.335-1.177.78-1.484L5.48 1.913c-1.532 1.06-2.437 2.82-2.5 4.633zm5.15 6.69c-1.368-1.114-2.711-2.216-3.718-3.42c-1-1.198-1.466-2.26-1.432-3.274L2.98 6.55c-.08 2.412 1.06 4.414 2.361 5.97c1.296 1.551 2.952 2.892 4.261 3.958zm.352.288l-.352-.287l-2.526 3.101l.347.283zm-3.265-2.867v4.416h4v-4.416zm1.604 1.963l.12.018l.551-3.962l-.062-.009zm-.876-.194c.322.098.635.157.877.194l.608-3.953a2.4 2.4 0 0 1-.314-.066zm-1.26-.66c.47.396.988.576 1.26.66l1.17-3.825l-.022-.007a.8.8 0 0 1 .166.111zm-.866-1.128c.13.254.396.734.865 1.129l2.575-3.062a1 1 0 0 1 .138.145c.01.013.005.01-.011-.023zm-.343-.83c.079.232.191.53.343.83l3.567-1.81a2.4 2.4 0 0 1-.12-.3zm-.182-.611c.04.155.101.372.182.612l3.79-1.282a5 5 0 0 1-.102-.34zm-.048-.194q.017.075.048.194l3.87-1.01l-.026-.105zm-.012-.052l.01.043l3.896-.903l-.01-.043zm-.006-.025l.002.011l3.904-.875l-.003-.011zm-.002-.01v.003l3.906-.862v-.003zm-.033-.19l3.97-.483V8.38zm.27-1.467a2.38 2.38 0 0 0-.239 1.648l3.909-.848c.084.388.022.787-.164 1.125zm2.178-1.23a2.38 2.38 0 0 0-2.178 1.23l3.507 1.924c-.296.54-.872.867-1.489.842zm.004 0l-.167 3.996zm.007 0h-.004l-.172 3.996h.003zm.019 0h-.012l-.187 3.996h.012zm.057.004l-.043-.003l-.215 3.995l.043.002zm.21.014l-.2-.014l-.234 3.993l.107.008zm.633.074a9 9 0 0 0-.634-.074l-.326 3.987c.095.008.221.02.351.04zm.876.195a6 6 0 0 0-.876-.195l-.609 3.954c.136.02.244.044.314.066zm1.26.659c-.469-.395-.988-.576-1.26-.659l-1.17 3.825c.034.01.038.014.023.007a.8.8 0 0 1-.167-.112zm.866 1.128c-.129-.253-.396-.733-.865-1.128l-2.575 3.061a1 1 0 0 1-.138-.144c-.01-.014-.005-.01.011.023zm.268.62a6 6 0 0 0-.268-.62l-3.566 1.812q.035.066.084.2zm-1.873-1.304h-.002l.001 4h.002zm-.952.032c-.418.35-.67.764-.806 1.014l3.516 1.907c.01-.02.01-.016-.004.003a1 1 0 0 1-.132.137zm1.26-.66c-.272.084-.79.264-1.26.66l2.574 3.06a.8.8 0 0 1-.166.112q-.026.01.023-.007zm.877-.194a6 6 0 0 0-.877.195l1.17 3.824c.071-.021.179-.045.315-.066zm.633-.074a9 9 0 0 0-.634.074l.609 3.953c.13-.02.256-.033.351-.04zm.2-.014q-.077.004-.2.014l.326 3.987l.107-.008zm.052-.003l-.043.002l.215 3.995l.043-.003zm.027-.001h-.012l.186 3.996h.012zm.01 0h-.003l.172 3.996h.003zm.005-.001h-.001l.165 3.997zm2.237 1.342a2.38 2.38 0 0 0-2.234-1.342l.159 3.997a1.62 1.62 0 0 1-1.527-.918zm.17 1.59a2.38 2.38 0 0 0-.17-1.59l-3.603 1.737a1.62 1.62 0 0 1-.115-1.085zm.006-.023l.002-.009l-3.904-.874l-.002.008zm-.014.056l.01-.042l-3.896-.903l-.01.042zm-.05.203l.048-.194l-3.892-.92l-.026.104zm-.182.612c.08-.24.142-.456.182-.612l-3.87-1.01a5 5 0 0 1-.102.34zm-.343.83c.152-.3.264-.598.343-.83l-3.79-1.281c-.044.13-.086.233-.12.3zm-.865 1.128c.469-.395.736-.875.865-1.128l-3.567-1.811c-.016.032-.02.036-.011.022l.04-.049a1 1 0 0 1 .098-.095zm-1.261.66c.272-.084.79-.265 1.26-.66L12.463 9.32a.8.8 0 0 1 .166-.112q.026-.01-.023.007zm-.712.167a6 6 0 0 0 .712-.168l-1.17-3.825a2 2 0 0 1-.236.053zM5.143 19.21l1.405-1.423l-.002-.002l-.055-.054l-.151-.155a8 8 0 0 1-.326-.354l-3.067 2.569c.17.202.377.42.518.567l.265.268l.005.005l.002.002zm.435-1.75c.38 0 .643.12.715.155a1 1 0 0 1 .209.128l.014.013l.01.01l.007.006l.003.004l.002.001v.001h.001L5.143 19.21l-1.397 1.432l.002.001l.006.007l.011.01a3.4 3.4 0 0 0 .356.296c.1.073.257.177.454.27c.17.082.532.234 1.003.234zm1.292 0H5.578v4H6.87zm-.92.283l-.014.011c.017-.012.069-.05.147-.093c.181-.1.454-.201.787-.201v4c.95 0 1.575-.591 1.597-.609zm.156-.123c-.07.053-.132.103-.157.123l2.518 3.108l.018-.014l.01-.009q.007-.004-.001.001zm-.079.014a2 2 0 0 1-.072.125l.018-.02l.046-.046q.03-.03.087-.073l2.388 3.21c.607-.452.958-1.109 1.091-1.368zm-.048.164c0 .023-.001-.003.01-.055a.6.6 0 0 1 .038-.109l3.558 1.828c.285-.555.39-1.09.394-1.632zm.01.026l-.014-.031l.002.007l.003.014v-.016l4 .032a4.04 4.04 0 0 0-.402-1.772zm-.744-1.513l.744 1.512l3.59-1.765l-.745-1.512zm-.335-.677l.051.103l.234.473l.037.074l.012.025v.002h.001l1.795-.883l1.794-.883v-.002l-.014-.026l-.037-.076l-.347-.694zm.994.613a1.13 1.13 0 0 1-.994-.613l3.526-1.887a2.87 2.87 0 0 0-2.532-1.5zm1.7-1.299a1.76 1.76 0 0 1-1.7 1.299v-4c-.965 0-1.881.632-2.159 1.643zm-.022.082l.021-.082l-3.858-1.058l-.044.172zm-.15 1.352c0-.62.081-1.078.15-1.352L3.7 14.063a9.6 9.6 0 0 0-.27 2.32zm0 .256v-.256h-4v.256zm-2.512 2h.511v-4H4.92zm-2-2.256v.256h4v-.256zm.284-2.445c-.15.598-.284 1.423-.284 2.445h4c0-.666.088-1.166.165-1.477zm.218-.721a7 7 0 0 0-.218.721l3.881.968c.039-.156.075-.264.097-.323zm.088-.227a5 5 0 0 0-.088.227l3.76 1.366q.015-.044.019-.05zm.034-.079l-.034.08l3.691 1.542l-.002.004zm.01-.02l-.006.011l3.647 1.644l.005-.01zm.008-.018l-.002.003l3.633 1.675l.001-.004zm.004-.01v.002l3.625 1.69v-.001zm1.127 2.725l.008.003l1.371-3.758l-.008-.003zM6.236 11.9a2 2 0 0 0-.39-.137l-.022-.005l-.019-.004h-.002l-.424 1.954l-.425 1.954h-.005l-.005-.002l-.078-.019a2 2 0 0 1-.33-.12zm-2.63.877l-.037.079l3.619 1.704l.037-.079zm.506-1.445l-.58 1.625l3.767 1.344l.58-1.624zm.068.911a1.13 1.13 0 0 1-.068-.91l3.767 1.344a2.87 2.87 0 0 0-.173-2.321zm-.036-.066l.036.066l3.526-1.887l-.035-.067zm1.696.452a1.203 1.203 0 0 1-1.696-.452l3.527-1.888a2.797 2.797 0 0 0-3.945-1.055zm.462-.53a1.2 1.2 0 0 1-.462.53L3.726 9.236a2.8 2.8 0 0 0-1.077 1.236zm-1.375 3.083L6.302 12.1l-3.653-1.63l-1.375 3.083zm.086-.37c-.006.141-.04.266-.086.37l-3.653-1.63c-.146.328-.24.693-.257 1.08zm.002.975A5 5 0 0 1 5 15.32c.001-.193.008-.38.013-.508l-3.996-.18c-.012.285-.038.987.018 1.55zm.914 1.334c-.37-.44-.594-.713-.751-.964c-.14-.222-.158-.324-.163-.37l-3.98.395c.16 1.624 1.242 2.81 1.83 3.51zm.084.1l-.084-.1l-3.065 2.57l.084.1zm3.85 3.521v-.75h-4v.75zM7.607 23a2.256 2.256 0 0 0 2.256-2.256h-4c0-.959.776-1.744 1.744-1.744zm-2.56 0h2.56v-4h-2.56zm-2.255-2.256A2.256 2.256 0 0 0 5.048 23v-4c.967 0 1.744.785 1.744 1.744zm0-.752v.752h4v-.752zm5.07-2h-3.07v4h3.07zm10.996 1.22l1.405 1.422l.002-.002l.005-.005l.075-.075l.19-.193c.142-.147.349-.365.518-.567l-3.066-2.569c-.073.087-.197.22-.326.354l-.196.199l-.01.01l-.003.002zm-.435 2.249c.47 0 .832-.152 1.003-.233c.196-.094.353-.198.453-.27a4 4 0 0 0 .356-.297l.011-.01l.005-.005l.002-.002l.001-.001l-1.396-1.432l-1.397-1.431l.002-.002l.001-.001l.004-.004l.006-.006l.01-.01a.4.4 0 0 1 .052-.042a1 1 0 0 1 .171-.1c.072-.033.335-.154.716-.154zm-1.292 0h1.292v-4H17.13zm-1.598-.609c.022.018.647.609 1.598.609v-4a1.64 1.64 0 0 1 .934.294l-.014-.011zm-.026-.022q-.008-.005-.002 0l.01.008l.018.014l2.518-3.108l-.157-.123zm-1.092-1.367c.134.26.485.916 1.092 1.367l2.387-3.21a1 1 0 0 1 .134.12l.018.02l-.03-.046l-.043-.079zm-.394-1.632a3.55 3.55 0 0 0 .394 1.632l3.558-1.828l.017.04l.021.07c.012.051.01.077.01.054zm.401-1.772a4.04 4.04 0 0 0-.4 1.772l4-.032l-.001.016l.002-.014l.002-.007l-.013.03zm.744-1.512l-.744 1.512l3.59 1.765l.744-1.512zm.398-.8a26 26 0 0 0-.347.695l-.037.076l-.01.02l-.003.006v.002l1.794.883l1.795.883v-.002l.003-.005l.01-.02l.036-.074l.114-.23l.12-.243l.052-.103zm2.532-1.5a2.87 2.87 0 0 0-2.532 1.5l3.527 1.888a1.13 1.13 0 0 1-.995.613zm2.159 1.644a2.24 2.24 0 0 0-2.159-1.643v4a1.76 1.76 0 0 1-1.699-1.299zm.045.172l-.045-.172l-3.858 1.058q.011.037.022.082zm.27 2.32c0-.976-.13-1.76-.27-2.32l-3.881.968c.068.274.15.731.15 1.352zm0 .256v-.256h-4v.256zm-1.489-2h-.512v4h.512zm-2 1.744v.256h4v-.256zm-.166-1.477c.078.311.166.81.166 1.477h4c0-1.022-.135-1.847-.284-2.445zm-.096-.323c.021.059.058.167.096.323l3.882-.968a7 7 0 0 0-.219-.721zm-.02-.05q.004.005.02.05l3.76-1.366a5 5 0 0 0-.089-.227zm.002.004l-.002-.004l3.691-1.543l-.034-.079zm0-.002l.005.01l3.646-1.643l-.005-.01zm.005.012l.002.003l3.632-1.674l-.001-.003zm.003.007l3.626-1.69v-.001zm-.034-.072l.038.08l3.618-1.705l-.037-.08zm-.654-1.804l.58 1.624l3.767-1.344l-.58-1.625zm.173-2.321a2.87 2.87 0 0 0-.173 2.32l3.768-1.344c.107.3.082.63-.068.911zm.036-.067l-.036.067l3.527 1.887l.035-.066zm3.945-1.055a2.797 2.797 0 0 0-3.945 1.055l3.526 1.888a1.203 1.203 0 0 1-1.696.452zm1.077 1.236a2.8 2.8 0 0 0-1.077-1.236l-2.115 3.396a1.2 1.2 0 0 1-.461-.53zm1.375 3.083l-1.375-3.083l-3.653 1.63l1.374 3.082zm.256 1.079a3 3 0 0 0-.256-1.08l-3.654 1.63a1 1 0 0 1-.086-.37zm-.017 1.55c.056-.564.03-1.266.017-1.55l-3.996.18c.006.128.012.314.013.507c.001.203-.005.367-.015.468zm-1.83 3.51c.588-.7 1.669-1.886 1.83-3.51l-3.98-.395c-.005.046-.024.148-.163.37c-.158.251-.382.524-.751.964zm-.084.1l.084-.1l-3.064-2.57l-.084.1zM19.3 15.59l.008-.003l-1.372-3.758l-.008.003zm-.678-1.882c-.424-1.955-.425-1.954-.425-1.954h-.005l-.005.002l-.01.002l-.023.005a2 2 0 0 0-.147.042a2 2 0 0 0-.243.095l1.7 3.621a2 2 0 0 1-.375.132l-.022.005l-.01.002l-.006.001h-.002l-.002.001zm-.484 7.035v-.752h-4v.752zM16.394 19c.968 0 1.744.785 1.744 1.744h-4A2.256 2.256 0 0 0 16.394 23zm2.559 0h-2.56v4h2.56zm-1.744 1.744c0-.959.776-1.744 1.744-1.744v4a2.256 2.256 0 0 0 2.256-2.256zm0-.752v.752h4v-.752zm-1.071 2h3.07v-4h-3.07z" mask="url(#healthiconsResilientAndMigrationSensitiveHealthSystem24px1)"></svg:path></svg:g>`,
})
export class HealthiconsResilientAndMigrationSensitiveHealthSystem24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsResilientAndMigrationSensitiveHealthSystemOutlineIcon],svg[healthicons-resilient-and-migration-sensitive-health-system-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.749 7.34c-2.255 1.56-3.647 4.206-3.743 6.965c-.257 7.798 7.325 13.96 13.435 18.924c.894.727 1.757 1.428 2.559 2.105c.72-.598 1.49-1.218 2.286-1.86c6.173-4.978 13.987-11.28 13.707-19.169c-.096-2.76-1.488-5.405-3.743-6.963c-3.589-2.498-7.895-1.185-10.834 1.319c-.519.441-.994.92-1.416 1.421c-.423-.501-.899-.98-1.417-1.42c-2.94-2.501-7.245-3.804-10.834-1.32m11.25 19.2v5.377l-.387-.315c-2.58-2.097-5.295-4.305-7.614-6.785c-3.125-3.344-5.113-6.774-4.993-10.445c.076-2.156 1.17-4.204 2.88-5.386h.002c1.53-1.06 3.244-1.2 4.959-.704c1.757.51 3.439 1.68 4.623 3.087L24 13.187l1.53-1.818c1.187-1.41 2.869-2.583 4.626-3.093c1.713-.498 3.424-.358 4.953.706l.005.004c1.711 1.182 2.806 3.23 2.88 5.388v.002c.13 3.654-1.85 7.1-4.976 10.455c-2.4 2.577-5.242 4.87-7.912 7.023L25 31.94v-3.531c.274-.03.64-.079 1.038-.15a10 10 0 0 0 1.31-.32c.415-.136.893-.336 1.264-.647c.37-.311.65-.746.856-1.13c.216-.402.398-.84.542-1.234c.271-.735.437-1.381.462-1.478a1 1 0 0 0-1.036-1.25h-.004l-.008.001l-.027.002l-.095.008c-.08.007-.195.017-.334.033c-.278.03-.66.08-1.076.154a10 10 0 0 0-1.311.32c-.415.136-.892.336-1.263.648q-.172.145-.318.318v-2.275c.274-.03.64-.079 1.038-.15a10 10 0 0 0 1.31-.32c.415-.136.893-.336 1.264-.647c.37-.311.65-.746.856-1.13c.216-.402.398-.84.542-1.234c.271-.735.437-1.381.462-1.478a1 1 0 0 0-1.036-1.25h-.004l-.008.001l-.027.002l-.095.008c-.08.007-.195.017-.334.033c-.278.03-.66.08-1.076.154a10 10 0 0 0-1.311.32c-.415.136-.892.336-1.263.647s-.65.746-.856 1.13q-.132.246-.247.504a16 16 0 0 0-.377-1.166a10 10 0 0 0-.542-1.233c-.206-.384-.486-.818-.856-1.129c-.37-.31-.848-.511-1.263-.648a10 10 0 0 0-1.31-.32a16 16 0 0 0-1.507-.194l-.026-.002h-.012a1 1 0 0 0-1.036 1.25c.025.096.19.742.462 1.477c.144.393.326.832.542 1.234c.206.384.486.819.856 1.13s.848.511 1.263.647c.434.143.899.245 1.31.32a16 16 0 0 0 1.28.175v2.568a3 3 0 0 0-.559-.636c-.37-.312-.848-.512-1.263-.648a10 10 0 0 0-1.31-.32a16 16 0 0 0-1.412-.187l-.095-.008l-.026-.002h-.012a1 1 0 0 0-1.036 1.25c.025.096.19.742.462 1.478c.144.393.326.83.542 1.233c.206.384.486.819.856 1.13s.848.511 1.263.647c.434.143.899.246 1.31.32a16 16 0 0 0 1.28.175m-2.947-10.218a7 7 0 0 1-.367-.818c.304.06.604.132.868.219c.334.11.524.214.602.28c.077.065.213.233.378.541c.132.246.256.53.368.819a7 7 0 0 1-.868-.22c-.334-.109-.524-.213-.602-.279c-.077-.065-.213-.233-.379-.542m6.673 2.716c-.264.087-.564.16-.868.219a8 8 0 0 1 .367-.819c.166-.308.301-.476.38-.541c.077-.066.267-.17.6-.28c.265-.087.565-.16.868-.219c-.111.29-.235.573-.367.818c-.165.309-.3.477-.379.542c-.078.066-.267.17-.601.28m-.868 7.219c.304-.06.604-.132.868-.219c.334-.11.523-.214.601-.28c.078-.065.214-.233.38-.542c.13-.245.255-.529.366-.818c-.303.06-.603.132-.867.219c-.334.11-.524.214-.602.28c-.078.065-.213.233-.379.542a8 8 0 0 0-.367.818m-6.172-3.753c.112.29.236.573.367.818c.166.31.302.477.38.543c.078.065.267.17.6.28c.265.086.565.158.869.218a7 7 0 0 0-.368-.818c-.165-.31-.3-.477-.378-.542s-.268-.17-.602-.28a7 7 0 0 0-.868-.219" clip-rule="evenodd"></svg:path><svg:path d="M8.957 34.635c.417.421.831.84 1.22 1.372V37H16v-.993c-.098-.773-.27-2.166-.285-2.553c-.021-.544-.789-1.537-.789-1.537l-2.355-2.828s-.667-.67-1.049-1.414s-1.193.192-1.301.861c-.108.67.097 1.022.097 1.022l1.346 2.547s-1.56-2.035-2.045-2.853c-.245-.414-.314-1.292-.39-2.272c-.075-.956-.157-2.009-.418-2.828c-.529-1.66-2.06-1.244-2.325-.503c-.265.742-.564 5.642-.468 6.458c.076.64.48 1.266.938 1.971q.191.293.385.607c.512.835 1.067 1.395 1.616 1.95m30.033 0c.547-.555 1.1-1.115 1.61-1.95q.194-.314.384-.606c.456-.706.86-1.332.934-1.972c.096-.816.156-5.716-.108-6.458c-.265-.741-1.79-1.157-2.317.503c-.26.819-.342 1.872-.416 2.828c-.077.98-.145 1.858-.39 2.272c-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862c-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043c-.145.516-.31 1.1-.362 1.51V37h5.773v-.993c.388-.533.801-.95 1.217-1.372M32 41a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm-16 0a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"></svg:path></svg:g>`,
})
export class HealthiconsResilientAndMigrationSensitiveHealthSystemOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsResilientAndMigrationSensitiveHealthSystemOutline24pxIcon],svg[healthicons-resilient-and-migration-sensitive-health-system-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.498 3.621c1.183-.692 2.617-.929 3.856-.064c.988.684 1.598 1.846 1.64 3.058c.123 3.465-3.301 6.232-6.006 8.419c-.349.282-.686.554-1.002.817c-.351-.297-.73-.605-1.121-.924c-2.677-2.181-6-4.887-5.887-8.312c.043-1.212.652-2.374 1.64-3.058c1.242-.861 2.678-.624 3.862.07a5.9 5.9 0 0 1 1.502 1.267l.003.004h.002l.004-.004a5.9 5.9 0 0 1 1.507-1.273m-.782 7.346v1.7c.845-.696 1.666-1.412 2.397-2.198c1.3-1.4 1.92-2.628 1.879-3.782v-.002c-.021-.607-.334-1.17-.777-1.477l-.005-.003c-.301-.21-.651-.266-1.149-.103c-.544.178-1.124.592-1.542 1.09c-.8.952-2.265.953-3.066 0c-.417-.497-.995-.91-1.54-1.087c-.5-.163-.853-.107-1.155.103h-.001c-.443.307-.755.869-.777 1.475c-.037 1.162.586 2.385 1.885 3.778c.722.774 1.523 1.473 2.35 2.157v-2.016l-.17-.024a4 4 0 0 1-.595-.13a1.6 1.6 0 0 1-.559-.277a1.6 1.6 0 0 1-.37-.503a4 4 0 0 1-.23-.565a7 7 0 0 1-.18-.626l-.01-.042l-.002-.012l-.001-.003v-.002a.377.377 0 0 1 .382-.457h.005l.012.001l.043.003a7 7 0 0 1 .646.068c.189.029.4.07.595.13c.188.058.399.143.559.277s.28.328.37.504c.083.166.155.346.213.514l.055-.114c.089-.175.21-.369.369-.503c.16-.135.37-.22.559-.277c.195-.06.406-.102.595-.13a7 7 0 0 1 .646-.069l.043-.002h.015l.001-.001a.376.376 0 0 1 .381.465l-.002.008l-.01.043a7 7 0 0 1-.179.625a4 4 0 0 1-.231.565c-.09.175-.21.369-.37.503c-.16.135-.37.22-.558.277a4 4 0 0 1-.52.119" clip-rule="evenodd"></svg:path><svg:path d="M5.143 19.211s-.42-.414-.662-.703l-.084-.1c-.695-.828-1.283-1.53-1.372-2.422c-.04-.404-.023-.974-.01-1.264a1 1 0 0 1 .085-.354l1.375-3.082a.797.797 0 0 1 1.432-.052l.036.067a.87.87 0 0 1 .052.704l-.58 1.625l-.036.079v.001l-.002.003l-.005.01l-.016.038l-.054.139c-.044.12-.1.295-.157.522a8 8 0 0 0-.225 1.96v.257h.511v-.256a7.6 7.6 0 0 1 .243-1.962a.24.24 0 0 1 .23-.173c.326 0 .623.172.769.444c.048.09.367.737.367.737l.744 1.513c.126.257.198.586.195.873a1.5 1.5 0 0 1-.173.734c-.12.235-.298.522-.506.677l-.092.072c-.108.088-.201.163-.338.163H5.578c-.18 0-.435-.25-.435-.25m.244-5.499l-.008-.003zm2.476 7.032v-.752H4.792v.752c0 .141.114.256.256.256h2.559a.256.256 0 0 0 .256-.256m10.995-1.533s.42-.414.662-.703l.084-.1c.694-.828 1.283-1.53 1.371-2.422c.04-.404.023-.974.01-1.264a1 1 0 0 0-.085-.354l-1.375-3.082a.797.797 0 0 0-1.432-.052l-.035.067a.87.87 0 0 0-.053.704l.58 1.625l.037.079l-.008.003l.008-.003v.001l.002.003l.005.01a3 3 0 0 1 .07.177c.043.12.1.295.157.522c.113.455.225 1.117.225 1.96v.257h-.512v-.256a7.6 7.6 0 0 0-.243-1.962a.24.24 0 0 0-.23-.173a.87.87 0 0 0-.768.444c-.048.09-.367.737-.367.737l-.744 1.513a2.04 2.04 0 0 0-.196.873c.002.272.05.492.173.734c.121.235.299.522.506.677q.049.036.092.072c.109.088.201.163.339.163h1.292c.18 0 .435-.25.435-.25m-2.72 1.533v-.752h3.07v.752a.256.256 0 0 1-.255.256h-2.56a.256.256 0 0 1-.255-.256"></svg:path></svg:g>`,
})
export class HealthiconsResilientAndMigrationSensitiveHealthSystemOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespiratorIcon],svg[healthicons-respirator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 19a7 7 0 1 1 14 0v4.73a34 34 0 0 0-1.106-2.245c-.757-1.395-1.622-2.704-2.575-3.679c-.937-.958-2.09-1.724-3.416-1.724s-2.48.766-3.416 1.724c-.954.975-1.818 2.284-2.575 3.679c-.32.588-.624 1.2-.912 1.82zm16-4a9 9 0 1 0-18 0v13.402a9 9 0 0 0-.835-.71c-.573-.43-1.18-.762-1.787-.92c-.612-.16-1.29-.156-1.895.194l-3.22 1.86c-.605.349-.948.933-1.115 1.543c-.167.605-.182 1.297-.098 2.007c.17 1.425.766 3.11 1.711 4.748s2.108 2.996 3.256 3.855c.573.429 1.18.761 1.787.92c.613.16 1.29.155 1.895-.195l.008-.004l3.212-1.855c.606-.35.948-.933 1.116-1.544q.091-.337.125-.705q.047.005.095.005h9.295q.048 0 .095-.005q.034.368.126.705c.168.61.51 1.194 1.116 1.544l3.22 1.859c.605.35 1.282.353 1.895.194c.607-.159 1.214-.491 1.786-.92c1.15-.86 2.31-2.217 3.256-3.855c.946-1.639 1.542-3.323 1.711-4.748c.085-.71.07-1.402-.097-2.007c-.168-.61-.51-1.194-1.116-1.544l-.045-.025l-3.175-1.833c-.605-.35-1.282-.354-1.895-.195c-.607.159-1.214.491-1.786.92q-.321.24-.641.53zM10.945 29.55a7 7 0 0 0-.56-.38l1.028-.594c.06-.035.201-.082.496-.006c.3.079.69.271 1.143.61c.902.675 1.908 1.823 2.759 3.296c.85 1.474 1.342 2.919 1.475 4.038c.067.562.039.995-.044 1.294c-.08.294-.191.392-.253.427l-1.028.594a7 7 0 0 0-.049-.676c-.17-1.424-.765-3.109-1.711-4.747c-.946-1.639-2.107-2.996-3.256-3.856m26.476-.38l-1.028-.594c-.061-.036-.202-.083-.496-.006c-.3.079-.69.27-1.143.61c-.903.675-1.908 1.822-2.76 3.296c-.85 1.474-1.34 2.918-1.474 4.038c-.067.562-.039.995.043 1.294c.081.294.192.392.253.427l1.029.594q.007-.334.049-.677c.17-1.424.765-3.109 1.71-4.747c.947-1.638 2.108-2.996 3.257-3.856q.275-.206.56-.38M24 10a8.98 8.98 0 0 1 6.711 3.003a7.003 7.003 0 0 0-13.422 0A8.98 8.98 0 0 1 24 10m.832 18.236a.93.93 0 1 1-1.859 0a.93.93 0 0 1 1.86 0m0 3.718a.93.93 0 1 1-1.859 0a.93.93 0 0 1 1.86 0m.93-.93a.93.93 0 1 0 0-1.859a.93.93 0 0 0 0 1.86m-2.789-.93a.93.93 0 1 1-1.859 0a.93.93 0 0 1 1.86 0m.93-11.224c-.71 0-1.297.36-1.74.774c-.448.418-.844.977-1.194 1.587a1 1 0 0 0 1.734.996c.301-.524.58-.894.825-1.122c.248-.231.369-.235.375-.235s.127.004.375.235c.244.228.523.598.825 1.122a1 1 0 0 0 1.734-.996c-.35-.61-.747-1.17-1.194-1.587c-.444-.414-1.03-.773-1.74-.773m4.647 11.225a4.647 4.647 0 1 1-9.295 0a4.647 4.647 0 0 1 9.295 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRespiratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespirator24pxIcon],svg[healthicons-respirator-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m18.391 13.74l.986-4.438C20.21 5.555 17.36 2 13.52 2h-3.04C6.64 2 3.79 5.555 4.623 9.302l.986 4.438c.29.197.542.46.729.785l2.534 4.39A2.4 2.4 0 0 1 9.192 20h5.617c.017-.37.12-.742.319-1.086l2.534-4.389c.187-.324.439-.588.73-.785M13.521 4H10.48a4 4 0 0 0-3.905 4.868l.284 1.277c.276 1.243 1.877 1.598 2.653.59l.903-1.174a2 2 0 0 1 3.17 0l.903 1.173c.776 1.01 2.377.654 2.653-.589l.284-1.277A4 4 0 0 0 13.52 4M9.778 14.488a2.235 2.235 0 0 1 4.442 0l.13 1.18A1.2 1.2 0 0 1 13.16 17h-2.318a1.2 1.2 0 0 1-1.193-1.332z" clip-rule="evenodd"></svg:path><svg:path d="M16.34 19.614a1 1 0 0 0 .366 1.366l1.11.641a1 1 0 0 0 1.367-.366l2.534-4.389a1 1 0 0 0-.366-1.366l-1.11-.641a1 1 0 0 0-1.366.366zm-8.562.325a1 1 0 0 0-.118-.325l-2.535-4.389a1 1 0 0 0-1.366-.366l-1.11.641a1 1 0 0 0-.366 1.366l2.534 4.39a1 1 0 0 0 1.366.365l1.11-.64a1 1 0 0 0 .485-1.042"></svg:path></svg:g>`,
})
export class HealthiconsRespirator24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespiratorNegativeIcon],svg[healthicons-respirator-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRespiratorNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17 19v4.304c.288-.62.593-1.231.912-1.82c.757-1.394 1.621-2.703 2.575-3.678c.936-.958 2.09-1.724 3.416-1.724s2.48.766 3.416 1.724c.953.975 1.818 2.284 2.575 3.679c.392.722.762 1.48 1.106 2.245V19a7 7 0 1 0-14 0m16 0v9.22q.32-.29.64-.529c.573-.428 1.18-.761 1.787-.92c.613-.16 1.29-.155 1.895.195l3.175 1.833l.045.025c.606.35.948.934 1.116 1.544c.167.605.182 1.297.097 2.007c-.17 1.425-.765 3.11-1.71 4.748c-.947 1.638-2.108 2.996-3.257 3.855c-.572.429-1.18.761-1.786.92c-.613.16-1.29.155-1.895-.195l-3.22-1.858c-.606-.35-.948-.934-1.116-1.544a4 4 0 0 1-.126-.705a1 1 0 0 1-.095.005h-9.295q-.048 0-.095-.005q-.034.368-.125.705c-.168.61-.51 1.195-1.116 1.544L14.707 41.7l-.008.004c-.605.35-1.282.354-1.895.195c-.607-.159-1.214-.491-1.787-.92c-1.148-.86-2.31-2.217-3.256-3.855c-.945-1.639-1.54-3.323-1.71-4.748c-.085-.71-.07-1.402.097-2.007c.167-.61.51-1.194 1.115-1.544l3.22-1.859c.606-.35 1.283-.354 1.895-.194c.607.158 1.214.49 1.787.92q.419.313.835.71V15a9 9 0 1 1 18 0zM10.384 29.17q.285.174.561.38c1.149.86 2.31 2.217 3.256 3.856s1.541 3.323 1.711 4.747q.041.343.049.676l1.028-.594c.062-.035.173-.133.253-.427c.083-.299.111-.732.044-1.294c-.134-1.12-.624-2.564-1.475-4.038c-.85-1.473-1.857-2.62-2.76-3.296c-.452-.339-.842-.531-1.142-.61c-.295-.076-.435-.03-.496.006zm26.009-.594l1.028.593q-.285.173-.56.38c-1.15.86-2.31 2.218-3.256 3.856s-1.541 3.323-1.711 4.747a7 7 0 0 0-.05.677l-1.028-.594c-.061-.035-.172-.133-.253-.427c-.082-.299-.11-.732-.043-1.294c.133-1.12.624-2.564 1.475-4.038c.85-1.474 1.856-2.621 2.76-3.296c.452-.34.842-.531 1.142-.61c.294-.077.435-.03.496.006m-5.682-15.573A8.98 8.98 0 0 0 24 10a8.98 8.98 0 0 0-6.711 3.003a7.003 7.003 0 0 1 13.422 0m-6.808 16.162a.93.93 0 1 0 0-1.859a.93.93 0 0 0 0 1.86m0 3.718a.93.93 0 1 0 0-1.859a.93.93 0 0 0 0 1.86m2.788-2.788a.93.93 0 1 1-1.859 0a.93.93 0 0 1 1.86 0m-4.647.93a.93.93 0 1 0 0-1.86a.93.93 0 0 0 0 1.86m.119-11.381c.443-.414 1.03-.773 1.74-.773s1.297.359 1.74.773c.447.418.843.977 1.194 1.587a1 1 0 1 1-1.735.996c-.3-.524-.58-.894-.824-1.122c-.248-.231-.37-.235-.375-.235s-.127.004-.375.235c-.244.228-.524.598-.825 1.122a1 1 0 1 1-1.734-.996c.35-.61.746-1.17 1.194-1.587m1.74 15.098a4.647 4.647 0 1 0 0-9.295a4.647 4.647 0 0 0 0 9.295" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRespiratorNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRespiratorNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespiratorOutlineIcon],svg[healthicons-respirator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24.425 28.066a.921.921 0 1 0 0-1.842a.921.921 0 0 0 0 1.842m.922 2.764a.921.921 0 1 1-1.843 0a.921.921 0 0 1 1.843 0m.921-.921a.921.921 0 1 0 0-1.843a.921.921 0 0 0 0 1.843m-2.764-.922a.921.921 0 1 1-1.843 0a.921.921 0 0 1 1.843 0"></svg:path><svg:path fill-rule="evenodd" d="M24.425 23.382a5.606 5.606 0 1 0 0 11.212a5.606 5.606 0 0 0 0-11.213m-3.606 5.606a3.606 3.606 0 1 1 7.213 0a3.606 3.606 0 0 1-7.213 0" clip-rule="evenodd"></svg:path><svg:path d="M24.425 18.775c-.707 0-1.29.358-1.73.769c-.445.415-.838.97-1.186 1.576a1 1 0 1 0 1.735.996c.298-.52.575-.886.816-1.11c.245-.23.362-.23.365-.23s.121 0 .366.23c.24.224.518.59.816 1.11a1 1 0 0 0 1.734-.996c-.348-.606-.74-1.16-1.185-1.576c-.44-.411-1.024-.769-1.73-.769"></svg:path><svg:path fill-rule="evenodd" d="M24.5 6a8.5 8.5 0 0 1 8.5 8.5v12.988q.116.338.221.66q.404-.38.809-.684c.573-.429 1.184-.765 1.798-.925c.62-.162 1.314-.16 1.938.2l3.19 1.843c.624.36.973.96 1.143 1.578c.169.612.184 1.309.099 2.02c-.17 1.424-.764 3.104-1.706 4.735c-.941 1.63-2.1 2.985-3.248 3.845c-.573.428-1.184.764-1.798.924c-.62.162-1.314.16-1.938-.2l-3.191-1.843c-.623-.36-.973-.959-1.143-1.577a4 4 0 0 1-.126-.706h-9.246q-.034.367-.126.706c-.17.618-.52 1.218-1.142 1.578l-3.192 1.842c-.623.36-1.317.362-1.937.2c-.615-.16-1.226-.495-1.798-.924c-1.15-.86-2.307-2.214-3.249-3.845c-.941-1.63-1.536-3.31-1.705-4.736c-.085-.71-.07-1.407.098-2.02c.17-.617.52-1.217 1.143-1.577l3.19-1.842c.624-.36 1.318-.363 1.938-.2c.615.16 1.226.495 1.799.924q.406.303.808.684q.171-.526.371-1.09V14.5A8.5 8.5 0 0 1 24.5 6m0 6a6.5 6.5 0 0 0-6.5 6.5v3.792q.234-.469.48-.921c.75-1.383 1.607-2.681 2.553-3.648c.929-.95 2.074-1.712 3.392-1.712s2.463.762 3.392 1.712c.946.966 1.804 2.265 2.554 3.648q.325.6.63 1.226V18.5a6.5 6.5 0 0 0-6.5-6.5m-6.514 19.167l.083.142c.796 1.38 1.345 2.795 1.597 4.06l.02-.002a1 1 0 0 1 .133-.009h9.213q.077 0 .152.012c.253-1.266.801-2.681 1.598-4.061q.107-.186.218-.367v-3.116c-.618-1.76-1.438-3.753-2.387-5.501c-.708-1.305-1.463-2.424-2.225-3.204c-.78-.796-1.438-1.11-1.963-1.11s-1.183.314-1.962 1.11c-.763.78-1.518 1.9-2.226 3.204c-.874 1.61-1.638 3.43-2.237 5.081V31q0 .086-.014.167m-6.807-2.172l.906-.523c.037-.022.154-.07.432.002c.285.075.662.26 1.106.591c.884.662 1.874 1.79 2.714 3.244c.839 1.453 1.32 2.875 1.452 3.972c.065.55.037.97-.041 1.252c-.077.278-.177.355-.214.376l-.906.523a7 7 0 0 0-.045-.545c-.17-1.425-.764-3.105-1.705-4.736s-2.1-2.985-3.248-3.845a7 7 0 0 0-.45-.311m3.163 10.757c.038-.022.138-.099.214-.376c.078-.283.107-.702.042-1.253c-.131-1.096-.613-2.518-1.453-3.972c-.839-1.454-1.83-2.582-2.714-3.243c-.443-.332-.82-.517-1.105-.591c-.278-.073-.395-.024-.432-.003c-.038.022-.138.099-.214.376c-.078.284-.107.702-.042 1.253c.131 1.096.613 2.518 1.453 3.972c.839 1.454 1.83 2.582 2.714 3.244c.443.332.82.516 1.105.59c.278.073.395.025.432.003m17.88-1.32l-.905-.523c-.038-.021-.138-.098-.214-.376c-.078-.283-.107-.702-.041-1.252c.13-1.097.612-2.519 1.452-3.972c.839-1.454 1.83-2.582 2.714-3.244c.444-.332.82-.517 1.105-.59c.279-.073.395-.025.433-.003l.905.522a7 7 0 0 0-.45.312c-1.149.86-2.306 2.214-3.248 3.845c-.941 1.63-1.536 3.31-1.706 4.735a7 7 0 0 0-.045.546m7.735-8.118c-.038-.022-.154-.07-.433.003c-.284.074-.661.258-1.105.59c-.884.662-1.875 1.79-2.714 3.244c-.84 1.454-1.321 2.875-1.452 3.972c-.066.55-.037.97.041 1.253c.076.277.177.354.214.376c.038.021.154.07.433-.003c.284-.074.661-.259 1.105-.59c.884-.662 1.875-1.79 2.714-3.244c.84-1.454 1.321-2.876 1.452-3.972c.066-.55.037-.97-.041-1.253c-.076-.278-.176-.354-.214-.376m-9.195-17.561A8.48 8.48 0 0 0 24.5 10a8.48 8.48 0 0 0-6.262 2.753a6.503 6.503 0 0 1 12.525 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRespiratorOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespiratorOutline24pxIcon],svg[healthicons-respirator-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.218 14.59a1.793 1.793 0 0 1 3.563 0l.036.315a1.432 1.432 0 0 1-1.423 1.595h-.789c-.855 0-1.52-.745-1.423-1.595z"></svg:path><svg:path fill-rule="evenodd" d="M13.917 2c3.708 0 6.528 3.33 5.918 6.986l-.273 1.637l-.002.016l-.513 3.079l1.032.596a2 2 0 0 1 .732 2.732l-2.3 3.985a2 2 0 0 1-2.733.732l-1.695-.979a2 2 0 0 1-.761-.784h-2.644a2 2 0 0 1-.761.784l-1.696.979a2 2 0 0 1-2.732-.732l-2.3-3.985a2 2 0 0 1 .731-2.732l1.033-.596l-.789-4.732C3.554 5.33 6.374 2 10.083 2zm0 2h-3.835a4 4 0 0 0-3.945 4.658l.273 1.636c.23 1.376 2.048 1.722 2.766.526l.68-1.134c.971-1.619 3.316-1.619 4.288 0l.68 1.134c.716 1.193 2.527.852 2.764-.515l.274-1.647A4 4 0 0 0 13.918 4m2.031 9.548L13.351 18h-2.703l-2.597-4.453a3.41 3.41 0 0 0 2.782-1.605l.01-.015l.048-.078l.68-1.134a.5.5 0 0 1 .857 0l.68 1.134l.05.078l.009.015a3.41 3.41 0 0 0 2.781 1.605m1.436 1.519l1.695.979l-2.3 3.985l-1.696-.979zm-12.464.979l1.696-.979l2.3 3.985l-1.695.979z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRespiratorOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespirologyIcon],svg[healthicons-respirology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.968 6h.047l-.004 5.935l-.005 7.575c0 .786.282 1.03.417 1.123a.9.9 0 0 0 .35.137l.008.001h-.015l-.004-.001h-.003c-.001 0-.002 0-.044.999l-.043.999h-.01l-.014-.001l-.036-.003l-.102-.011a2.87 2.87 0 0 1-1.518-.708q-.148.134-.306.241a2.9 2.9 0 0 1-1.315.478l-.036.003h-.023l-.002.001l-.043-1l-.043-.998h-.014l-.008.001h.007a.9.9 0 0 0 .35-.137c.136-.093.418-.338.417-1.124l-.005-7.575L22.968 6h.047H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm-7.262 8.24c3.83-.003 3.783 4.837 3.758 7.323l-.003.525c0 .507.023 1.106.048 1.76c.115 3.038.276 7.27-1.539 9.082c-2.247 2.245-6.744 3.37-8.995 1.503s1.483-20.188 6.73-20.193m8.784 7.32c-.029-2.485-.084-7.325 3.746-7.328c5.248-.005 9.012 18.31 6.764 20.181c-2.247 1.871-6.747.753-8.997-1.488c-1.818-1.81-1.664-6.041-1.554-9.079c.024-.654.046-1.253.045-1.76q0-.24-.004-.526" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRespirologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespirologyNegativeIcon],svg[healthicons-respirology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRespirologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.015 6h-.047H39a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h14.015h-.047l.003 5.935l.005 7.575c0 .786-.281 1.03-.417 1.123a.9.9 0 0 1-.35.137l-.008.001h.015l.005-.001h.003l.043.999l.043.999h.01l.015-.001l.036-.003l.102-.011a2.87 2.87 0 0 0 1.518-.708q.147.134.306.241a2.9 2.9 0 0 0 1.315.478l.036.003h.02l.004.001l.043-1l.043-.998h.015l.007.001h-.006a.9.9 0 0 1-.35-.137c-.136-.093-.418-.338-.418-1.124l.005-7.575zm-3.55 15.563c.024-2.486.072-7.326-3.76-7.323c-5.247.005-8.98 18.326-6.73 20.193s6.748.742 8.995-1.503c1.815-1.812 1.654-6.044 1.539-9.081c-.025-.654-.048-1.254-.048-1.761zm8.771-7.331c-3.83.003-3.775 4.843-3.746 7.328q.004.286.004.525c0 .508-.021 1.107-.045 1.761c-.11 3.038-.264 7.27 1.554 9.08c2.25 2.24 6.75 3.358 8.997 1.487c2.248-1.87-1.516-20.186-6.764-20.181" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRespirologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRespirologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRespirologyOutlineIcon],svg[healthicons-respirology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.706 14.24c3.83-.003 3.783 4.837 3.758 7.323l-.003.525c0 .507.023 1.106.048 1.76c.115 3.038.276 7.27-1.539 9.082c-2.247 2.245-6.744 3.37-8.995 1.503s1.483-20.188 6.731-20.193m8.784 7.32c-.028-2.485-.084-7.325 3.747-7.329c5.247-.004 9.011 18.311 6.764 20.182c-2.248 1.871-6.747.753-8.998-1.488c-1.818-1.81-1.664-6.041-1.554-9.079c.024-.654.046-1.253.045-1.761q0-.24-.004-.525"></svg:path><svg:path fill-rule="evenodd" d="M23.015 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm.976 16.045q.147.134.306.241a2.9 2.9 0 0 0 1.315.478h.01l.026.003h.024s.002 0 .043-.998c.042-1 .044-1 .044-1h.003l.004.001h.007l.007.001h-.006a.9.9 0 0 1-.35-.137c-.136-.093-.418-.338-.417-1.124l.005-7.575L25.014 8H39a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h13.97l.001 3.935l.005 7.575c.001.786-.28 1.03-.417 1.123a.9.9 0 0 1-.35.137l-.007.001h.015l.004-.001h.003s.002 0 .043.999c.042.999.044.999.044.999h.01l.014-.001a1 1 0 0 0 .138-.014a2.87 2.87 0 0 0 1.518-.708" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRespirologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRheumatologyIcon],svg[healthicons-rheumatology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27 6h-6v9.682c0 .842-.342 1.649-.948 2.234l-.421.406a2.53 2.53 0 0 0 2.89 4.084l.205-.102a2.85 2.85 0 0 1 2.548 0l.206.102a2.53 2.53 0 0 0 2.89-4.084l-.422-.406A3.1 3.1 0 0 1 27 15.68zm-8 0H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h10v-4.92c-5.263-2.012-9-7.11-9-13.08s3.737-11.068 9-13.08zm2 36h6v-9.682c0-.842.342-1.649.948-2.234l.421-.406a2.53 2.53 0 0 0-2.89-4.085l-.205.103a2.85 2.85 0 0 1-2.548 0l-.206-.103a2.53 2.53 0 0 0-2.89 4.085l.422.406c.606.585.948 1.392.948 2.234zm8 0h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H29v4.92c5.263 2.012 9 7.11 9 13.08s-3.737 11.068-9 13.08z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRheumatologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRheumatologyNegativeIcon],svg[healthicons-rheumatology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRheumatologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21 6h6v9.682c0 .842.342 1.649.948 2.234l.421.406a2.53 2.53 0 0 1-2.89 4.084l-.205-.102a2.85 2.85 0 0 0-2.548 0l-.206.102a2.53 2.53 0 0 1-2.89-4.084l.422-.406A3.1 3.1 0 0 0 21 15.68zM9 6h10v4.92c-5.263 2.012-9 7.11-9 13.08s3.737 11.068 9 13.08V42H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m18 36h-6v-9.682c0-.842-.342-1.649-.948-2.234l-.421-.406a2.53 2.53 0 0 1 2.89-4.085l.205.103a2.85 2.85 0 0 0 2.548 0l.206-.103a2.53 2.53 0 0 1 2.89 4.085l-.422.406A3.1 3.1 0 0 0 27 32.318zm12 0H29v-4.92c5.263-2.012 9-7.11 9-13.08s-3.737-11.068-9-13.08V6h10a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRheumatologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRheumatologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRheumatologyOutlineIcon],svg[healthicons-rheumatology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm32 15c0-5.97-3.737-11.068-9-13.08V8h10a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H29v-2.92c5.263-2.012 9-7.11 9-13.08M27 8v7.682c0 .842.342 1.649.948 2.234l.421.406a2.53 2.53 0 0 1-2.89 4.084l-.205-.102a2.85 2.85 0 0 0-2.548 0l-.206.102a2.53 2.53 0 0 1-2.89-4.084l.422-.406A3.1 3.1 0 0 0 21 15.68V8zm0 32v-7.682c0-.842.342-1.649.948-2.234l.421-.406a2.53 2.53 0 0 0-2.89-4.085l-.205.103a2.85 2.85 0 0 1-2.548 0l-.206-.103a2.53 2.53 0 0 0-2.89 4.085l.422.406c.606.585.948 1.392.948 2.234V40zM10 24c0 5.97 3.737 11.068 9 13.08V40H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10v2.92c-5.263 2.012-9 7.11-9 13.08" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRheumatologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbonIcon],svg[healthicons-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M26.924 4c.967 0 1.866.217 2.667.675c.685.39 1.462.93 2.037 1.734l-.012.01l.01.014l2.332 3.022l.822 1.095a9.414 9.414 0 0 1-.002 11.34l-2.927 3.778l-.092-.118l-4.793-6.06l-1.21-1.563l3.018-3.9c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.178-2.012.518l5.423 7.004l4.792 6.058l7.43 9.563a2 2 0 0 1-.24 2.713l-4.067 3.662A2 2 0 0 1 30 42.775l-6.576-8.385l-9.777-12.402l-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002l.811-1.082l2.337-3.029l.108-.141C18.007 4.85 19.852 4 21.677 4zm-8.207 8.215a6.1 6.1 0 0 1 2.869-.706h5.247c1.132 0 2.243.353 3.177.923a4.03 4.03 0 0 0 .022-4.792l-.1-.13l.015-.011c-.329-.428-.797-.773-1.348-1.088C28.134 6.145 27.585 6 26.924 6h-5.248c-1.243 0-2.466.59-3.167 1.572l-.01.015l-.116.149a3.9 3.9 0 0 0-.774 2.33c0 .811.253 1.68.735 2.367q.184-.116.373-.218" clip-rule="evenodd"></svg:path><svg:path d="m16.568 29.728l4.887 6.204l.005.006l1.16 1.48l-4.255 5.425a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826z"></svg:path></svg:g>`,
})
export class HealthiconsRibbonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbon24pxIcon],svg[healthicons-ribbon-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.801 4.12c.32-1.215 1.411-2.13 2.912-2.12h2.912c1.462 0 2.518.951 2.83 2.112l.852 1.13l.001.002a4.536 4.536 0 0 1 .001 5.476l-.005.007l-1.654 2.125l-2.791-3.493l2.046-2.631a2.85 2.85 0 0 0-1.33-.345h-2.914c-.486 0-.968.118-1.372.347l3.008 3.867l2.46 3.096L19 19.128L15.796 22l-3.862-4.9v-.002L6.921 10.77l-.005-.006A4.536 4.536 0 0 1 6.92 5.29zm1.4.754c0-.711.516-1.365 1.505-1.358h2.919c1.046 0 1.568.854 1.384 1.607a4.2 4.2 0 0 0-1.434-.256h-2.914c-.48 0-.97.077-1.438.24a1.3 1.3 0 0 1-.023-.233" clip-rule="evenodd"></svg:path><svg:path d="m8.522 14.902l2.824 3.4l-2.902 3.682L5 19.387z"></svg:path></svg:g>`,
})
export class HealthiconsRibbon24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbonNegativeIcon],svg[healthicons-ribbon-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRibbonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm26.924 4c.967 0 1.866.217 2.667.675c.685.39 1.462.93 2.037 1.734l-.012.01l.01.014l2.332 3.023l.009.01l.813 1.084a9.414 9.414 0 0 1-.002 11.34l-.007.008l-2.604 3.362l-.004-.005l-.01-.013l-.011-.014l-4.782-6.046l-1.289-1.664l2.703-3.491c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.178-2.012.518l5.423 7.004l4.792 6.058l.005.007l7.425 9.556a2 2 0 0 1-.24 2.713l-4.067 3.662A2 2 0 0 1 30 42.775l-6.576-8.385l-.001-.001l-4.703-5.97l-5.067-6.424l-.006-.007l-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002l.811-1.082l.008-.01l2.329-3.019l.108-.141C18.007 4.85 19.852 4 21.677 4zm-8.58 8.433c.974-.623 2.12-.924 3.242-.924h5.247c1.132 0 2.243.353 3.177.923a4.03 4.03 0 0 0 .022-4.792l-.1-.13l.015-.011c-.329-.428-.797-.773-1.348-1.088C28.134 6.145 27.585 6 26.924 6h-5.248c-1.243 0-2.466.59-3.167 1.572l-.01.015l-.012.014l-.104.135a3.9 3.9 0 0 0-.774 2.33c0 .811.253 1.68.735 2.367m3.324 24.58l.635.81l-3.938 5.02a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l5.414-6.926l.112.142l.001.001l4.698 5.963l.005.007zl-4.089 5.214a1 1 0 0 1-1.39.18L11.81 39.09l4.379 3.317a1 1 0 0 0 1.39-.18z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRibbonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRibbonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbonOutlineIcon],svg[healthicons-ribbon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26.924 4c.967 0 1.866.217 2.667.675c.685.39 1.462.93 2.037 1.734l-.012.01l.01.014l2.332 3.022l.822 1.095a9.414 9.414 0 0 1-.002 11.34l-4.508 5.818l6.95 8.944a2 2 0 0 1-.242 2.713l-4.066 3.662A2 2 0 0 1 30 42.775l-5.79-7.383l-5.845 7.451a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l7.314-9.358l-4.504-5.714l-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002l.811-1.082l2.337-3.029l.108-.141C18.008 4.85 19.853 4 21.678 4zm1.675 2.411c.551.315 1.02.66 1.348 1.088l-.015.011l.1.13a4.03 4.03 0 0 1-.022 4.792c-.934-.57-2.045-.923-3.177-.923h-5.247c-1.123 0-2.267.3-3.241.924a4.2 4.2 0 0 1-.735-2.366c0-.815.256-1.632.773-2.331l.115-.15l.01-.014C19.21 6.59 20.434 6 21.677 6h5.248c.66 0 1.21.145 1.675.411m-9.025 7.616l4.6 5.942l4.6-5.942c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.179-2.012.518m9.422 12.06l-3.552-4.49l6.066-7.836a5.95 5.95 0 0 0 1.199-2.638l.475.633a7.415 7.415 0 0 1 .003 8.921zm-9.57 3.232l-7.013 8.973l4.378 3.317l6.146-7.836zM16.91 13.852a6.06 6.06 0 0 1-1.192-2.648l-.479.639l-.003.004a7.414 7.414 0 0 0-.005 8.918l9.766 12.39l6.578 8.386l4.066-3.662l-7.42-9.55l-4.795-6.06z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRibbonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRibbonOutline24pxIcon],svg[healthicons-ribbon-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 3.517c-.84-.007-1.331.584-1.331 1.318q0 .093.014.19a4 4 0 0 1 1.276-.212h2.814c.445 0 .879.084 1.282.229c.152-.746-.379-1.525-1.236-1.525zM10.759 2h2.81c1.194 0 2.067.672 2.481 1.565l1.257 1.669l.001.001a4.54 4.54 0 0 1 .001 5.48l-.005.007l-2.427 3.12L19 19.127L15.796 22l-3.682-4.675l-3.67 4.66L5 19.384l4.354-5.548l-2.432-3.072l-.005-.006a4.54 4.54 0 0 1 .003-5.477l1.26-1.673v.005C8.604 2.674 9.52 1.992 10.76 2M7.652 7.06a3 3 0 0 0 .446 2.768l5.004 6.32l2.881 3.66l.966-.866l-3.36-4.307l-2.464-3.101L7.787 7.24a4 4 0 0 1-.135-.18m1.67-.296l2.774 3.57l2.78-3.576l-.109-.065a2.43 2.43 0 0 0-1.244-.363H10.71c-.448 0-.894.12-1.263.355zm7.254.25q-.065.091-.135.18l-2.738 3.522l.86 1.081l1.564-2.011c.61-.805.76-1.85.449-2.772m-6.912 8.864l-2.532 3.226l1.046.789l2.326-2.954z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRibbonOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRiskAnalysisIcon],svg[healthicons-risk-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.134 10.5a1 1 0 0 1 1.732 0l5.02 8.703a8.935 8.935 0 0 0 7.012 12.157l2.965 5.142a1 1 0 0 1-.867 1.5H5.003a1 1 0 0 1-.866-1.5zm-.385 22.05v-2.5h2.502v2.5zM20 20.045c-.69 0-1.25.56-1.25 1.25v5.5a1.25 1.25 0 0 0 2.502 0v-5.5c0-.69-.56-1.25-1.251-1.25"></svg:path><svg:path d="M27.25 22.465q.003-.41.053-.805A6.935 6.935 0 1 1 40 26.294l4.004 4.004l-1.508 1.509l-3.922-3.922a6.9 6.9 0 0 1-4.39 1.567a6.9 6.9 0 0 1-2.702-.546a6.96 6.96 0 0 1-3.751-3.845a6.9 6.9 0 0 1-.481-2.542zm6.933 4.854a4.8 4.8 0 1 0 0-9.6a4.8 4.8 0 0 0 0 9.6"></svg:path></svg:g>`,
})
export class HealthiconsRiskAnalysisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRiskAnalysis24pxIcon],svg[healthicons-risk-analysis-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.445 4.265a.5.5 0 0 0-.87 0L2.06 19.253a.5.5 0 0 0 .434.747h17.032a.5.5 0 0 0 .435-.747l-2.27-3.995a4.216 4.216 0 0 1-3.83-6.742zM10.25 11.25a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0zm1.5 4.25V17h-1.5v-1.5z"></svg:path><svg:path d="M14.414 9.49A3.2 3.2 0 0 0 14 11.07a3.212 3.212 0 0 0 4.746 2.83l1.955 1.954l1.3-1.3l-1.956-1.955a3.216 3.216 0 0 0-5.631-3.109m4.18 1.58a1.378 1.378 0 1 1-2.756 0a1.378 1.378 0 0 1 2.756 0"></svg:path></svg:g>`,
})
export class HealthiconsRiskAnalysis24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRiskAnalysisOutlineIcon],svg[healthicons-risk-analysis-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m20 13.002l-13.265 23h26.53l-3.203-5.555a8.9 8.9 0 0 0 2.835.913l2.966 5.142a1 1 0 0 1-.867 1.5H5.003a1 1 0 0 1-.866-1.5L19.134 10.5a1 1 0 0 1 1.732 0l5.02 8.703a8.9 8.9 0 0 0-.627 2.916z"></svg:path><svg:path fill-rule="evenodd" d="M31.482 28.907a6.9 6.9 0 0 0 2.701.545a6.9 6.9 0 0 0 4.391-1.567l3.922 3.921l1.508-1.508L40 26.294a6.933 6.933 0 1 0-8.518 2.613m-2.099-6.388a4.8 4.8 0 1 0 9.6 0a4.8 4.8 0 0 0-9.6 0" clip-rule="evenodd"></svg:path><svg:path d="M18.75 30.05h2.5v2.5h-2.5zM20 20.045c-.69 0-1.25.56-1.25 1.25v5.5a1.25 1.25 0 0 0 2.5 0v-5.5c0-.69-.56-1.25-1.25-1.25"></svg:path></svg:g>`,
})
export class HealthiconsRiskAnalysisOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRiskAnalysisOutline24pxIcon],svg[healthicons-risk-analysis-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.06 19.253a.5.5 0 0 0 .434.747h17.032a.5.5 0 0 0 .434-.747l-2.27-3.995a4.24 4.24 0 0 1-2.616-.557l1.874 3.3H5.072L11.01 7.548L13 11.05c.004-.953.324-1.83.86-2.534l-2.415-4.252a.5.5 0 0 0-.87 0z"></svg:path><svg:path fill-rule="evenodd" d="M14.414 9.49a3.216 3.216 0 0 1 5.631 3.109L22 14.554l-1.3 1.3l-1.954-1.955a3.2 3.2 0 0 1-1.609.385A3.21 3.21 0 0 1 14 11.07m3.216 1.378a1.378 1.378 0 1 0 0-2.756a1.378 1.378 0 0 0 0 2.756" clip-rule="evenodd"></svg:path><svg:path d="M14 11.07a3.2 3.2 0 0 1 .414-1.58zM10.25 17v-1.5h1.5V17zm.75-6a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 11 11"></svg:path></svg:g>`,
})
export class HealthiconsRiskAnalysisOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRmnhIcon],svg[healthicons-rmnh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M33.14 13.68a3.84 3.84 0 1 0 0-7.68a3.84 3.84 0 0 0 0 7.68m3.641.933a1.5 1.5 0 0 1 1.471.613l3.472 4.908a1.5 1.5 0 0 1-.068 1.822l-3.472 4.2a1.5 1.5 0 0 1-2.312-1.912l1.173-1.418a2 2 0 0 0-.448-.913a1.944 1.944 0 1 0-1.85-.875l-1.794-.604v-1.202a1 1 0 0 0-2 0v1.92a1 1 0 0 0 .681.948l.728.245l-2.061 1.03a2 2 0 0 0-.667.538l1.802 2.276a1.5 1.5 0 0 1-2.353 1.862l-3.6-4.548a1.5 1.5 0 0 1-.165-1.602l2.364-4.728a2.5 2.5 0 0 1 1.825-1.348z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M28.087 29.134a2.397 2.397 0 0 0 4.569-1.014h.003a4.3 4.3 0 0 0 2.286-.653a2.395 2.395 0 0 0 3.612.537c.763 3.073 1.512 5.314 1.976 6.583c.224.615-.166 1.301-.816 1.38c-3.977.478-8.579.489-12.544-.01a.984.984 0 0 1-.801-1.29c.42-1.286 1.124-3.48 1.715-5.533M28 38.014V40.5a1.5 1.5 0 0 0 2.948.39l.674-2.496a40 40 0 0 1-3.622-.38m7.376.372l.676 2.505A1.5 1.5 0 0 0 39 40.5V38a42 42 0 0 1-3.624.386m-12.523-9.237a1.5 1.5 0 1 0-.706-2.916c-2.86.692-5.018 1.003-7.142.995c-2.127-.008-4.29-.336-7.168-.999a1.5 1.5 0 1 0-.674 2.924c1.706.392 3.223.685 4.668.865v4.334a2 2 0 0 0-.022.127l-.733 5.834a1.5 1.5 0 0 0 2.962.465l1.093-5.794l1.092 5.794a1.5 1.5 0 0 0 2.963-.465l-.734-5.834a2 2 0 0 0-.022-.127v-4.35c1.37-.178 2.812-.463 4.423-.853" clip-rule="evenodd"></svg:path><svg:path d="M18 23a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HealthiconsRmnhIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRmnhNegativeIcon],svg[healthicons-rmnh-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRmnhNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM36.98 9.84a3.84 3.84 0 1 1-7.68 0a3.84 3.84 0 0 1 7.68 0m1.272 5.386a1.5 1.5 0 0 0-1.471-.614l-7.274 1.213a2.5 2.5 0 0 0-1.825 1.348L25.318 21.9a1.5 1.5 0 0 0 .165 1.602l3.6 4.548a1.5 1.5 0 0 0 2.353-1.862l-1.802-2.276c.175-.219.4-.404.667-.538l2.06-1.03l-.726-.245a1 1 0 0 1-.682-.948v-1.92a1 1 0 1 1 2 0v1.202l1.795.604a1.944 1.944 0 1 1 1.85.875a2 2 0 0 1 .447.913l-1.174 1.418a1.5 1.5 0 1 0 2.313 1.912l3.472-4.2a1.5 1.5 0 0 0 .069-1.822zM28.087 29.134a2.397 2.397 0 0 0 4.569-1.014h.003a4.3 4.3 0 0 0 2.286-.653a2.395 2.395 0 0 0 3.612.537c.763 3.073 1.512 5.314 1.976 6.583c.224.615-.166 1.301-.816 1.38c-3.977.478-8.579.489-12.544-.01a.984.984 0 0 1-.801-1.29c.42-1.286 1.124-3.48 1.715-5.533M28 40.5v-2.486c1.275.19 2.464.316 3.622.38l-.674 2.497A1.5 1.5 0 0 1 28 40.5m8.052.39l-.676-2.504A42 42 0 0 0 39 38v2.5a1.5 1.5 0 0 1-2.948.39m-13.2-11.741a1.5 1.5 0 1 0-.705-2.916c-2.86.692-5.018 1.003-7.142.995c-2.127-.008-4.29-.336-7.168-.999a1.5 1.5 0 0 0-.674 2.924c1.706.392 3.223.685 4.668.865v4.334a2 2 0 0 0-.022.127l-.733 5.834a1.5 1.5 0 0 0 2.962.465l1.093-5.795l1.092 5.795a1.5 1.5 0 0 0 2.963-.465l-.734-5.834a2 2 0 0 0-.022-.127v-4.35c1.37-.178 2.812-.464 4.423-.853M15 26a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRmnhNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRmnhNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRmnhOutlineIcon],svg[healthicons-rmnh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M27.5 10.5a4.5 4.5 0 1 1 6.953 3.774l1.436-.24a2.5 2.5 0 0 1 2.572 1.209l3.2 5.5a2.5 2.5 0 0 1-.211 2.822l-2.499 3.113l.021.089c.33 1.372.622 2.81.882 4.087l.015.073l.102.498c.297 1.45.536 2.557.734 3.12c.404 1.144-.263 2.558-1.62 2.727c-3.98.495-8.577.508-12.554-.01c-1.284-.167-1.967-1.474-1.61-2.603l.32-1.006c.433-1.35 1.043-3.255 1.492-4.818l-.929-1.173a2.5 2.5 0 0 1-1.716 1.459a47 47 0 0 1-3.657.747v3.392q.008.047.013.095l.734 5.833a2.5 2.5 0 0 1-4.937.775l-.11-.583l-.11.583a2.5 2.5 0 0 1-4.937-.775l.733-5.833q.006-.048.014-.095v-3.37a52 52 0 0 1-3.892-.763a2.5 2.5 0 0 1 1.122-4.872c1.67.384 3.077.65 4.364.806a4 4 0 1 1 5.126.02c1.288-.15 2.695-.417 4.361-.82a3 3 0 0 1 .28-.051a2.5 2.5 0 0 1 .072-2.078l2.473-4.945a3.5 3.5 0 0 1 2.555-1.887l2.61-.435A4.5 4.5 0 0 1 27.5 10.5M32 8a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.342 19.31a2.5 2.5 0 0 0-.448-.874l-1.189-1.502l2.98-1.49l-2.909-.97a.5.5 0 0 1-.341-.474v-2a.5.5 0 1 1 1 0v1.64l3.616 1.205l.371.193a1 1 0 0 1 .407.394l-.795.99c-.296.37-.47.796-.528 1.233l-.132.159c-.49.587-.833.98-1.134 1.233c-.282.237-.426.264-.515.264zm-3.27 3.024l-.034.076c-.408 1.356-.873 2.808-1.215 3.878l-.311.973l-.003.011v.012c3.785.488 8.187.477 11.989.006a.1.1 0 0 0 .005-.08c-.256-.725-.523-1.996-.807-3.384l-.116-.568l-.002-.01a173 173 0 0 0-.579-2.761a3.28 3.28 0 0 1-2.828-.537a7 7 0 0 1-.645.628c-.481.405-1.067.733-1.801.733h-.124l-.538-.011a2.5 2.5 0 0 1-2.99 1.035m-.046-6.72A2.5 2.5 0 0 1 27.75 22v-2a2.5 2.5 0 0 1 5 0v.198l.263.088a3 3 0 0 1 4.344-2.962l-.626-1.075a.5.5 0 0 0-.514-.242l-7.598 1.266a1.5 1.5 0 0 0-1.095.809l-2.472 4.944a.5.5 0 0 0 .055.534l3.75 4.738a.5.5 0 0 0 .784-.62l-2.286-2.89l.45-.614q.228-.31.536-.56m10.655-3.472a3 3 0 0 1-1.937 2.666q.136.343.186.698l.06.428l-1.396 1.74a.5.5 0 0 0 .78.626l3.2-3.987a.5.5 0 0 0 .042-.564zM36.001 19a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-12.015 7.573a.5.5 0 0 0-.604-.368c-2.906.703-5.149 1.032-7.38 1.023c-2.233-.008-4.478-.354-7.39-1.024a.5.5 0 0 0-.224.974c1.686.389 3.168.673 4.566.848l.877.109v5.323l-.022.103l-.008.043l-.733 5.834a.5.5 0 0 0 .987.155l1.093-5.795h1.965l1.093 5.795a.5.5 0 0 0 .987-.155l-.733-5.834l-.007-.043l-.022-.103v-5.333l.87-.114c1.324-.173 2.73-.45 4.317-.834a.5.5 0 0 0 .368-.604M14 22a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path><svg:path d="M31.844 39.426a36 36 0 0 1-3.344-.275V40.5a1.5 1.5 0 0 0 2.948.39zm3.297-.056l.41 1.52a1.5 1.5 0 0 0 2.949-.39V39a42 42 0 0 1-3.359.37"></svg:path></svg:g>`,
})
export class HealthiconsRmnhOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningIcon],svg[healthicons-running-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-9.04 4.282c-1.247.31-2.098.776-2.785 1.354c-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162c1.704-1.436 3.79-2.248 6.603-2.561c1.176-.13 2.47-.104 3.683.437c1.273.569 2.203 1.588 2.837 2.95c.854 1.833 1.489 2.924 1.997 3.557c.245.303.416.444.513.507c.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367c.361-.16.755-.352 1.237-.587l.115-.056a54 54 0 0 1 1.784-.84a2 2 0 0 1 1.625 3.655a49 49 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644c-.9.398-2.05.83-3.297.679c-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273l3.78 4.918a2 2 0 0 1 .403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433l-2.296-2.988l-.02.037l-.084-.172l-4.242-5.52a2 2 0 0 1-.282-1.934z"></svg:path><svg:path d="m18.432 29.007l-1.472 3.96l-5.8-.46a2 2 0 1 0-.318 3.987l7.308.58a2 2 0 0 0 2.033-1.296l1.125-3.028z"></svg:path></svg:g>`,
})
export class HealthiconsRunningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunning24pxIcon],svg[healthicons-running-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.25 6.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m-2.867-.001c-1.495-.21-4.912.397-6.32 4.15a1 1 0 1 0 1.873.702c.584-1.555 1.636-2.316 2.574-2.655l-1.17 3.006q-.029.075-.045.15a1 1 0 0 0 .164.91l3.562 4.607l.231 3.693a1 1 0 1 0 1.996-.124l-.27-4.307l-2.092-2.707l1.373-2.661l.093.134a2 2 0 0 0 2.42.711l2.115-.886a1 1 0 0 0-.773-1.844l-2.115.886l-1.606-2.335a3.04 3.04 0 0 0-1.661-1.36a1.4 1.4 0 0 0-.35-.07"></svg:path><svg:path d="m8.45 16.45l.827-2.452l1.469 1.9l-.402 1.191a2 2 0 0 1-2.032 1.356l-2.88-.197a1 1 0 1 1 .136-1.996z"></svg:path></svg:g>`,
})
export class HealthiconsRunning24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningNegativeIcon],svg[healthicons-running-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRunningNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM23.337 31.652l-4.242-5.521a2 2 0 0 1-.282-1.934l2.647-6.915c-1.247.31-2.098.776-2.785 1.354c-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162c1.704-1.436 3.79-2.248 6.603-2.561c1.176-.13 2.47-.104 3.683.437c1.273.569 2.203 1.588 2.837 2.95c.854 1.833 1.489 2.924 1.997 3.557c.245.303.416.444.513.507c.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367c.361-.16.755-.352 1.237-.587l.115-.056a54 54 0 0 1 1.784-.84a2 2 0 0 1 1.625 3.655a49 49 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644c-.9.398-2.05.83-3.297.679c-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273l3.78 4.918c.225.294.364.644.403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433l-2.296-2.988l-.02.037zm-6.377 1.316l1.472-3.96l2.876 3.742l-1.125 3.028a2 2 0 0 1-2.033 1.297l-7.308-.581a2 2 0 0 1 .317-3.988zM35 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRunningNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRunningNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningOutlineIcon],svg[healthicons-running-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.195 12.025c1.214-.145 2.693-.135 4.122.547c1.506.718 2.524 1.97 3.18 3.476c.678 1.553 1.339 2.318 1.804 2.69c.428.345.792.44 1.12.458c.78.042 1.533-.299 2.459-.746h.001l.34-.163a3 3 0 1 1 2.56 5.426l-.203.1l-.026.014c-.814.408-2.976 1.493-5.452 1.36a7.8 7.8 0 0 1-4.07-1.406l.55-1.133l-.9-.436l-.684.728a9 9 0 0 0 1.035.841l-1.993 4.105l-.375-.489l-.794.608l.9.437l.27-.556c.652.846 1.31 1.681 1.872 2.395l-.784.62l.786-.618l.244.31c.32.408.608.773.826 1.057l.009.011l.02.025c.15.195.423.55.582.828c.236.413.367.862.417 1.034l.002.007c.075.258.147.55.215.842c.137.589.285 1.311.429 2.04c.103.52.204 1.048.301 1.55c.183.948.346 1.792.472 2.365a3 3 0 0 1-5.858 1.296c-.145-.655-.332-1.626-.52-2.597l-.002-.015c-.094-.487-.189-.978-.28-1.437a61 61 0 0 0-.386-1.844a15 15 0 0 0-.087-.356l.113.15l.801-.599l-.828.241l-.132.039l.015.051l-.037.029c-.196-.254-.463-.595-.787-1.007l-.242-.306v-.002c-.603-.765-1.34-1.7-2.063-2.64c-.817-1.061-1.652-2.175-2.279-3.09c-.307-.448-.61-.914-.838-1.334a6 6 0 0 1-.362-.789a3.7 3.7 0 0 1-.174-.674c-.04-.25-.095-.773.083-1.39c.116-.401.681-1.988 1.277-3.641q.103-.114.213-.228q.402-.42.825-.777a7.2 7.2 0 0 1 1.508-.997l-.433-.901l-.94-.341l-1.058 2.923l-.115.32c-.812.887-1.394 1.76-1.854 2.451l-.005.008c-.133.2-.262.395-.382.564a3 3 0 1 1-4.905-3.455c.043-.06.108-.159.207-.31l.007-.01c.473-.716 1.47-2.227 2.816-3.63c1.635-1.702 4.126-3.633 7.467-4.03m2.07 23.256l.032.118l-.068-.09zm1.191-20.904c-.944-.45-1.99-.49-3.025-.366c-2.688.319-4.779 1.885-6.26 3.429c-1.214 1.264-2.128 2.646-2.596 3.356l-.009.013c-.088.134-.17.258-.233.347a1 1 0 1 0 1.635 1.152c.103-.146.218-.319.357-.528l.008-.013c.5-.752 1.226-1.843 2.28-2.943c.837-.871 1.807-1.661 2.911-2.191a1 1 0 0 1 1.373 1.242l-.732 2.02c-.75 2.075-1.555 4.32-1.677 4.739a1.2 1.2 0 0 0-.028.524c.019.12.051.227.081.31c.06.17.147.344.235.506c.18.33.437.73.732 1.161c.594.867 1.402 1.944 2.215 3c.715.931 1.445 1.858 2.049 2.624l.241.307a119 119 0 0 1 1 1.286q.107.145.159.32c.046.157.1.37.16.63c.121.52.258 1.189.4 1.91c.092.464.188.958.281 1.444v.002c.191.988.373 1.933.512 2.558a1 1 0 0 0 1.953-.432a99 99 0 0 1-.481-2.404l-.003-.015a196 196 0 0 0-.3-1.541a65 65 0 0 0-.414-1.974a14 14 0 0 0-.188-.737a3 3 0 0 0-.234-.606a7 7 0 0 0-.45-.625l-.01-.012c-.21-.274-.49-.63-.813-1.04m0 0l-.24-.307h-.002l-.001-.002l-.002-.003c-.603-.766-1.324-1.681-2.032-2.602l-.233-.303a1 1 0 0 1-.106-1.045l2.812-5.793a1 1 0 0 1 1.585-.292q.213.201.432.376c1.118.897 2.293 1.271 3.41 1.331c1.917.103 3.669-.76 4.473-1.164l.008-.004l.239-.118a1 1 0 1 0-.854-1.808l-.325.156l-.072.035c-.84.405-2.024.978-3.363.906c-.723-.039-1.492-.274-2.265-.894c-.785-.63-1.617-1.692-2.385-3.452c-.514-1.18-1.238-2.008-2.208-2.47m-7.848 14.996a1 1 0 0 1 .956.406l2.855 3.968a1 1 0 0 1 .133.912l-.49 1.408a3 3 0 0 1-3.52 1.935l-6.728-1.582a3 3 0 1 1 1.373-5.84l4.096.962l.525-1.508a1 1 0 0 1 .8-.66m.456 3.136l-.188.541a1 1 0 0 1-1.173.645l-4.973-1.169a1 1 0 0 0-.458 1.947L18 36.056a1 1 0 0 0 1.173-.645l.319-.917zM32.001 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 0 0-10a5 5 0 0 0 0 10" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRunningOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningOutline24pxIcon],svg[healthicons-running-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.25 6.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m-2.867-.001c-1.495-.21-4.912.397-6.32 4.15a1 1 0 1 0 1.873.702c.584-1.555 1.636-2.316 2.574-2.655l-1.17 3.006q-.029.075-.045.15a1 1 0 0 0 .164.91l3.562 4.607l.231 3.693a1 1 0 1 0 1.996-.124l-.27-4.307l-2.092-2.707l1.373-2.661l.093.134a2 2 0 0 0 2.42.711l2.115-.886a1 1 0 0 0-.773-1.844l-2.115.886l-1.606-2.335a3.04 3.04 0 0 0-1.661-1.36a1.4 1.4 0 0 0-.35-.07"></svg:path><svg:path d="m8.45 16.45l.827-2.452l1.469 1.9l-.402 1.191a2 2 0 0 1-2.032 1.356l-2.88-.197a1 1 0 1 1 .136-1.996z"></svg:path></svg:g>`,
})
export class HealthiconsRunningOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterIcon],svg[healthicons-running-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 23v19h2V23h1V12H9V6H7v6H6v11zM25 7a1 1 0 0 1-1 1h-5v3h6v13H12V11h5V8h-5a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1m5 4c5.523 0 10 4.477 10 10v3h2v6H28v-6h2v-1a2 2 0 0 0-2-2h-1V11zm5.5 31c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42"></svg:path><svg:path fill-rule="evenodd" d="M9 6H7v6H6v11h1v19h2V23h1V12H9zm26.5 28.988q-.07.09-.137.183c-.81 1.105-1.363 2.26-1.363 3.193c0 .976.743 1.636 1.5 1.636s1.5-.66 1.5-1.636c0-.932-.552-2.087-1.363-3.193zM29.732 22c.17.294.268.636.268 1v1h-2v6h14v-6h-2v-3c0-5.523-4.477-10-10-10h-3v10h1a2 2 0 0 1 1.732 1M29 19.126c1.725.444 3 2.01 3 3.874v3h-2v2h10v-2h-2v-5a8 8 0 0 0-8-8h-1zM14 13v9h9v-9zm11-2v13H12V11h5V8h-5a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2h-5v3zm14 27.364C39 40.372 37.433 42 35.5 42S32 40.372 32 38.364C32 35.182 35.5 32 35.5 32s3.5 3.182 3.5 6.364" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRunningWaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWater24pxIcon],svg[healthicons-running-water-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 2v20h2v-9h2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1h1a1 1 0 0 1 1 1v2h6v-3a6 6 0 0 0-6-6h-2a1 1 0 0 0-1-1h-2V4h2a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2h2v2H7a1 1 0 0 0-1 1H4V2zm10 6H8v4h4z" clip-rule="evenodd"></svg:path><svg:path d="m19 16.537l.73.78l.001.001l.002.002l.005.005l.013.014a4 4 0 0 1 .178.208c.11.133.257.324.406.55c.268.407.665 1.11.665 1.873c0 1.093-.867 2.03-2 2.03s-2-.937-2-2.03c0-.763.397-1.466.665-1.873a7 7 0 0 1 .584-.758l.014-.014l.004-.005l.002-.002z"></svg:path></svg:g>`,
})
export class HealthiconsRunningWater24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterAltIcon],svg[healthicons-running-water-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26 12a2 2 0 1 0-4 0v12h4zm2 8v-8a4 4 0 0 0-8 0v8h-6v-1h4v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5h4v1H7a2 2 0 0 0-2 2v3H4v2h15v3h10v-3h15v-2h-1v-3a2 2 0 0 0-2-2h-4v-1h4v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5h4v1zm-1 6h-6v2h6zm1 12a4 4 0 0 1-8 0c0-3.5 4-7 4-7s4 3.5 4 7M13 17h-1v-2h-2v2H9v-3h7v3h-1v-2h-2zm22 0h1v-2h2v2h1v-3h-7v3h1v-2h2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRunningWaterAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterAltNegativeIcon],svg[healthicons-running-water-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRunningWaterAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0L0-.04l-.04 48l48 .04zM23.992 9.98a2 2 0 0 1 1.998 2.002l-.006 8l-.004 4l-4-.003l.004-4l.006-8a2 2 0 0 1 2.002-1.999m3.998 2.004l-.006 8l6 .004v-1l-2-.001l-2-.002l.002-2l.002-3a2 2 0 0 1 2.002-1.998l7 .006a2 2 0 0 1 1.999 2.001l-.003 3l-.002 2l-2-.001l-2-.002v1l4 .003a2 2 0 0 1 1.998 2.002l-.002 3h1l-.002 2h-1l-14-.012v1l-.003 2l-2-.001l-6-.005l-2-.002l.002-2v-1l-14-.011l-1-.001l.003-2h1l.002-3a2 2 0 0 1 2.002-1.998l4 .004v-1l-2-.002l-2-.002l.002-2l.003-3a2 2 0 0 1 2.001-1.998l7 .006a2 2 0 0 1 1.998 2.001l-.002 3l-.002 2l-2-.001l-2-.002v1l6 .005l.006-8a4 4 0 1 1 8 .007m-1.01 13.999l-.001 1v1l-6-.005v-2h1l4 .004zM23.966 41.98a4 4 0 0 0 4.003-3.996c.003-3.5-3.994-7.004-3.994-7.004s-4.003 3.497-4.006 6.997a4 4 0 0 0 3.997 4.003m-11.98-25.01l1 .001l.002-2l2 .002l-.002 2h1l.002-3l-7-.005l-.002 3h1l.002-2l2 .002zm24 .02h-1l.002-2l-2-.002l-.002 2l-1-.001l.002-3l7 .006l-.002 3l-1-.001l.002-2l-2-.002z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRunningWaterAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRunningWaterAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterAltOutlineIcon],svg[healthicons-running-water-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 40a2 2 0 0 0 2-2c0-1.066-.654-2.37-1.59-3.6q-.208-.27-.41-.512q-.202.241-.41.512C22.655 35.63 22 36.934 22 38a2 2 0 0 0 2 2m0 2a4 4 0 0 0 4-4c0-3.5-4-7-4-7s-4 3.5-4 7a4 4 0 0 0 4 4m-2-30a2 2 0 1 1 4 0v12h-4zm-1 14v2h6v-2zm8 1v3H19v-3H4v-2h1v-3a2 2 0 0 1 2-2h3v-1H7v-5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5h-3v1h5v-8a4 4 0 0 1 8 0v8h5v-1h-3v-5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5h-3v1h3a2 2 0 0 1 2 2v3h1v2zm12-2v-3H28v2h1v1zm-5-5v-1h-1v1zm-17 4v1H7v-3h13v2zm-6-4h-1v-1h1zm3-6H9v3h1v-2h2v2h1v-2h2v2h1zm16 0h7v3h-1v-2h-2v2h-1v-2h-2v2h-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRunningWaterAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterNegativeIcon],svg[healthicons-running-water-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRunningWaterNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm7 42V23H6V12h1V6h2v6h1v11H9v19zM19 8h5a1 1 0 1 0 0-2H12a1 1 0 1 0 0 2h5v3h-5v13h13V11h-6zm9 16v6h14v-6h-2v-3c0-5.523-4.477-10-10-10h-3v10h1a2 2 0 0 1 2 2v1zm7.5 18c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRunningWaterNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRunningWaterNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterOutlineIcon],svg[healthicons-running-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 12V6H6v36h2V22h3v2h14v-3.333h3a2 2 0 0 1 2 2V23h-2v8h14v-8h-2v-1c0-5.523-4.477-10-10-10h-5v-2h-6V8h7a1 1 0 1 0 0-2H10a1 1 0 1 0 0 2h7v2h-6v2zm30 10a8 8 0 0 0-8-8h-5v4.667h3a4 4 0 0 1 4 4V23h6zm2 3H30v4h10zM23 12H13v10h10zm-12 8H8v-6h3z"></svg:path><svg:path d="M35.5 42c1.933 0 3.5-1.628 3.5-3.636C39 35.182 35.5 32 35.5 32S32 35.182 32 38.364C32 40.372 33.567 42 35.5 42m0-2c.757 0 1.5-.66 1.5-1.636c0-.932-.552-2.087-1.363-3.193l-.137-.183q-.07.09-.137.183c-.81 1.105-1.363 2.26-1.363 3.193c0 .976.743 1.636 1.5 1.636"></svg:path></svg:g>`,
})
export class HealthiconsRunningWaterOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWaterOutline24pxIcon],svg[healthicons-running-water-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 2v20h2v-9h2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1h1a1 1 0 0 1 1 1v2h6v-3a6 6 0 0 0-6-6h-2a1 1 0 0 0-1-1h-2V4h2a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2h2v2H7a1 1 0 0 0-1 1H4V2zm4 7H4v2h2zm8 0v2h1a3 3 0 0 1 3 3h2v-1a4 4 0 0 0-4-4zm-2-1H8v4h4z" clip-rule="evenodd"></svg:path><svg:path d="m19 16.536l.73.78l.001.002l.002.002l.005.004l.013.015l.028.031l.014.016l.136.16a7 7 0 0 1 .406.55c.268.407.665 1.111.665 1.874c0 1.093-.867 2.03-2 2.03s-2-.937-2-2.03c0-.763.397-1.467.665-1.873a7 7 0 0 1 .584-.758l.014-.015l.004-.004l.002-.002z"></svg:path></svg:g>`,
})
export class HealthiconsRunningWaterOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRupeeIcon],svg[healthicons-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 12a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4h-3.07a8 8 0 0 1 .818 2H30a2 2 0 1 1 0 4h-2.252a8.01 8.01 0 0 1-6.121 5.834l6.037 9.057a2 2 0 1 1-3.328 2.218l-8-12A2 2 0 0 1 18 22h2c1.48 0 2.773-.804 3.465-2H18a2 2 0 1 1 0-4h5.465A4 4 0 0 0 20 14h-2a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRupeeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRupeeNegativeIcon],svg[healthicons-rupee-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRupeeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 10a2 2 0 1 0 0 4h2c1.48 0 2.773.804 3.465 2H18a2 2 0 1 0 0 4h5.465A4 4 0 0 1 20 22h-2a2 2 0 0 0-1.664 3.11l8 12a2 2 0 1 0 3.328-2.22l-6.037-9.056A8.01 8.01 0 0 0 27.748 20H30a2 2 0 1 0 0-4h-2.252a8 8 0 0 0-.818-2H30a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRupeeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRupeeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRupeeOutlineIcon],svg[healthicons-rupee-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 12a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6a3 3 0 1 1 0 6h-1.512a9.02 9.02 0 0 1-5.276 5.41l5.284 7.926a3 3 0 0 1-4.992 3.328l-8-12A3 3 0 0 1 18 21a3 3 0 0 1 0-6a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h2a5 5 0 0 1 4.33 2.5a1 1 0 0 1-.865 1.5H18a1 1 0 1 0 0 2h5.465a1 1 0 0 1 .866 1.5A5 5 0 0 1 20 23h-2a1 1 0 0 0-.832 1.555l8 12a1 1 0 0 0 1.664-1.11l-6.037-9.056a1 1 0 0 1 .63-1.534a7.01 7.01 0 0 0 5.354-5.104a1 1 0 0 1 .969-.751H30a1 1 0 1 0 0-2h-2.252a1 1 0 0 1-.969-.75a7 7 0 0 0-.715-1.75a1 1 0 0 1 .866-1.5H30a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRupeeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostIcon],svg[healthicons-rural-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M25 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zm9 3h-2v-2h-2v2h-2v2h2v2h2v-2h2z" clip-rule="evenodd"></svg:path><svg:path d="M5 12h18v6H8v19h21V25h8v12h3V18h-1v-6h4v2h-1v23h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1V14H5z"></svg:path><svg:path d="M27 34H10v-2h1v-7h15v7h1z"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPost24pxIcon],svg[healthicons-rural-post-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 19a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M18 5h3v2h-3zM3 5h7v2H3z"></svg:path><svg:path d="M11 12h5v8h-5z"></svg:path><svg:path d="M10 7H4v13h16V7h-2v11H6v-8h4z"></svg:path><svg:path d="M11 6h6v2h-6z"></svg:path><svg:path d="M13 10V4h2v6z"></svg:path></svg:g>`,
})
export class HealthiconsRuralPost24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAltIcon],svg[healthicons-rural-post-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.172 21.102A4.86 4.86 0 0 0 8 26.081V42h4V29h8v13h20V26.077a4.86 4.86 0 0 0 1.823-4.976l-1.113-4.875a1.52 1.52 0 0 0-1.479-1.179H31v-5a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v5H8.764c-.707 0-1.321.49-1.479 1.18zm1.95.445l1.027-4.499h4.627v5.137a2.863 2.863 0 1 1-5.654-.637m7.827-4.499h1.177c.444 1.725 2.01 3 3.874 3h1.911v1.52a3.481 3.481 0 0 1-6.962 0zm9.05-7.5a1 1 0 1 0-2 0v2.5h-2.5a1 1 0 1 0 0 2H23v2.5a1 1 0 1 0 2 0v-2.5h2.5a1 1 0 1 0 0-2H25zm.085 12.02v-1.52H27a4 4 0 0 0 3.874-3h1.172v4.52a3.481 3.481 0 0 1-6.962 0m9.135-4.52h4.627l1.028 4.5a2.863 2.863 0 1 1-5.655.637zm-10.22 12h13v10H24zm11 2h-9v6h9z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRuralPostAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAlt24pxIcon],svg[healthicons-rural-post-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.493 8h5.096c.73 0 1.351.533 1.462 1.254l.315 2.057A2.335 2.335 0 0 1 20 13.8V21h-8v-4.5H9V21H4v-7.198a2.33 2.33 0 0 1-1.366-2.491l.315-2.057A1.48 1.48 0 0 1 4.411 8h1.596a4.25 4.25 0 0 1 8.486 0M13 11.49A4.3 4.3 0 0 0 14.124 10h1.373l-.005 1.714a2.52 2.52 0 0 1-2.288.024L13 11.637zM6.376 10q.058.128.124.252v1.384l-.387.192c-.228.113-.48.172-.735.172h-.436a.335.335 0 0 1-.332-.386L4.858 10zm12.682 2h-.439c-.254 0-.505-.058-.733-.17l-.394-.194l.005-1.636h1.645l.248 1.614a.335.335 0 0 1-.332.386M11 6v1.5h1.5V9H11v1.5H9.5V9H8V7.5h1.5V6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRuralPostAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAltNegativeIcon],svg[healthicons-rural-post-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRuralPostAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6.172 21.102A4.86 4.86 0 0 0 8 26.081V42h4V29h8v13h20V26.077a4.86 4.86 0 0 0 1.824-4.976l-1.114-4.875a1.52 1.52 0 0 0-1.479-1.179H31v-5a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v5H8.764c-.707 0-1.321.49-1.479 1.18zm10.954-4.054h-1.177v4.52a3.481 3.481 0 0 0 6.962 0v-1.52H21a4 4 0 0 1-3.874-3m7.958 3v1.52a3.481 3.481 0 0 0 6.962 0v-4.52h-1.172a4 4 0 0 1-3.874 3zm.916 11h9v6h-9zm-2-2h13v10H24zm-14.85-12l-1.028 4.5a2.863 2.863 0 1 0 5.654.637v-5.137zm29.696 0H34.22v5.137a2.863 2.863 0 1 0 5.655-.637zM24 8.548a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2H25v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2H23v-2.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRuralPostAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRuralPostAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAltOutlineIcon],svg[healthicons-rural-post-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 9.548a1 1 0 1 0-2 0v2.5h-2.5a1 1 0 1 0 0 2H23v2.5a1 1 0 0 0 2 0v-2.5h2.5a1 1 0 0 0 0-2H25z"></svg:path><svg:path fill-rule="evenodd" d="M25 37v-8h11v8zm2-2v-4h7v4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 10.048a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v5h8.388c.706 0 1.318.487 1.477 1.175l1.11 4.822A4.9 4.9 0 0 1 40 26.17v15.877H8V26.171a4.9 4.9 0 0 1-1.976-5.126l1.111-4.822a1.515 1.515 0 0 1 1.477-1.175H17zm10-2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm0 12a4 4 0 0 0 3.874-3h1.267v4.469a3.531 3.531 0 0 1-7.063 0v-1.47zm-9.874-3c.444 1.725 2.01 3 3.874 3h1.922v1.469a3.531 3.531 0 0 1-7.063 0v-4.47zm20.073 10q.411 0 .801-.065v13.065H22V29h-9v11.048h-3V26.983q.39.065.8.065c1.735 0 3.259-.9 4.13-2.26a5.52 5.52 0 0 0 4.46 2.26A5.53 5.53 0 0 0 24 24.575a5.53 5.53 0 0 0 4.61 2.473c1.83 0 3.453-.89 4.46-2.26a4.9 4.9 0 0 0 4.129 2.26m-28.202-10l-1.024 4.446a2.902 2.902 0 1 0 5.73.652v-5.098zm31.03 4.446l-1.025-4.446h-4.705v5.098a2.902 2.902 0 1 0 5.73-.652M20 31h-5v9h5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAltOutline24pxIcon],svg[healthicons-rural-post-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.589 8h-5.096a4.25 4.25 0 0 0-8.486 0H4.411a1.48 1.48 0 0 0-1.462 1.254l-.315 2.057A2.335 2.335 0 0 0 4 13.8V21h5v-4.5h3V21h8v-7.198q.24-.106.45-.262a2.34 2.34 0 0 0 .916-2.23l-.315-2.056A1.48 1.48 0 0 0 19.589 8m-5.465 2A4.3 4.3 0 0 1 13 11.49v.146l.204.102a2.53 2.53 0 0 0 2.288-.024L15.497 10zm-7.624.252A4 4 0 0 1 6.376 10H4.858l-.248 1.614a.335.335 0 0 0 .332.386h.436c.255 0 .507-.059.735-.172l.387-.191zM6 13.947V19h1v-4.5h7V19h4v-5.053a3.7 3.7 0 0 1-.997-.323l-.44-.216a4.53 4.53 0 0 1-4.246.122l-.247-.122a4.54 4.54 0 0 1-4.256.12l-.314-.155l-.5.247a3.7 3.7 0 0 1-1 .327M18.62 12h.438a.335.335 0 0 0 .332-.386L19.142 10h-1.645l-.005 1.636l.394.193c.228.113.479.171.733.171M11 6v1.5h1.5V9H11v1.5H9.5V9H8V7.5h1.5V6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRuralPostAltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostNegativeIcon],svg[healthicons-rural-post-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsRuralPostNegative0)"><svg:path d="M32 12h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm23 11H5v2h1v23H5a1 1 0 1 0 0 2h38a1 1 0 1 0 0-2h-1V13h1v-2h-4v6h1v19h-3V24h-8v12H8V17h15zm3 13H11v7h-1v2h17v-2h-1zm1-15h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRuralPostNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRuralPostNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostOutlineIcon],svg[healthicons-rural-post-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M39 12h4v2h-4z"></svg:path><svg:path fill-rule="evenodd" d="M6 16h17v2H8v19h21V25h8v12h3V18h-1v-2h3v21h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1zm25 21h4V27h-4z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M27 32h-1v-7H11v7h-1v2h17zm-14-5v5h11v-5z" clip-rule="evenodd"></svg:path><svg:path d="M5 12v2h18v-2zm29 3h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></svg:path><svg:path fill-rule="evenodd" d="M37 12a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm-10 0h8v8h-8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostOutline24pxIcon],svg[healthicons-rural-post-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 8v2h2V8h2V6h-2V4h-2v2h-2v2zm5-3h3v2h-3z"></svg:path><svg:path fill-rule="evenodd" d="M3 19a1 1 0 0 1 1-1V8h6v2H6v8h4v-6h6v6h2V8h2v10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m11-1v-4h-2v4z" clip-rule="evenodd"></svg:path><svg:path d="M10 5H3v2h7z"></svg:path></svg:g>`,
})
export class HealthiconsRuralPostOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRxIcon],svg[healthicons-rx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24m12-10a1 1 0 0 1 1-1h6a5 5 0 0 1 .398 9.984L28 27.586l4.293-4.293l1.414 1.414L29.414 29l4.293 4.293l-1.414 1.414L28 30.414l-4.293 4.293l-1.414-1.414L26.586 29l-6-6H18v7h-2zm7 7h-5v-6h5a3 3 0 1 1 0 6" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRxNegativeIcon],svg[healthicons-rx-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRxNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m-7 9a1 1 0 0 0-1 1v16h2v-7h2.586l6 6l-4.293 4.293l1.414 1.414L28 30.414l4.293 4.293l1.414-1.414L29.414 29l4.293-4.293l-1.414-1.414L28 27.586l-4.602-4.602A5 5 0 0 0 23 13zm1 8h5a3 3 0 1 0 0-6h-5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRxNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRxNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsRxOutlineIcon],svg[healthicons-rx-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18S33.941 6 24 6M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24m12 6V14a1 1 0 0 1 1-1h6a5 5 0 0 1 .398 9.984L28 27.586l4.293-4.293l1.414 1.414L29.414 29l4.293 4.293l-1.414 1.414L28 30.414l-4.293 4.293l-1.414-1.414L26.586 29l-6-6H18v7zm2-9h5a3 3 0 1 0 0-6h-5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRxOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSIcon],svg[healthicons-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 14a4 4 0 0 0 0 8h4a8 8 0 1 1 0 16h-4a8 8 0 0 1-7.544-5.334a2 2 0 0 1 3.771-1.332A4 4 0 0 0 22 34h4a4 4 0 0 0 0-8h-4a8 8 0 1 1 0-16h4a8 8 0 0 1 7.544 5.334a2 2 0 0 1-3.771 1.332A4 4 0 0 0 26 14z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSNegativeIcon],svg[healthicons-s-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 18a4 4 0 0 1 4-4h4a4 4 0 0 1 3.773 2.666a2 2 0 0 0 3.771-1.332A8 8 0 0 0 26 10h-4a8 8 0 1 0 0 16h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-3.773-2.666a2 2 0 0 0-3.771 1.332A8 8 0 0 0 22 38h4a8 8 0 1 0 0-16h-4a4 4 0 0 1-4-4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSOutlineIcon],svg[healthicons-s-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 18a9 9 0 0 1 9-9h4a9 9 0 0 1 8.487 6a3 3 0 1 1-5.657 2A3 3 0 0 0 26 15h-4a3 3 0 1 0 0 6h4a9 9 0 1 1 0 18h-4a9 9 0 0 1-8.487-6a3 3 0 1 1 5.657-2A3 3 0 0 0 22 33h4a3 3 0 1 0 0-6h-4a9 9 0 0 1-9-9m9-7a7 7 0 1 0 0 14h4a5 5 0 0 1 0 10h-4a5 5 0 0 1-4.716-3.333a1 1 0 1 0-1.885.666A7 7 0 0 0 22 37h4a7 7 0 1 0 0-14h-4a5 5 0 0 1 0-10h4a5 5 0 0 1 4.716 3.333a1 1 0 1 0 1.885-.666A7 7 0 0 0 26 11z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSadIcon],svg[healthicons-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.743 20.35c-.12.738.381 1.445 1.064 1.883c.714.457 1.732.707 2.93.53a3.8 3.8 0 0 0 2.654-1.666c.504-.763.711-1.692.48-2.381a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39m20.076-.001c.119.738-.382 1.445-1.065 1.883c-.714.457-1.731.707-2.93.53a3.8 3.8 0 0 1-2.653-1.666c-.504-.763-.712-1.692-.48-2.381a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39M33.258 31c-1.72-3.562-5.22-6-9.258-6s-7.538 2.438-9.258 6c-.469.97.316 2 1.394 2h15.728c1.078 0 1.863-1.03 1.394-2"></svg:path><svg:path fill-rule="evenodd" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18m0-2c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSad24pxIcon],svg[healthicons-sad-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path><svg:path d="M9.387 8.252c.188-.268.287-.558.317-.712l1.472.288a3.5 3.5 0 0 1-.561 1.286c-.324.461-.828.932-1.56 1.128c-.731.196-1.404.04-1.914-.197a3.5 3.5 0 0 1-1.13-.833l1.13-.986c.104.119.335.32.632.459c.291.135.595.188.894.108s.535-.278.72-.54m4 .861a3.5 3.5 0 0 1-.562-1.286l1.472-.288c.03.154.13.444.318.712c.184.263.42.461.72.541c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.237-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128M7.25 16.7c0-1.432.36-2.687 1.25-3.7c.89-1.012 2.24-1.7 3.5-1.7s2.61.688 3.5 1.7s1.25 2.268 1.25 3.7z"></svg:path></svg:g>`,
})
export class HealthiconsSad24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSadNegativeIcon],svg[healthicons-sad-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsSadNegative0)" clip-rule="evenodd"><svg:path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8S8 15.163 8 24s7.163 16 16 16m0-15c4.038 0 7.538 2.438 9.258 6c.469.97-.316 2-1.394 2H16.136c-1.078 0-1.863-1.03-1.394-2c1.72-3.562 5.22-6 9.258-6m-9.304-2.762c-.684-.438-1.184-1.145-1.065-1.883a.5.5 0 0 1 .668-.39c1.818.676 3.846.257 5.642-1.448a.5.5 0 0 1 .818.204c.232.688.024 1.618-.48 2.381a3.8 3.8 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53m17.947 0c.682-.438 1.183-1.145 1.064-1.883a.5.5 0 0 0-.668-.39c-1.818.676-3.846.257-5.642-1.448a.5.5 0 0 0-.818.204c-.232.688-.024 1.618.48 2.381a3.8 3.8 0 0 0 2.654 1.666c1.198.177 2.216-.073 2.93-.53"></svg:path><svg:path d="M0 0h48v48H0zm24 42c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSadNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSadNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSadOutlineIcon],svg[healthicons-sad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.807 22.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.381a3.8 3.8 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53m17.947 0c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.256-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.381a3.8 3.8 0 0 0 2.653 1.666c1.199.177 2.216-.073 2.93-.53"></svg:path><svg:path fill-rule="evenodd" d="M33.258 31c-1.72-3.562-5.22-6-9.258-6s-7.538 2.438-9.258 6c-.469.97.316 2 1.394 2h15.728c1.078 0 1.863-1.03 1.394-2M24 27c2.87 0 5.453 1.555 6.978 4H17.022c1.526-2.445 4.108-4 6.978-4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSadOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSadOutline24pxIcon],svg[healthicons-sad-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.704 7.54a2 2 0 0 1-.318.712c-.184.263-.42.461-.72.541c-.298.08-.602.027-.893-.108a2 2 0 0 1-.631-.459l-1.131.986c.229.262.625.598 1.13.833c.51.237 1.183.393 1.914.197c.732-.196 1.236-.667 1.56-1.128c.319-.455.494-.944.561-1.286zm4.593 0c.03.154.13.444.318.712c.184.263.42.461.72.541c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.237-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128a3.5 3.5 0 0 1-.56-1.286z"></svg:path><svg:path fill-rule="evenodd" d="M8.641 12.641A4.75 4.75 0 0 1 16.75 16v.75h-9.5V16c0-1.26.5-2.468 1.391-3.359M12 12.75a3.25 3.25 0 0 0-3.162 2.5h6.324A3.25 3.25 0 0 0 12 12.75" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSadOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressIcon],svg[healthicons-sayana-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25 4l-2 2v5h-2a1 1 0 0 0-1 1v5h-1v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-1v-5a1 1 0 0 0-1-1h-2zm0 7h-2v8h-1v1a1 1 0 0 0 1 1v3h2v-3a1 1 0 0 0 1-1v-1h-1zm-1 25a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-1 2v2h2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSayanaPressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPress24pxIcon],svg[healthicons-sayana-press-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.75 2l-1.5 1v2h-1.5v2H8.5v1.5H7a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9.5a2 2 0 0 0-2-2h-1.5V7h-1.25V5h-1.5zm0 3h-1.5v4h-.5v1a.5.5 0 0 0 .5.5V12h1.5v-1.5a.5.5 0 0 0 .5-.5V9h-.5zm-1.5 15.5V19h1.5v1.5zm3.25-5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSayanaPress24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressNegativeIcon],svg[healthicons-sayana-press-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSayanaPressNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm23 6l2-2v7h-2zm-1 13h1v-8h-2a1 1 0 0 0-1 1v5h-1v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-1v-5a1 1 0 0 0-1-1h-2v8h1v1a1 1 0 0 1-1 1v3h-2v-3a1 1 0 0 1-1-1zm2 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-1 2v2h2v-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSayanaPressNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSayanaPressNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressOutlineIcon],svg[healthicons-sayana-press-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25 4l-2 2v5h-1a1 1 0 0 0-1 1v5h-2v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-2v-5a1 1 0 0 0-1-1h-1zm0 7h-2v8h2zM14 23a2 2 0 0 1 2-2h6a1 1 0 0 0 1 1v3.083a6.002 6.002 0 0 0 0 11.834V39h2v-2.083a6.002 6.002 0 0 0 0-11.834V22a1 1 0 0 0 1-1h6a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2zm14 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSayanaPressOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressOutline24pxIcon],svg[healthicons-sayana-press-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.75 2l-1.5 1v2h-1.5v2H8.5v1.5H7a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9.5a2 2 0 0 0-2-2h-1.5V7h-1.25V5h-1.5zm0 3v4h-1.5V5zm-1.5 6.5v1.095a3.001 3.001 0 0 0 0 5.81V19h1.5v-.594a3.001 3.001 0 0 0 0-5.811V11.5a.5.5 0 0 0 .5-.5v-.5H17V20H7v-9.5h3.75v.5a.5.5 0 0 0 .5.5m-.75 4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSayanaPressOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecureCommunicationIcon],svg[healthicons-secure-communication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 20.5C4 12.492 10.492 6 18.5 6h11C37.508 6 44 12.492 44 20.5S37.508 35 29.5 35H28v7l-2.5-.5C9 37.5 4 28.508 4 20.5M27.333 18H29v9H19v-9h1.667v-2.77c0-1.554 1.492-2.813 3.333-2.813s3.333 1.259 3.333 2.812zM24 14.417c.47 0 .841.161 1.067.352c.222.187.266.357.266.46v2.688h-2.666v-2.688c0-.103.044-.273.266-.46c.226-.19.597-.352 1.067-.352" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSecureCommunicationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecureCommunicationNegativeIcon],svg[healthicons-secure-communication-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM18.5 6C10.492 6 4 12.492 4 20.5s5 17 21.5 21l2.5.5v-7h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6z" clip-rule="evenodd"></svg:path><svg:path d="M19 18h10v9H19z"></svg:path><svg:path fill-rule="evenodd" d="M25.067 14.769c-.226-.19-.597-.352-1.067-.352s-.841.161-1.067.352c-.222.187-.266.357-.266.46v2.688h2.666v-2.688c0-.103-.044-.273-.266-.46M24 12.417c1.841 0 3.333 1.259 3.333 2.812v4.688h-6.666v-4.688c0-1.553 1.492-2.812 3.333-2.812" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSecureCommunicationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecureCommunicationOutlineIcon],svg[healthicons-secure-communication-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 35h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6h-11C10.492 6 4 12.492 4 20.5s5 17 21.5 21l2.5.5zm-2 4.56V33h3.5C36.404 33 42 27.404 42 20.5C42 13.597 36.404 8 29.5 8h-11C11.596 8 6 13.597 6 20.5c0 3.57 1.106 7.334 4.061 10.679c2.967 3.357 7.924 6.435 15.871 8.368z" clip-rule="evenodd"></svg:path><svg:path d="M19 18h10v9H19z"></svg:path><svg:path fill-rule="evenodd" d="M25.067 14.769c-.226-.19-.597-.352-1.067-.352s-.841.161-1.067.352c-.222.187-.266.357-.266.46v2.688h2.666v-2.688c0-.103-.044-.273-.266-.46M24 12.417c1.841 0 3.333 1.259 3.333 2.812v4.688h-6.666v-4.688c0-1.553 1.492-2.812 3.333-2.812" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSecureCommunicationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecurityWorkerIcon],svg[healthicons-security-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403m12 .403a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.314 7.78c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0M24 20c2.721 0 4.624-.314 5.952-.766q.047.376.048.766a6 6 0 1 1-11.952-.766c1.329.452 3.23.766 5.952.766m1.5 10a1 1 0 0 1 1 1v1.382a1 1 0 0 1-.553.894l-.447.224l.577 2.885l4.24-6.36q.436 0 .804.004C36.526 31.262 42 33.776 42 37.558V42H6v-4.442c0-3.782 5.714-6.325 11.118-7.558c-.019.004.184.007.555.01l4.284 6.425l.543-2.935l-.447-.224a1 1 0 0 1-.553-.894V31a1 1 0 0 1 1-1zm9.5 5.333s-1.333-.666-2-1.333c-.667.667-2 1.333-2 1.333S31.698 38 33 38s2-2.667 2-2.667" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSecurityWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecurityWorkerNegativeIcon],svg[healthicons-security-worker-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSecurityWorkerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17.118 30c-.019.004.184.007.555.01l4.284 6.425l.543-2.935l-.447-.224a1 1 0 0 1-.553-.894V31a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.382a1 1 0 0 1-.553.894l-.447.224l.577 2.885l4.24-6.36q.436 0 .804.004C36.526 31.262 42 33.776 42 37.558V42H6v-4.442c0-3.782 5.714-6.325 11.118-7.558M33 34c.667.667 2 1.333 2 1.333S34.302 38 33 38s-2-2.667-2-2.667s1.333-.666 2-1.333m-1.186-15.72c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0M24.096 20c2.67-.007 4.543-.32 5.856-.766q.047.376.048.766a6 6 0 1 1-11.952-.766c1.313.447 3.186.759 5.856.766zM13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403m12 .403a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSecurityWorkerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSecurityWorkerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecurityWorkerOutlineIcon],svg[healthicons-security-worker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill-rule="evenodd" d="m23.816 6.017l-.008.002l-.023.004l-.083.016l-.31.062c-.266.054-.645.134-1.098.237c-.905.206-2.12.507-3.34.884c-1.208.373-2.473.837-3.454 1.38c-.488.27-.956.587-1.313.96c-.355.369-.687.886-.687 1.535c0 1.745.49 3.023 1.008 3.88c.255.422.514.737.718.953q.013.173.053.384c.101.526.354 1.196.934 1.847a8 8 0 1 0 15.575 0c.579-.651.832-1.32.933-1.847q.04-.21.053-.384a5.6 5.6 0 0 0 .718-.953c.519-.857 1.008-2.135 1.008-3.88c0-.649-.332-1.166-.687-1.535c-.357-.373-.825-.69-1.313-.96c-.981-.543-2.246-1.007-3.455-1.38a47 47 0 0 0-3.339-.884a51 51 0 0 0-1.408-.3l-.083-.015l-.023-.004l-.008-.002L24 5.983zM24 7l.184-.983zm-.184-.983L24 7zM24 18.5c2.207 0 3.689-.286 4.68-.658c.839-.315 1.328-.691 1.61-1.008q.153-.173.248-.334H17.462q.095.162.247.334c.284.317.772.693 1.61 1.008c.992.372 2.474.658 4.681.658m7.372-4H16.628a3.7 3.7 0 0 1-.409-.558c-.343-.567-.715-1.484-.719-2.824a.7.7 0 0 1 .13-.172c.162-.169.436-.372.839-.594c.8-.443 1.91-.859 3.076-1.22a45 45 0 0 1 3.192-.843A49 49 0 0 1 24 8.019l.208.041c.254.052.618.13 1.055.229c.876.199 2.037.487 3.192.844c1.166.36 2.276.776 3.076 1.219c.403.222.677.425.84.594c.09.095.12.151.129.172c-.004 1.34-.376 2.257-.72 2.824a3.7 3.7 0 0 1-.408.558M18 20q0-.27.023-.534c1.338.627 3.254 1.034 5.977 1.034c2.345 0 4.089-.3 5.382-.785q.315-.117.595-.25Q30 19.73 30 20a6 6 0 0 1-12 0m-2.503-8.873v-.003z" clip-rule="evenodd"></svg:path><svg:path d="M33 34c.667.667 2 1.333 2 1.333S34.302 38 33 38s-2-2.667-2-2.667s1.333-.666 2-1.333"></svg:path><svg:path fill-rule="evenodd" d="M20.5 31a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.382a2 2 0 0 1-.873 1.652l.113.566l3.432-4.167a1 1 0 0 1 .974-.344c2.564.532 5.187 1.338 7.195 2.444C40.283 33.603 42 35.156 42 37.298V41a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.702c0-2.13 1.75-3.673 3.692-4.734c2.016-1.103 4.64-1.915 7.173-2.454a1 1 0 0 1 .98.343l3.43 4.166l.108-.578a2 2 0 0 1-.883-1.66zm4.02 2.696l.579 2.897L24 37.927l-1.064-1.292l.547-2.953a1 1 0 0 0-.536-1.077l-.447-.223V31h3v1.382l-.447.224a1 1 0 0 0-.534 1.09M24.883 40l6.444-7.825c2.26.506 4.427 1.217 6.048 2.11C39.204 35.292 40 36.333 40 37.298V40zm-8.194-7.803L23.116 40H8v-2.702c0-.934.8-1.967 2.651-2.98c1.633-.893 3.804-1.608 6.04-2.121" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSecurityWorkerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSexualReproductiveHealthIcon],svg[healthicons-sexual-reproductive-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 1 1 1.977-.304a9 9 0 1 1-5.622-7.014a1 1 0 1 1-.727 1.863"></svg:path><svg:path d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0"></svg:path><svg:path d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m17.902-18.737a7 7 0 0 0-8.853 7.562a1 1 0 1 1-1.986.236a9 9 0 1 1 5.375 7.204a1 1 0 0 1 .791-1.837a7 7 0 1 0 4.673-13.165"></svg:path><svg:path d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974l-3.974.05a1 1 0 1 1-.026-2l6.026-.076l-.076 6.026a1 1 0 0 1-1.013.987"></svg:path></svg:g>`,
})
export class HealthiconsSexualReproductiveHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSexualReproductiveHealthNegativeIcon],svg[healthicons-sexual-reproductive-health-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSexualReproductiveHealthNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 0 1 1.977-.304A9 9 0 0 1 16 30.944V33h2a1 1 0 1 1 0 2h-2v4a1 1 0 1 1-2 0v-4h-2a1 1 0 1 1 0-2h2v-2q0-.028.002-.055a9 9 0 0 1-6.024-3.316a9 9 0 0 1 10.295-14.013a1 1 0 1 1-.727 1.863m6.86.018a7 7 0 1 1-.177 12.93a1 1 0 1 0-.791 1.837a9 9 0 0 0 11.018-13.306l5.513-5.514l-.032 2.542a1 1 0 1 0 2 .026l.076-6.026l-6.026.076a1 1 0 1 0 .026 2l2.542-.032l-5.401 5.401a9 9 0 0 0-13.89 1.967a9 9 0 0 0-1.201 5.662a1 1 0 0 0 1.986-.236a7 7 0 0 1 4.357-7.327" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSexualReproductiveHealthNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSexualReproductiveHealthNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSexualReproductiveHealthOutlineIcon],svg[healthicons-sexual-reproductive-health-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 1 1 1.977-.304a9 9 0 1 1-5.622-7.014a1 1 0 1 1-.727 1.863"></svg:path><svg:path d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0"></svg:path><svg:path d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m17.902-18.737a7 7 0 0 0-8.853 7.562a1 1 0 1 1-1.986.236a9 9 0 1 1 5.375 7.204a1 1 0 0 1 .791-1.837a7 7 0 1 0 4.673-13.165"></svg:path><svg:path d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974l-3.974.05a1 1 0 1 1-.026-2l6.026-.076l-.076 6.026a1 1 0 0 1-1.013.987"></svg:path></svg:g>`,
})
export class HealthiconsSexualReproductiveHealthOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSimpleLogoIcon],svg[healthicons-simple-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.089 29.344c0 8.033 6.472 14.546 14.455 14.546C32.528 43.89 39 37.377 39 29.344C39 18.435 24.544 3.89 24.544 3.89S10.09 18.435 10.09 29.344m20.286 4.114a1.755 1.755 0 0 1 2.471-.325a1.78 1.78 0 0 1 .323 2.486l-.242.318c-4.233 5.537-12.532 5.537-16.765 0l-.242-.318a1.78 1.78 0 0 1 .322-2.486a1.755 1.755 0 0 1 2.472.325l.242.318c2.822 3.691 8.355 3.691 11.177 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSimpleLogoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSimpleLogoNegativeIcon],svg[healthicons-simple-logo-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSimpleLogoNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.544 44c-7.983 0-14.455-6.512-14.455-14.545C10.089 18.545 24.544 4 24.544 4S39 18.546 39 29.455C39 37.488 32.528 44 24.544 44m8.302-10.756a1.755 1.755 0 0 0-2.47.325l-.244.317c-2.821 3.692-8.354 3.692-11.176 0l-.243-.317a1.755 1.755 0 0 0-2.47-.325a1.78 1.78 0 0 0-.324 2.486l.243.317c4.233 5.538 12.532 5.538 16.764 0l.243-.317a1.78 1.78 0 0 0-.323-2.486" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSimpleLogoNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSimpleLogoNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSimpleLogoOutlineIcon],svg[healthicons-simple-logo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M25.917 5.456C29.525 9.407 39 20.623 39 29.455C39 37.488 32.528 44 24.544 44S10.09 37.488 10.09 29.455c0-8.832 9.475-20.048 13.083-23.999C24.02 4.527 24.544 4 24.544 4s.524.527 1.373 1.456M24.544 6.92q.349.383.76.848a81 81 0 0 1 4.847 6.041c1.763 2.439 3.494 5.168 4.779 7.914C36.224 24.49 37 27.14 37 29.454C37 36.395 31.412 42 24.544 42S12.09 36.395 12.09 29.455c0-2.316.776-4.966 2.07-7.733c1.284-2.746 3.016-5.475 4.778-7.914a81 81 0 0 1 5.607-6.889"></svg:path><svg:path d="M31.426 32.301a1.48 1.48 0 0 0-2.061.266l-.203.26c-2.354 3.025-6.97 3.025-9.324 0l-.202-.26a1.48 1.48 0 0 0-2.062-.266a1.44 1.44 0 0 0-.27 2.036l.203.26c3.531 4.537 10.455 4.537 13.986 0l.202-.26a1.44 1.44 0 0 0-.269-2.036"></svg:path></svg:g>`,
})
export class HealthiconsSimpleLogoOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkeletonIcon],svg[healthicons-skeleton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M16.615 17.348c0 2.035 1.385 2.487 1.847 2.487s.615 1.356.615 2.26c0 .776 1.921.887 3.923.902V24.5h-6.5c-2.892 0-4.268 2.146-4.882 3.923a11.7 11.7 0 0 0-.541 2.447a12 12 0 0 0-.077 1.1V32a1 1 0 0 0 2 0v-.05l.008-.18c.007-.16.023-.391.056-.671a9.7 9.7 0 0 1 .444-2.022c.51-1.474 1.384-2.577 2.992-2.577H23v1.209c-.834.047-1.65.156-2.365.33c-.5.121-.98.282-1.392.495c-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065s.13-.095.244-.153a4.4 4.4 0 0 1 .95-.33a11.3 11.3 0 0 1 1.892-.27v1.997c-.834.047-1.65.156-2.365.33c-.5.121-.98.282-1.392.495c-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065s.13-.095.244-.153a4.4 4.4 0 0 1 .95-.33a11.3 11.3 0 0 1 1.892-.27V36h-4c-1.108 0-1.939.527-2.513 1.24c-.549.68-.876 1.538-1.08 2.32C15 41.122 15 42.723 15 42.996V43a1 1 0 1 0 2 0c0-.241.002-1.63.343-2.935c.17-.656.406-1.204.701-1.57c.27-.335.564-.495.956-.495h10c.392 0 .686.16.956.495c.295.366.53.914.701 1.57c.34 1.305.343 2.694.343 2.935a1 1 0 1 0 2 0v-.004c0-.273 0-1.874-.407-3.436c-.204-.782-.531-1.64-1.08-2.32C30.939 36.527 30.108 36 29 36h-4v-2.287c.692.044 1.344.136 1.892.27c.403.097.722.212.95.33q.168.087.244.152c.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.4 6.4 0 0 0-1.393-.495a13.4 13.4 0 0 0-2.365-.33v-1.996c.692.044 1.344.136 1.892.27c.403.097.722.212.95.33q.168.087.244.152c.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.4 6.4 0 0 0-1.393-.495a13.4 13.4 0 0 0-2.365-.33V26.5h6.5c1.608 0 2.482 1.104 2.992 2.577a9.7 9.7 0 0 1 .444 2.022a10 10 0 0 1 .064.893v.009A1 1 0 0 0 37 32h-1c1 0 1-.002 1-.002v-.028l-.001-.051v-.015l-.009-.233c-.01-.196-.029-.472-.067-.801a11.7 11.7 0 0 0-.54-2.447c-.615-1.776-1.99-3.923-4.883-3.923H25v-1.503c2.002-.015 3.923-.126 3.923-.901c0-.905.577-2.261.616-2.261c.038 0 1.846-.453 1.846-2.487c0-.805.252-1.186.558-1.646C32.41 15 33 14.112 33 11.243c0-9.657-18-9.657-18 0c0 2.87.59 3.757 1.057 4.46c.306.46.558.84.558 1.645m2.08.498l-.01-.021c-.023-.054-.07-.198-.07-.477c0-1.484-.657-2.43-.968-2.877q-.078-.112-.12-.181c-.174-.292-.527-.931-.527-3.047c0-1.701.756-2.933 1.976-3.806C20.256 6.522 22.074 6 24 6s3.745.522 5.024 1.437C30.244 8.31 31 9.542 31 11.243c0 2.116-.353 2.755-.526 3.047q-.043.07-.121.18c-.31.447-.968 1.394-.968 2.878c0 .2-.042.293-.06.327a.4.4 0 0 1-.103.12a.7.7 0 0 1-.16.096l-.006.003a2 2 0 0 0-1.042.644a2 2 0 0 0-.301.461a5 5 0 0 0-.13.286a10 10 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096c-1.146 0-2.201-.003-2.99-.087a8 8 0 0 0-.111-.703a4 4 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSkeletonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkeleton24pxIcon],svg[healthicons-skeleton-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.22 7.117a.73.73 0 1 0 .002-1.461a.73.73 0 0 0-.002 1.46m2.779-.729a.73.73 0 1 1-1.461-.001a.73.73 0 0 1 1.46.001"></svg:path><svg:path fill-rule="evenodd" d="M14.376 10.58c-.1.125-.384.428-.864.428h-.293v.283a90 90 0 0 1 2.246.05c.45.02.846.044 1.151.072c.152.013.294.03.415.048l.006.001c.077.013.28.045.462.135c1.026.512 1.525 1.365 1.763 2.036a4.3 4.3 0 0 1 .237 1.22l.001.046a.974.974 0 1 1-1.95-.017a2.4 2.4 0 0 0-.154-.68c-.117-.338-.274-.792-.689-.822a74 74 0 0 0-3.488-.157v.703h1.462a.974.974 0 1 1 0 1.946h-1.462v.778h1.462a.974.974 0 1 1 0 1.945h-1.462v.681h2.437c.764 0 1.338.31 1.706.602a3 3 0 0 1 .562.6l.012.02l.005.007l.002.003v.002l.002.002a.97.97 0 0 1-.31 1.34a.976.976 0 0 1-1.334-.294l-.023-.03a1 1 0 0 0-.134-.13a.76.76 0 0 0-.488-.176H8.832a.76.76 0 0 0-.488.176a1 1 0 0 0-.158.16a.976.976 0 0 1-1.333.294a.97.97 0 0 1-.31-1.34v-.002l.002-.002l.002-.003l.005-.008l.012-.018l.035-.05q.041-.061.113-.146c.094-.113.231-.259.414-.405a2.7 2.7 0 0 1 1.706-.602h2.437v-.68H9.806a.974.974 0 1 1 0-1.946h1.463v-.778H9.806a.974.974 0 1 1 0-1.946h1.463v-.713c-1.077.02-2.59.066-3.976.167c-.415.03-.572.484-.688.821l-.028.08a2.4 2.4 0 0 0-.127.626a.974.974 0 0 1-1.95-.008v-.047l.005-.085q.005-.106.026-.274c.03-.221.089-.525.207-.86c.238-.671.737-1.524 1.763-2.036c.181-.09.385-.122.462-.135h.006c.12-.02.263-.036.414-.05c.306-.027.703-.051 1.152-.07c.59-.026 1.707-.046 2.734-.057v-.277h-.194c-.566 0-.85-.417-.917-.526a2 2 0 0 1-.173-.381a7 7 0 0 1-.084-.265a4 4 0 0 0-.095-.286c-.137-.37-.269-.502-.4-.55a1.9 1.9 0 0 1-1.097-.98c-.196-.413-.225-.847-.207-1.2c.03-.585.216-1.215.33-1.602l.048-.161c.165-.582.361-1.11.79-1.633a3.9 3.9 0 0 1 3.397-1.405a3.9 3.9 0 0 1 1.784.636c.522.348.93.76 1.274 1.4c.199.372.297.77.353 1.061c.029.152.049.29.064.398l.012.095l.016.107c-.012-.067.169.598.187 1.144c.019.567-.097 1.57-1.067 2.085c-.134.071-.282.263-.454.674a8 8 0 0 0-.1.252l-.012.03c-.035.09-.078.2-.123.3c-.04.089-.113.239-.225.378m-.004-3.351l.005-.012a.8.8 0 0 0 .031-.293a3 3 0 0 0-.062-.458l-.047-.199l-.005-.017c-.011-.045-.031-.125-.042-.186a6 6 0 0 1-.036-.237l-.006-.05a6 6 0 0 0-.048-.297a2 2 0 0 0-.157-.507a1.75 1.75 0 0 0-.636-.7a1.953 1.953 0 0 0-2.59.384c-.18.22-.286.449-.424.932q-.03.11-.063.217v.002c-.118.405-.226.777-.243 1.111a.8.8 0 0 0 .016.25l.009.004c.97.353 1.372 1.195 1.56 1.7l.066.19h1.259q.035-.091.078-.193c.184-.44.548-1.222 1.335-1.641" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSkeleton24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkeletonNegativeIcon],svg[healthicons-skeleton-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSkeletonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.462 19.835c-.462 0-1.847-.453-1.847-2.487c0-.805-.252-1.186-.558-1.646C15.59 15 15 14.112 15 11.243c0-9.657 18-9.657 18 0c0 2.87-.59 3.757-1.057 4.46c-.306.46-.558.84-.558 1.645c0 2.035-1.808 2.487-1.847 2.487s-.615 1.356-.615 2.26c0 .776-1.921.887-3.923.902V24.5h6.5c2.892 0 4.268 2.146 4.883 3.923c.312.904.465 1.793.54 2.447A12 12 0 0 1 37 31.904v.066l.001.02v.008S37 32 36 32h1a1 1 0 0 1-2 .001v-.009a5 5 0 0 0-.008-.222a10 10 0 0 0-.056-.671a9.7 9.7 0 0 0-.444-2.022c-.51-1.474-1.384-2.577-2.992-2.577H25v1.209c.834.047 1.65.156 2.365.33c.5.121.98.282 1.392.495c.401.206.82.502 1.091.936a1 1 0 0 1-1.696 1.06s-.015-.023-.066-.065a1.4 1.4 0 0 0-.244-.153a4.4 4.4 0 0 0-.95-.33a11.3 11.3 0 0 0-1.892-.27v1.997c.834.047 1.65.156 2.365.33c.5.121.98.282 1.392.495c.401.206.82.502 1.091.936a1 1 0 0 1-1.696 1.06s-.015-.023-.066-.065a1.4 1.4 0 0 0-.244-.153a4.4 4.4 0 0 0-.95-.33a11.3 11.3 0 0 0-1.892-.27V36h4c1.108 0 1.939.527 2.513 1.24c.549.68.876 1.538 1.08 2.32c.407 1.562.407 3.163.407 3.436V43a1 1 0 1 1-2 0c0-.241-.002-1.63-.343-2.935c-.17-.656-.406-1.204-.701-1.57c-.27-.335-.564-.495-.956-.495H19c-.392 0-.686.16-.956.495c-.295.366-.53.914-.701 1.57C17.003 41.37 17 42.759 17 43a1 1 0 1 1-2 0v-.004c0-.273 0-1.874.407-3.436c.204-.782.531-1.64 1.08-2.32C17.061 36.527 17.892 36 19 36h4v-2.287c-.692.044-1.344.136-1.892.27a4.4 4.4 0 0 0-.95.33q-.168.087-.244.152c-.05.042-.066.065-.066.065a1 1 0 1 1-1.696-1.06c.271-.434.69-.73 1.09-.936a6.4 6.4 0 0 1 1.393-.495c.716-.174 1.53-.283 2.365-.33v-1.996c-.692.044-1.344.136-1.892.27a4.4 4.4 0 0 0-.95.33q-.168.087-.244.152c-.05.042-.066.065-.066.065a1 1 0 1 1-1.696-1.06c.271-.434.69-.73 1.09-.936a6.4 6.4 0 0 1 1.393-.495c.716-.174 1.53-.283 2.365-.33V26.5h-6.5c-1.608 0-2.482 1.104-2.992 2.577a9.7 9.7 0 0 0-.444 2.022a10 10 0 0 0-.063.851v.043L13 32a1 1 0 0 1-2 0v-.03l.001-.066q.002-.084.009-.233c.01-.196.029-.472.067-.801c.075-.654.228-1.544.54-2.447c.615-1.776 1.99-3.923 4.883-3.923H23v-1.503c-2.002-.015-3.923-.126-3.923-.901c0-.905-.154-2.261-.616-2.261m.223-2.01l.01.02c1.08.107 1.63.93 1.801 1.237c.225.4.339.828.403 1.128c.048.228.085.466.112.703c.788.084 1.843.087 2.989.087c1.184 0 2.27-.003 3.066-.096a10 10 0 0 1 .516-1.62a5 5 0 0 1 .13-.285a2.1 2.1 0 0 1 .611-.754c.074-.056.333-.252.733-.351l.006-.003a.7.7 0 0 0 .16-.095a.4.4 0 0 0 .103-.12c.018-.035.06-.128.06-.328c0-1.484.657-2.43.968-2.878q.078-.11.12-.18c.174-.292.527-.931.527-3.047c0-1.701-.756-2.933-1.976-3.806C27.744 6.522 25.926 6 24 6s-3.745.522-5.024 1.437C17.756 8.31 17 9.542 17 11.243c0 2.116.353 2.755.526 3.047q.043.07.121.18c.31.447.968 1.394.968 2.878c0 .28.047.423.07.477M23 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSkeletonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSkeletonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkeletonOutlineIcon],svg[healthicons-skeleton-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18 14a3 3 0 0 1 5.939-.606a3.108 3.108 0 1 1-.024 1.319A3.001 3.001 0 0 1 18 14m3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4.856 1.11a1.107 1.107 0 1 1 2.214-.002a1.107 1.107 0 0 1-2.214.001"></svg:path><svg:path d="M16.615 17.348c0 2.035 1.385 2.487 1.847 2.487s.615 1.356.615 2.26c0 .776 1.921.887 3.923.902V24.5h-6.5c-2.892 0-4.268 2.146-4.882 3.923a11.7 11.7 0 0 0-.541 2.447a12 12 0 0 0-.077 1.1V32a1 1 0 0 0 2 0v-.05l.008-.18c.007-.16.023-.391.056-.671a9.7 9.7 0 0 1 .444-2.022c.51-1.474 1.384-2.577 2.992-2.577H23v1.209c-.834.047-1.65.156-2.365.33c-.5.121-.98.282-1.392.495c-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065s.13-.095.244-.153a4.4 4.4 0 0 1 .95-.33a11.3 11.3 0 0 1 1.892-.27v1.997c-.834.047-1.65.156-2.365.33c-.5.121-.98.282-1.392.495c-.401.206-.82.502-1.091.936a1 1 0 0 0 1.696 1.06s.015-.023.066-.065s.13-.095.244-.153a4.4 4.4 0 0 1 .95-.33a11.3 11.3 0 0 1 1.892-.27V36h-4c-1.108 0-1.939.527-2.513 1.24c-.549.68-.876 1.538-1.08 2.32C15 41.122 15 42.723 15 42.996V43a1 1 0 1 0 2 0c0-.241.002-1.63.343-2.935c.17-.656.406-1.204.701-1.57c.27-.335.564-.495.956-.495h10c.392 0 .686.16.956.495c.295.366.53.914.701 1.57c.34 1.305.343 2.694.343 2.935a1 1 0 1 0 2 0v-.004c0-.273 0-1.874-.407-3.436c-.204-.782-.531-1.64-1.08-2.32C30.939 36.527 30.108 36 29 36h-4v-2.287c.692.044 1.344.136 1.892.27c.403.097.722.212.95.33q.168.087.244.152c.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.4 6.4 0 0 0-1.393-.495a13.4 13.4 0 0 0-2.365-.33v-1.996c.692.044 1.344.136 1.892.27c.403.097.722.212.95.33q.168.087.244.152c.05.042.066.065.066.065a1 1 0 0 0 1.696-1.06c-.271-.434-.69-.73-1.09-.936a6.4 6.4 0 0 0-1.393-.495a13.4 13.4 0 0 0-2.365-.33V26.5h6.5c1.608 0 2.482 1.104 2.992 2.577a9.7 9.7 0 0 1 .444 2.022a10 10 0 0 1 .064.893v.009A1 1 0 0 0 37 32h-1c1 0 1-.002 1-.002v-.028l-.001-.051v-.015l-.009-.233c-.01-.196-.029-.472-.067-.801a11.7 11.7 0 0 0-.54-2.447c-.615-1.776-1.99-3.923-4.883-3.923H25v-1.503c2.002-.015 3.923-.126 3.923-.901c0-.905.577-2.261.616-2.261c.038 0 1.846-.453 1.846-2.487c0-.805.252-1.186.558-1.646C32.41 15 33 14.112 33 11.243c0-9.657-18-9.657-18 0c0 2.87.59 3.757 1.057 4.46c.306.46.558.84.558 1.645m2.08.498l-.01-.021c-.023-.054-.07-.198-.07-.477c0-1.484-.657-2.43-.968-2.877q-.078-.112-.12-.181c-.174-.292-.527-.931-.527-3.047c0-1.701.756-2.933 1.976-3.806C20.256 6.522 22.074 6 24 6s3.745.522 5.024 1.437C30.244 8.31 31 9.542 31 11.243c0 2.116-.353 2.755-.526 3.047q-.043.07-.121.18c-.31.447-.968 1.394-.968 2.878c0 .2-.042.293-.06.327a.4.4 0 0 1-.103.12a.7.7 0 0 1-.16.096l-.006.003a2 2 0 0 0-1.042.644a2 2 0 0 0-.301.461a5 5 0 0 0-.13.286a10 10 0 0 0-.517 1.619c-.795.093-1.882.096-3.066.096c-1.146 0-2.201-.003-2.99-.087a8 8 0 0 0-.111-.703a4 4 0 0 0-.403-1.128c-.171-.306-.722-1.13-1.802-1.236"></svg:path></svg:g>`,
})
export class HealthiconsSkeletonOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkeletonOutline24pxIcon],svg[healthicons-skeleton-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.22 7.117a.73.73 0 1 0 .002-1.461a.73.73 0 0 0-.002 1.46m2.779-.729a.73.73 0 1 1-1.461-.001a.73.73 0 0 1 1.46.001"></svg:path><svg:path fill-rule="evenodd" d="M14.376 10.58c-.1.125-.384.428-.864.428h-.293v.283a90 90 0 0 1 2.246.05c.45.02.846.044 1.151.072c.152.013.294.03.415.048l.006.001c.077.013.28.045.462.135c1.026.512 1.525 1.365 1.763 2.036a4.3 4.3 0 0 1 .237 1.22l.001.046a.974.974 0 1 1-1.95-.017a2.4 2.4 0 0 0-.154-.68c-.117-.338-.274-.792-.689-.822a74 74 0 0 0-3.488-.157v.703h1.462a.974.974 0 1 1 0 1.946h-1.462v.778h1.462a.974.974 0 1 1 0 1.945h-1.462v.681h2.437c.764 0 1.338.31 1.706.602a3 3 0 0 1 .562.6l.012.02l.005.007l.002.003v.002l.002.002a.97.97 0 0 1-.31 1.34a.976.976 0 0 1-1.334-.294l-.023-.03a1 1 0 0 0-.134-.13a.76.76 0 0 0-.488-.176H8.832a.76.76 0 0 0-.488.176a1 1 0 0 0-.158.16a.976.976 0 0 1-1.333.294a.97.97 0 0 1-.31-1.34v-.002l.002-.002l.002-.003l.005-.008l.012-.018l.035-.05q.041-.061.113-.146c.094-.113.231-.259.414-.405a2.7 2.7 0 0 1 1.706-.602h2.437v-.68H9.806a.974.974 0 1 1 0-1.946h1.463v-.778H9.806a.974.974 0 1 1 0-1.946h1.463v-.713c-1.077.02-2.59.066-3.976.167c-.415.03-.572.484-.688.821l-.028.08a2.4 2.4 0 0 0-.127.626a.974.974 0 0 1-1.95-.008v-.047l.005-.085q.005-.106.026-.274c.03-.221.089-.525.207-.86c.238-.671.737-1.524 1.763-2.036c.181-.09.385-.122.462-.135h.006c.12-.02.263-.036.414-.05c.306-.027.703-.051 1.152-.07c.59-.026 1.707-.046 2.734-.057v-.277h-.194c-.566 0-.85-.417-.917-.526a2 2 0 0 1-.173-.381a7 7 0 0 1-.084-.265a4 4 0 0 0-.095-.286c-.137-.37-.269-.502-.4-.55a1.9 1.9 0 0 1-1.097-.98c-.196-.413-.225-.847-.207-1.2c.03-.585.216-1.215.33-1.602l.048-.161c.165-.582.361-1.11.79-1.633a3.9 3.9 0 0 1 3.397-1.405a3.9 3.9 0 0 1 1.784.636c.522.348.93.76 1.274 1.4c.199.372.297.77.353 1.061c.029.152.049.29.064.398l.012.095l.016.107c-.012-.067.169.598.187 1.144c.019.567-.097 1.57-1.067 2.085c-.134.071-.282.263-.454.674a8 8 0 0 0-.1.252l-.012.03c-.035.09-.078.2-.123.3c-.04.089-.113.239-.225.378m-.004-3.351l.005-.012a.8.8 0 0 0 .031-.293a3 3 0 0 0-.062-.458l-.047-.199l-.005-.017c-.011-.045-.031-.125-.042-.186a6 6 0 0 1-.036-.237l-.006-.05a6 6 0 0 0-.048-.297a2 2 0 0 0-.157-.507a1.75 1.75 0 0 0-.636-.7a1.953 1.953 0 0 0-2.59.384c-.18.22-.286.449-.424.932q-.03.11-.063.217v.002c-.118.405-.226.777-.243 1.111a.8.8 0 0 0 .016.25l.009.004c.97.353 1.372 1.195 1.56 1.7l.066.19h1.259q.035-.091.078-.193c.184-.44.548-1.222 1.335-1.641" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSkeletonOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkinCancerIcon],svg[healthicons-skin-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M30.141 11.114c-.579-.452-.725-.863-.77-1.14V6H19.6v2.279c.832.089 1.505.414 2.013.891c.718.675 1.016 1.57 1.027 2.226a2.63 2.63 0 0 1-1.601 2.475q-.11.226-.24.442a2.64 2.64 0 0 1-1.208 2.7c-.388.229-.79.344-.944.373a2.65 2.65 0 0 1-2.664-1.293a5 5 0 0 1-.468-.185a2.64 2.64 0 0 1-2.82-.868c-.365-.45-.68-1.185-.668-2.024c-1.03.338-2.162.87-3.168 1.686C7.249 16.008 6 18.014 6 20.94v11.076h5.533V20.152a1.1 1.1 0 0 1 0-.347v-.048l.025-.07a1.125 1.125 0 0 1 2.128-.136a.7.7 0 0 1 .085.35v10.82q.2-.06.4-.101c.489-.1 1.266-.177 1.897.205c.819.494 1.226 1.41 1.052 2.297q.053.094.101.19c.82.373 1.422 1.19 1.34 2.193c-.081.994-.8 1.718-1.662 1.983q-.073.105-.153.208c.033.905-.524 1.743-1.378 2.124c-.416.185-.837.165-1.155.1a3 3 0 0 1-.442-.13v2.154h17.381L34.2 42v-9.682q-.201.105-.412.2c-.42.185-.891.34-1.365.406c-.464.065-1.013.055-1.523-.18c-1.261-.578-2.07-1.834-1.846-3.144a6 6 0 0 1-.505-.69c-1.328-.338-2.497-1.471-2.549-2.94c.052-1.47 1.22-2.561 2.549-2.9q.229-.36.505-.69c-.225-1.309.585-2.565 1.846-3.144c.51-.235 1.06-.244 1.523-.18c.474.067.944.221 1.365.407q.22.098.43.209a.5.5 0 0 1 .099-.192a1.125 1.125 0 0 1 2.056.09a.6.6 0 0 1 .094.187v12.258H42V20.94c0-2.925-1.249-4.93-2.859-6.237c-1.573-1.275-3.453-1.858-4.77-2.086c-2.329-.404-3.573-.99-4.23-1.502m-4.14 2.874a1 1 0 1 1-2-.002a1 1 0 0 1 2 .002m-2 2.995a1 1 0 1 1-2-.001a1 1 0 0 1 2 .001M19.25 32.709a1 1 0 1 0 .002-1.999a1 1 0 0 0-.002 1.999m1.5 2.77a1 1 0 1 0 .002-1.998a1 1 0 0 0-.002 1.998m7.108-3.34a.999.999 0 1 1-.366 1.963a.998.998 0 1 1 .366-1.964m-.709-1.656a1 1 0 0 0-1.966-.365a1 1 0 0 0 1.966.365" clip-rule="evenodd"></svg:path><svg:path d="m34.2 22.076l-.027.019c-.03-.044-.148-.174-.39-.348a4.6 4.6 0 0 0-.805-.458a3.2 3.2 0 0 0-.831-.255c-.252-.034-.374 0-.411.016c-.713.327-.793.866-.653 1.177l.285.63l-.49.488c-.334.334-.606.7-.808 1.085l-.247.47l-.528.06c-.87.096-1.282.654-1.295 1.03c.014.377.426.935 1.295 1.032l.528.058l.247.47c.202.386.474.752.809 1.086l.49.488l-.286.63c-.14.31-.06.85.653 1.177c.037.017.16.05.41.015c.242-.034.53-.121.832-.254c.298-.132.58-.296.806-.459c.241-.174.359-.303.389-.347l.027.019zM13.771 37.484l.04-.021l-.003-.005l-.001-.002s.033.045.124.125c.099.087.225.177.36.25c.136.076.25.117.323.132a.3.3 0 0 0 .114-.123a.15.15 0 0 0 .01-.116l-.21-.593l.446-.445a2.5 2.5 0 0 0 .421-.562l.26-.484l.549-.04a.47.47 0 0 0 .28-.113c.062-.056.08-.108.083-.145c.003-.034-.005-.074-.044-.12a.4.4 0 0 0-.23-.123l-.566-.107l-.192-.543a2.2 2.2 0 0 0-.316-.587l-.385-.51l.303-.563a.15.15 0 0 0 .016-.118a.24.24 0 0 0-.1-.125l-.082-.01a1.7 1.7 0 0 0-.399.04a2.6 2.6 0 0 0-.8.3zm.379-24.964c-.07.146-.102.278-.115.39c-.047.399.111.745.214.872c.212.26.557.305.795.165l.5-.294l.503.287c.277.158.576.277.887.351l.55.132l.17.537c.098.304.392.545.704.45a.5.5 0 0 0 .182-.096c.264-.193.371-.5.25-.797l-.215-.52l.336-.454c.19-.256.342-.54.453-.838l.202-.543l.572-.096a.625.625 0 0 0 .502-.636c-.003-.163-.104-.53-.397-.805c-.162-.152-.426-.317-.867-.363a2.5 2.5 0 0 1-.562.571c-.71.546-2.076 1.191-4.665 1.688"></svg:path></svg:g>`,
})
export class HealthiconsSkinCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkinCancerOutlineIcon],svg[healthicons-skin-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.6 9.675V6h2v3.753l-.003.037a3.2 3.2 0 0 1-.247 1.02c.487.176.52.75.535 1.032q.004.07.008.111c.716.334 1.127 1.174.934 1.983s-.924 1.309-1.693 1.198a4.1 4.1 0 0 1-.837.887c.105.813-.366 1.585-1.131 1.79s-1.56-.229-1.875-.985a4.1 4.1 0 0 1-1.168-.35c-.61.48-1.493.414-2.065-.19a1.77 1.77 0 0 1-.434-1.622c-1.067.228-2.407.713-3.504 1.604c-1.183.96-2.12 2.417-2.12 4.694v11.094H6V20.963c0-2.93 1.249-4.94 2.859-6.247c1.573-1.278 3.453-1.862 4.77-2.09c2.929-.508 4.428-1.203 5.185-1.785c.668-.514.765-.941.786-1.166M29.372 6v3.98c.044.277.19.689.77 1.141c.657.514 1.9 1.101 4.229 1.505c1.317.228 3.197.812 4.77 2.09c1.61 1.308 2.86 3.317 2.86 6.246v11.094h-2V20.963c0-2.278-.938-3.734-2.12-4.695c-1.22-.99-2.74-1.479-3.852-1.672c-2.495-.432-4.1-1.103-5.12-1.899c-1.057-.826-1.434-1.753-1.53-2.524l-.007-.062V6z"></svg:path><svg:path d="M34.686 17.333A2.48 2.48 0 0 0 32.2 19.83v.768c-.725-.634-1.886-.794-2.826-.33c-1.015.5-1.42 1.555-.997 2.457a5.2 5.2 0 0 0-.887 1.31c-1.126.139-1.992.966-1.992 1.966s.866 1.828 1.992 1.966c.222.474.522.915.887 1.31c-.424.903-.018 1.957.997 2.458c.94.463 2.101.302 2.826-.332V42h2V19.83c0-.289.216-.497.486-.497c.234 0 .386.044.482.088a.6.6 0 0 1 .332.368v12.267h2V19.737c0-.404-.188-.982-.603-1.463c-.462-.536-1.193-.94-2.211-.94m-23.583.94c.462-.536 1.193-.94 2.211-.94C14.95 17.333 16 18.71 16 20.15v12.07c.335-.25.816-.298 1.21-.087c.47.25.657.778.461 1.229q.254.298.41.655c.52.07.919.483.919.983s-.4.914-.92.983a2.6 2.6 0 0 1-.409.655c.196.451.008.979-.46 1.229A1.15 1.15 0 0 1 16 37.78V42h-2V20.15c0-.536-.346-.817-.686-.817c-.233 0-.386.044-.482.088a.6.6 0 0 0-.332.368v12.267h-2V19.737c0-.404.188-.982.603-1.463M25 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M20.5 32.225a1 1 0 1 1-2 0a1 1 0 0 1 2 0M21 36a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6.858-3.821a1 1 0 1 1-.366 1.966a1 1 0 0 1 .366-1.966m-1.509-2.824a1 1 0 1 1-.366 1.966a1 1 0 0 1 .366-1.966M26 21a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class HealthiconsSkinCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkullIcon],svg[healthicons-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.97 7.557C10.361 9.822 9 12.98 9 16.5c0 3.431.799 5.584 1.606 7.197c.183.367.366.705.531 1.01l.035.063c.177.327.328.608.455.877c.252.531.373.939.373 1.353v4a1 1 0 0 0 1 1h.016c.014.543.04 1.27.089 2.086c.103 1.719.313 3.902.75 5.57a2.6 2.6 0 0 0 1.12 1.536C16.265 42.019 19.778 44 24 44s7.736-1.981 9.025-2.808a2.6 2.6 0 0 0 1.12-1.537c.437-1.667.647-3.85.75-5.569c.05-.816.075-1.543.09-2.086H35a1 1 0 0 0 1-1v-4c0-.414.12-.822.373-1.353c.127-.269.278-.55.455-.877l.034-.064c.166-.304.349-.642.532-1.009C38.201 22.084 39 19.931 39 16.5c0-3.52-1.362-6.678-3.97-8.943C32.434 5.302 28.682 4 24 4s-8.433 1.302-11.03 3.557m20.004 24.785a2.3 2.3 0 0 0-.358.196a1.7 1.7 0 0 0-.711 1.029c-.112.425-.108.896-.06 1.33c.024.213.056.404.086.57l.008.044c.011.065.024.134.033.193c.009.055.028.175.028.296c0 .855-.724 1.611-1.85 2.104c-1.18.516-3.087.896-6.15.896s-4.97-.38-6.15-.896C16.723 37.61 16 36.854 16 36c0-.12.02-.24.028-.296l.033-.193l.008-.044a9 9 0 0 0 .086-.57c.048-.434.052-.905-.06-1.33a1.7 1.7 0 0 0-.711-1.029a2.3 2.3 0 0 0-.358-.196c.015.463.039 1.019.075 1.624c.102 1.699.304 3.716.69 5.18a.6.6 0 0 0 .264.362C17.234 40.265 20.352 42 24 42s6.766-1.736 7.945-2.492a.6.6 0 0 0 .265-.361c.385-1.465.587-3.482.689-5.18c.036-.606.06-1.162.075-1.625m-3.625 3.93C28.53 36.63 26.937 37 24 37s-4.53-.37-5.35-.729c-.378-.165-.55-.305-.625-.381l.013-.074c.032-.176.073-.418.104-.698c.061-.55.088-1.298-.112-2.06c-.207-.784-.656-1.586-1.523-2.174c-.65-.442-1.48-.725-2.507-.834V27c0-.836-.254-1.553-.565-2.21a20 20 0 0 0-.505-.974l-.032-.058a34 34 0 0 1-.504-.955C11.701 21.416 11 19.569 11 16.5c0-2.98 1.138-5.572 3.28-7.432C16.434 7.198 19.682 6 24 6s7.567 1.198 9.72 3.068C35.861 10.928 37 13.52 37 16.5c0 3.069-.701 4.916-1.394 6.303c-.169.336-.337.647-.504.955l-.032.058c-.174.322-.351.65-.505.975c-.31.656-.565 1.373-.565 2.209v3.05c-1.028.109-1.857.392-2.507.834c-.867.588-1.316 1.39-1.523 2.174c-.2.762-.173 1.51-.112 2.06c.03.28.072.522.104.698l.013.074c-.075.076-.247.216-.626.381M19 29c-2.21 0-4-2.239-4-5s1.79-5 4-5s4 2.239 4 5s-1.79 5-4 5m14-5c0 2.761-1.79 5-4 5s-4-2.239-4-5s1.79-5 4-5s4 2.239 4 5m-9 5l-.018.008c-.25.117-2.982 1.44-2.982 3.268c0 .83.58 1.604 1.4 1.711q.095.013.194.013c.639 0 1.113-.372 1.406-.9c.293.528.767.9 1.406.9q.099 0 .195-.013c.82-.107 1.399-.88 1.399-1.711c0-1.907-2.982-3.268-2.982-3.268z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSkullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkull24pxIcon],svg[healthicons-skull-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.5 8.589c-1.174 0-2 1.075-2 2.235s.826 2.235 2 2.235s2-1.075 2-2.235s-.826-2.235-2-2.235m-7 2.235c0-1.16.826-2.235 2-2.235s2 1.075 2 2.235s-.826 2.235-2 2.235s-2-1.075-2-2.235m3.797 5.216c-.46 0-.797-.412-.797-.857q.002-.18.06-.342q.028-.08.067-.155c.363-.702 1.373-1.13 1.373-1.13s1.5.676 1.5 1.627c0 .444-.336.857-.797.857c-.303 0-.533-.167-.68-.409a.027.027 0 0 0-.046 0c-.147.242-.377.409-.68.409"></svg:path><svg:path fill-rule="evenodd" d="M18 16.02a.996.996 0 0 0 .8-.974c0-.743.017-1.604.065-2.325c.024-.363.054-.672.09-.907c.023-.146.042-.225.05-.258l.004-.018c.21-.37.447-.83.637-1.322c.188-.49.354-1.073.354-1.655C20 4.743 16.2 2 12 2S4 4.743 4 8.56c0 .589.202 1.301.408 1.88a11 11 0 0 0 .706 1.591l.001.004c.005.02.019.074.033.18q.036.268.048.718c.012.415.01.884.007 1.389q-.003.351-.003.724c0 .48.344.882.8.974v2.828c0 1.435 1.042 2.704 2.526 2.893c.991.127 2.298.259 3.474.259s2.483-.132 3.474-.259c1.484-.19 2.526-1.458 2.526-2.893zM6 8.56c0-2.33 2.467-4.573 6-4.573s6 2.242 6 4.574c0 .235-.073.558-.222.945a8 8 0 0 1-.521 1.073c-.17.292-.24.676-.279.934c-.049.315-.084.69-.11 1.078a35 35 0 0 0-.061 1.645c-.734.267-1.403.583-1.95 1.09c-.495.458-.837 1.02-1.092 1.707h-3.481c-.194-.653-.473-1.243-.94-1.727c-.552-.573-1.274-.902-2.14-1.12c.002-.46.003-.914-.008-1.31a9 9 0 0 0-.066-.924c-.032-.24-.093-.586-.262-.876a9 9 0 0 1-.574-1.298C6.099 9.232 6 8.79 6 8.561m2 8.237v2.05c0 .49.346.868.782.924c.96.123 2.169.242 3.218.242c1.05 0 2.258-.12 3.218-.242a.91.91 0 0 0 .782-.923v-1.822c-.194.262-.371.64-.533 1.253a1 1 0 0 1-.967.74h-5a1 1 0 0 1-.98-.792c-.157-.76-.322-1.17-.52-1.43" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSkull24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkullNegativeIcon],svg[healthicons-skull-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSkullNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 16.5c0-3.52 1.362-6.678 3.97-8.943C15.566 5.302 19.318 4 24 4s8.433 1.302 11.03 3.557C37.639 9.822 39 12.98 39 16.5c0 3.431-.799 5.584-1.606 7.197c-.183.367-.366.705-.531 1.01l-.035.063c-.177.327-.328.608-.456.877c-.251.531-.372.939-.372 1.353v4a1 1 0 0 1-1 1h-.016c-.014.543-.04 1.27-.089 2.086c-.103 1.719-.313 3.902-.75 5.57a2.6 2.6 0 0 1-1.12 1.536C31.735 42.019 28.222 44 24 44s-7.736-1.981-9.025-2.808a2.6 2.6 0 0 1-1.12-1.537c-.437-1.667-.647-3.85-.75-5.569a61 61 0 0 1-.09-2.086H13a1 1 0 0 1-1-1v-4c0-.414-.12-.822-.373-1.353c-.127-.269-.278-.55-.455-.877l-.035-.064a33 33 0 0 1-.531-1.009C9.799 22.084 9 19.931 9 16.5m23.616 16.038q.15-.102.358-.196a58 58 0 0 1-.075 1.624c-.102 1.699-.304 3.716-.69 5.18a.6.6 0 0 1-.264.362C30.766 40.265 27.648 42 24 42s-6.766-1.736-7.945-2.492a.6.6 0 0 1-.265-.361c-.385-1.465-.587-3.482-.689-5.18a58 58 0 0 1-.075-1.625q.208.093.358.196c.398.271.605.626.711 1.029c.112.425.108.896.06 1.33a9 9 0 0 1-.086.57l-.008.044c-.011.065-.024.134-.033.193A2 2 0 0 0 16 36c0 .855.724 1.611 1.85 2.104c1.18.516 3.087.896 6.15.896s4.97-.38 6.15-.896C31.277 37.61 32 36.854 32 36c0-.12-.02-.24-.028-.296l-.033-.193l-.008-.044a9 9 0 0 1-.086-.57c-.048-.434-.052-.905.06-1.33c.106-.404.313-.758.711-1.029M24 37c2.937 0 4.53-.37 5.35-.729c.378-.165.55-.305.625-.381l-.013-.074a11 11 0 0 1-.104-.698c-.061-.55-.088-1.298.112-2.06c.207-.784.656-1.586 1.523-2.174c.65-.442 1.48-.725 2.507-.834V27c0-.836.254-1.553.565-2.21c.154-.325.33-.652.505-.974l.032-.058c.167-.308.336-.619.504-.955C36.299 21.416 37 19.569 37 16.5c0-2.98-1.138-5.572-3.28-7.432C31.566 7.198 28.318 6 24 6s-7.567 1.198-9.72 3.068C12.139 10.928 11 13.52 11 16.5c0 3.069.701 4.916 1.394 6.303c.168.336.337.646.504.955l.032.058c.174.322.351.65.505.975c.31.656.565 1.373.565 2.209v3.05c1.027.109 1.857.392 2.507.834c.867.588 1.316 1.39 1.523 2.174c.2.762.173 1.51.112 2.06c-.03.28-.072.522-.104.698l-.013.074c.075.076.247.216.626.381c.82.359 2.412.729 5.349.729m-9-13c0 2.761 1.79 5 4 5s4-2.239 4-5s-1.79-5-4-5s-4 2.239-4 5m14 5c2.21 0 4-2.239 4-5s-1.79-5-4-5s-4 2.239-4 5s1.79 5 4 5m-5.018.008L24 29l.018.008S27 30.369 27 32.276c0 .83-.58 1.604-1.4 1.711a2 2 0 0 1-.194.013c-.639 0-1.113-.372-1.406-.9c-.293.528-.767.9-1.406.9q-.099 0-.195-.013c-.82-.107-1.399-.88-1.399-1.711c0-1.827 2.732-3.15 2.982-3.268" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSkullNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSkullNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkullOutlineIcon],svg[healthicons-skull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19 19c1.214 0 2.236.658 2.921 1.572C22.606 21.485 23 22.7 23 24s-.394 2.515-1.079 3.428C21.236 28.342 20.214 29 19 29s-2.236-.658-2.921-1.572C15.394 26.515 15 25.3 15 24s.394-2.515 1.079-3.428C16.764 19.658 17.786 19 19 19m2 5c0-.91-.278-1.694-.679-2.228c-.4-.535-.878-.772-1.321-.772s-.92.237-1.321.772C17.278 22.306 17 23.09 17 24s.278 1.694.679 2.228c.4.535.878.772 1.321.772s.92-.237 1.321-.772C20.722 25.694 21 24.91 21 24m5.079-3.428C26.764 19.658 27.786 19 29 19s2.236.658 2.921 1.572C32.606 21.485 33 22.7 33 24s-.394 2.515-1.079 3.428C31.236 28.342 30.214 29 29 29s-2.236-.658-2.921-1.572C25.394 26.515 25 25.3 25 24s.394-2.515 1.079-3.428m1.6 1.2C27.278 22.306 27 23.09 27 24s.278 1.694.679 2.228c.4.535.878.772 1.321.772s.92-.237 1.321-.772C30.722 25.694 31 24.91 31 24s-.278-1.694-.679-2.228c-.4-.535-.878-.772-1.321-.772s-.92.237-1.321.772" clip-rule="evenodd"></svg:path><svg:path d="m24 29l-.018.008c-.25.117-2.982 1.44-2.982 3.268c0 .83.58 1.604 1.4 1.711q.095.013.194.013c.639 0 1.113-.372 1.406-.9c.293.528.767.9 1.406.9q.099 0 .195-.013c.82-.107 1.399-.88 1.399-1.711c0-1.907-2.982-3.268-2.982-3.268z"></svg:path><svg:path fill-rule="evenodd" d="M12.97 7.557C10.361 9.822 9 12.98 9 16.5c0 3.431.799 5.584 1.606 7.197c.183.367.366.705.531 1.01l.035.063c.177.327.328.608.455.877c.252.531.373.939.373 1.353v4a1 1 0 0 0 1 1h.016c.014.543.04 1.27.089 2.086c.103 1.719.313 3.902.75 5.57a2.6 2.6 0 0 0 1.12 1.536C16.265 42.019 19.778 44 24 44s7.736-1.981 9.025-2.808a2.6 2.6 0 0 0 1.12-1.537c.437-1.667.647-3.85.75-5.569c.05-.816.075-1.543.09-2.086H35a1 1 0 0 0 1-1v-4c0-.414.12-.822.373-1.353c.127-.269.278-.55.455-.877l.034-.064c.166-.304.349-.642.532-1.009C38.201 22.084 39 19.931 39 16.5c0-3.52-1.362-6.678-3.97-8.943C32.434 5.302 28.682 4 24 4s-8.433 1.302-11.03 3.557m19.646 24.981q.15-.102.358-.196a58 58 0 0 1-.075 1.624c-.102 1.699-.304 3.716-.69 5.18a.6.6 0 0 1-.264.362C30.766 40.265 27.648 42 24 42s-6.766-1.736-7.945-2.492a.6.6 0 0 1-.265-.361c-.385-1.465-.587-3.482-.689-5.18a58 58 0 0 1-.075-1.625q.208.093.358.196c.398.271.605.626.711 1.029c.112.425.108.896.06 1.33a9 9 0 0 1-.086.57l-.008.044c-.011.065-.024.134-.033.193A2 2 0 0 0 16 36c0 .855.724 1.611 1.85 2.104c1.18.516 3.087.896 6.15.896s4.97-.38 6.15-.896C31.277 37.61 32 36.854 32 36c0-.12-.02-.241-.028-.296l-.033-.193l-.008-.044a9 9 0 0 1-.086-.57c-.048-.434-.052-.905.06-1.33c.106-.404.313-.758.711-1.029m-3.267 3.733C28.53 36.63 26.937 37 24 37s-4.53-.37-5.35-.729c-.378-.165-.55-.305-.625-.381l.013-.074c.032-.176.073-.418.104-.698c.061-.55.088-1.298-.112-2.06c-.207-.784-.656-1.586-1.523-2.174c-.65-.442-1.48-.725-2.507-.834V27c0-.836-.254-1.553-.565-2.21a20 20 0 0 0-.505-.974l-.032-.058a34 34 0 0 1-.504-.955C11.701 21.416 11 19.569 11 16.5c0-2.98 1.138-5.572 3.28-7.432C16.434 7.198 19.682 6 24 6s7.567 1.198 9.72 3.068C35.861 10.928 37 13.52 37 16.5c0 3.069-.701 4.916-1.394 6.303c-.169.336-.337.647-.504.955l-.032.058c-.174.322-.351.65-.505.975c-.31.656-.565 1.373-.565 2.209v3.05c-1.028.109-1.857.392-2.507.834c-.867.588-1.316 1.39-1.523 2.174c-.2.762-.173 1.51-.112 2.06c.03.28.072.522.104.698l.013.074c-.075.076-.247.216-.626.381" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSkullOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSkullOutline24pxIcon],svg[healthicons-skull-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.5 8.589c-1.174 0-2 1.075-2 2.235s.826 2.235 2 2.235s2-1.075 2-2.235s-.826-2.235-2-2.235m-7 2.235c0-1.16.826-2.235 2-2.235s2 1.075 2 2.235s-.826 2.235-2 2.235s-2-1.075-2-2.235m3.797 5.216c-.46 0-.797-.412-.797-.857q.002-.18.06-.342q.028-.08.067-.155c.363-.702 1.373-1.13 1.373-1.13s1.5.676 1.5 1.627c0 .444-.336.857-.797.857c-.303 0-.533-.167-.68-.409a.027.027 0 0 0-.046 0c-.147.242-.377.409-.68.409"></svg:path><svg:path fill-rule="evenodd" d="M18 16.02a.996.996 0 0 0 .8-.974c0-.743.017-1.604.065-2.325c.024-.363.054-.672.09-.907c.023-.146.042-.225.05-.258l.004-.018c.21-.37.447-.83.637-1.322c.188-.49.354-1.073.354-1.655C20 4.743 16.2 2 12 2S4 4.743 4 8.56c0 .589.202 1.301.408 1.88a11 11 0 0 0 .706 1.591l.001.004c.005.02.019.074.033.18q.036.268.048.718c.012.415.01.884.007 1.389q-.003.351-.003.724c0 .48.344.882.8.974v2.828c0 1.435 1.042 2.704 2.526 2.893c.991.127 2.298.259 3.474.259s2.483-.132 3.474-.259c1.484-.19 2.526-1.458 2.526-2.893zM6 8.56c0-2.33 2.467-4.573 6-4.573s6 2.242 6 4.574c0 .235-.073.558-.222.945a8 8 0 0 1-.521 1.073c-.17.292-.24.676-.279.934c-.049.315-.084.69-.11 1.078a35 35 0 0 0-.061 1.645c-.734.267-1.403.583-1.95 1.09c-.495.458-.837 1.02-1.092 1.707h-3.481c-.194-.653-.473-1.243-.94-1.727c-.552-.573-1.274-.902-2.14-1.12c.002-.46.003-.914-.008-1.31a9 9 0 0 0-.066-.924c-.032-.24-.093-.586-.262-.876a9 9 0 0 1-.574-1.298C6.099 9.232 6 8.79 6 8.561m2 8.237v2.05c0 .49.346.868.782.924c.96.123 2.169.242 3.218.242c1.05 0 2.258-.12 3.218-.242a.91.91 0 0 0 .782-.923v-1.822c-.194.262-.371.64-.533 1.253a1 1 0 0 1-.967.74h-5a1 1 0 0 1-.98-.792c-.157-.76-.322-1.17-.52-1.43" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSkullOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSleepyIcon],svg[healthicons-sleepy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 24c0-9.941 8.059-18 18-18v2C15.163 8 8 15.163 8 24s7.163 16 16 16s16-7.163 16-16c0-1.599-.234-3.142-.67-4.599l1.915-.575A18 18 0 0 1 42 24c0 9.941-8.059 18-18 18S6 33.941 6 24"></svg:path><svg:path d="M18.53 13.952a1 1 0 0 0 1 1.732l.936-.541l-.451 3.75a1 1 0 0 0 1.492.986l3.002-1.733a1 1 0 1 0-1-1.732l-1.27.733l.452-3.75a1 1 0 0 0-1.492-.986zm7.287-4.658a1 1 0 0 1 .707-1.225l3.864-1.035a1 1 0 0 1 1.187 1.338l-2.049 5.105l2.415-.647a1 1 0 0 1 .518 1.931l-4.347 1.165a1 1 0 0 1-1.187-1.338l2.049-5.104l-1.932.517a1 1 0 0 1-1.225-.707M36.556 6a1 1 0 1 0 0 2h2.64l-4.044 6.47A1 1 0 0 0 36 16h5a1 1 0 1 0 0-2h-3.196l4.044-6.47A1 1 0 0 0 41 6zM12.888 27.106c.076.743.743 1.297 1.516 1.543c.808.256 1.855.235 2.967-.247a3.8 3.8 0 0 0 2.132-2.295c.29-.868.25-1.82-.152-2.425a.5.5 0 0 0-.843.016c-1.294 2.111-3.144 3.04-5.075 2.86a.5.5 0 0 0-.545.548M32.28 21.91c.306.681.006 1.494-.54 2.094c-.572.626-1.49 1.13-2.693 1.27a3.8 3.8 0 0 1-2.995-.922c-.684-.607-1.125-1.45-1.08-2.176a.5.5 0 0 1 .738-.408c2.176 1.182 4.243 1.061 5.825-.061a.5.5 0 0 1 .745.203m.168 9.945c-2.251-3.084-5.587-4.715-8.707-3.879c-3.12.837-5.194 3.916-5.601 7.713c-.115 1.069.923 1.823 1.961 1.545l11.42-3.06c1.039-.279 1.56-1.45.927-2.319"></svg:path></svg:g>`,
})
export class HealthiconsSleepyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSleepy24pxIcon],svg[healthicons-sleepy-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 2q1.03.002 2 .2v2.052A8 8 0 1 0 19.419 9h2.123A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path d="M8.003 9.705c.007.157-.02.462-.138.768c-.116.3-.299.548-.57.697c-.271.15-.579.17-.894.108a2 2 0 0 1-.722-.294l-.863 1.227c.285.2.75.432 1.296.54c.553.108 1.243.098 1.906-.267c.664-.365 1.04-.943 1.245-1.468A3.5 3.5 0 0 0 9.5 9.633zm3.952.649a3.5 3.5 0 0 1-.853-1.115l1.36-.632c.067.143.232.4.48.617c.241.21.518.346.827.353c.31.006.592-.118.842-.319c.256-.206.432-.457.504-.596l1.333.686c-.16.31-.464.731-.897 1.08c-.44.352-1.055.664-1.812.648c-.758-.015-1.36-.352-1.784-.722M15.25 3a.75.75 0 0 1 .75-.75h3.759c.757 0 1.136.916.6 1.451L17.812 6.25H20a.75.75 0 0 1 0 1.5h-3.759c-.757 0-1.136-.916-.6-1.451l2.548-2.549H16a.75.75 0 0 1-.75-.75M7.767 16.98l.16.733l8.465-1.84l-.16-.732a4.332 4.332 0 0 0-8.465 1.84"></svg:path></svg:g>`,
})
export class HealthiconsSleepy24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSleepyNegativeIcon],svg[healthicons-sleepy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSleepyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 6C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18a18 18 0 0 0-.755-5.174l-1.916.575c.437 1.457.671 3 .671 4.599c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8zm-5.47 7.952a1 1 0 0 0 1 1.732l.936-.541l-.451 3.75a1 1 0 0 0 1.492.986l3.002-1.733a1 1 0 1 0-1-1.732l-1.27.733l.452-3.75a1 1 0 0 0-1.492-.986zm7.287-4.658a1 1 0 0 1 .707-1.225l3.864-1.035a1 1 0 0 1 1.187 1.338l-2.049 5.105l2.415-.647a1 1 0 0 1 .518 1.931l-4.347 1.165a1 1 0 0 1-1.187-1.338l2.049-5.104l-1.932.517a1 1 0 0 1-1.225-.707M36.556 6a1 1 0 1 0 0 2h2.64l-4.044 6.47A1 1 0 0 0 36 16h5a1 1 0 1 0 0-2h-3.196l4.044-6.47A1 1 0 0 0 41 6zm-4.108 25.855c-2.251-3.084-5.587-4.715-8.707-3.879c-3.12.837-5.194 3.916-5.601 7.713c-.115 1.069.923 1.823 1.961 1.545l11.42-3.06c1.039-.279 1.56-1.45.927-2.319m-.168-9.945c.306.681.006 1.494-.54 2.094c-.572.626-1.49 1.13-2.693 1.27a3.8 3.8 0 0 1-2.995-.922c-.684-.607-1.125-1.45-1.08-2.176a.5.5 0 0 1 .738-.408c2.176 1.182 4.243 1.061 5.825-.061a.5.5 0 0 1 .745.203m-19.392 5.196c.076.743.743 1.297 1.516 1.543c.808.256 1.855.235 2.967-.247a3.8 3.8 0 0 0 2.132-2.295c.29-.868.25-1.82-.152-2.425a.5.5 0 0 0-.843.016c-1.294 2.111-3.144 3.04-5.075 2.86a.5.5 0 0 0-.545.548" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSleepyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSleepyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSleepyOutlineIcon],svg[healthicons-sleepy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 6C14.059 6 6 14.059 6 24c0 9.94 8.059 18 18 18s18-8.06 18-18c0-1.799-.264-3.535-.755-5.174l-1.916.575c.437 1.457.671 3 .671 4.599c0 8.836-7.163 16-16 16S8 32.836 8 24S15.163 8 24 8z"></svg:path><svg:path d="M18.164 15.317a1 1 0 0 1 .366-1.366l2.669-1.54a1 1 0 0 1 1.492.985l-.451 3.75l1.27-.733a1 1 0 1 1 1 1.732l-3.003 1.734a1 1 0 0 1-1.492-.986l.451-3.75l-.936.54a1 1 0 0 1-1.366-.366m8.36-7.247a1 1 0 1 0 .518 1.93l1.932-.517l-2.049 5.105a1 1 0 0 0 1.187 1.338l4.347-1.165a1 1 0 1 0-.518-1.932l-2.415.647l2.049-5.104a1 1 0 0 0-1.187-1.338zM35.556 7a1 1 0 0 1 1-1H41a1 1 0 0 1 .848 1.53L37.804 14H41a1 1 0 1 1 0 2h-5a1 1 0 0 1-.848-1.53L39.196 8h-2.64a1 1 0 0 1-1-1M14.404 28.648c-.773-.245-1.44-.8-1.516-1.543a.5.5 0 0 1 .545-.548c1.93.181 3.781-.748 5.075-2.86a.5.5 0 0 1 .843-.015c.402.605.442 1.557.152 2.425a3.8 3.8 0 0 1-2.132 2.295c-1.112.481-2.16.503-2.967.246m17.336-4.645c.546-.599.846-1.412.54-2.094a.5.5 0 0 0-.745-.203c-1.582 1.123-3.65 1.244-5.825.062a.5.5 0 0 0-.738.408c-.045.725.396 1.569 1.08 2.176a3.8 3.8 0 0 0 2.995.922c1.203-.14 2.121-.644 2.692-1.27"></svg:path><svg:path fill-rule="evenodd" d="M32.448 31.855c-2.251-3.085-5.587-4.715-8.707-3.879s-5.194 3.916-5.601 7.713c-.115 1.069.923 1.823 1.961 1.545l11.42-3.06c1.039-.279 1.56-1.45.927-2.32m-8.19-1.947c1.894-.507 4.215.306 6.09 2.51L20.24 35.126c.521-2.846 2.125-4.71 4.018-5.218" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSleepyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSleepyOutline24pxIcon],svg[healthicons-sleepy-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 2.2q-.97-.198-2-.2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.458-3H19.42a8 8 0 0 1 .581 3a8 8 0 1 1-6-7.748z"></svg:path><svg:path d="M8.003 9.705c.007.157-.02.462-.138.768c-.116.3-.299.548-.57.697c-.271.15-.579.17-.894.108a2 2 0 0 1-.722-.294l-.863 1.227c.285.2.75.432 1.296.54c.553.108 1.243.098 1.906-.267c.664-.365 1.04-.943 1.245-1.468A3.5 3.5 0 0 0 9.5 9.633zm3.099-.466c.147.316.434.749.853 1.115c.424.37 1.027.707 1.784.722s1.372-.296 1.812-.649c.433-.348.738-.769.897-1.079l-1.333-.686a2 2 0 0 1-.504.596c-.25.2-.532.325-.842.319s-.586-.142-.828-.353a2 2 0 0 1-.478-.617z"></svg:path><svg:path fill-rule="evenodd" d="m16.392 15.874l-.16-.733a4.331 4.331 0 1 0-8.465 1.84l.16.733zm-2.86-2.195c.416.268.751.638.977 1.07l-5.336 1.159a2.83 2.83 0 0 1 4.358-2.229" clip-rule="evenodd"></svg:path><svg:path d="M16 2.25a.75.75 0 0 0 0 1.5h2.19l-2.55 2.549c-.535.535-.156 1.451.601 1.451H20a.75.75 0 0 0 0-1.5h-2.19l2.55-2.549c.535-.535.156-1.451-.601-1.451z"></svg:path></svg:g>`,
})
export class HealthiconsSleepyOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSlingIcon],svg[healthicons-sling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0M16.212 31.011a2 2 0 0 0-2.117 2.601zm8.583 4.236A3.501 3.501 0 0 1 24 41.965V42h-8a9 9 0 1 1 0-18h16a9 9 0 1 1 0 18h-4.257a5.502 5.502 0 0 0-2.175-8.598zM23.035 26h3.462l-5.86 14H16a6.97 6.97 0 0 1-3.677-1.042l9.647-11.852zM34 33a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSlingNegativeIcon],svg[healthicons-sling-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSlingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 22a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-8 9h.014l-1.954 2.487A2.002 2.002 0 0 1 16 31m11 7.5c0-1.6-1.073-2.948-2.538-3.366l.756-1.86A5.502 5.502 0 0 1 27.743 42H32a9 9 0 1 0 0-18H16a9 9 0 1 0 0 18h8v-.035a3.5 3.5 0 0 0 3-3.465M23.036 26l-2.969 3.078l-7.756 9.872A6.97 6.97 0 0 0 16 40h4.327l5.687-14zM32 35a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSlingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSlingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSlingOutlineIcon],svg[healthicons-sling-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 22a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12m17 13a9 9 0 0 0-9-9H16a9 9 0 1 0 0 18h8a4 4 0 0 0 .883-7.902L28.173 26H32a7 7 0 1 1 0 14v-4a3 3 0 1 0 0-6h-2v12h2a9 9 0 0 0 9-9m-25-7a7 7 0 0 0-5.184 11.704l2.7-3.023A3 3 0 0 1 16 30h1.694l3.572-4zm8.11 10.003L22.485 40H24a2 2 0 0 0 .11-3.997M20.326 40l5.687-14h-2.066l-11.59 12.98A6.97 6.97 0 0 0 16 40zM33 33a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1m-17.094-.996A1 1 0 0 0 15 33v.018z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSlingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmallPlaneIcon],svg[healthicons-small-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.806 14.129l-3.484 3.484c-1.16 1.161-2.322 0-1.16-1.162l9.29-9.29c1.16-1.161 2.322 0 1.16 1.161l-3.483 3.484s2.323 0 4.645 2.323l2.323 2.323l9.037-9.038a2 2 0 0 1 2.828 0l1.151 1.15a2 2 0 0 1 .453 2.133l-5.34 13.884l6.968 9.29l4.03-2.015a.954.954 0 0 1 1.101 1.529l-7.94 7.94a.954.954 0 0 1-1.53-1.102l2.016-4.03l-9.29-6.967l-13.884 5.34a2 2 0 0 1-2.132-.453l-1.15-1.15a2 2 0 0 1 0-2.829l9.036-9.037l-2.322-2.323c-2.323-2.323-2.323-4.645-2.323-4.645"></svg:path>`,
})
export class HealthiconsSmallPlaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmallPlaneNegativeIcon],svg[healthicons-small-plane-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSmallPlaneNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8.323 17.613l3.483-3.484s0 2.323 2.323 4.645l2.323 2.323l-9.038 9.037a2 2 0 0 0 0 2.829l1.15 1.15a2 2 0 0 0 2.133.453l13.884-5.34l9.29 6.968l-2.015 4.03a.954.954 0 0 0 1.529 1.101l7.94-7.94a.954.954 0 0 0-1.102-1.529l-4.03 2.015l-6.967-9.29l5.34-13.884a2 2 0 0 0-.453-2.132l-1.15-1.15a2 2 0 0 0-2.829 0l-9.037 9.037l-2.323-2.323c-2.322-2.322-4.645-2.323-4.645-2.323l3.484-3.483c1.161-1.162 0-2.323-1.161-1.162l-9.29 9.29c-1.162 1.162 0 2.323 1.16 1.162" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSmallPlaneNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSmallPlaneNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmallPlaneOutlineIcon],svg[healthicons-small-plane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.806 14.099q.002.033.017.145c.02.15.068.394.171.703c.204.612.632 1.495 1.55 2.412l3.736 3.737L8.828 31.548l1.15 1.15l14.917-5.736l8.266 6.2l-6.2-8.267L32.7 9.98l-1.15-1.15l-10.452 10.45l-3.737-3.736c-.917-.917-1.8-1.345-2.412-1.549a4 4 0 0 0-.703-.171a2 2 0 0 0-.145-.017h-.294zm2.646-6.938c1.16-1.161 2.322 0 1.16 1.161l-3.483 3.484s.169 0 .46.046a6.6 6.6 0 0 1 1.768.555c.732.342 1.574.88 2.417 1.722l2.323 2.323l9.037-9.038a2 2 0 0 1 2.828 0l1.151 1.15a2 2 0 0 1 .453 2.133l-5.34 13.884l6.968 9.29l4.03-2.015a.954.954 0 0 1 1.101 1.529l-7.94 7.94a.954.954 0 0 1-1.53-1.102l2.016-4.03l-9.29-6.967l-13.884 5.34a2 2 0 0 1-2.132-.453l-1.15-1.15a2 2 0 0 1 0-2.829l9.036-9.037l-2.322-2.323a8.5 8.5 0 0 1-1.722-2.417a6.6 6.6 0 0 1-.555-1.768c-.046-.291-.046-.46-.046-.46l-3.484 3.484c-1.16 1.161-2.322 0-1.16-1.162z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSmallPlaneOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingIcon],svg[healthicons-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M37 11a1 1 0 0 1 1-1a5 5 0 0 1 5 5v1.59a4.4 4.4 0 0 1-1.644 3.436A6 6 0 0 1 44 25v3a1 1 0 1 1-2 0v-3a4 4 0 0 0-4-4a1 1 0 1 1 0-2h.59A2.41 2.41 0 0 0 41 16.59V15a3 3 0 0 0-3-3a1 1 0 0 1-1-1"></svg:path><svg:path d="M34 17a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2M7 31a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm33 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmoking24pxIcon],svg[healthicons-smoking-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 20H2v-2.5h15zm1 0v-2.5h1.5V20zm2.5-2.5V20H22v-2.5zM14.16 7.266A3.5 3.5 0 0 1 15.5 7v1.5a2 2 0 0 0 0 4H17a2.5 2.5 0 0 1 2.5 2.5v1H18v-1a1 1 0 0 0-1-1h-1.5a3.5 3.5 0 0 1-1.34-6.734"></svg:path><svg:path d="M17 9.5a2 2 0 0 0 0-4V4a3.5 3.5 0 0 1 2.355 6.09A5 5 0 0 1 22 14.5V16h-1.5v-1.5h.003a3.504 3.504 0 0 0-3.402-3.501L17 11z"></svg:path></svg:g>`,
})
export class HealthiconsSmoking24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationIcon],svg[healthicons-smoking-cessation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 8.586L39.414 38L38 39.414L8.586 10zM7 37h21.727c.87 0 1.325-1.034.737-1.676l-3.37-3.675A2 2 0 0 0 24.62 31H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2m33-5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6-15a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2"></svg:path><svg:path d="M38 19a1 1 0 1 0 0 2a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19zm6 13a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessation24pxIcon],svg[healthicons-smoking-cessation-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.16 5.266A3.5 3.5 0 0 1 15.5 5v1.5a2 2 0 0 0 0 4H17a2.5 2.5 0 0 1 2.5 2.5v1H18v-1a1 1 0 0 0-1-1h-1.5a3.5 3.5 0 0 1-1.34-6.734"></svg:path><svg:path d="M17 7.5a2 2 0 0 0 0-4V2a3.5 3.5 0 0 1 2.355 6.09A5 5 0 0 1 22 12.5V14h-1.5v-1.5h.003A3.504 3.504 0 0 0 17.1 8.999L17 9zM16.586 18l3.207 3.207l1.414-1.414L19.414 18h.086v-2.5H18v1.086l-1-1V15.5h-.086L4.207 2.793L2.793 4.207L14.086 15.5H2V18zm3.914 0v-2.5H22V18z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessation24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationAltIcon],svg[healthicons-smoking-cessation-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-4-7.778c0-.675.547-1.222 1.222-1.222a1 1 0 1 0 0-2A3.22 3.22 0 0 0 24 15.222v.642a3.864 3.864 0 0 0 3.864 3.863h.863c.15 0 .273.122.273.273a1 1 0 1 0 2 0a2.273 2.273 0 0 0-2.273-2.273h-.863A1.864 1.864 0 0 1 26 15.864z"></svg:path><svg:path d="M28.852 15.383a1 1 0 0 0 .995.898c1.19 0 2.153.964 2.153 2.153v1.891a1 1 0 1 0 2 0v-1.892a4.14 4.14 0 0 0-1.466-3.166a3.14 3.14 0 0 0 .835-2.136v-1.003a3.52 3.52 0 0 0-3.522-3.522a1 1 0 1 0 0 2c.84 0 1.522.681 1.522 1.522v1.003a1.15 1.15 0 0 1-1.15 1.15h-.372a1 1 0 0 0-.995 1.102M33 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m13.416-7.999A17.93 17.93 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l12.442 12.443a1 1 0 0 1 .16.207H26a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h10.086L10.823 11.737A17.94 17.94 0 0 0 6 24c0 9.941 8.059 18 18 18c4.61 0 8.817-1.734 12.001-4.584l-5.208-5.209a1 1 0 0 1 1.414-1.414z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationAltNegativeIcon],svg[healthicons-smoking-cessation-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSmokingCessationAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM36.001 37.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263L22.086 23H12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1.086L12.265 10.35A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-5.209-5.208a1 1 0 0 0-1.414 1.414zM44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-14-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-4-7.778c0-.675.547-1.222 1.222-1.222a1 1 0 1 0 0-2A3.22 3.22 0 0 0 24 15.222v.642a3.864 3.864 0 0 0 3.864 3.863h.863c.15 0 .273.122.273.273a1 1 0 1 0 2 0a2.273 2.273 0 0 0-2.273-2.273h-.863A1.864 1.864 0 0 1 26 15.864zm2.852.161a1 1 0 0 0 .995.898c1.19 0 2.153.964 2.153 2.153v1.891a1 1 0 0 0 2 0v-1.892a4.14 4.14 0 0 0-1.466-3.166a3.14 3.14 0 0 0 .836-2.136v-1.003a3.52 3.52 0 0 0-3.523-3.522a1 1 0 1 0 0 2c.841 0 1.522.681 1.522 1.522v1.003a1.15 1.15 0 0 1-1.15 1.15h-.372a1 1 0 0 0-.995 1.102M33 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSmokingCessationAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSmokingCessationAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationAltOutlineIcon],svg[healthicons-smoking-cessation-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-4-7.778c0-.675.547-1.222 1.222-1.222a1 1 0 1 0 0-2A3.22 3.22 0 0 0 24 15.222v.642a3.864 3.864 0 0 0 3.864 3.863h.863c.15 0 .273.122.273.273a1 1 0 1 0 2 0a2.273 2.273 0 0 0-2.273-2.273h-.863A1.864 1.864 0 0 1 26 15.864z"></svg:path><svg:path d="M28.852 15.383a1 1 0 0 0 .995.898c1.19 0 2.153.964 2.153 2.153v1.891a1 1 0 1 0 2 0v-1.892a4.14 4.14 0 0 0-1.466-3.166a3.14 3.14 0 0 0 .835-2.136v-1.003a3.52 3.52 0 0 0-3.522-3.522a1 1 0 1 0 0 2c.84 0 1.522.681 1.522 1.522v1.003a1.15 1.15 0 0 1-1.15 1.15h-.372a1 1 0 0 0-.995 1.102M33 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m13.416-7.999A17.93 17.93 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l12.442 12.443a1 1 0 0 1 .16.207H26a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h10.086L10.823 11.737A17.94 17.94 0 0 0 6 24c0 9.941 8.059 18 18 18c4.61 0 8.817-1.734 12.001-4.584l-5.208-5.209a1 1 0 0 1 1.414-1.414zM12 25h14v2H12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationNegativeIcon],svg[healthicons-smoking-cessation-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSmokingCessationNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM28.727 37H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h17.62a2 2 0 0 1 1.474.649l3.37 3.675c.588.642.133 1.676-.737 1.676M10 8.586l.707.707l28 28l.707.707L38 39.414l-.707-.707l-28-28L8.586 10zM40 32a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6-15a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2m3 3a1 1 0 0 0 1 1a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19H38a1 1 0 0 0-1 1m7 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSmokingCessationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSmokingCessationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationOutlineIcon],svg[healthicons-smoking-cessation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 8.586L39.414 38L38 39.414L8.586 10zM7 32a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h24a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h18.5a1 1 0 1 1 0 2zm33 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6-15a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2"></svg:path><svg:path d="M38 19a1 1 0 1 0 0 2a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19zm6 13a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingCessationOutline24pxIcon],svg[healthicons-smoking-cessation-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.16 5.266A3.5 3.5 0 0 1 15.5 5v1.5a2 2 0 0 0 0 4H17a2.5 2.5 0 0 1 2.5 2.5v1H18v-1a1 1 0 0 0-1-1h-1.5a3.5 3.5 0 0 1-1.34-6.734"></svg:path><svg:path d="M17 7.5a2 2 0 0 0 0-4V2a3.5 3.5 0 0 1 2.355 6.09A5 5 0 0 1 22 12.5V14h-1.5v-1.5h.003A3.504 3.504 0 0 0 17.1 8.999L17 9zM16.586 18l3.207 3.207l1.414-1.414L19.414 18h.086v-2.5H18v1.086l-1-1V15.5h-.086L4.207 2.793L2.793 4.207L14.086 15.5H2V18zm3.914 0v-2.5H22V18z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingCessationOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingNegativeIcon],svg[healthicons-smoking-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm5 33a2 2 0 0 1 2-2h27a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm35-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-6-15a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2m4 2a1 1 0 1 0 0 2a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19zm6 13a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSmokingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingOutlineIcon],svg[healthicons-smoking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38 10a1 1 0 1 0 0 2a3 3 0 0 1 3 3v1.59A2.41 2.41 0 0 1 38.59 19H38a1 1 0 1 0 0 2a4 4 0 0 1 4 4v3a1 1 0 1 0 2 0v-3a6 6 0 0 0-2.644-4.974A4.4 4.4 0 0 0 43 16.59V15a5 5 0 0 0-5-5"></svg:path><svg:path d="M31 20a3 3 0 0 1 3-3a1 1 0 1 0 0-2a5 5 0 0 0-5 5v1.818a5 5 0 0 0 5 5h3a1 1 0 0 1 1 1V28a1 1 0 1 0 2 0v-.182a3 3 0 0 0-3-3h-3a3 3 0 0 1-3-3z"></svg:path><svg:path fill-rule="evenodd" d="M4 33a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M39 31a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsSmokingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSmokingOutline24pxIcon],svg[healthicons-smoking-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 20H2v-2.5h15zm1 0v-2.5h1.5V20zm2.5-2.5V20H22v-2.5zM14.16 7.266A3.5 3.5 0 0 1 15.5 7v1.5a2 2 0 0 0 0 4H17a2.5 2.5 0 0 1 2.5 2.5v1H18v-1a1 1 0 0 0-1-1h-1.5a3.5 3.5 0 0 1-1.34-6.734"></svg:path><svg:path d="M17 9.5a2 2 0 0 0 0-4V4a3.5 3.5 0 0 1 2.355 6.09A5 5 0 0 1 22 14.5V16h-1.5v-1.5h.003a3.504 3.504 0 0 0-3.402-3.501L17 11z"></svg:path></svg:g>`,
})
export class HealthiconsSmokingOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingIcon],svg[healthicons-social-distancing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36.463 15.95a1 1 0 0 0 1.414 1.414l2.121-2.121a2 2 0 0 0 0-2.829l-2.12-2.121a1 1 0 1 0-1.415 1.414L37.756 13H10.244l1.293-1.293a1 1 0 0 0-1.414-1.414l-2.121 2.121a2 2 0 0 0 0 2.829l2.12 2.121a1 1 0 0 0 1.415-1.414l-.95-.95h26.826zM15 25.5c0 1.934-1.566 3.5-3.5 3.5A3.5 3.5 0 0 1 8 25.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5M4 34.267C4 31.429 8.997 30 11.5 30s7.5 1.43 7.5 4.267V38H4zM36.5 29c1.934 0 3.5-1.566 3.5-3.5S38.434 22 36.5 22a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5M29 34.267C29 31.429 33.997 30 36.5 30s7.5 1.43 7.5 4.267V38H29z"></svg:path>`,
})
export class HealthiconsSocialDistancingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingAltIcon],svg[healthicons-social-distancing-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-.967 8.156C20.342 16.782 22.127 16 24 16s3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144"></svg:path><svg:path d="M13.495 29.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365c.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42s9.17-.772 12.39-2.055c1.609-.64 2.977-1.428 3.96-2.354c.984-.928 1.65-2.065 1.65-3.365c0-1.463-.84-2.715-2.038-3.706c-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11c.95.786 1.313 1.526 1.313 2.166c0 .57-.286 1.216-1.022 1.909c-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40s-8.719-.745-11.65-1.913c-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165c.944-.781 2.363-1.512 4.182-2.111M8 22v-3h6v-2H8v-3H6v8zm34 0v-8h-2v3h-6v2h6v3z"></svg:path></svg:g>`,
})
export class HealthiconsSocialDistancingAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingAltNegativeIcon],svg[healthicons-social-distancing-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSocialDistancingAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-.967 8.156C20.342 16.782 22.127 16 24 16s3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144M8 22v-3h6v-2H8v-3H6v8zm34 0v-8h-2v3h-6v2h6v3zm-28.505 7.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365c.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42s9.17-.772 12.39-2.055c1.609-.64 2.977-1.428 3.96-2.354c.984-.928 1.65-2.065 1.65-3.365c0-1.463-.84-2.715-2.038-3.706c-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11c.95.786 1.313 1.526 1.313 2.166c0 .57-.286 1.216-1.022 1.909c-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40s-8.719-.745-11.65-1.913c-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165c.944-.781 2.363-1.512 4.182-2.111" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSocialDistancingAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSocialDistancingAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingAltOutlineIcon],svg[healthicons-social-distancing-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4.967 10.156C20.342 16.782 22.127 16 24 16s3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144M24 18c-1.31 0-2.577.546-3.518 1.535A5.46 5.46 0 0 0 19 23.3V25h1.571a1 1 0 0 1 .996.905l.77 8.095h3.325l.771-8.095A1 1 0 0 1 27.43 25H29v-1.7a5.46 5.46 0 0 0-1.482-3.765A4.85 4.85 0 0 0 24 18" clip-rule="evenodd"></svg:path><svg:path d="M13.495 29.95a1 1 0 1 0-.626-1.9c-1.957.644-3.629 1.475-4.831 2.47C6.84 31.511 6 32.763 6 34.226c0 1.3.665 2.437 1.65 3.365c.983.925 2.351 1.713 3.96 2.354C14.83 41.228 19.21 42 24 42s9.17-.772 12.39-2.055c1.609-.64 2.977-1.428 3.96-2.354c.984-.928 1.65-2.065 1.65-3.365c0-1.463-.84-2.715-2.038-3.706c-1.203-.995-2.874-1.826-4.831-2.47a1 1 0 1 0-.626 1.9c1.82.599 3.238 1.33 4.182 2.11c.95.786 1.313 1.526 1.313 2.166c0 .57-.286 1.216-1.022 1.909c-.737.695-1.859 1.367-3.327 1.952C32.719 39.255 28.6 40 24 40s-8.719-.745-11.65-1.913c-1.47-.585-2.59-1.257-3.328-1.952C8.286 35.442 8 34.796 8 34.226c0-.64.363-1.38 1.313-2.165c.944-.781 2.363-1.512 4.182-2.111M8 22v-3h6v-2H8v-3H6v8zm32 0h2v-8h-2v3h-6v2h6z"></svg:path></svg:g>`,
})
export class HealthiconsSocialDistancingAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingNegativeIcon],svg[healthicons-social-distancing-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSocialDistancingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM11.537 11.707L10.244 13h27.512l-1.293-1.293a1 1 0 0 1 1.414-1.414l2.121 2.121a2 2 0 0 1 0 2.829l-2.12 2.121a1 1 0 0 1-1.415-1.414l.95-.95H10.587l.95.95a1 1 0 0 1-1.414 1.414l-2.121-2.121a2 2 0 0 1 0-2.829l2.12-2.121a1 1 0 0 1 1.415 1.414M11.5 29c1.934 0 3.5-1.566 3.5-3.5S13.434 22 11.5 22A3.5 3.5 0 0 0 8 25.5c0 1.934 1.566 3.5 3.5 3.5m0 1C8.997 30 4 31.43 4 34.267V38h15v-3.733C19 31.429 14.003 30 11.5 30m25-1c1.934 0 3.5-1.566 3.5-3.5S38.434 22 36.5 22a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5m0 1c-2.503 0-7.5 1.43-7.5 4.267V38h15v-3.733C44 31.429 39.003 30 36.5 30" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSocialDistancingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSocialDistancingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingOutlineIcon],svg[healthicons-social-distancing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.537 10.293a1 1 0 0 1 0 1.414L10.244 13h27.512l-1.293-1.293a1 1 0 0 1 1.414-1.414l2.121 2.121a2 2 0 0 1 0 2.829l-2.121 2.121a1 1 0 1 1-1.414-1.414l.95-.95H10.588l.95.95a1 1 0 0 1-1.415 1.414l-2.121-2.121a2 2 0 0 1 0-2.829l2.121-2.121a1 1 0 0 1 1.414 0"></svg:path><svg:path fill-rule="evenodd" d="M15 25.5c0 1.934-1.566 3.5-3.5 3.5A3.5 3.5 0 0 1 8 25.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5M11.5 27a1.499 1.499 0 1 0 0-3a1.499 1.499 0 1 0 0 3M4 34.267C4 31.429 8.997 30 11.5 30s7.5 1.43 7.5 4.267V38H4zm2 0c0-.127.168-.707 1.64-1.378C8.944 32.296 10.536 32 11.5 32s2.557.296 3.86.89c1.472.67 1.64 1.25 1.64 1.377V36H6zM40 25.5c0 1.934-1.566 3.5-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5M36.5 27a1.499 1.499 0 1 0 0-3a1.499 1.499 0 1 0 0 3M29 34.267C29 31.429 33.997 30 36.5 30s7.5 1.43 7.5 4.267V38H29zm2 0c0-.127.168-.707 1.64-1.378c1.303-.593 2.895-.889 3.86-.889s2.557.296 3.86.89c1.472.67 1.64 1.25 1.64 1.377V36H31z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSocialDistancingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialWorkIcon],svg[healthicons-social-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h7v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm24.99 28.635c.547-.555 1.1-1.115 1.61-1.95q.194-.314.384-.607c.456-.705.86-1.33.934-1.97c.096-.817.156-5.717-.108-6.459c-.265-.741-1.79-1.157-2.317.503c-.26.819-.342 1.872-.416 2.828c-.077.98-.145 1.858-.39 2.272c-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862c-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043c-.145.516-.31 1.1-.362 1.51V37h5.773v-.993c.388-.533.801-.95 1.217-1.372m-19.813 1.372c-.389-.533-.803-.95-1.22-1.372c-.55-.555-1.104-1.115-1.616-1.95c-.128-.21-.259-.411-.385-.607c-.457-.705-.862-1.33-.937-1.97c-.097-.817.202-5.717.467-6.459c.266-.741 1.796-1.157 2.325.503c.26.819.343 1.872.418 2.828c.076.98.145 1.858.39 2.272c.485.818 2.045 2.853 2.045 2.853l-1.346-2.547s-.205-.352-.097-1.021c.108-.67.92-1.606 1.301-.862c.382.743 1.049 1.414 1.049 1.414l2.355 2.829s.768.992.789 1.536c.015.387.187 1.78.285 2.553V37h-5.823zM19.781 11C17.018 11 15 13.986 15 17.207C15 24.397 24 29 24 29s9-4.9 9-11.793C33 13.987 30.982 11 28.219 11c-1.918 0-3.34 1.34-4.219 3.24c-.878-1.9-2.301-3.24-4.219-3.24" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSocialWorkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialWorkNegativeIcon],svg[healthicons-social-work-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSocialWorkNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-6v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h-7v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H9a3 3 0 0 1-3-3zm29.6 23.685c-.51.835-1.063 1.395-1.61 1.95c-.416.421-.829.84-1.217 1.372V37H27v-.993c.052-.41.217-.994.362-1.51c.13-.457.243-.86.25-1.043c.02-.544.786-1.537.786-1.537l2.348-2.828s.664-.67 1.045-1.414s1.19.192 1.297.861c.107.67-.097 1.022-.097 1.022l-1.342 2.547s1.555-2.035 2.038-2.853c.245-.414.313-1.292.39-2.272c.074-.956.156-2.009.416-2.828c.527-1.66 2.052-1.244 2.317-.503c.264.742.204 5.642.108 6.458c-.075.64-.478 1.266-.934 1.971q-.19.293-.384.607m-22.643 1.95c.417.421.831.84 1.22 1.372V37H20v-.993c-.098-.773-.27-2.166-.285-2.553c-.021-.544-.789-1.537-.789-1.537l-2.355-2.828s-.667-.67-1.049-1.414s-1.193.192-1.301.861c-.108.67.097 1.022.097 1.022l1.346 2.547s-1.56-2.035-2.045-2.853c-.245-.414-.314-1.292-.39-2.272c-.075-.956-.157-2.009-.418-2.828c-.529-1.66-2.06-1.244-2.325-.503c-.265.742-.564 5.642-.468 6.458c.076.64.48 1.266.938 1.971q.191.293.385.607c.512.835 1.067 1.395 1.616 1.95M15 17.207C15 13.987 17.018 11 19.781 11c1.918 0 3.34 1.34 4.219 3.24c.878-1.9 2.301-3.24 4.219-3.24C30.982 11 33 13.987 33 17.207C33 24.1 24 29 24 29s-9-4.603-9-11.793" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSocialWorkNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSocialWorkNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialWorkOutlineIcon],svg[healthicons-social-work-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32.774 36.007c.387-.533.8-.95 1.216-1.372c.547-.555 1.1-1.115 1.61-1.95q.194-.314.384-.606c.455-.706.86-1.332.934-1.972c.096-.816.156-5.716-.108-6.458c-.265-.741-1.79-1.157-2.317.503c-.26.819-.342 1.872-.416 2.828c-.077.98-.145 1.858-.39 2.272c-.483.818-2.038 2.853-2.038 2.853l1.342-2.547s.204-.352.097-1.021c-.108-.67-.917-1.606-1.297-.862c-.38.743-1.045 1.414-1.045 1.414l-2.348 2.829s-.765.992-.786 1.536c-.007.182-.12.586-.25 1.043c-.145.516-.31 1.1-.362 1.51V37h5.773zm-18.597 0c-.389-.533-.803-.95-1.22-1.372c-.55-.555-1.104-1.115-1.616-1.95q-.194-.314-.385-.607c-.457-.705-.862-1.33-.937-1.97c-.097-.817.202-5.717.467-6.459c.266-.741 1.796-1.157 2.325.503c.26.819.343 1.872.418 2.828c.076.98.145 1.858.39 2.272c.485.818 2.045 2.853 2.045 2.853l-1.346-2.547s-.205-.352-.097-1.021c.108-.67.92-1.606 1.301-.862c.382.743 1.049 1.414 1.049 1.414l2.355 2.829s.768.992.789 1.536c.015.387.187 1.78.285 2.553V37h-5.823zM19.781 11C17.018 11 15 13.986 15 17.207C15 24.397 24 29 24 29s9-4.9 9-11.793C33 13.987 30.982 11 28.219 11c-1.918 0-3.34 1.34-4.219 3.24c-.878-1.9-2.301-3.24-4.219-3.24"></svg:path><svg:path fill-rule="evenodd" d="M6 39a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3zM8 9a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-6v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h-7v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H9a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSocialWorkOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSodiumFreeIcon],svg[healthicons-sodium-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 13a5 5 0 0 0-5 5v.143c0 .473.384.857.857.857h8.286a.857.857 0 0 0 .857-.857V18a5 5 0 0 0-5-5m3-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.999 13.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-7.126-7.125l-.475-6.109A3 3 0 0 0 26.825 20h-5.65a3 3 0 0 0-2.99 2.767l-.934 12A3 3 0 0 0 20.242 38h7.516a3 3 0 0 0 2.99-3.233l-.22-2.824zM22 23a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1m5 1a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSodiumFreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSodiumFreeNegativeIcon],svg[healthicons-sodium-free-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsSodiumFreeNegative0)"><svg:path fill-rule="evenodd" d="M37.416 36.001A17.93 17.93 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l3.942 3.943a1 1 0 0 1-1.414 1.414l-3.97-3.97A17.94 17.94 0 0 0 6 24c0 9.941 8.059 18 18 18c4.61 0 8.817-1.734 12.001-4.584l-5.472-5.473l.22 2.824A3 3 0 0 1 27.758 38h-7.516a3 3 0 0 1-2.99-3.233l.933-12A3 3 0 0 1 21.175 20h5.65a3 3 0 0 1 2.99 2.767l.475 6.11zM24 13a5 5 0 0 0-5 5v.143c0 .473.384.857.857.857h8.286a.857.857 0 0 0 .857-.857V18a5 5 0 0 0-5-5m3-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path d="M22 23a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1m5 1a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSodiumFreeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSodiumFreeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSodiumFreeOutlineIcon],svg[healthicons-sodium-free-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-8 11a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zm3-1a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.999 13.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-7.085-7.084l-.526-7.138a3 3 0 0 0-1.08-2.09A1 1 0 0 0 29 19v-1a5 5 0 0 0-10 0v1c0 .267.105.51.275.689a3 3 0 0 0-1.08 2.09l-.958 13A3 3 0 0 0 20.23 38h7.542a3 3 0 0 0 2.992-3.22l-.207-2.81zM26.813 21h-5.626a1 1 0 0 0-.997.927l-.958 13A1 1 0 0 0 20.229 36h7.542a1 1 0 0 0 .997-1.074l-.958-13a1 1 0 0 0-.997-.926M27 18h-6a3 3 0 1 1 6 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSodiumFreeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonogramIcon],svg[healthicons-sonogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.368 29.95c-.404 1.05.139 2.232 1.215 2.562a49 49 0 0 0 14.416 2.16a49 49 0 0 0 14.418-2.16c1.076-.33 1.618-1.512 1.215-2.563l-6.409-16.687c-.371-.968-1.419-1.484-2.43-1.258a31.2 31.2 0 0 1-6.794.745c-2.331 0-4.604-.257-6.792-.745c-1.012-.226-2.06.29-2.43 1.258zm25.838-7.796c0 2.48-2.067 4.491-4.617 4.491q-.292 0-.573-.034c-.174.234-.36.552-.573.918c-.92 1.575-2.357 4.038-5.577 4.498c-2.514.363-4.252-1.755-5.407-4.01c-.145-.283-.286-.557-.418-.81l-.607.272c-.529.237-1.048.47-1.294.566c-1.053.41-2.247-.089-2.667-1.113s.091-2.185 1.144-2.595c.15-.058.472-.203.894-.393c.285-.128.616-.277.97-.433c.402-.177.82-.358 1.161-.492a8 8 0 0 1 .53-.189a3 3 0 0 1 .372-.09c.077-.013.205-.032.362-.034a2.2 2.2 0 0 1 .836.15a2.1 2.1 0 0 1 .801.563c.08.09.14.172.171.217c.069.097.13.197.179.277c.1.167.219.38.343.608c.15.276.595 1.166.81 1.597a.184.184 0 0 0 .34-.135l-.655-2.159a240 240 0 0 0-.495-1.635a43 43 0 0 0-.25-.782c-.426-1.022.08-2.186 1.13-2.6c1.051-.415 2.248.078 2.673 1.1l.993 3.37a.17.17 0 0 0 .185.12a.16.16 0 0 0 .13-.197a4.4 4.4 0 0 1-.125-1.046c0-1.928.885-3.219 2.758-3.973c1.192-.48 2.56-.644 3.74-.131c1.612.7 2.736 2.274 2.736 4.104M41 11.5v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H39a1 1 0 1 0 0 2zm-34 0h2a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 0 5 11v2.5a1 1 0 1 0 2 0zm34 25v-2a1 1 0 1 1 2 0V37a1.5 1.5 0 0 1-1.5 1.5H39a1 1 0 1 1 0-2zm-34 0h2a1 1 0 1 1 0 2H6.5A1.5 1.5 0 0 1 5 37v-2.5a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSonogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonogramNegativeIcon],svg[healthicons-sonogram-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsSonogramNegative0)"><svg:path d="M29.589 26.645c2.55 0 4.617-2.01 4.617-4.492c0-1.829-1.124-3.403-2.737-4.103c-1.18-.513-2.547-.35-3.74.13c-1.872.755-2.757 2.046-2.757 3.973q0 .541.126 1.047a.16.16 0 0 1-.13.197a.17.17 0 0 1-.186-.12l-.993-3.37c-.425-1.022-1.622-1.515-2.672-1.1s-1.557 1.578-1.131 2.6l-.003-.006l.005.014a42 42 0 0 1 .248.774a231 231 0 0 1 .495 1.635l.656 2.159a.184.184 0 0 1-.341.135c-.215-.43-.66-1.32-.81-1.597a17 17 0 0 0-.344-.608a4 4 0 0 0-.178-.277a2.2 2.2 0 0 0-.375-.418a2.1 2.1 0 0 0-.597-.362a2.2 2.2 0 0 0-.836-.15a2.4 2.4 0 0 0-.362.034a3 3 0 0 0-.372.09a7 7 0 0 0-.53.189c-.341.134-.76.314-1.16.492c-.355.156-.686.305-.971.433c-.422.19-.744.335-.894.393c-1.053.41-1.565 1.571-1.144 2.595c.42 1.024 1.614 1.522 2.667 1.113c.246-.096.765-.329 1.294-.566l.607-.272c.132.253.273.527.418.81c1.155 2.255 2.893 4.373 5.407 4.01c3.22-.46 4.657-2.923 5.577-4.498c.213-.366.4-.684.573-.918q.282.034.573.034"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM9.583 32.512c-1.077-.33-1.619-1.512-1.215-2.563l6.408-16.687c.372-.968 1.42-1.484 2.431-1.258c2.188.488 4.46.745 6.792.745s4.605-.258 6.794-.746c1.011-.225 2.059.291 2.43 1.259l6.409 16.687c.403 1.051-.139 2.232-1.215 2.562a49 49 0 0 1-14.418 2.16a49 49 0 0 1-14.416-2.16M41 11.5v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H39a1 1 0 1 0 0 2zm-32 0H7v2a1 1 0 1 1-2 0V11a1.5 1.5 0 0 1 1.5-1.5H9a1 1 0 1 1 0 2m32 25v-2a1 1 0 1 1 2 0V37a1.5 1.5 0 0 1-1.5 1.5H39a1 1 0 1 1 0-2zm-32 0H7v-2a1 1 0 1 0-2 0V37a1.5 1.5 0 0 0 1.5 1.5H9a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSonogramNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSonogramNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonogramOutlineIcon],svg[healthicons-sonogram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.368 29.95c-.404 1.05.139 2.232 1.215 2.562a49 49 0 0 0 14.416 2.16a49 49 0 0 0 14.418-2.16c1.076-.33 1.618-1.512 1.215-2.563l-6.409-16.687c-.371-.968-1.419-1.484-2.43-1.258a31.2 31.2 0 0 1-6.794.745c-2.331 0-4.604-.257-6.792-.745c-1.012-.226-2.06.29-2.43 1.258zm25.838-7.796c0 2.48-2.067 4.491-4.617 4.491q-.292 0-.573-.034c-.174.234-.36.552-.573.918c-.92 1.575-2.357 4.038-5.577 4.498c-2.514.363-4.252-1.755-5.407-4.01c-.145-.283-.286-.557-.418-.81l-.607.272c-.529.237-1.048.47-1.294.566c-1.053.41-2.247-.089-2.667-1.113s.091-2.185 1.144-2.595c.15-.058.472-.203.894-.393c.285-.128.616-.277.97-.433c.402-.177.82-.358 1.161-.492a8 8 0 0 1 .53-.189a3 3 0 0 1 .372-.09c.077-.013.205-.032.362-.034a2.2 2.2 0 0 1 .836.15a2.1 2.1 0 0 1 .801.563c.08.09.14.172.171.217c.069.097.13.197.179.277c.1.167.219.38.343.608c.15.276.595 1.166.81 1.597a.184.184 0 0 0 .34-.135l-.655-2.159a240 240 0 0 0-.495-1.635a43 43 0 0 0-.25-.782c-.426-1.022.08-2.186 1.13-2.6c1.051-.415 2.248.078 2.673 1.1l.993 3.37a.17.17 0 0 0 .185.12a.16.16 0 0 0 .13-.197a4.4 4.4 0 0 1-.125-1.046c0-1.928.885-3.219 2.758-3.973c1.192-.48 2.56-.644 3.74-.131c1.612.7 2.736 2.274 2.736 4.104M41 11.5v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H39a1 1 0 1 0 0 2zm-34 0h2a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 0 5 11v2.5a1 1 0 1 0 2 0zm34 25v-2a1 1 0 1 1 2 0V37a1.5 1.5 0 0 1-1.5 1.5H39a1 1 0 1 1 0-2zm-34 0h2a1 1 0 1 1 0 2H6.5A1.5 1.5 0 0 1 5 37v-2.5a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSonogramOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonographyIcon],svg[healthicons-sonography-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm2 5h2a1 1 0 1 0 0-2h-2.5A1.5 1.5 0 0 0 9 10.5V13a1 1 0 1 0 2 0zm26 2v-2h-2a1 1 0 1 1 0-2h2.5a1.5 1.5 0 0 1 1.5 1.5V13a1 1 0 1 1-2 0M11.519 30.998c-1.078-.324-1.62-1.506-1.217-2.557l5.487-14.287c.371-.967 1.419-1.483 2.432-1.265c1.865.4 3.798.611 5.779.611s3.915-.21 5.779-.611c1.013-.218 2.06.298 2.432 1.265l5.487 14.287c.404 1.051-.139 2.233-1.217 2.557A43.3 43.3 0 0 1 24 32.832c-4.33 0-8.518-.642-12.481-1.834m15.75-12.57c1.14-.495 2.444-.635 3.515-.119c1.308.632 2.202 1.942 2.202 3.45c0 2.12-1.768 3.85-3.963 3.85q-.251 0-.493-.03l-.145-.017l-1.383 1.864c-.84 1.13-1.83 2.344-3.63 2.579h-.003c-2.164.313-4.176-1.02-5.194-3.008c-.132-.26-.261-.51-.382-.741l-.109-.209l-.214.096l-.555.248a33 33 0 0 1-1.17.512c-.838.326-1.782-.073-2.112-.877c-.329-.8.069-1.716.903-2.04c.144-.056.44-.19.815-.358l.013-.006c.26-.117.562-.253.885-.395c.365-.162.743-.325 1.05-.445c.148-.059.313-.12.464-.166c.072-.021.183-.053.31-.075a1.74 1.74 0 0 1 .958.092a1.66 1.66 0 0 1 .637.448c.064.072.112.138.139.176c.057.08.11.166.152.236c.089.148.195.339.308.547a78 78 0 0 1 .735 1.45a.418.418 0 0 0 .774-.309l-.598-1.969c-.16-.531-.32-1.066-.453-1.494v-.002l-.231-.725l-.005-.01c-.332-.799.06-1.715.893-2.044c.832-.328 1.773.061 2.112.856l.902 3.063a.404.404 0 0 0 .443.286a.395.395 0 0 0 .328-.487a3.8 3.8 0 0 1-.108-.896c0-.814.18-1.48.538-2.02s.905-.977 1.673-1.31M37 35v2h-2a1 1 0 1 0 0 2h2.5a1.5 1.5 0 0 0 1.5-1.5V35a1 1 0 1 0-2 0m-26 2h2a1 1 0 1 1 0 2h-2.5A1.5 1.5 0 0 1 9 37.5V35a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSonographyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonographyNegativeIcon],svg[healthicons-sonography-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSonographyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9.5a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm7 2h-2v2a1 1 0 1 1-2 0V11a1.5 1.5 0 0 1 1.5-1.5H13a1 1 0 1 1 0 2m24 0v2a1 1 0 1 0 2 0V11a1.5 1.5 0 0 0-1.5-1.5H35a1 1 0 1 0 0 2zM10.302 28.941c-.403 1.051.139 2.233 1.217 2.557A43.3 43.3 0 0 0 24 33.332c4.33 0 8.518-.642 12.481-1.834c1.078-.324 1.62-1.506 1.217-2.557L32.21 14.654c-.371-.967-1.419-1.483-2.432-1.265c-1.864.4-3.798.611-5.779.611s-3.914-.21-5.779-.611c-1.013-.218-2.06.298-2.432 1.265zM30.784 18.81c-1.07-.517-2.375-.377-3.514.118c-.768.334-1.315.77-1.673 1.31c-.357.542-.538 1.207-.538 2.021q0 .465.108.896a.395.395 0 0 1-.328.487a.404.404 0 0 1-.443-.286l-.902-3.063c-.339-.795-1.28-1.184-2.111-.856c-.833.329-1.226 1.245-.894 2.045l.005.01l.231.726c.133.428.293.962.453 1.494l.598 1.97a.418.418 0 0 1-.774.308a81 81 0 0 0-.735-1.45a15 15 0 0 0-.308-.546a4 4 0 0 0-.152-.237a1.7 1.7 0 0 0-.302-.337a1.7 1.7 0 0 0-.474-.287a1.7 1.7 0 0 0-.666-.12c-.126.002-.23.017-.292.028a3 3 0 0 0-.31.075a6 6 0 0 0-.465.166c-.306.12-.684.283-1.05.445c-.322.142-.623.278-.884.395l-.013.006c-.375.168-.671.302-.815.357c-.834.325-1.232 1.24-.903 2.04c.33.805 1.274 1.204 2.112.878a33 33 0 0 0 1.17-.512c.188-.084.377-.17.555-.248l.214-.096l.109.209c.12.232.25.482.382.741c1.018 1.988 3.03 3.321 5.194 3.008h.003c1.8-.235 2.79-1.448 3.63-2.579l1.383-1.864l.145.017q.242.03.493.03c2.195 0 3.963-1.73 3.963-3.85c0-1.508-.894-2.818-2.202-3.45M37 37.5v-2a1 1 0 1 1 2 0V38a1.5 1.5 0 0 1-1.5 1.5H35a1 1 0 1 1 0-2zm-24 0h-2v-2a1 1 0 1 0-2 0V38a1.5 1.5 0 0 0 1.5 1.5H13a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSonographyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSonographyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSonographyOutlineIcon],svg[healthicons-sonography-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M10.302 28.441c-.403 1.051.139 2.233 1.217 2.557A43.3 43.3 0 0 0 24 32.832c4.33 0 8.518-.642 12.481-1.834c1.078-.324 1.62-1.506 1.217-2.557L32.21 14.154c-.371-.967-1.419-1.483-2.432-1.265c-1.864.4-3.798.611-5.779.611s-3.914-.21-5.779-.611c-1.013-.218-2.06.298-2.432 1.265zM33 21.793c0 2.188-1.823 3.962-4.071 3.962q-.257 0-.506-.03c-.153.205-.316.486-.505.809c-.81 1.389-2.078 3.56-4.918 3.966c-2.217.32-3.75-1.547-4.767-3.536c-.128-.25-.253-.491-.37-.714l-.534.24c-.467.209-.924.414-1.142.499c-.928.36-1.981-.079-2.352-.982s.08-1.927 1.009-2.288c.132-.051.416-.18.789-.347c.25-.113.542-.244.855-.382a28 28 0 0 1 1.024-.434a6 6 0 0 1 .467-.166a3 3 0 0 1 .328-.08a2 2 0 0 1 .32-.03c.107-.002.4 0 .736.133a1.85 1.85 0 0 1 .707.496c.07.08.123.152.151.192c.06.085.115.174.157.244c.089.147.193.335.303.536c.132.244.525 1.028.714 1.409a.162.162 0 0 0 .3-.12l-.578-1.903c-.154-.514-.309-1.03-.436-1.442a35 35 0 0 0-.219-.683q-.007-.021-.001-.007c-.376-.902.07-1.928.997-2.293c.926-.366 1.981.069 2.357.97l.875 2.972c.02.071.09.116.163.106a.14.14 0 0 0 .115-.174a4 4 0 0 1-.11-.923c0-1.626.714-2.738 2.22-3.414c1.174-.526 2.567-.685 3.716-.108C32.104 18.93 33 20.26 33 21.793M36 12v2a1 1 0 1 0 2 0v-2.5a1.5 1.5 0 0 0-1.5-1.5H34a1 1 0 1 0 0 2zm-24 0h2a1 1 0 1 0 0-2h-2.5a1.5 1.5 0 0 0-1.5 1.5V14a1 1 0 1 0 2 0zm24 24v-2a1 1 0 1 1 2 0v2.5a1.5 1.5 0 0 1-1.5 1.5H34a1 1 0 1 1 0-2zm-24 0h2a1 1 0 1 1 0 2h-2.5a1.5 1.5 0 0 1-1.5-1.5V34a1 1 0 1 1 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSonographyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpeechLanguageTherapyIcon],svg[healthicons-speech-language-therapy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm5.434 1q-.392 0-.776.032a.713.713 0 0 0-.658.708v27.55c0 .392.32.71.717.71h2.15a.714.714 0 0 0 .717-.71v-5.186l2.937 1.247c.375.16.832.328 1.309.39c.485.063 1.036.022 1.548-.288a2.84 2.84 0 0 0 1.375-2.427v-2.131a.714.714 0 0 0-.717-.71l-2.206-.711c0-.722.59-.717 1.3-.712l.19.001h.716a.714.714 0 0 0 .717-.71v-1.421h.81c1.146 0 1.829-1.265 1.194-2.21l-2.004-2.98v-1.205c0-5.101-4.172-9.237-9.32-9.237m7.168 11.013a1.07 1.07 0 0 1-1.075 1.066a1.07 1.07 0 0 1-1.075-1.066a1.07 1.07 0 0 1 1.075-1.066a1.07 1.07 0 0 1 1.075 1.066M26.684 28c0 .893-.479 1.67-1.189 2.084l1.01 1.727A4.41 4.41 0 0 0 28.685 28a4.41 4.41 0 0 0-2.18-3.81l-1.01 1.726A2.41 2.41 0 0 1 26.686 28m4.21 0c0-2.067-.899-3.786-2.112-4.663l1.173-1.62c1.807 1.307 2.94 3.672 2.94 6.283c0 2.61-1.133 4.976-2.94 6.284l-1.173-1.62c1.213-.878 2.113-2.597 2.113-4.664m4.211 0c0 3.181-1.264 5.848-2.99 7.217l1.243 1.566c2.302-1.825 3.747-5.128 3.747-8.783s-1.445-6.958-3.747-8.783l-1.242 1.567c1.725 1.368 2.99 4.035 2.99 7.216" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpeechLanguageTherapyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpeechLanguageTherapyNegativeIcon],svg[healthicons-speech-language-therapy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpeechLanguageTherapyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1.658 4.032q.384-.032.776-.032c5.147 0 9.319 4.136 9.319 9.237v1.206l2.004 2.98c.635.944-.048 2.209-1.193 2.209h-.811v1.42a.714.714 0 0 1-.717.711h-.907c-.71-.006-1.3-.01-1.3.71l2.207.711c.396 0 .717.318.717.71v2.132a2.84 2.84 0 0 1-1.375 2.427c-.512.31-1.063.351-1.548.288c-.477-.062-.933-.23-1.309-.39l-2.937-1.247v5.185c0 .393-.32.711-.717.711h-2.15a.714.714 0 0 1-.717-.71V10.74c0-.37.286-.678.658-.708m6.869 12.047a1.07 1.07 0 0 0 1.075-1.066a1.07 1.07 0 0 0-1.075-1.066a1.07 1.07 0 0 0-1.075 1.066a1.07 1.07 0 0 0 1.075 1.066m7.968 8.005A2.41 2.41 0 0 0 26.686 28c0-.893-.48-1.67-1.19-2.084l1.01-1.727A4.41 4.41 0 0 1 28.685 28a4.41 4.41 0 0 1-2.18 3.81zm3.287-6.747c1.213.877 2.113 2.596 2.113 4.663s-.9 3.786-2.113 4.663l1.173 1.62c1.807-1.307 2.94-3.672 2.94-6.283c0-2.61-1.133-4.976-2.94-6.284zm3.333 11.88c1.726-1.369 2.99-4.036 2.99-7.217s-1.264-5.848-2.99-7.216l1.243-1.567c2.302 1.825 3.747 5.128 3.747 8.783c0 3.656-1.445 6.958-3.747 8.783z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpeechLanguageTherapyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpeechLanguageTherapyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpeechLanguageTherapyOutlineIcon],svg[healthicons-speech-language-therapy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"></svg:path><svg:path d="M11.434 10q-.392 0-.776.032a.713.713 0 0 0-.658.708v27.55c0 .392.32.71.717.71h2.15a.714.714 0 0 0 .717-.71v-5.186l2.937 1.247c.375.16.832.328 1.309.39c.485.063 1.036.022 1.548-.288a2.84 2.84 0 0 0 1.375-2.427v-2.131a.714.714 0 0 0-.717-.71l-2.206-.711c0-.785.697-.71 1.49-.71h.716a.714.714 0 0 0 .717-.711v-1.421h.81c1.146 0 1.829-1.265 1.194-2.21l-2.004-2.98v-1.205c0-5.101-4.172-9.237-9.32-9.237m7.168 11.013a1.07 1.07 0 0 1-1.075 1.066a1.07 1.07 0 0 1-1.075-1.066a1.07 1.07 0 0 1 1.075-1.066a1.07 1.07 0 0 1 1.075 1.066m6.895 9.071A2.41 2.41 0 0 0 26.684 28c0-.893-.479-1.67-1.189-2.084l1.01-1.727A4.41 4.41 0 0 1 28.685 28a4.41 4.41 0 0 1-2.18 3.81zM30.895 28c0-2.067-.9-3.786-2.113-4.663l1.173-1.62c1.807 1.307 2.94 3.672 2.94 6.283c0 2.61-1.133 4.976-2.94 6.284l-1.173-1.62c1.213-.878 2.113-2.597 2.113-4.664"></svg:path><svg:path d="M32.115 35.217c1.726-1.369 2.99-4.036 2.99-7.217s-1.264-5.848-2.99-7.216l1.243-1.567c2.302 1.825 3.747 5.128 3.747 8.783c0 3.656-1.445 6.958-3.747 8.783z"></svg:path></svg:g>`,
})
export class HealthiconsSpeechLanguageTherapyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpermIcon],svg[healthicons-sperm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M29.587 16.464c.305-.305.369-.77.235-1.18c-.704-2.149.038-4.903 2.08-6.945c2.687-2.687 6.609-3.123 8.76-.973s1.713 6.072-.974 8.76c-2.018 2.017-4.73 2.766-6.868 2.104c-.406-.126-.862-.057-1.163.244l-.24.241a3.55 3.55 0 0 1-2.719 1.14l-3.224-.12c-2.464-.091-4.308 2.39-3.49 4.699l.273.774c1.29 3.647-1.644 7.562-5.534 7.38l-1.964-.09c-.969-.045-1.748.852-1.566 1.803l.31 1.628c.487 2.549-1.34 5.046-3.934 5.378l-1.46.188a1.467 1.467 0 1 1-.373-2.911l1.57-.202c.865-.11 1.474-.943 1.312-1.792l-.31-1.629c-.545-2.853 1.792-5.544 4.697-5.41l1.965.092c1.768.082 3.102-1.698 2.515-3.355l-.274-.774c-1.517-4.287 1.908-8.896 6.483-8.726l3.224.12a.5.5 0 0 0 .389-.162z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpermIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSperm24pxIcon],svg[healthicons-sperm-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.257 3.04a3.91 3.91 0 0 0-3.217 3.217a2.33 2.33 0 0 0 .46 1.825l-.305.408c-.359.479-.922.76-1.52.76h-.823a2.806 2.806 0 0 0-2.661 3.693l.113.34a1.094 1.094 0 0 1-1.234 1.422a2.594 2.594 0 0 0-3.042 2.839l.024.213a1.254 1.254 0 0 1-1 1.368l-.7.14a.75.75 0 0 0 .295 1.47l.699-.14a2.754 2.754 0 0 0 2.197-3.004l-.024-.213a1.094 1.094 0 0 1 1.283-1.197c1.94.352 3.548-1.502 2.925-3.373l-.114-.34a1.306 1.306 0 0 1 1.24-1.718h.822a3.4 3.4 0 0 0 2.72-1.36l.357-.476c.31.083.646.103.99.046a3.91 3.91 0 0 0 3.218-3.217a2.348 2.348 0 0 0-2.703-2.703m-7.202.284a2.37 2.37 0 0 0-1.883 1.712c-.11.406-.037.802.155 1.122l-.468.7a.88.88 0 0 1-.73.392H7.75a2 2 0 0 0-2 2a.5.5 0 0 1-.5.5a2 2 0 0 0-2 2V12a.75.75 0 0 0 1.5 0v-.25a.5.5 0 0 1 .5-.5a2 2 0 0 0 2-2a.5.5 0 0 1 .5-.5h.378c.796 0 1.538-.397 1.98-1.06l.541-.812a1.5 1.5 0 0 0 .315-.05a2.37 2.37 0 0 0 1.712-1.883a1.41 1.41 0 0 0-1.621-1.62m7.092 7.984a2.24 2.24 0 0 0-1.838 1.838c-.037.219-.019.43.042.624l-1.319 1.539c-.24.28-.589.44-.956.44a2.76 2.76 0 0 0-2.297 1.229l-.042.063a2.9 2.9 0 0 0-.487 1.61V19a.75.75 0 0 0 1.5 0v-.349c0-.276.082-.547.235-.777l.042-.063a1.26 1.26 0 0 1 1.049-.561a2.76 2.76 0 0 0 2.095-.964l1.355-1.58q.159.013.327-.015a2.24 2.24 0 0 0 1.838-1.838a1.342 1.342 0 0 0-1.544-1.544"></svg:path>`,
})
export class HealthiconsSperm24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpermNegativeIcon],svg[healthicons-sperm-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpermNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM29.822 15.284c.134.41.07.874-.235 1.18l-.28.282a.5.5 0 0 1-.389.163l-3.224-.12c-4.575-.172-8 4.438-6.483 8.725l.274.774c.587 1.657-.747 3.437-2.515 3.355l-1.965-.091c-2.905-.135-5.242 2.556-4.698 5.409l.311 1.629c.162.849-.447 1.681-1.311 1.792l-1.571.202a1.467 1.467 0 1 0 .373 2.91l1.46-.187c2.594-.332 4.421-2.83 3.935-5.378l-.311-1.628c-.182-.951.598-1.848 1.566-1.803l1.964.09c3.89.181 6.825-3.733 5.534-7.38l-.274-.774c-.817-2.309 1.027-4.79 3.49-4.699l3.225.12a3.55 3.55 0 0 0 2.72-1.14l.24-.24c.3-.302.756-.37 1.162-.245c2.137.662 4.85-.087 6.868-2.105c2.687-2.687 3.123-6.609.973-8.76s-6.072-1.713-8.76.974c-2.041 2.042-2.784 4.796-2.08 6.945" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpermNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpermNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpermOutlineIcon],svg[healthicons-sperm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31.194 8.632c2.923-2.923 7.494-3.653 10.174-.973s1.95 7.25-.973 10.174c-2.298 2.297-5.519 3.206-8.125 2.267a.3.3 0 0 0-.148-.018l-.027.008l-.023.023a4.32 4.32 0 0 1-3.298 1.37l-3.013-.112c-1.61-.06-2.807 1.578-2.283 3.059l.256.723c1.447 4.089-1.828 8.432-6.161 8.23l-1.836-.084a.435.435 0 0 0-.435.498l.29 1.523c.565 2.956-1.544 5.823-4.532 6.206l-1.365.174a2.372 2.372 0 0 1-.602-4.704l1.468-.188a.437.437 0 0 0 .37-.496l-.29-1.523c-.63-3.303 2.06-6.398 5.42-6.242l1.835.086c.955.044 1.67-.934 1.362-1.803l-.256-.724c-1.657-4.683 2.069-9.673 7.039-9.488l2.78.104l.034-.033l.007-.025a.3.3 0 0 0-.012-.136c-.807-2.563.11-5.663 2.344-7.896m-2.34 8.058v-.001zm11.1-7.617c-1.62-1.62-4.893-1.48-7.345.973c-1.815 1.815-2.392 4.165-1.852 5.882c.214.68.134 1.55-.485 2.171l-.175.176c-.286.299-.691.47-1.117.454l-3.014-.112c-3.582-.134-6.257 3.492-5.079 6.822l.256.723c.79 2.23-.99 4.578-3.34 4.469l-1.835-.086c-2.072-.096-3.75 1.84-3.363 3.87l.29 1.522c.262 1.368-.708 2.679-2.08 2.855l-1.468.188a.371.371 0 1 0 .094.737l1.365-.175c1.86-.239 3.167-2.04 2.822-3.848l-.29-1.522c-.291-1.525.943-2.943 2.492-2.871l1.836.085c2.937.137 5.148-2.837 4.183-5.566l-.256-.723c-1.003-2.835 1.246-5.836 4.242-5.724l3.014.112a2.32 2.32 0 0 0 1.772-.748l.011-.012l.048-.048c.65-.652 1.57-.71 2.268-.459c1.728.623 4.161.072 6.033-1.8c2.452-2.452 2.593-5.725.973-7.345" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpermOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpermOutline24pxIcon],svg[healthicons-sperm-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.257 3.04a3.91 3.91 0 0 0-3.217 3.217a2.33 2.33 0 0 0 .46 1.825l-.305.408c-.359.479-.922.76-1.52.76h-.823a2.806 2.806 0 0 0-2.661 3.693l.113.34a1.094 1.094 0 0 1-1.234 1.422a2.594 2.594 0 0 0-3.042 2.839l.024.213a1.254 1.254 0 0 1-1 1.368l-.7.14a.75.75 0 0 0 .295 1.47l.699-.14a2.754 2.754 0 0 0 2.197-3.004l-.024-.213a1.094 1.094 0 0 1 1.283-1.197c1.94.352 3.548-1.502 2.925-3.373l-.114-.34a1.306 1.306 0 0 1 1.24-1.718h.822a3.4 3.4 0 0 0 2.72-1.36l.357-.476c.31.083.646.103.99.046a3.91 3.91 0 0 0 3.218-3.217a2.348 2.348 0 0 0-2.703-2.703m-7.202.284a2.37 2.37 0 0 0-1.883 1.712c-.11.406-.037.802.155 1.122l-.468.7a.88.88 0 0 1-.73.392H7.75a2 2 0 0 0-2 2a.5.5 0 0 1-.5.5a2 2 0 0 0-2 2V12a.75.75 0 0 0 1.5 0v-.25a.5.5 0 0 1 .5-.5a2 2 0 0 0 2-2a.5.5 0 0 1 .5-.5h.378c.796 0 1.538-.397 1.98-1.06l.541-.812a1.5 1.5 0 0 0 .315-.05a2.37 2.37 0 0 0 1.712-1.883a1.41 1.41 0 0 0-1.621-1.62m7.092 7.984a2.24 2.24 0 0 0-1.838 1.838c-.037.219-.019.43.042.624l-1.319 1.539c-.24.28-.589.44-.956.44a2.76 2.76 0 0 0-2.297 1.229l-.042.063a2.9 2.9 0 0 0-.487 1.61V19a.75.75 0 0 0 1.5 0v-.349c0-.276.082-.547.235-.777l.042-.063a1.26 1.26 0 0 1 1.049-.561a2.76 2.76 0 0 0 2.095-.964l1.355-1.58q.159.013.327-.015a2.24 2.24 0 0 0 1.838-1.838a1.342 1.342 0 0 0-1.544-1.544"></svg:path>`,
})
export class HealthiconsSpermOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpineIcon],svg[healthicons-spine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.206 6.242A1.01 1.01 0 0 0 15 7.229v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966c6.466 1.584 10.322 1.585 16.502.005a.99.99 0 0 0 .744-.962v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V9.887a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987c-5.904 1.15-9.684 1.135-15.586-.003M19 10a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-2.794 8.242a1.01 1.01 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966c6.466 1.584 10.322 1.585 16.502.006a.99.99 0 0 0 .744-.963v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987c-5.904 1.15-9.684 1.135-15.586-.003M19 22a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-2.794 8.242a1.01 1.01 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966c6.466 1.584 10.322 1.585 16.502.005a.99.99 0 0 0 .744-.962v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987c-5.904 1.15-9.684 1.135-15.586-.003M19 34a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpine24pxIcon],svg[healthicons-spine-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h2v.954a.9.9 0 0 0 .507.83A13.2 13.2 0 0 0 12 8a13.2 13.2 0 0 0 5.493-1.215a.9.9 0 0 0 .507-.83V5h2V3h-2.006c-.07-.682-.816-1.13-1.48-.895c-1.154.407-2.834.87-4.514.87s-3.36-.463-4.514-.87c-.664-.234-1.41.213-1.48.895H4zm0 7h2v.954a.9.9 0 0 0 .507.83C7.407 14.209 9.435 15 12 15s4.593-.792 5.493-1.215a.9.9 0 0 0 .507-.83V12h2v-2h-2.006c-.07-.682-.816-1.13-1.48-.895c-1.154.407-2.834.87-4.514.87s-3.36-.463-4.514-.87c-.664-.234-1.41.213-1.48.895H4zm0 7h2v.954a.9.9 0 0 0 .507.83C7.407 21.209 9.435 22 12 22s4.593-.792 5.493-1.215a.9.9 0 0 0 .507-.83V19h2v-2h-2.006c-.07-.682-.816-1.13-1.48-.895c-1.154.407-2.834.87-4.514.87s-3.36-.463-4.514-.87c-.664-.234-1.41.213-1.48.895H4z"></svg:path>`,
})
export class HealthiconsSpine24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpineNegativeIcon],svg[healthicons-spine-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpineNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM15 7.229c0-.634.583-1.107 1.206-.987c5.903 1.138 9.682 1.152 15.586.003A1.012 1.012 0 0 1 33 7.232v.655a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.848a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.12a.99.99 0 0 1-.744.961c-6.18 1.58-10.036 1.58-16.502-.005a.99.99 0 0 1-.754-.966v-1.11a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V9.887a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1zM18 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1.794 9.242a1.01 1.01 0 0 0-1.206.987v.658a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.848a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.11c0 .457.31.857.754.966c6.466 1.584 10.322 1.585 16.502.006a.99.99 0 0 0 .744-.963v-1.119a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1.848a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-.655c0-.635-.585-1.108-1.208-.987c-5.904 1.15-9.684 1.135-15.586-.003M19 22a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-4 9.229c0-.634.583-1.107 1.206-.987c5.903 1.138 9.682 1.152 15.586.003a1.012 1.012 0 0 1 1.208.987v.655a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1.848a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1.12c0 .452-.305.85-.744.962c-6.18 1.579-10.036 1.578-16.502-.006a.99.99 0 0 1-.754-.966v-1.11a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1.848a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1zM18 33a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpineNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpineNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpineOutlineIcon],svg[healthicons-spine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.75 7.229c0-1.274 1.166-2.205 2.393-1.97c5.198.994 8.516 1.006 13.71.003c1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878a1.99 1.99 0 0 1-1.498 1.931c-2.854.727-5.224 1.101-7.65 1.1c-2.424 0-4.856-.376-7.834-1.103a1.99 1.99 0 0 1-1.518-1.937v-.869H14a2 2 0 0 1-2-2V9.646a2 2 0 0 1 2-2h.75zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044c2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34V9.646h-.75a2 2 0 0 1-2-2v-.414l-.002-.002l-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008l-.007.004z"></svg:path><svg:path d="M19 9a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-4.25 11.229c0-1.274 1.166-2.205 2.393-1.97c5.198.994 8.516 1.006 13.71.003c1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878a1.99 1.99 0 0 1-1.498 1.931c-2.854.727-5.224 1.101-7.65 1.1c-2.424 0-4.856-.376-7.834-1.103a1.99 1.99 0 0 1-1.518-1.936v-.87H14a2 2 0 0 1-2-2v-1.528a2 2 0 0 1 2-2h.75zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044c2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34v-1.528h-.75a2 2 0 0 1-2-2v-.414l-.002-.002l-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008l-.007.004z"></svg:path><svg:path d="M19 22a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-4.25 11.229c0-1.274 1.166-2.205 2.393-1.97c5.198.994 8.516 1.006 13.71.003c1.227-.237 2.397.694 2.397 1.97v.414H34a2 2 0 0 1 2 2v1.528a2 2 0 0 1-2 2h-.75v.878a1.99 1.99 0 0 1-1.498 1.931c-2.854.727-5.224 1.101-7.65 1.1c-2.424 0-4.856-.376-7.834-1.103a1.99 1.99 0 0 1-1.518-1.936v-.87H14a2 2 0 0 1-2-2v-1.528a2 2 0 0 1 2-2h.75zm2 0v.417a2 2 0 0 1-2 2H14v1.528h.75a2 2 0 0 1 2 2v.865c2.886.704 5.147 1.044 7.353 1.044c2.203.001 4.397-.336 7.147-1.035v-.874a2 2 0 0 1 2-2H34v-1.528h-.75a2 2 0 0 1-2-2v-.414l-.002-.002l-.008-.004h-.008c-5.448 1.052-9.022 1.039-14.465-.003h-.008l-.007.004z"></svg:path><svg:path d="M19 35a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsSpineOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpineOutline24pxIcon],svg[healthicons-spine-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 5v-.678c0-1.507-1.644-2.535-3.1-2.148c-.892.236-1.896.414-2.9.414s-2.008-.178-2.9-.414C7.645 1.787 6 2.814 6 4.322V5H5a1 1 0 0 0 0 2h1v.313c0 .581.254 1.129.713 1.452c-.432.393-.713.934-.713 1.557V11H5a1 1 0 1 0 0 2h1v.313c0 .581.254 1.129.713 1.452c-.432.393-.713.934-.713 1.557V17H5a1 1 0 1 0 0 2h1v.313c0 .684.352 1.322.976 1.602C8.016 21.38 9.813 22 12 22s3.984-.62 5.024-1.085c.624-.28.976-.918.976-1.602V19h1a1 1 0 1 0 0-2h-1v-.678c0-.623-.28-1.164-.713-1.557c.46-.323.713-.87.713-1.452V13h1a1 1 0 1 0 0-2h-1v-.678c0-.623-.28-1.164-.713-1.557c.46-.323.713-.87.713-1.452V7h1a1 1 0 1 0 0-2zm-2-.678V4.32l-.006-.015a.4.4 0 0 0-.11-.106a.6.6 0 0 0-.472-.093c-1 .265-2.183.481-3.412.481s-2.412-.216-3.412-.481a.6.6 0 0 0-.471.093a.4.4 0 0 0-.111.106Q7.998 4.32 8 4.32v2.86c.897.377 2.317.82 4 .82s3.103-.443 4-.82zm0 12v-.001l-.006-.015a.4.4 0 0 0-.11-.106a.6.6 0 0 0-.472-.093c-1 .265-2.183.481-3.412.481s-2.412-.216-3.412-.481a.6.6 0 0 0-.471.093a.4.4 0 0 0-.111.106q-.008.015-.006.015v2.858a10.5 10.5 0 0 0 4 .82a10.5 10.5 0 0 0 4-.82zm-8-3.143V10.32l.006-.015a.4.4 0 0 1 .11-.106a.6.6 0 0 1 .472-.093c1 .265 2.183.481 3.412.481s2.412-.216 3.412-.481a.6.6 0 0 1 .471.093a.4.4 0 0 1 .111.106q.008.015.006.015v2.858a10.5 10.5 0 0 1-4 .82a10.5 10.5 0 0 1-4-.82" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpineOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpleenIcon],svg[healthicons-spleen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.657 24.15q.102-.048.203-.093l.044-.013c.306-.094.61-.051.995.161c.419.23.852.613 1.364 1.104l.232.226c.421.408.899.872 1.382 1.227c.582.428 1.338.83 2.225.748c.541-.05.935-.543.879-1.1c-.057-.558-.541-.97-1.083-.92c-.19.018-.46-.055-.89-.371c-.361-.267-.719-.613-1.141-1.022l-.27-.26c-.17-.164-.352-.336-.544-.507c.597-.02 1.229.017 1.906.11a.975.975 0 0 0 1.095-.873a1.026 1.026 0 0 0-.864-1.138c-2.53-.344-4.624-.015-6.653 1.01q-.354.18-.703.385q.796.613 1.636 1.191zl-.23.113c-1.692.855-3.383 2.309-5.498 4.464a.967.967 0 0 1-1.394-.017a1.034 1.034 0 0 1-.004-1.434c1.888-1.923 3.569-3.432 5.303-4.451c-6.341-4.876-10.272-11.197-2.627-15.9C29.023-2.802 44.11 26.834 33.396 40.29c-1.242 1.559-6.038 6.898-12.14 3.719c-6.988-3.64-5.063-7.908-3.29-11.836c1.362-3.021 2.635-5.842-.309-8.023m9.733-.998c-1.182-4.076-4.029-7.874-8.05-11.4l1.32-1.504c4.18 3.666 7.324 7.77 8.65 12.347c1.338 4.614.794 9.591-2.187 14.895l-1.744-.98c2.75-4.892 3.181-9.318 2.01-13.358" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSpleenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpleen24pxIcon],svg[healthicons-spleen-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.28 11.51c-1.115.672-2.024 1.57-3.06 2.866a1 1 0 0 0 1.56 1.249c.774-.966 1.4-1.605 2.048-2.079l.082-.032c.479-.215 1.058-.203 1.654-.052c-.064-.712-.515-1.449-1.614-2.302c-.23.113-.452.22-.67.35"></svg:path><svg:path fill-rule="evenodd" d="M13.131 2.365c2.172.754 4.305 2.622 5.657 6.289c1.65 4.471 1.334 7.526.308 9.582a7.1 7.1 0 0 1-3.13 3.149c-.27.142-.724.276-1.186.377c-.496.108-1.112.202-1.757.228c-.64.026-1.35-.013-2.014-.2c-.664-.189-1.352-.547-1.824-1.21c-1.624-2.283-.555-4.445-.077-5.41l.096-.198c.225-.473.431-.943.367-1.508q.284.073.57.183a6.7 6.7 0 0 1 1.263.657l.013.009h.001a1 1 0 0 0 1.166-1.625l-.003-.002l-.003-.002l-.01-.007l-.03-.02l-.101-.069a9 9 0 0 0-.973-.546l.282-.072a1 1 0 1 0-.492-1.94c-1.31.333-2.353.66-3.294 1.121l.013.02a10 10 0 0 0-.275-.215C5.99 9.671 4.966 8.124 5 6.491c.036-1.67 1.164-3.013 2.832-3.892c1.142-.602 3.183-.967 5.298-.234m-.914 3.513a1 1 0 0 1 1.405-.16c.74.587 1.416 1.44 1.96 2.308c.546.874 1 1.832 1.261 2.678c.811 2.614.898 4.886.11 6.695a1 1 0 0 1-1.834-.799c.52-1.19.554-2.918-.186-5.304c-.203-.654-.576-1.455-1.048-2.21c-.476-.761-1.01-1.409-1.507-1.803a1 1 0 0 1-.16-1.405" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSpleen24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpleenNegativeIcon],svg[healthicons-spleen-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpleenNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17.657 24.15q.102-.048.203-.093l.044-.013c.306-.094.61-.051.995.161c.419.23.852.613 1.364 1.104l.232.225c.421.409.899.873 1.382 1.228c.582.428 1.338.83 2.225.748c.541-.05.935-.543.878-1.1c-.056-.558-.54-.97-1.082-.92c-.19.018-.46-.056-.89-.371c-.361-.267-.719-.613-1.141-1.022l-.27-.26c-.17-.164-.352-.336-.544-.507c.597-.02 1.229.017 1.906.11a.975.975 0 0 0 1.095-.873a1.026 1.026 0 0 0-.864-1.138c-2.53-.344-4.624-.015-6.653 1.01q-.354.18-.703.385q.796.613 1.636 1.191zl-.23.113c-1.692.855-3.383 2.309-5.498 4.464a.967.967 0 0 1-1.394-.017a1.034 1.034 0 0 1-.004-1.434c1.888-1.923 3.569-3.432 5.303-4.451c-6.341-4.876-10.273-11.197-2.627-15.9C29.023-2.802 44.11 26.834 33.396 40.29c-1.242 1.559-6.038 6.898-12.141 3.719c-6.987-3.64-5.062-7.908-3.29-11.836c1.363-3.021 2.636-5.842-.308-8.023m1.684-12.398c4.02 3.526 6.867 7.324 8.049 11.4c1.17 4.04.739 8.466-2.01 13.358l1.743.98c2.98-5.304 3.524-10.281 2.188-14.895c-1.327-4.577-4.47-8.68-8.652-12.347z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpleenNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpleenNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpleenOutlineIcon],svg[healthicons-spleen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.224 7.635c-1.826 1.123-2.664 2.205-3.008 3.104c-.332.87-.307 1.844.15 2.996c.78 1.963 2.691 4.105 5.25 6.141a15 15 0 0 0-.693.224a5 5 0 0 0-.2.058q-.257.079-.487.2q-.399.16-.792.34c-5.479-4.693-8.307-10.426-1.238-14.774C30.024-3.803 45.11 25.832 34.397 39.29c-1.242 1.559-6.038 6.898-12.141 3.718c-6.987-3.64-5.062-7.907-3.29-11.835c.404-.896.8-1.775 1.082-2.625a4.5 4.5 0 0 0 1.866.674c-.159.473-.34.931-.522 1.364c-.192.456-.398.912-.594 1.348l-.018.04c-.193.428-.378.837-.552 1.246c-.747 1.754-1.094 3.06-.859 4.183c.208.992.993 2.344 3.822 3.818c2.35 1.224 4.372.829 6.047-.067c1.757-.94 3.059-2.411 3.613-3.108c2.296-2.882 3.288-6.736 3.145-10.914c-.143-4.176-1.421-8.53-3.482-12.21c-2.07-3.698-4.837-6.556-7.832-7.954c-2.902-1.355-6.104-1.394-9.457.668"></svg:path><svg:path d="M23.19 21.429c.541.074.928.583.864 1.138a.975.975 0 0 1-1.095.872a11 11 0 0 0-2.325-.086c.132.165.25.326.357.473l.148.204c.285.398.497.691.734.912c.232.217.39.267.572.25c.541-.05 1.026.362 1.082.92s-.337 1.05-.878 1.1c-.896.083-1.582-.304-2.088-.776c-.4-.372-.747-.858-1.02-1.24l-.017-.023l-.108-.15c-.334-.461-.575-.748-.815-.907c-.171-.114-.356-.177-.697-.072l-.044.012a10 10 0 0 0-.433.206c-1.691.855-3.383 2.309-5.498 4.464a.967.967 0 0 1-1.394-.017a1.034 1.034 0 0 1-.003-1.434c2.14-2.181 4.017-3.83 6.005-4.836c2.03-1.025 4.124-1.354 6.653-1.01"></svg:path><svg:path d="M18.34 11.752c4.021 3.526 6.868 7.324 8.05 11.4c1.17 4.04.739 8.466-2.01 13.358l1.743.98c2.98-5.304 3.524-10.282 2.188-14.895c-1.327-4.577-4.47-8.68-8.652-12.347z"></svg:path></svg:g>`,
})
export class HealthiconsSpleenOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpleenOutline24pxIcon],svg[healthicons-spleen-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.476 4.255c-1.576-.547-3.044-.238-3.71.113C7.468 5.052 7.014 5.853 7 6.534c-.015.717.442 1.726 1.9 2.825q.148.11.285.22c-.75.247-1.44.528-2.091.886C5.752 9.285 4.97 7.921 5 6.491c.036-1.67 1.164-3.013 2.832-3.892c1.142-.602 3.183-.967 5.298-.234c2.172.754 4.305 2.622 5.657 6.289c1.65 4.471 1.334 7.526.308 9.582a7.1 7.1 0 0 1-3.13 3.149c-.27.142-.724.276-1.186.377c-.496.108-1.112.202-1.757.228c-.64.026-1.35-.013-2.014-.2c-.664-.189-1.352-.547-1.824-1.21c-1.624-2.283-.555-4.445-.077-5.41l.096-.198c.08-.17.159-.338.223-.511q.167.047.354.12a5.7 5.7 0 0 1 1.011.516l.045.03l.005.003q.185.132.387.216a9 9 0 0 1-.203.452l-.015.031l-.087.184c-.49 1.02-1.02 2.126-.11 3.407c.125.175.35.335.74.445s.872.148 1.388.127a8.4 8.4 0 0 0 1.412-.184c.2-.044.37-.09.498-.13c.109-.033.164-.056.179-.062q.007-.003.003 0a5.1 5.1 0 0 0 2.272-2.274c.714-1.43 1.122-3.887-.394-7.996c-1.18-3.198-2.918-4.564-4.436-5.091"></svg:path><svg:path d="M11.217 5.878a1 1 0 0 1 1.405-.16c.74.587 1.416 1.44 1.96 2.308c.546.874 1 1.832 1.261 2.678c.811 2.614.898 4.886.11 6.695a1 1 0 0 1-1.834-.799c.52-1.19.554-2.918-.186-5.304c-.203-.654-.576-1.455-1.048-2.21c-.476-.761-1.01-1.409-1.507-1.803a1 1 0 0 1-.16-1.405"></svg:path><svg:path d="M11.746 11.97a1 1 0 1 0-.492-1.94c-1.626.413-2.869.816-3.973 1.48c-1.116.672-2.025 1.57-3.062 2.866a1 1 0 0 0 1.562 1.249c.773-.966 1.4-1.605 2.047-2.078q.041-.015.082-.033c.632-.284 1.44-.172 2.23.133a6.7 6.7 0 0 1 1.264.657l.013.009h.001a1 1 0 0 0 1.165-1.625l-.002-.002l-.003-.002l-.01-.007l-.03-.02l-.101-.069a9 9 0 0 0-.973-.546z"></svg:path></svg:g>`,
})
export class HealthiconsSpleenOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSprayingIcon],svg[healthicons-spraying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24.767 17.736c.376.17.794.264 1.233.264h4v-6h2v-2h-3.341a6 6 0 1 0-3.892 7.736M23 8c-1.48 0-2.773.804-3.465 2h6.93A4 4 0 0 0 23 8m3 8a1 1 0 0 1-1-1v-3h3v4z" clip-rule="evenodd"></svg:path><svg:path d="M10 20a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.054c.257 2.35 1.42 4.28 3.156 5.65c1.957 1.543 4.602 2.35 7.45 2.35c4.552 0 8.76-1.833 10.172-6.007a2.001 2.001 0 0 0 1.845-3.084l3.788-2.062l-.956-1.756l-4.856 2.643l-5.004-1.877h-.002A1 1 0 0 1 25 28.92V26a2 2 0 1 0-4 0v5a2 2 0 0 0 1.298 1.873l6.636 2.488C27.897 38.388 24.771 40 20.66 40c-2.487 0-4.671-.707-6.21-1.921c-1.313-1.035-2.184-2.456-2.398-4.218A4 4 0 0 0 15 30v-6a4 4 0 0 0-4-4h1.5a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2zm31.848 5.53l-1.696-1.06L36.696 30H42v-2h-1.696z"></svg:path><svg:path d="M18 20a2 2 0 0 0-2 2v9.5a5.5 5.5 0 0 0 8.758 4.431l-3.162-1.186A4 4 0 0 1 19 31v-5a4 4 0 0 1 8 0v-3a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class HealthiconsSprayingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSprayingNegativeIcon],svg[healthicons-spraying-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSprayingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM10 20a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.054c.257 2.35 1.42 4.28 3.156 5.65c1.957 1.543 4.602 2.35 7.45 2.35c4.552 0 8.76-1.833 10.172-6.007a2.001 2.001 0 0 0 1.845-3.084l3.788-2.062l-.956-1.756l-4.856 2.643L27 30.364l-1.351-.507h-.002A1 1 0 0 1 25 28.92V26a2 2 0 1 0-4 0v5a2 2 0 0 0 1.298 1.873l3.913 1.467l2.723 1.021C27.897 38.388 24.771 40 20.66 40c-2.487 0-4.671-.707-6.21-1.921c-1.313-1.035-2.184-2.456-2.398-4.218A4 4 0 0 0 15 30v-6a4 4 0 0 0-4-4h1.5a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2zm16.465-10A4 4 0 0 0 23 8c-1.48 0-2.773.804-3.465 2zM25 15v-3h3v4h-2a1 1 0 0 1-1-1m5 2v-5h2v-2h-3.341a6 6 0 1 0-3.892 7.736c.376.17.794.264 1.233.264h4zm10.152 7.47l-2.5 4l-.956 1.53H42v-2h-1.696l1.544-2.47zM18 20a2 2 0 0 0-2 2v9.5a5.5 5.5 0 0 0 8.758 4.431l-3.162-1.186A4 4 0 0 1 19 31v-5a4 4 0 0 1 8 0v-3a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSprayingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSprayingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSprayingOutlineIcon],svg[healthicons-spraying-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M32 10v2h-2v6h-3a3 3 0 0 1-1.635-.484A6 6 0 1 1 28.658 10zm-12.465 0A4 4 0 0 1 23 8c1.48 0 2.773.804 3.465 2zM19 12a4 4 0 0 0 5.12 3.841A3 3 0 0 1 24 15v-3zm7 3a1 1 0 0 0 1 1h1v-4h-2zm-11 6.354A4 4 0 0 0 12 20h1a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2h1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.054c.257 2.35 1.42 4.28 3.156 5.65c1.957 1.543 4.602 2.35 7.45 2.35c4.188 0 8.086-1.552 9.782-5.052a3 3 0 0 0 3.066-4.594l2.933-1.494l-.908-1.782l-3.865 1.969L26 28.92V23a3 3 0 0 0-3-3h-5a4 4 0 0 0-3 1.354M8 24a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm6.413 9.19a4 4 0 0 1-2.344.81c.242 1.698 1.102 3.071 2.38 4.079C15.987 39.293 18.172 40 20.659 40c3.675 0 6.562-1.287 7.875-3.72l-3.903-1.465a6.002 6.002 0 0 1-10.218-1.625m8.176.86l-.642-.241A3 3 0 0 1 20 31v-5a3 3 0 0 1 4-2.83V23a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2v7a4 4 0 0 0 6.589 3.05M24 28.92a2 2 0 0 0 1.298 1.873l6.053 2.27a1 1 0 0 1-.702 1.872l-8-3A1 1 0 0 1 22 31v-5a1 1 0 1 1 2 0z" clip-rule="evenodd"></svg:path><svg:path d="m40.152 24.47l1.696 1.06L40.304 28H42v2h-5.304z"></svg:path></svg:g>`,
})
export class HealthiconsSprayingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpreadsheetsIcon],svg[healthicons-spreadsheets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 20v3h16v-3zm0 8v-3h4v3zm0 2v3h4v-3zm6 0v3h4v-3zm6 0v3h4v-3zm0-2v-3h4v3zm-2 0h-4v-3h4z"></svg:path><svg:path fill-rule="evenodd" d="M30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1zM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M37.414 10H32V4.586z"></svg:path></svg:g>`,
})
export class HealthiconsSpreadsheetsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpreadsheetsNegativeIcon],svg[healthicons-spreadsheets-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSpreadsheetsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1zM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1zm2 1v3h16v-3zm0 8v-3h4v3zm0 5v-3h4v3zm6-3v3h4v-3zm6 3v-3h4v3zm0-5v-3h4v3zm-6 0h4v-3h-4zm10-18h5.414L32 4.586z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSpreadsheetsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSpreadsheetsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSpreadsheetsOutlineIcon],svg[healthicons-spreadsheets-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1zm2 6v3h4v-3zm0 8v-3h4v3zm6 0v-3h4v3zm6 0v-3h4v3zm0-8v3h4v-3zm-6 3h4v-3h-4zm-6-5h16v-3H16z"></svg:path><svg:path d="M10 5a1 1 0 0 1 1-1h20a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 38 11v32a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1zm2 1v36h24V12h-5a1 1 0 0 1-1-1V6zm20 1.414V10h2.586z"></svg:path></svg:g>`,
})
export class HealthiconsSpreadsheetsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareLargeIcon],svg[healthicons-square-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v34a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"></svg:path>`,
})
export class HealthiconsSquareLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareLargeNegativeIcon],svg[healthicons-square-large-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSquareLargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm7 6a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSquareLargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSquareLargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareLargeOutlineIcon],svg[healthicons-square-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 8v32h32V8zM7 6a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSquareLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareMediumIcon],svg[healthicons-square-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z"></svg:path>`,
})
export class HealthiconsSquareMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareMediumNegativeIcon],svg[healthicons-square-medium-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSquareMediumNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm10 9a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSquareMediumNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSquareMediumNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareMediumOutlineIcon],svg[healthicons-square-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 11v26h26V11zm-1-2a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSquareMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareSmallIcon],svg[healthicons-square-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1z"></svg:path>`,
})
export class HealthiconsSquareSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareSmallNegativeIcon],svg[healthicons-square-small-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSquareSmallNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm13 12a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSquareSmallNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSquareSmallNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareSmallOutlineIcon],svg[healthicons-square-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 14v20h20V14zm-1-2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSquareSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaplesIcon],svg[healthicons-staples-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 39v5h2v-5h5v1h2v-4h-2v1h-5v-7h5v1h2v-4h-2v1h-5v-8h5v1h2v-4h-2v1h-5v-7h5v1h2V8h-2v1h-5V4h-2v5h-5V8h-2v4h2v-1h5v7h-5v-1h-2v4h2v-1h5v8h-5v-1h-2v4h2v-1h5v7h-5v-1h-2v4h2v-1z"></svg:path>`,
})
export class HealthiconsStaplesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaples24pxIcon],svg[healthicons-staples-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6.75v4.5h-2.5V10h-1.5v4h1.5v-1.25h2.5v4.5h-2.5V16h-1.5v4h1.5v-1.25h2.5V22h1.5v-3.25h2.5V20h1.5v-4h-1.5v1.25h-2.5v-4.5h2.5V14h1.5v-4h-1.5v1.25h-2.5v-4.5h2.5V8h1.5V4h-1.5v1.25h-2.5V2h-1.5v3.25h-2.5V4h-1.5v4h1.5V6.75z"></svg:path>`,
})
export class HealthiconsStaples24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaplesOutlineIcon],svg[healthicons-staples-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18v-7h-5v1h-2V8h2v1h5V4h2v5h5V8h2v4h-2v-1h-5v7h5v-1h2v4h-2v-1h-5v8h5v-1h2v4h-2v-1h-5v7h5v-1h2v4h-2v-1h-5v5h-2v-5h-5v1h-2v-4h2v1h5v-7h-5v1h-2v-4h2v1h5v-8h-5v1h-2v-4h2v1z"></svg:path>`,
})
export class HealthiconsStaplesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaplesOutline24pxIcon],svg[healthicons-staples-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6.75v4.5h-2.5V10h-1.5v4h1.5v-1.25h2.5v4.5h-2.5V16h-1.5v4h1.5v-1.25h2.5V22h1.5v-3.25h2.5V20h1.5v-4h-1.5v1.25h-2.5v-4.5h2.5V14h1.5v-4h-1.5v1.25h-2.5v-4.5h2.5V8h1.5V4h-1.5v1.25h-2.5V2h-1.5v3.25h-2.5V4h-1.5v4h1.5V6.75z"></svg:path>`,
})
export class HealthiconsStaplesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarLargeIcon],svg[healthicons-star-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.097 7.064a1.005 1.005 0 0 1 1.806 0l4.782 9.736c.147.298.43.505.759.553l10.693 1.561c.826.121 1.155 1.141.558 1.726l-7.738 7.579a1.01 1.01 0 0 0-.29.895l1.827 10.7c.141.827-.722 1.458-1.461 1.068l-9.564-5.053a1 1 0 0 0-.938 0l-9.564 5.053c-.739.39-1.602-.24-1.461-1.067l1.826-10.7a1.01 1.01 0 0 0-.29-.896L6.306 20.64c-.598-.585-.268-1.605.558-1.726l10.694-1.56c.328-.049.611-.256.758-.554z"></svg:path>`,
})
export class HealthiconsStarLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarLargeNegativeIcon],svg[healthicons-star-large-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStarLargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.903 7.064a1.005 1.005 0 0 0-1.806 0L18.315 16.8c-.147.298-.43.505-.759.553L6.864 18.914c-.826.121-1.156 1.141-.558 1.726l7.738 7.579c.237.232.346.567.29.895l-1.827 10.7c-.141.827.722 1.458 1.461 1.068l9.564-5.053c.294-.155.644-.155.938 0l9.564 5.053c.739.39 1.602-.24 1.461-1.067l-1.827-10.7a1.01 1.01 0 0 1 .29-.896l7.738-7.579c.597-.585.268-1.605-.558-1.726l-10.693-1.56a1.01 1.01 0 0 1-.759-.554z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStarLargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStarLargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarLargeOutlineIcon],svg[healthicons-star-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m24 9.762l-3.89 7.92a3 3 0 0 1-2.265 1.65l-8.717 1.273l6.314 6.185a3.02 3.02 0 0 1 .862 2.66l-1.489 8.722l7.782-4.111a3 3 0 0 1 2.806 0l7.782 4.11l-1.489-8.72a3.02 3.02 0 0 1 .862-2.661l6.315-6.185l-8.718-1.273a3 3 0 0 1-2.265-1.65zm.903-2.698a1.005 1.005 0 0 0-1.806 0L18.315 16.8c-.147.298-.43.505-.759.553L6.864 18.914c-.826.121-1.156 1.141-.558 1.726l7.738 7.579c.237.232.346.567.29.895l-1.827 10.7c-.141.827.722 1.458 1.461 1.068l9.564-5.053c.294-.155.644-.155.938 0l9.564 5.053c.739.39 1.602-.24 1.461-1.067l-1.827-10.7a1.01 1.01 0 0 1 .29-.896l7.738-7.579c.597-.585.268-1.605-.558-1.726l-10.693-1.56a1.01 1.01 0 0 1-.759-.554z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStarLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarMediumIcon],svg[healthicons-star-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.108 11.06a.99.99 0 0 1 1.784 0l3.556 7.278a1 1 0 0 0 .749.55l7.95 1.167c.816.12 1.142 1.133.551 1.714l-5.752 5.665a1.01 1.01 0 0 0-.286.89l1.358 7.999c.139.82-.714 1.447-1.444 1.06l-7.11-3.777a.99.99 0 0 0-.927 0l-7.11 3.776c-.73.388-1.584-.238-1.445-1.06l1.358-7.998a1.01 1.01 0 0 0-.286-.89l-5.752-5.665c-.591-.581-.265-1.594.551-1.714l7.95-1.167a1 1 0 0 0 .75-.55z"></svg:path><svg:path fill-rule="evenodd" d="m16.34 28.324l1.972.335l-1.018 5.998l5.305-2.817a2.99 2.99 0 0 1 2.802 0l5.305 2.817l-1.018-5.998a3.01 3.01 0 0 1 .855-2.65l4.332-4.266l-5.969-.876a3 3 0 0 1-2.255-1.651l1.797-.878a1 1 0 0 0 .749.55l7.95 1.167c.816.12 1.142 1.133.551 1.714l-5.752 5.665a1.01 1.01 0 0 0-.286.89l1.358 7.999c.139.82-.714 1.447-1.444 1.06l-7.11-3.777a.99.99 0 0 0-.927 0l-7.11 3.776c-.73.388-1.584-.238-1.445-1.06zm-6.038-6.555c-.591-.581-.265-1.594.551-1.714l7.95-1.167a1 1 0 0 0 .75-.55l1.796.878a3 3 0 0 1-2.256 1.65l-5.968.877l4.333 4.266a3.01 3.01 0 0 1 .854 2.65l-1.972-.335a1.01 1.01 0 0 0-.286-.89zM24 13.79l2.65 5.426l1.798-.878l-3.556-7.278a.99.99 0 0 0-1.784 0l-3.556 7.278l1.797.878z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStarMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarMediumNegativeIcon],svg[healthicons-star-medium-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStarMediumNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.892 11.06a.99.99 0 0 0-1.784 0l-3.556 7.278a1 1 0 0 1-.749.55l-7.95 1.167c-.816.12-1.142 1.133-.551 1.714l5.752 5.665c.235.231.342.564.286.89l-1.358 7.999c-.139.82.714 1.447 1.444 1.06l7.11-3.777a.99.99 0 0 1 .927 0l7.11 3.776c.73.388 1.584-.238 1.445-1.06l-1.358-7.998a1.01 1.01 0 0 1 .286-.89l5.752-5.665c.591-.581.265-1.594-.551-1.714l-7.95-1.167a1 1 0 0 1-.75-.55z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStarMediumNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStarMediumNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarMediumOutlineIcon],svg[healthicons-star-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.34 28.324l1.972.335l-1.018 5.998l5.305-2.817a2.99 2.99 0 0 1 2.802 0l5.305 2.817l-1.018-5.998a3.01 3.01 0 0 1 .855-2.65l4.332-4.266l-5.968-.876a3 3 0 0 1-2.256-1.651l1.797-.878a1 1 0 0 0 .749.55l7.95 1.167c.816.12 1.142 1.133.551 1.714l-5.752 5.665a1.01 1.01 0 0 0-.286.89l1.358 7.999c.139.82-.714 1.447-1.444 1.06l-7.11-3.777a.99.99 0 0 0-.927 0l-7.11 3.776c-.73.388-1.584-.238-1.445-1.06zm-6.038-6.555c-.591-.581-.265-1.594.551-1.714l7.95-1.167a1 1 0 0 0 .75-.55l1.796.878a3 3 0 0 1-2.255 1.65l-5.97.877l4.333 4.266a3.01 3.01 0 0 1 .855 2.65l-1.972-.335a1.01 1.01 0 0 0-.286-.89zM24 13.79l2.65 5.426l1.798-.878l-3.556-7.278a.99.99 0 0 0-1.784 0l-3.556 7.278l1.797.878z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStarMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarSmallIcon],svg[healthicons-star-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.083 14.568a1.025 1.025 0 0 1 1.834 0l2.452 4.951c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854a1.02 1.02 0 0 0-.294.902l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.03 1.03 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.02 1.02 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557z"></svg:path><svg:path fill-rule="evenodd" d="m24 17.222l-1.577 3.185l-1.792-.888l2.452-4.95a1.025 1.025 0 0 1 1.834 0l2.452 4.95l-1.792.888zm6.222 9.24a1.02 1.02 0 0 0-.294.903l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.03 1.03 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.02 1.02 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557l1.793.888a3.02 3.02 0 0 1-2.276 1.649l-3.512.508l2.536 2.464l-1.31 1.349l1.31-1.35a3.02 3.02 0 0 1 .872 2.677l-.6 3.488l3.153-1.652a3.03 3.03 0 0 1 2.808 0l3.153 1.652l-.6-3.488a3.02 3.02 0 0 1 .872-2.676zm1.143-3.898l-3.512-.508a3.02 3.02 0 0 1-2.276-1.65l1.792-.887c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854l-1.393-1.435z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStarSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarSmallNegativeIcon],svg[healthicons-star-small-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStarSmallNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.917 14.568a1.025 1.025 0 0 0-1.834 0L20.63 19.52c-.15.3-.437.51-.77.558l-5.484.793a1.018 1.018 0 0 0-.567 1.739l3.968 3.854c.24.234.35.571.294.902l-.937 5.441c-.143.833.734 1.468 1.484 1.075l4.905-2.57c.298-.156.654-.156.952 0l4.905 2.57c.75.393 1.627-.242 1.484-1.075l-.937-5.441c-.057-.33.053-.668.294-.902l3.968-3.854a1.018 1.018 0 0 0-.567-1.739l-5.483-.794a1.02 1.02 0 0 1-.77-.557z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStarSmallNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStarSmallNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarSmallOutlineIcon],svg[healthicons-star-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m24 17.222l-1.577 3.185l-1.792-.888l2.452-4.95a1.025 1.025 0 0 1 1.834 0l2.452 4.95l-1.792.888zm6.222 9.24a1.02 1.02 0 0 0-.294.903l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.03 1.03 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.02 1.02 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557l1.793.888a3.02 3.02 0 0 1-2.276 1.649l-3.512.508l2.536 2.464l-1.31 1.349l1.31-1.35a3.02 3.02 0 0 1 .872 2.677l-.6 3.488l3.153-1.652a3.03 3.03 0 0 1 2.808 0l3.153 1.652l-.6-3.488a3.02 3.02 0 0 1 .872-2.676zm1.143-3.898l-3.512-.508a3.02 3.02 0 0 1-2.276-1.65l1.792-.887c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854l-1.393-1.435z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStarSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStentIcon],svg[healthicons-stent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M27.623 7.12a21 21 0 0 0-7.246 0L17 7.71v2.191a9.3 9.3 0 0 1-.903 4l-.42.882A17.3 17.3 0 0 0 14 22.212v.074c0 3.213.716 6.386 2.097 9.288l.323.678c.382.803.58 1.68.58 2.57v3.467l1.652.29c3.538.62 7.158.62 10.696 0l1.652-.29v-2.716c0-1.383.308-2.75.903-4A21.6 21.6 0 0 0 34 22.287v-.074c0-2.57-.573-5.108-1.677-7.429l-.743-1.56a6 6 0 0 1-.58-2.57V7.71zm-3.61 9.41l-2.546-3.887l-3.799 5.585l3.03 4.546l-3.03 4.454l3.79 5.687l2.573-3.928l2.617 3.928l3.698-5.643l-2.95-4.5l2.95-4.5l-3.689-5.628zm1.875 6.245l-1.857-2.787l-1.825 2.784l1.808 2.758zm-4.456-6.419l-1.28 1.882l1.29 1.934l1.245-1.9zm3.91 1.882l1.28-1.882l1.256 1.916l-1.246 1.9zm-3.91 7.118l-1.28 1.882l1.29 1.934l1.245-1.9zm3.91 1.882l1.28-1.882l1.255 1.916l-1.245 1.9z"></svg:path><svg:path d="M34 4a1 1 0 0 1 1 1v5.653c0 .889.198 1.767.58 2.57l.743 1.56A17.3 17.3 0 0 1 38 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.3 9.3 0 0 0-.903 4V42.5a1 1 0 1 1-2 0v-6.927c0-1.68.375-3.34 1.097-4.859A19.6 19.6 0 0 0 36 22.286v-.074a15.3 15.3 0 0 0-1.483-6.57l-.743-1.56a8 8 0 0 1-.774-3.43V5a1 1 0 0 1 1-1M14 4a1 1 0 0 0-1 1v5.653c0 .889-.198 1.767-.58 2.57l-.743 1.56A17.3 17.3 0 0 0 10 22.212v.074c0 3.213.716 6.386 2.097 9.288a9.3 9.3 0 0 1 .903 4V43a1 1 0 1 0 2 0v-7.427c0-1.68-.375-3.34-1.097-4.859A19.6 19.6 0 0 1 12 22.286v-.074c0-2.273.507-4.517 1.483-6.57l.743-1.56a8 8 0 0 0 .774-3.43V5a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class HealthiconsStentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStentNegativeIcon],svg[healthicons-stent-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m13.998 41.52l-.194-.04l.392-1.96l.194.038a49 49 0 0 0 19.22 0l.194-.039l.392 1.962l-.194.038a51 51 0 0 1-20.004 0M20.377 7.12a21 21 0 0 1 7.246 0L31 7.71v2.943c0 .889.198 1.767.58 2.57l.743 1.56A17.3 17.3 0 0 1 34 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.3 9.3 0 0 0-.903 4v2.715l-1.652.29c-3.538.62-7.158.62-10.696 0L17 38.289v-3.467a6 6 0 0 0-.58-2.57l-.323-.678A21.6 21.6 0 0 1 14 22.286v-.074c0-2.57.573-5.108 1.677-7.429l.42-.882a9.3 9.3 0 0 0 .903-4v-2.19zm6.9 1.97a19 19 0 0 0-6.555 0L19 9.39v.511c0 1.681-.375 3.341-1.097 4.86l-.42.881A15.3 15.3 0 0 0 16 22.212v.074c0 2.916.65 5.795 1.903 8.428l.323.679A8 8 0 0 1 19 34.822v1.787c3.308.58 6.692.58 10 0v-1.036c0-1.68.375-3.34 1.097-4.859A19.6 19.6 0 0 0 32 22.286v-.074a15.3 15.3 0 0 0-1.483-6.57l-.743-1.56a8 8 0 0 1-.774-3.43v-1.26z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m21.45 14.5l2.47 3.772l-2.47 3.772l-2.54-3.811z"></svg:path><svg:path d="m21.467 12.644l3.688 5.628l-3.698 5.643l-3.789-5.687zm-.035 3.712l-1.28 1.882l1.29 1.935l1.245-1.901z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m26.64 14.5l2.471 3.772l-2.471 3.772l-2.54-3.811z"></svg:path><svg:path d="m26.657 12.644l3.688 5.628l-3.697 5.643l-3.79-5.687zm-.035 3.712l-1.28 1.882l1.29 1.935l1.245-1.901z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m21.45 23.5l2.47 3.772l-2.47 3.772l-2.54-3.811z"></svg:path><svg:path d="m21.467 21.644l3.688 5.628l-3.698 5.643l-3.789-5.687zm-.035 3.712l-1.28 1.882l1.29 1.935l1.245-1.901z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m26.64 23.5l2.471 3.772l-2.471 3.772l-2.54-3.811z"></svg:path><svg:path d="m26.657 21.644l3.688 5.628l-3.697 5.643l-3.79-5.687zm-.035 3.712l-1.28 1.882l1.29 1.935l1.245-1.901zM34 4a1 1 0 0 1 1 1v5.653c0 .889.198 1.767.58 2.57l.743 1.56A17.3 17.3 0 0 1 38 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.3 9.3 0 0 0-.903 4V43a1 1 0 1 1-2 0v-7.427c0-1.68.375-3.34 1.097-4.859A19.6 19.6 0 0 0 36 22.286v-.074a15.3 15.3 0 0 0-1.483-6.57l-.743-1.56a8 8 0 0 1-.774-3.43V5a1 1 0 0 1 1-1M14 4a1 1 0 0 0-1 1v5.653c0 .889-.198 1.767-.58 2.57l-.743 1.56A17.3 17.3 0 0 0 10 22.212v.074c0 3.213.716 6.386 2.097 9.288a9.3 9.3 0 0 1 .903 4V43a1 1 0 1 0 2 0v-7.427c0-1.68-.375-3.34-1.097-4.859A19.6 19.6 0 0 1 12 22.286v-.074c0-2.273.507-4.517 1.483-6.57l.743-1.56a8 8 0 0 0 .774-3.43V5a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStentNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStentOutlineIcon],svg[healthicons-stent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5a1 1 0 1 1 2 0v5.653a8 8 0 0 1-.774 3.429l-.743 1.56A15.3 15.3 0 0 0 12 22.212v.074c0 2.916.65 5.795 1.903 8.428A11.3 11.3 0 0 1 15 35.574V43a1 1 0 1 1-2 0v-7.427c0-1.383-.309-2.75-.903-4A21.6 21.6 0 0 1 10 22.287v-.074c0-2.57.573-5.108 1.677-7.429l.743-1.56c.382-.803.58-1.681.58-2.57zm22 0a1 1 0 1 0-2 0v5.653a8 8 0 0 0 .774 3.429l.743 1.56A15.3 15.3 0 0 1 36 22.212v.074c0 2.916-.65 5.795-1.903 8.428A11.3 11.3 0 0 0 33 35.574V43a1 1 0 1 0 2 0v-7.427c0-1.383.309-2.75.903-4A21.6 21.6 0 0 0 38 22.287v-.074c0-2.57-.573-5.108-1.677-7.429l-.743-1.56a6 6 0 0 1-.58-2.57z"></svg:path><svg:path fill-rule="evenodd" d="m24.014 16.53l-2.547-3.886l-3.799 5.584l3.03 4.547l-3.03 4.453l3.79 5.687l2.573-3.927l2.617 3.927l3.698-5.643l-2.95-4.5l2.95-4.5l-3.689-5.628zm1.874 6.245l-1.857-2.787l-1.825 2.784l1.808 2.758zm-5.736-4.537l1.28-1.882l1.255 1.916l-1.245 1.9zm5.19 0l1.28-1.882l1.256 1.916l-1.246 1.9zm-3.91 7.118l-1.28 1.882l1.29 1.935l1.245-1.901zm3.91 1.882l1.28-1.882l1.256 1.916l-1.246 1.9z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M20.377 7.12a21 21 0 0 1 7.246 0L31 7.71v2.943c0 .889.198 1.767.58 2.57l.743 1.56A17.3 17.3 0 0 1 34 22.212v.074c0 3.213-.716 6.386-2.097 9.288a9.3 9.3 0 0 0-.903 4v2.715l-1.652.29c-3.538.62-7.158.62-10.696 0L17 38.289v-3.467a6 6 0 0 0-.58-2.57l-.323-.678A21.6 21.6 0 0 1 14 22.286v-.074c0-2.57.573-5.108 1.677-7.429l.42-.882a9.3 9.3 0 0 0 .903-4v-2.19zm6.9 1.97a19 19 0 0 0-6.555 0L19 9.39v.511c0 1.681-.375 3.341-1.097 4.86l-.42.881A15.3 15.3 0 0 0 16 22.212v.074c0 2.916.65 5.795 1.903 8.428l.323.679a8 8 0 0 1 .774 3.43v1.786c3.308.58 6.692.58 10 0v-1.036c0-1.68.375-3.34 1.097-4.859A19.6 19.6 0 0 0 32 22.286v-.074a15.3 15.3 0 0 0-1.483-6.57l-.743-1.56a8 8 0 0 1-.774-3.43v-1.26z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStentOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscopeIcon],svg[healthicons-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 1 0-1.732-3H10a3 3 0 0 0-3 3v9c-.552 0-1.005.449-.955.999A11 11 0 0 0 14 29.583V32c0 1.306.835 2.418 2 2.83a7.25 7.25 0 0 0 14.5-.08v-4a3.75 3.75 0 1 1 7.5 0v2.42a3.001 3.001 0 1 0 2 0v-2.42a5.75 5.75 0 0 0-11.5 0v4a5.25 5.25 0 0 1-10.5.08A3 3 0 0 0 20 32v-2.417a11 11 0 0 0 7.955-9.584c.05-.55-.403-.999-.955-.999v-9a3 3 0 0 0-3-3h-.268A2 2 0 0 0 20 8a2 2 0 0 0 3.732 1H24a1 1 0 0 1 1 1v9h.21c-.553 0-.993.45-1.07.997a7.21 7.21 0 0 1-14.28 0C9.783 19.45 9.343 19 8.79 19H9v-9a1 1 0 0 1 1-1h.268A2 2 0 0 0 12 10"></svg:path>`,
})
export class HealthiconsStethoscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscope24pxIcon],svg[healthicons-stethoscope-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 3a2 2 0 0 0-2 2v5c0 2.364 1.749 4.227 4 4.81V16a1 1 0 0 0 .502.867A4.25 4.25 0 0 0 16 16.75V16a1.5 1.5 0 0 1 2.824-.707a2.5 2.5 0 1 0 2.076-.126A3.502 3.502 0 0 0 14 16v.75a2.25 2.25 0 0 1-4.497.115A1 1 0 0 0 10 16v-1.19c2.251-.583 4-2.446 4-4.81V5a2 2 0 0 0-2-2h-1a1 1 0 1 0 0 2h1v5c0 1.55-1.453 3-3.5 3S5 11.55 5 10V5h1a1 1 0 0 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M9.33 12.917q.086-.018.17-.04a3.6 3.6 0 0 0 1.26-.587C11.536 11.72 12 10.876 12 10V5h-1a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5c0 .9-.254 1.727-.692 2.44a5 5 0 0 1-.468.638c-.719.831-1.717 1.44-2.84 1.731a6 6 0 0 1-1 .17m5.47-.732A3.5 3.5 0 0 0 14 16v.75a2.25 2.25 0 0 1-4.497.115l-.002-.052l-.03-1.12l-.471-.27m5.47-1.176a3.51 3.51 0 0 1 3.273-1.739a3.5 3.5 0 0 1 2.844 1.842l.026.048q.187.363.287.769q.082.031.16.069l.47.879l-1.563.835l-.762-.294l-.248-1.015a1.5 1.5 0 0 0-.113-.31l-.04-.073l.02.035A1.51 1.51 0 0 0 17.5 14.5A1.5 1.5 0 0 0 16 16v.75a4.3 4.3 0 0 1-.384 1.768a4.25 4.25 0 0 1-8.11-1.553l-.002-.019l-.002-.079H7.5l-.056-1.118l.556-.323v-.447a6 6 0 0 1-1-.17C4.749 14.228 3 12.365 3 10V5a2 2 0 0 1 2-2h1a1 1 0 0 1 0 2H5v5c0 .876.465 1.721 1.24 2.29a3.6 3.6 0 0 0 1.43.627q.395.082.83.083q.435-.001.83-.083m8.404 5.641A6.2 6.2 0 0 0 18 16.75V16a.5.5 0 0 1-.266.442A2.5 2.5 0 0 0 17.5 17.5c0 .378.084.737.234 1.058m2.233-1.608l-.2.108a.5.5 0 1 0 .413-.025z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStethoscope24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscopeNegativeIcon],svg[healthicons-stethoscope-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStethoscopeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm27 19c.552 0 1.005.449.955.999A11 11 0 0 1 20 29.583V32a3 3 0 0 1-2 2.83a5.25 5.25 0 0 0 10.5-.08v-4a5.75 5.75 0 0 1 11.5 0v2.42a3.001 3.001 0 1 1-2 0v-2.42a3.75 3.75 0 1 0-7.5 0v4a7.25 7.25 0 0 1-14.5.08A3 3 0 0 1 14 32v-2.417a11 11 0 0 1-7.955-9.584c-.05-.55.403-.999.955-.999v-9a3 3 0 0 1 3-3h.268A2 2 0 0 1 14 8a2 2 0 0 1-3.732 1H10a1 1 0 0 0-1 1v9h-.21c.553 0 .993.45 1.07.997a7.21 7.21 0 0 0 14.28 0c.077-.547.517-.997 1.07-.997H25v-9a1 1 0 0 0-1-1h-.268A2 2 0 0 1 20 8a2 2 0 0 1 3.732-1H24a3 3 0 0 1 3 3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStethoscopeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStethoscopeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscopeOutlineIcon],svg[healthicons-stethoscope-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10a2 2 0 1 0-1.732-3H10a3 3 0 0 0-3 3v9h2v-9a1 1 0 0 1 1-1h.268A2 2 0 0 0 12 10"></svg:path><svg:path fill-rule="evenodd" d="M10.16 19H7c-.552 0-1.005.449-.955.999A11 11 0 0 0 14 29.583V32c0 1.306.835 2.418 2 2.83a7.25 7.25 0 0 0 14.5-.08v-4a3.75 3.75 0 1 1 7.5 0v2.42a3.001 3.001 0 1 0 2 0v-2.42a5.75 5.75 0 0 0-11.5 0v4a5.25 5.25 0 0 1-10.5.08A3 3 0 0 0 20 32v-2.417a11 11 0 0 0 7.955-9.584c.05-.55-.403-.999-.955-.999v-9a3 3 0 0 0-3-3h-.268A2 2 0 0 0 20 8a2 2 0 0 0 3.732 1H24a1 1 0 0 1 1 1v9h-1.16c-.552 0-.991.45-1.085.995a5.84 5.84 0 0 1-11.51 0c-.094-.544-.533-.995-1.085-.995m14.42 2h1.195a9 9 0 0 1-17.55 0H9.42a7.84 7.84 0 0 0 15.16 0M39 35a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-21-5v2a1 1 0 1 1-2 0v-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStethoscopeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStethoscopeOutline24pxIcon],svg[healthicons-stethoscope-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v5c0 2.364 1.749 4.227 4 4.81V16a1 1 0 0 0 .5.866v.275a3.859 3.859 0 0 0 7.717 0v-1a1.641 1.641 0 0 1 3.062-.823A2.5 2.5 0 0 0 19.5 20a2.5 2.5 0 0 0 .864-4.847a3.643 3.643 0 0 0-7.147.988v1a1.859 1.859 0 0 1-3.717 0v-.275A1 1 0 0 0 10 16v-1.19c2.251-.583 4-2.446 4-4.81V5a2 2 0 0 0-2-2h-1a1 1 0 1 0 0 2h1v5c0 1.55-1.453 3-3.5 3S5 11.55 5 10V5h1a1 1 0 0 0 0-2zm14.5 15a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStethoscopeOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStiIcon],svg[healthicons-sti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M14.826 15.077A2 2 0 0 1 16.6 14h12.418c2.122 0 3.892.742 5.136 2.001A6.46 6.46 0 0 1 36 20.481c.015 1.61-.564 3.26-1.793 4.513c-1.054 1.075-2.492 1.764-4.207 1.953V42a2 2 0 0 1-3.994.153l-.87-11.316a4.002 4.002 0 1 0-2.771-7.489c-.195-.575-.565-1.118-1.114-1.585A133 133 0 0 0 18 19.08V18h-.186l-1.168 2.246l-.151.194l.016.012l.05.04a120 120 0 0 1 .92.736c.619.502 1.485 1.215 2.473 2.057c.506.43.608.852.568 1.199c-.045.392-.293.838-.745 1.198c-.729.58-1.839.822-2.908.174l-4.118-3.294a2 2 0 0 1-.525-2.485zm5.259 12.746a4.54 4.54 0 0 1-2.085.415V42a2 2 0 0 0 3.994.153l.87-11.316a4.01 4.01 0 0 1-2.78-3.014M24 29a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6-10.892V22.9c.64-.143 1.07-.42 1.35-.707A2.34 2.34 0 0 0 32 20.52a2.46 2.46 0 0 0-.693-1.708c-.287-.29-.706-.56-1.307-.703" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStiNegativeIcon],svg[healthicons-sti-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStiNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-11.4 6a2 2 0 0 0-1.774 1.077l-2.6 5a2 2 0 0 0 .525 2.485l4.118 3.294c1.07.648 2.18.406 2.908-.174c.452-.36.7-.806.745-1.198c.04-.347-.062-.768-.568-1.2a131 131 0 0 0-3.394-2.793l-.05-.039l-.012-.01l-.003-.002l.151-.194L17.815 18H18v1.08c.174.139.426.34.74.595c.63.51 1.509 1.233 2.511 2.087c.549.468.919 1.01 1.114 1.586a4 4 0 1 1 2.77 7.488l.87 11.317A2 2 0 0 0 30 42V26.947c1.715-.19 3.153-.878 4.207-1.953c1.229-1.253 1.808-2.903 1.793-4.513A6.46 6.46 0 0 0 34.154 16c-1.244-1.259-3.014-2-5.135-2zM18 28.238a4.54 4.54 0 0 0 2.085-.415a4.01 4.01 0 0 0 2.78 3.014l-.87 11.316A2 2 0 0 1 18 42V28.239M26 27a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-4.1v-4.792c.601.143 1.02.413 1.307.703A2.46 2.46 0 0 1 32 20.519c.006.64-.223 1.24-.65 1.674c-.28.287-.71.564-1.35.707" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStiNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStiNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStiOutlineIcon],svg[healthicons-sti-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M30 19a1 1 0 0 0-1 1v5a1 1 0 0 0 1.005 1h.016c1.448 0 2.428-.479 3.044-1.106c.626-.639.943-1.5.935-2.384a3.46 3.46 0 0 0-.981-2.401c-.627-.635-1.603-1.109-3-1.109zm1.637 4.493a1.5 1.5 0 0 1-.637.372v-2.716c.291.104.477.245.595.365c.25.253.401.617.405 1.015a1.34 1.34 0 0 1-.363.964"></svg:path><svg:path d="M31 30v-.048c1.967-.194 3.665-.977 4.92-2.258c1.431-1.458 2.097-3.37 2.08-5.223a7.46 7.46 0 0 0-2.135-5.172C34.416 15.83 32.382 15 30.018 15H16.6a3 3 0 0 0-2.662 1.616l-2.6 5a3 3 0 0 0 .788 3.727L17 29.242V41a3 3 0 0 0 5.988.272l.66-7.272h.703l.661 7.272A3 3 0 0 0 31 41zM15.713 17.539A1 1 0 0 1 16.6 17h13.419c1.88 0 3.385.652 4.423 1.704A5.46 5.46 0 0 1 36 22.49c.013 1.369-.48 2.756-1.507 3.804C33.455 27.352 31.937 28 30.02 28h-.016A1 1 0 0 0 29 29v12a1 1 0 0 1-1.996.09l-.744-8.18a1 1 0 0 0-.182-.491a4 4 0 1 0-4.382-6.689l-.054-.106c-.499-.923-1.484-1.692-2.572-2.446L19 23.13V20a1 1 0 0 0-1-1h-.186a1 1 0 0 0-.887.539l-1.282 2.464a1 1 0 0 0 .263 1.243l1.221.977l-.02.03l.821.569c1.125.78 1.711 1.307 1.953 1.753c.1.187.13.342.115.508c-.017.182-.095.443-.32.814a.55.55 0 0 1-.148.177c-.007.005-.01.007-.031.008c-.08.004-.279-.035-.641-.245c-.345-.2-.714-.482-1.12-.8l-.11-.086c-.352-.275-.746-.585-1.108-.805l-.79-.482l-2.355-1.883a1 1 0 0 1-.262-1.242zM19.59 30.08c-.203.01-.4-.01-.59-.049V41a1 1 0 0 0 1.996.09l.744-8.18a1 1 0 0 1 .182-.491a4 4 0 0 1-1.8-2.432a2 2 0 0 1-.532.093M24 31a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class HealthiconsStiOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStitchesIcon],svg[healthicons-stitches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 39.979V44h2v-4.019c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796v-7c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V20.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V11.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V4h-2v5.976c-1.37-.068-2.346-.276-3.105-.544A7 7 0 0 1 19 9.048V9a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 18a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v7.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 28a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 37a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66"></svg:path>`,
})
export class HealthiconsStitchesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStitches24pxIcon],svg[healthicons-stitches-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 19.725V22h1.5v-2.272c1.272-.077 2.105-.353 2.697-.73q.026.002.053.002a1 1 0 1 0-.98-1.196c-.346.187-.883.36-1.77.421v-4.497c1.272-.077 2.105-.353 2.697-.73q.026.003.053.002a1 1 0 1 0-.98-1.196c-.346.187-.883.36-1.77.421V7.728c1.272-.077 2.105-.353 2.697-.73q.026.003.053.002a1 1 0 1 0-.98-1.196c-.346.187-.883.36-1.77.421V2h-1.5v4.221a4.8 4.8 0 0 1-1.22-.24a3.5 3.5 0 0 1-.57-.262a1 1 0 1 0-.803 1.269c.25.145.535.287.875.407c.47.166 1.024.282 1.718.33v4.496a4.8 4.8 0 0 1-1.22-.24a3.6 3.6 0 0 1-.57-.262a1 1 0 1 0-.803 1.269c.25.145.535.287.875.407c.47.166 1.024.282 1.718.33v4.496a4.8 4.8 0 0 1-1.22-.24a3.6 3.6 0 0 1-.57-.262a1 1 0 1 0-.803 1.269c.25.145.535.287.875.407c.47.166 1.024.282 1.718.33"></svg:path>`,
})
export class HealthiconsStitches24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStitchesOutlineIcon],svg[healthicons-stitches-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 39.979V44h2v-4.019c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796v-7c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V20.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V11.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V4h-2v5.976c-1.37-.068-2.346-.276-3.105-.544A7 7 0 0 1 19 9.048V9a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 18a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v7.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 28a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 37a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66"></svg:path>`,
})
export class HealthiconsStitchesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStitchesOutline24pxIcon],svg[healthicons-stitches-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 19.726V22h1.5v-2.272c1.272-.077 2.105-.353 2.697-.73q.026.002.053.002a1 1 0 1 0-.98-1.195c-.346.186-.883.358-1.77.42v-4.497c1.272-.077 2.105-.353 2.697-.73q.026.003.053.002a1 1 0 1 0-.98-1.195c-.346.186-.883.358-1.77.42V7.729c1.272-.077 2.105-.353 2.697-.73L15.5 7a1 1 0 1 0-.98-1.195c-.346.186-.883.358-1.77.42V2h-1.5v4.221a4.8 4.8 0 0 1-1.22-.24a3.5 3.5 0 0 1-.57-.262a1 1 0 1 0-.804 1.269c.25.145.536.287.876.407c.47.166 1.024.283 1.718.33v4.496a4.8 4.8 0 0 1-1.22-.24a3.5 3.5 0 0 1-.57-.261a1 1 0 1 0-.804 1.268c.25.145.536.287.876.407c.47.166 1.024.283 1.718.33v4.496a4.8 4.8 0 0 1-1.22-.24a3.5 3.5 0 0 1-.57-.262a1 1 0 1 0-.804 1.269c.25.145.536.287.876.407c.47.166 1.024.282 1.718.33"></svg:path>`,
})
export class HealthiconsStitchesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStockOutIcon],svg[healthicons-stock-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.707 6.293a1 1 0 0 1 0 1.414L25.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L24 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.415L22.586 10l-2.293-2.293a1 1 0 1 1 1.415-1.414L24 8.586l2.293-2.293a1 1 0 0 1 1.414 0m-8.509 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504z"></svg:path><svg:path fill-rule="evenodd" d="m37 37.5l-12 4.523V31.64a3.5 3.5 0 0 0 3.802 1.088L37 29.996zM24.327 15.055a1 1 0 0 0-.654 0l-12.998 4.5l-.023.007a1 1 0 0 0-.442.325l-3.99 4.988a1 1 0 0 0 .464 1.574l13.5 4.5a1 1 0 0 0 1.135-.376L24 26.743l2.68 3.83a1 1 0 0 0 1.136.376l13.5-4.5a1 1 0 0 0 .465-1.574l-3.99-4.988a1 1 0 0 0-.466-.333zM24 23.942l9.943-3.442L24 17.058L14.057 20.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStockOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStockOutNegativeIcon],svg[healthicons-stock-out-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStockOutNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21.708 6.293a1 1 0 1 0-1.415 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L24 8.586zm-2.51 26.435A3.5 3.5 0 0 0 23 31.64v10.383L11 37.5v-7.504zM25 42.023L37 37.5v-7.504l-8.198 2.732A3.5 3.5 0 0 1 25 31.64zm-.673-26.968a1 1 0 0 0-.654 0l-12.682 4.39a1 1 0 0 0-.93.397l-3.744 5.056a1 1 0 0 0 .482 1.542l13.474 4.564a1 1 0 0 0 1.153-.393L24 26.75l2.574 3.861a1 1 0 0 0 1.153.393l13.474-4.564a1 1 0 0 0 .483-1.542l-3.745-5.056a1 1 0 0 0-.93-.397zM24 23.975l-9.936-3.478L24 17.059l9.936 3.44z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStockOutNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStockOutNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStockOutOutlineIcon],svg[healthicons-stock-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.707 7.707a1 1 0 0 0-1.414-1.414L24 8.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10z"></svg:path><svg:path fill-rule="evenodd" d="M6.684 26.449L10 27.554V36a1 1 0 0 0 .673.945l12.992 4.497a1 1 0 0 0 .637.011l.014-.004l.015-.005l12.996-4.499A1 1 0 0 0 38 36v-8.446l3.316-1.105a1 1 0 0 0 .465-1.574l-4-5a1 1 0 0 0-.456-.32l-12.998-4.5a1 1 0 0 0-.654 0l-12.998 4.5a1 1 0 0 0-.456.32l-4 5a1 1 0 0 0 .465 1.574m14.635 4.124l1.681-2.4v10.923l-11-3.808V28.22l8.184 2.728a1 1 0 0 0 1.135-.376M14.057 20.5L24 23.942l9.943-3.442L24 17.058zm12.624 10.074L25 28.172v10.924l11-3.808V28.22l-8.184 2.728a1 1 0 0 1-1.135-.376M11.34 21.676l-2.663 3.329l5.511 1.837l5.92 1.973l2.313-3.303l-.135-.047zm27.983 3.329l-2.663-3.33l-11.081 3.837l2.313 3.303z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStockOutOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachIcon],svg[healthicons-stomach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30.48 10.133h-1.638c-.713 0-1.397.278-1.898.771c-1.112 1.095-2.955 1.013-3.96-.176l-.376-.445a3.06 3.06 0 0 1-.727-1.96L21.875 7h-4.784v2.002c0 1.664.452 3.3 1.31 4.74l.053.09a9 9 0 0 0 2.078 2.39l2.358 1.901c1.877 1.514 2.44 4.08 1.36 6.205a5.23 5.23 0 0 1-3.241 2.646l-.536.153a6.8 6.8 0 0 1-2.452.23c-2.962-.266-5.776 1.393-6.875 4.078l-.535 1.306A8.2 8.2 0 0 0 10 35.842V41h4.773v-5.427c0-.86.337-1.687.944-2.314a3.55 3.55 0 0 1 4.106-.7l2.019.994c.91.448 1.917.682 2.938.682h3.416c1.402 0 2.791-.26 4.093-.764a10.96 10.96 0 0 0 5.4-4.482l.62-1.012A11.44 11.44 0 0 0 40 22c0-1.96-.507-3.889-1.474-5.608l-.984-1.749a8.75 8.75 0 0 0-2.55-2.83l-.617-.44a6.7 6.7 0 0 0-3.895-1.24"></svg:path><svg:path fill-rule="evenodd" d="M16.076 6h6.833c.006 1.136-.303 2.7.494 3.643c1.748 2.07 4.656-.515 7.065-.515c4.33 0 7.006 3.353 8.929 6.774c2.195 3.903 2.102 8.784-.235 12.604c-1.6 2.616-3.577 4.768-6.514 5.907c-4.353 1.688-9.213 1.052-13.271-.946c-1.549-.762-3.55.318-3.55 2.087V42H9v-6.178a9.2 9.2 0 0 1 .687-3.484c2.143-5.24 5.636-4.814 10.511-6.205c3.178-.906 5.069-4.763 2.047-7.2c-1.74-1.403-3.554-2.693-4.718-4.649c-1.544-2.593-1.451-5.387-1.451-8.284" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStomachIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomach24pxIcon],svg[healthicons-stomach-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 7.976h1.105A5.002 5.002 0 0 1 21 9v7a5 5 0 0 1-8.053 3.96c-.736-.56-1.267-1.117-1.721-1.595C10.472 17.573 9.927 17 9 17H7c-.954 0-1.51.346-1.868.858c-.398.568-.632 1.459-.632 2.642v1h-2v-1c0-1.392.266-2.751.993-3.79c.755-1.077 1.926-1.692 3.438-1.71c.095-.01.191-.014.257-.017c.122-.004.27-.007.432-.008a65 65 0 0 1 1.594.008c1.38-.225 2.262-2.604 1.786-4.983l-.47-.001c-.14-.002-.269-.004-.376-.008a3 3 0 0 1-.222-.015c-.981-.01-1.813-.225-2.468-.705c-.677-.495-1.043-1.183-1.24-1.889c-.192-.689-.24-1.448-.247-2.171c-.005-.376.003-.823.011-1.259C5.994 3.615 6 3.285 6 3V2h2v1c0 .392-.007.732-.013 1.058c-.008.378-.015.735-.01 1.13c.007.679.054 1.226.174 1.656c.115.414.281.657.494.813c.221.162.616.32 1.355.32m3.026 4.663c.867.273 1.954.3 2.764-.739c.956-1.227 2.3-.967 3.21-.571V9a3 3 0 1 0-5.989.26l.138 1.611l-.03.01a8.5 8.5 0 0 1-.093 1.758" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStomach24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachCancerIcon],svg[healthicons-stomach-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.91 6h-6.834v.464c-.006 2.732-.01 5.365 1.45 7.82c1.016 1.707 2.527 2.906 4.05 4.115q.336.265.67.534c3.02 2.437 1.13 6.294-2.048 7.2c-.983.28-1.911.488-2.783.682c-3.447.768-6.017 1.34-7.728 5.523A9.2 9.2 0 0 0 9 35.822V42h6.827v-6.446c0-1.769 2.001-2.85 3.55-2.087c4.058 1.998 8.918 2.634 13.27.946c2.938-1.139 4.914-3.291 6.515-5.907c2.337-3.82 2.43-8.701.235-12.604c-1.923-3.421-4.598-6.774-8.929-6.774c-.872 0-1.81.34-2.735.673c-1.628.59-3.215 1.163-4.33-.158c-.627-.741-.57-1.866-.52-2.865c.014-.272.027-.535.026-.778m14.248 17.82c1.171.735 1.76 2.203 1.427 3.424c1.147 1.428-5.024 4.782-8.44 6.639c-.82.445-1.482.804-1.845 1.03a9 9 0 0 1-.518-.957c-1.242-.242-2.298-1.42-2.438-2.796s.683-2.474 1.887-2.61a6.3 6.3 0 0 1 .777-1.762c-.586-1.26-.293-2.69.738-3.33s2.442-.27 3.312.813a6.3 6.3 0 0 1 1.924.084c.655-1.019 2.005-1.271 3.176-.536"></svg:path><svg:path d="M39.162 28.506c2.337-3.82 2.43-8.701.235-12.604c-1.923-3.421-4.598-6.774-8.929-6.774c-.872 0-1.81.34-2.735.673c-1.628.59-3.215 1.163-4.33-.158c-.377-.446-.507-1.03-.54-1.643c-.02-.406 0-.824.02-1.222A16 16 0 0 0 22.91 6h-6.833v.464q-.002.462 0 .92q0 .309.006.616c.039 2.184.26 4.293 1.445 6.284c1.015 1.707 2.526 2.906 4.05 4.115q.335.265.668.534c3.021 2.437 1.13 6.294-2.047 7.2c-.983.28-1.911.488-2.783.682c-3.447.768-6.017 1.34-7.728 5.523A9.2 9.2 0 0 0 9 35.822V42h6.827v-6.446c0-1.769 2.001-2.85 3.55-2.087c4.058 1.998 8.918 2.634 13.27.946c2.938-1.139 4.914-3.291 6.515-5.907M13.827 40v-4.446c0-3.44 3.73-5.212 6.433-3.881c3.675 1.809 7.945 2.318 11.665.876c2.377-.922 4.057-2.678 5.53-5.087c1.96-3.203 2.038-7.31.199-10.58c-1.898-3.376-4.063-5.754-7.186-5.754c-.275 0-.662.078-1.25.272c-.257.084-.516.178-.807.283l-.097.035c-.317.115-.673.242-1.033.354c-.69.215-1.596.44-2.55.357c-1.055-.093-2.06-.553-2.856-1.495c-.825-.977-.982-2.14-1.013-2.934h-2.776c.04 2.058.233 3.705 1.16 5.261c.814 1.37 2.013 2.325 3.56 3.56q.336.266.695.555c2.187 1.765 2.7 4.238 1.93 6.402c-.723 2.027-2.512 3.659-4.684 4.278c-1.046.299-2.044.521-2.919.716l-.585.13c-1.04.237-1.856.448-2.562.739c-1.235.51-2.265 1.307-3.143 3.454A7.2 7.2 0 0 0 11 35.822V40z"></svg:path></svg:g>`,
})
export class HealthiconsStomachCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachCancerOutlineIcon],svg[healthicons-stomach-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.726 8.898c-.168-.2-.273-.53-.293-1.092c-.01-.27.002-.556.017-.867l.006-.128c.013-.262.028-.55.027-.816l-2 .01c0 .206-.01.43-.024.697l-.007.14a12 12 0 0 0-.017 1.035c.025.703.157 1.591.761 2.31c.603.715 1.345 1.053 2.134 1.122c.739.065 1.475-.109 2.113-.308c.326-.102.652-.219.96-.33l.095-.035c.28-.101.545-.197.808-.284c.593-.196 1.084-.31 1.504-.31c3.592 0 5.93 2.77 7.782 6.074c1.499 2.673 1.797 5.865.913 8.746a3.6 3.6 0 0 0-1.302-1.46c-1.283-.805-2.76-.528-3.478.587a6.9 6.9 0 0 0-2.107-.092c-.953-1.186-2.5-1.592-3.628-.891s-1.449 2.267-.808 3.648a6.9 6.9 0 0 0-.85 1.929c-1.319.15-2.221 1.352-2.067 2.859a3.6 3.6 0 0 0 .924 2.042c-1.963-.208-3.902-.795-5.688-1.677c-2.082-1.028-4.883.375-4.883 2.926V41h2v-6.267c0-.888 1.079-1.586 1.998-1.132c4.125 2.037 9.132 2.72 13.669.955c3.128-1.216 5.19-3.508 6.805-6.154c2.454-4.023 2.551-9.154.247-13.264C36.46 11.79 33.612 8.04 28.81 8.04c-.748 0-1.486.2-2.13.412c-.293.096-.586.203-.862.303l-.095.034c-.31.112-.598.215-.876.302c-.57.178-1.002.255-1.342.225c-.289-.026-.534-.128-.779-.419"></svg:path><svg:path d="m13.859 6l-.001.505c-.007 2.605-.014 5.428 1.547 8.06c1.086 1.829 2.708 3.117 4.175 4.283q.322.255.63.503c1.126.911 1.287 1.992.948 2.946c-.363 1.022-1.331 1.959-2.578 2.316c-.923.264-1.787.457-2.63.645h-.001l-.61.137c-1.017.232-2.02.482-2.954.868c-1.955.809-3.51 2.183-4.645 4.966A10 10 0 0 0 7 34.994V41h2v-6.006c0-1.03.2-2.052.591-3.01c.943-2.311 2.12-3.278 3.559-3.873c.763-.316 1.622-.535 2.633-.765l.581-.131c.847-.19 1.781-.398 2.766-.68c1.832-.524 3.321-1.903 3.912-3.569c.616-1.733.228-3.712-1.574-5.17l-.663-.531c-1.488-1.187-2.796-2.231-3.68-3.721c-1.271-2.143-1.27-4.443-1.267-7.171V6z"></svg:path></svg:g>`,
})
export class HealthiconsStomachCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachNegativeIcon],svg[healthicons-stomach-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStomachNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm23.542 17.038c-3.653-.078-5.647-.63-6.827-1.916c-.641-.7-1.12-1.7-1.434-3.187c-.315-1.493-.45-3.412-.45-5.887h-2c0 2.525.136 4.606.493 6.3c.36 1.7.954 3.075 1.918 4.126c1.774 1.934 4.535 2.487 8.254 2.564c-.115 6.76-1.42 9.456-2.927 10.585c-.787.59-1.739.841-2.893.928c-.785.058-1.567.04-2.413.02a54 54 0 0 0-1.432-.023c-2.163 0-3.8.669-5 1.737c-1.182 1.051-1.866 2.423-2.263 3.72c-.398 1.3-.527 2.58-.559 3.524a15 15 0 0 0 .024 1.487l.007.093l.003.027v.013l.996-.101l.995-.101v-.001l-.002-.014l-.005-.066a13 13 0 0 1-.02-1.269c.03-.837.143-1.93.473-3.006c.33-1.078.86-2.082 1.68-2.812c.79-.704 1.924-1.218 3.607-1.23c3.432.465 5.846 2.548 8.437 4.784l.112.097c2.573 2.22 5.386 4.618 9.427 4.618c3.952 0 6.592-1.668 8.19-4.22C41.488 35.35 42 32.13 42 29.049v-11c0-3.242-1.121-5.76-2.881-7.468c-1.748-1.696-4.067-2.532-6.367-2.532s-4.618.836-6.366 2.532c-1.573 1.526-2.636 3.699-2.844 6.458m1.438 7.905c3.338-1.804 5.869-.52 8.252.69c2.208 1.122 4.289 2.179 6.768.656v-8.241c0-2.758-.94-4.74-2.274-6.032c-1.344-1.305-3.15-1.968-4.974-1.968s-3.63.663-4.974 1.968c-1.333 1.293-2.273 3.274-2.273 6.032c0 2.769-.179 5.04-.525 6.895" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStomachNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStomachNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachOutlineIcon],svg[healthicons-stomach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.433 7.806c.02.562.125.893.293 1.092c.245.29.49.393.78.419c.339.03.77-.047 1.341-.225a21 21 0 0 0 .971-.336c.276-.1.569-.207.861-.303c.645-.213 1.383-.412 2.13-.412c4.803 0 7.652 3.75 9.528 7.097c2.304 4.11 2.207 9.241-.247 13.264c-1.614 2.646-3.677 4.938-6.805 6.154c-4.537 1.765-9.544 1.082-13.67-.955c-.918-.454-1.997.244-1.997 1.132V41h-2v-6.267c0-2.551 2.8-3.954 4.883-2.926c3.742 1.848 8.157 2.403 12.059.885c2.567-.998 4.334-2.892 5.823-5.332c2.077-3.406 2.16-7.765.21-11.244c-1.853-3.305-4.191-6.075-7.783-6.075c-.42 0-.91.115-1.504.311c-.263.087-.528.183-.808.284l-.094.035c-.309.111-.635.228-.961.33c-.638.199-1.374.373-2.113.308c-.789-.07-1.531-.407-2.134-1.123c-.605-.718-.736-1.606-.761-2.31c-.013-.361.002-.72.017-1.034l.007-.14c.013-.267.024-.49.024-.697l2-.01c0 .267-.014.554-.027.816l-.006.128c-.015.31-.026.596-.017.867m-8.575-1.3V6h2v.373c-.002 2.728-.004 5.028 1.267 7.17c.884 1.49 2.192 2.534 3.68 3.722l.663.531c1.802 1.458 2.19 3.437 1.574 5.17c-.59 1.666-2.08 3.045-3.912 3.57c-.985.281-1.92.49-2.766.679l-.58.13c-1.012.23-1.871.45-2.634.766c-1.44.595-2.616 1.562-3.559 3.873A8 8 0 0 0 9 34.994V41H7v-6.006c0-1.29.251-2.569.74-3.765c1.135-2.783 2.69-4.157 4.645-4.966c.933-.386 1.937-.636 2.954-.868l.611-.137a45 45 0 0 0 2.63-.645c1.247-.357 2.215-1.294 2.578-2.316c.338-.954.178-2.035-.948-2.946q-.308-.248-.63-.503c-1.467-1.166-3.09-2.454-4.175-4.284c-1.561-2.631-1.554-5.454-1.547-8.059" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStomachOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStomachOutline24pxIcon],svg[healthicons-stomach-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 7.976h1.105A5.002 5.002 0 0 1 21 9v7a5 5 0 0 1-8.053 3.96c-.736-.56-1.267-1.117-1.721-1.595c-.75-.789-1.295-1.36-2.215-1.365H7c-.954 0-1.51.346-1.868.858c-.398.568-.632 1.459-.632 2.642a1 1 0 1 1-2 0c0-1.392.266-2.751.993-3.79c.755-1.077 1.926-1.692 3.438-1.71c.095-.01.191-.014.257-.017c.122-.004.27-.007.432-.008a65 65 0 0 1 1.594.008c1.38-.225 2.262-2.604 1.786-4.983l-.47-.001c-.14-.002-.269-.004-.376-.008a3 3 0 0 1-.222-.015c-.981-.01-1.813-.225-2.468-.705c-.677-.495-1.043-1.183-1.24-1.889c-.192-.689-.24-1.448-.247-2.171c-.005-.376.003-.823.011-1.259C5.994 3.615 6 3.285 6 3a1 1 0 1 1 2 0c0 .392-.007.732-.013 1.058c-.008.378-.015.735-.01 1.13c.007.679.054 1.226.174 1.656c.115.414.281.657.494.813c.221.162.616.32 1.355.32m2.712 5.922q-.05.143-.105.282a5.4 5.4 0 0 1-1.084 1.711c.431.33.77.69 1.033.97q.061.066.119.125c.453.477.887.93 1.482 1.382l.006.004l.006.005A3 3 0 0 0 19 16v-2.875a4.4 4.4 0 0 0-.661-.213c-.679-.157-1.242-.094-1.63.295c-1.112 1.111-2.549 1.048-3.495.83a6 6 0 0 1-.5-.14m.397-1.98a4 4 0 0 0 .553.17c.679.157 1.242.094 1.63-.295c1.112-1.111 2.549-1.048 3.495-.83q.11.026.213.054V9a3 3 0 1 0-5.989.26l.138 1.611l-.03.01q.026.525-.01 1.037" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsStomachOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStopIcon],svg[healthicons-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 25.14V12.5a1.5 1.5 0 1 0-3 0V23h-2V9.5a1.5 1.5 0 1 0-3 0V23h-2V12.5a1.5 1.5 0 1 0-3 0V25h-2v-8.5a1.5 1.5 0 1 0-3 0v13.238C12 35.405 16.595 40 22.263 40c3.794 0 7.279-2.094 9.06-5.444l5.907-11.107a1.812 1.812 0 0 0-3.184-1.731l-2.172 3.909c-.5.902-1.874.546-1.874-.486"></svg:path><svg:path fill-rule="evenodd" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m18.095 20c0-9.994-8.101-18.095-18.095-18.095S5.905 14.006 5.905 24S14.006 42.095 24 42.095S42.095 33.994 42.095 24" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsStopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStopNegativeIcon],svg[healthicons-stop-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStopNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 5.905c9.994 0 18.095 8.101 18.095 18.095S33.994 42.095 24 42.095S5.905 33.994 5.905 24S14.006 5.905 24 5.905M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20s20-8.954 20-20m-14 1.14V12.5a1.5 1.5 0 0 0-3 0V23h-2V9.5a1.5 1.5 0 0 0-3 0V23h-2V12.5a1.5 1.5 0 0 0-3 0V25h-2v-8.5a1.5 1.5 0 0 0-3 0v13.238C12 35.405 16.595 40 22.263 40c3.794 0 7.279-2.094 9.06-5.444l5.907-11.107a1.812 1.812 0 0 0-3.184-1.731l-2.172 3.909c-.501.902-1.874.546-1.874-.486" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStopNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStopNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsStopOutlineIcon],svg[healthicons-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M21 11v.17A3 3 0 0 0 17 14v1.17A3 3 0 0 0 13 18v11.525C13 35.31 17.69 40 23.475 40c3.637 0 7.014-1.887 8.92-4.985l5.736-9.32a3.006 3.006 0 0 0-4.92-3.436L31 25.063V14a3 3 0 0 0-4-2.83V11a3 3 0 1 0-6 0m4 0a1 1 0 1 0-2 0v12h-2v-9a1 1 0 1 0-2 0v11h-2v-7a1 1 0 1 0-2 0v11.525a8.475 8.475 0 0 0 15.692 4.442l5.736-9.32a1.006 1.006 0 0 0-1.647-1.15l-2.21 2.804c-1.175 1.49-3.571.66-3.571-1.238V14a1 1 0 1 0-2 0v9h-2z"></svg:path><svg:path d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m18 20c0-9.941-8.059-18-18-18S6 14.059 6 24s8.059 18 18 18s18-8.059 18-18"></svg:path></svg:g>`,
})
export class HealthiconsStopOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarIcon],svg[healthicons-sugar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M34.459 10.048a1 1 0 0 1 .973.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.961-.254l-4.56-4.5a1 1 0 1 1 1.406-1.424l4.15 4.098l9.447-2.532l2.099-9.62l-7.374-6.606l-9.556 3.073l-1.018 3.11a1 1 0 1 1-1.901-.622l1.176-3.595a1 1 0 0 1 .645-.64z"></svg:path><svg:path d="M32.722 20.025a1 1 0 0 1 .753 1.197l-2.5 11a1 1 0 0 1-1.95-.444l2.5-11a1 1 0 0 1 1.197-.753"></svg:path><svg:path d="M23.738 13.853a1 1 0 0 1 1.409-.116l7.265 6.16l6.825-1.862a1 1 0 1 1 .526 1.93l-7.333 2a1 1 0 0 1-.91-.202l-7.666-6.5a1 1 0 0 1-.116-1.41m-12.996 1.424a1 1 0 0 1 .965-.239l8.27 2.361a1 1 0 0 1 .695.714l2.297 8.972a1 1 0 0 1-.308.999L16.23 33.75a1 1 0 0 1-.936.212L7.023 31.6a1 1 0 0 1-.69-.7l-2.298-8.5a1 1 0 0 1 .275-.984zm.967 1.842L6.12 22.452l1.994 7.38l7.202 2.056l5.563-4.9l-2.003-7.823z"></svg:path><svg:path d="M17.707 20.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-.974.256l-8-2.222a1 1 0 1 1 .535-1.927l7.438 2.066l3.587-3.587a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M12.758 24.03a1 1 0 0 1 1.212.727l2 8a1 1 0 0 1-1.94.486l-2-8a1 1 0 0 1 .728-1.213"></svg:path></svg:g>`,
})
export class HealthiconsSugarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarAltIcon],svg[healthicons-sugar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632c-1.4 1.75-2.465 3.033-3.346 3.958c-.88.924-1.632 1.553-2.422 1.942c-.814.4-1.587.506-2.423.523a27 27 0 0 1-1.313-.019h-.014A51 51 0 0 0 11.795 34c-2.897 0-4.857-1.793-6.034-3.412a13 13 0 0 1-1.704-3.254l-.006-.019l-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.628c5.825-7.017 12.914-8.012 21.255-8.993a1 1 0 0 1 1.11.876M20.006 28H6.517c.221.431.507.923.863 1.412C8.383 30.793 9.82 32 11.795 32c.617 0 1.155.016 1.623.03h.018c.479.014.868.025 1.217.018c.678-.013 1.127-.094 1.58-.317c.478-.236 1.04-.669 1.856-1.527c.536-.562 1.157-1.28 1.917-2.204" clip-rule="evenodd"></svg:path><svg:path d="m8 31.5l-2.5-4l16-.5l-4 5.5l-4.5.5zM5 22h2v2H5zm8 0h2v2h-2zm-3-.414L11.414 23L10 24.414L8.586 23zm8 0L19.414 23L18 24.414L16.586 23zM11 18h2v2h-2zm-3-.414L9.414 19L8 20.414L6.586 19zm4-4L13.414 15L12 16.414L10.586 15zm4 4L17.414 19L16 20.414L14.586 19z"></svg:path></svg:g>`,
})
export class HealthiconsSugarAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarAltNegativeIcon],svg[healthicons-sugar-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSugarAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632c-1.4 1.75-2.465 3.033-3.346 3.958c-.88.924-1.632 1.553-2.422 1.942c-.814.4-1.587.506-2.423.523a27 27 0 0 1-1.313-.019h-.013A51 51 0 0 0 11.795 34c-2.897 0-4.857-1.793-6.034-3.412a13 13 0 0 1-1.704-3.254l-.006-.019l-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.627c5.826-7.017 12.915-8.012 21.256-8.993a1 1 0 0 1 1.11.876M5 22h2v2H5zm10 0h-2v2h2zm-5-.414L11.414 23L10 24.414L8.586 23zM19.414 23L18 21.586L16.586 23L18 24.414zM11 18h2v2h-2zm-1.586 1L8 17.586L6.586 19L8 20.414zM12 13.586L13.414 15L12 16.414L10.586 15zM17.414 19L16 17.586L14.586 19L16 20.414z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSugarAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSugarAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarAltOutlineIcon],svg[healthicons-sugar-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632c-1.4 1.75-2.465 3.033-3.346 3.958c-.88.924-1.632 1.553-2.422 1.942c-.814.4-1.587.506-2.423.523a27 27 0 0 1-1.313-.019h-.014A51 51 0 0 0 11.795 34c-2.897 0-4.857-1.793-6.034-3.412a13 13 0 0 1-1.704-3.254l-.006-.019l-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.628c5.825-7.017 12.914-8.012 21.255-8.993a1 1 0 0 1 1.11.876M20.006 28H6.517c.221.431.507.923.863 1.412C8.383 30.793 9.82 32 11.795 32c.617 0 1.155.016 1.623.03h.018c.479.014.868.025 1.217.018c.678-.013 1.127-.094 1.58-.317c.478-.236 1.04-.669 1.856-1.527c.536-.562 1.157-1.28 1.917-2.204" clip-rule="evenodd"></svg:path><svg:path d="M5 22h2v2H5zm8 0h2v2h-2zm-3-.414L11.414 23L10 24.414L8.586 23zm8 0L19.414 23L18 24.414L16.586 23zM11 18h2v2h-2zm-3-.414L9.414 19L8 20.414L6.586 19zm4-4L13.414 15L12 16.414L10.586 15zm4 4L17.414 19L16 20.414L14.586 19z"></svg:path></svg:g>`,
})
export class HealthiconsSugarAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarFreeIcon],svg[healthicons-sugar-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M31.184 15.551a1 1 0 0 1 .988.21l5.5 5a1 1 0 0 1 .308.935l-1.5 7.5a1 1 0 0 1-.723.77l-7.5 2a1 1 0 0 1-.882-.185l-2.5-2a1 1 0 1 1 1.25-1.562l1.236.99l1.04-4.856l-3.938-3.58l-.015.043a1 1 0 1 1-1.897-.632l.5-1.5a1 1 0 0 1 .633-.633zm-5.248 3.858l3.824 3.477l2.965-.848a1 1 0 0 1 .55 1.924l-2.923.835l-1.032 4.816l5.321-1.419l1.267-6.335l-4.648-4.225zm-10.643-.116a1 1 0 0 1 .97-.258l5.5 1.5a1 1 0 0 1 .707.723l1.5 6a1 1 0 0 1-.306.99l-4.5 4a1 1 0 0 1-.927.217l-5.5-1.5a1 1 0 0 1-.702-.702l-1.5-5.5a1 1 0 0 1 .258-.97zm1.004 1.825l-2.871 2.87l3.277.895l2.871-2.872zm4.661 2.338l-2.84 2.84l.923 3.386l2.842-2.527zm-3.883 6.619l-.89-3.26l-3.26-.89l.89 3.26z"></svg:path><svg:path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-2 0c0 4.654-1.766 8.895-4.664 12.09l-3.91-3.91a1 1 0 0 0-1.413 1.415l3.9 3.9A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.568 1.702-8.739 4.506-11.913l3.844 3.845a1 1 0 0 0 1.415-1.414l-3.854-3.854A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18"></svg:path></svg:g>`,
})
export class HealthiconsSugarFreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarFree24pxIcon],svg[healthicons-sugar-free-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.49 7.476a1 1 0 0 0-.971.258L7.734 10.52a1 1 0 0 0-.258.97l.929 3.404a1 1 0 0 0 .701.702l3.404.928a1 1 0 0 0 .928-.217l2.785-2.476a1 1 0 0 0 .306-.99L15.6 9.128a1 1 0 0 0-.707-.722zm-1.123 3.239l1.156-1.156l1.181.322l-1.156 1.156zm2.595 1.736l1.126-1.126l.353 1.413l-1.127 1.002zm-1.931.518l.317 1.164l-1.164-.317l-.318-1.165z"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0c0 1.849-.627 3.55-1.68 4.906l-1.613-1.613a1 1 0 0 0-1.414 1.414l1.613 1.613A8 8 0 0 1 5.604 7.194L6.99 8.581a1 1 0 1 0 1.415-1.415L6.996 5.758A8 8 0 0 1 20 12"></svg:path></svg:g>`,
})
export class HealthiconsSugarFree24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarFreeOutlineIcon],svg[healthicons-sugar-free-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M31.184 15.551a1 1 0 0 1 .988.21l5.5 5a1 1 0 0 1 .308.935l-1.5 7.5a1 1 0 0 1-.723.77l-7.5 2a1 1 0 0 1-.882-.185l-2.5-2a1 1 0 1 1 1.25-1.562l1.236.99l1.04-4.856l-3.938-3.58l-.015.043a1 1 0 1 1-1.897-.632l.5-1.5a1 1 0 0 1 .633-.633zm-5.248 3.858l3.824 3.477l2.965-.848a1 1 0 0 1 .55 1.924l-2.923.835l-1.032 4.816l5.321-1.419l1.267-6.335l-4.648-4.225zm-9.673-.374a1 1 0 0 0-.97.258l-4.5 4.5a1 1 0 0 0-.258.97l1.5 5.5a1 1 0 0 0 .702.702l5.5 1.5a1 1 0 0 0 .927-.218l4.5-4a1 1 0 0 0 .306-.99l-1.5-6a1 1 0 0 0-.707-.722zm-2.837 4.954l2.87-2.872l3.278.894l-2.87 2.872zm4.692 2.308l2.84-2.841l.925 3.699l-2.842 2.527zm-1.932.517l.889 3.26l-3.26-.888l-.89-3.26z"></svg:path><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m13.336-7.91A17.93 17.93 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-12.09 4.664l3.855 3.854a1 1 0 0 1-1.415 1.414l-3.844-3.845A17.93 17.93 0 0 0 6 24c0 9.941 8.059 18 18 18c4.568 0 8.739-1.702 11.912-4.505l-3.9-3.9a1 1 0 0 1 1.415-1.414z"></svg:path></svg:g>`,
})
export class HealthiconsSugarFreeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarFreeOutline24pxIcon],svg[healthicons-sugar-free-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.49 7.476a1 1 0 0 0-.971.258L7.734 10.52a1 1 0 0 0-.258.97l.929 3.404a1 1 0 0 0 .701.702l3.404.928a1 1 0 0 0 .928-.217l2.785-2.476a1 1 0 0 0 .306-.99L15.6 9.128a1 1 0 0 0-.707-.722zm-1.123 3.239l1.156-1.156l1.181.322l-1.156 1.156zm2.595 1.736l1.126-1.126l.353 1.413l-1.127 1.002zm-1.931.518l.317 1.164l-1.164-.317l-.318-1.165z"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0c0 1.849-.627 3.55-1.68 4.906l-1.613-1.613a1 1 0 0 0-1.414 1.414l1.613 1.613A8 8 0 0 1 5.604 7.194L6.99 8.581a1 1 0 1 0 1.415-1.415L6.996 5.758A8 8 0 0 1 20 12"></svg:path></svg:g>`,
})
export class HealthiconsSugarFreeOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarNegativeIcon],svg[healthicons-sugar-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSugarNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm34.459 10.048a1 1 0 0 1 .973.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.285.034a1 1 0 0 1-.909-.518l-4.326-4.27a1 1 0 1 1 1.405-1.424l3.231 3.19l1.902-8.37l-6.626-5.619l-.76 2.322a1 1 0 0 1-1.9-.622l1.176-3.595a1 1 0 0 1 .644-.64zm-3.12 20.574l2.025-8.912l6.4-1.745a1 1 0 0 0-.527-1.93l-6.825 1.862l-6.062-5.14l8.175-2.63l7.374 6.607l-2.1 9.62zM11.707 15.038a1 1 0 0 0-.965.239L4.31 21.416a1 1 0 0 0-.275.984l.016.062l-.015.048a1 1 0 0 0 .304 1.02l1.992 7.37a1 1 0 0 0 .69.7l7.23 2.064a1 1 0 0 0 1.032.295l.009.003a1 1 0 0 0 .936-.212l6.432-5.666a1 1 0 0 0 .308-.999l-2.297-8.972a1 1 0 0 0-.695-.713zm3.967 16.535l5.205-4.585l-2.003-7.823l-7.167-2.046l-5.263 5.023l6.26 1.738l3.587-3.587a1 1 0 0 1 1.414 1.414l-3.6 3.6zm-2.108-.184l-1.395-5.581l-5.561-1.545l1.505 5.57z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSugarNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSugarNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSugarOutlineIcon],svg[healthicons-sugar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M34.458 10.048a1 1 0 0 1 .974.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.962-.254l-4.559-4.5a1 1 0 1 1 1.405-1.424l4.151 4.098l9.447-2.532l2.099-9.62l-7.374-6.606l-9.557 3.073l-1.018 3.11a1 1 0 0 1-1.9-.622l1.176-3.595a1 1 0 0 1 .644-.64z"></svg:path><svg:path d="M32.721 20.025a1 1 0 0 1 .754 1.197l-2.5 11a1 1 0 0 1-1.95-.444l2.5-11a1 1 0 0 1 1.196-.753"></svg:path><svg:path d="M23.737 13.853a1 1 0 0 1 1.41-.116l7.264 6.16l6.826-1.862a1 1 0 1 1 .526 1.93l-7.334 2a1 1 0 0 1-.91-.202l-7.666-6.5a1 1 0 0 1-.116-1.41m-12.995 1.424a1 1 0 0 1 .965-.239l8.27 2.361a1 1 0 0 1 .694.714l2.297 8.972a1 1 0 0 1-.307.999l-6.433 5.666a1 1 0 0 1-.935.212L7.023 31.6a1 1 0 0 1-.691-.7l-2.298-8.5a1 1 0 0 1 .275-.984zm.966 1.842L6.12 22.452l1.995 7.38l7.201 2.056l5.563-4.9l-2.003-7.823z"></svg:path><svg:path d="M17.707 20.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-.975.256l-8-2.222a1 1 0 1 1 .535-1.927l7.438 2.066l3.588-3.587a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M12.757 24.03a1 1 0 0 1 1.213.727l2 8a1 1 0 1 1-1.94.486l-2-8a1 1 0 0 1 .727-1.213"></svg:path></svg:g>`,
})
export class HealthiconsSugarOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurgicalSterilizationIcon],svg[healthicons-surgical-sterilization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M26.185 36.649A4 4 0 1 0 28 40.03l.224-4.018h1.553L30 40.03a4 4 0 1 0 1.815-3.381L29.998 4L29 4.056L28.002 4zm3.48-2.637L29 22.056l-.665 11.956zM30 18.036a1 1 0 1 1-1.999-.001a1 1 0 0 1 1.999.001M22 40a2 2 0 1 1 4 0a2 2 0 0 1-4 0m12-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path><svg:path d="M15 15V4s-3.478 2.26-3.948 10.998C10.993 16.101 11.896 17 13 17a2 2 0 0 0 2-2m-3 5.5a1.5 1.5 0 1 1 3 0v.086l-3 3zm0 5.914v1.672l3-3v-1.672zm0 6.172v-1.672l3-3v1.672zm0 2.828V42.5a1.5 1.5 0 1 0 3 0V32.414z"></svg:path></svg:g>`,
})
export class HealthiconsSurgicalSterilizationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurgicalSterilizationNegativeIcon],svg[healthicons-surgical-sterilization-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSurgicalSterilizationNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 36a4 4 0 0 1 2.185.649L28.002 4l.998.056l.999-.056l1.816 32.649A4 4 0 1 1 30 40.03l-.224-4.018h-1.552L28 40.03A4 4 0 1 1 24 36m5-13.944l.665 11.956h-1.33zm0-3.021a1 1 0 1 0 .001-1.999A1 1 0 0 0 29 19.035M24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0M15 15V4s-3.478 2.26-3.948 10.998C10.993 16.101 11.895 17 13 17a2 2 0 0 0 2-2m-1.5 4a1.5 1.5 0 0 0-1.5 1.5v3.086l3-3V20.5a1.5 1.5 0 0 0-1.5-1.5M12 28.086v-1.672l3-3v1.672zm0 2.828v1.672l3-3v-1.672zM12 42.5v-7.086l3-3V42.5a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSurgicalSterilizationNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSurgicalSterilizationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurgicalSterilizationOutlineIcon],svg[healthicons-surgical-sterilization-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 36a4 4 0 0 1 2.185.649L28.002 4l.998.056l.998-.056l1.817 32.649A4 4 0 1 1 30 40.03l-.224-4.018h-1.553L28 40.03A4 4 0 1 1 24 36m5-13.944l.665 11.956h-1.33zm0-3.021a1 1 0 1 0 .001-1.999A1 1 0 0 0 29 19.035M24 38a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0M16 4.234l-1.514.909L15 6c-.514-.857-.516-.857-.516-.857l-.001.001l-.004.002l-.007.005l-.018.011a2 2 0 0 0-.206.145a6 6 0 0 0-.486.418c-.389.374-.888.946-1.395 1.775c-1.016 1.663-2.042 4.323-2.303 8.433c-.08 1.253.645 2.308 1.678 2.789A2.5 2.5 0 0 0 11 20.5v21a2.5 2.5 0 0 0 5 0v-21c0-.894-.469-1.678-1.174-2.12A3 3 0 0 0 16 16zM12.06 16.06c.236-3.714 1.132-6.025 1.94-7.394V16a1 1 0 0 1-1 1c-.569 0-.971-.454-.94-.94M14 20.586V20.5a.5.5 0 0 0-1 0v1.086zm0 2.828v1.172l-1 1v-1.172zm0 5.172v-1.172l-1 1v1.172zm0 2.828V41.5a.5.5 0 0 1-1 0v-9.086z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSurgicalSterilizationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurveilanceOfficerIcon],svg[healthicons-surveilance-officer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M23.959 26c5.51 0 9.977-4.477 9.977-10S29.469 6 23.959 6s-9.977 4.477-9.977 10s4.466 10 9.977 10m0-2c4.408 0 7.981-3.582 7.981-8s-3.573-8-7.981-8s-7.982 3.582-7.982 8s3.573 8 7.982 8" clip-rule="evenodd"></svg:path><svg:path d="M14.413 33.442A3 3 0 0 0 12.983 36c0 1.657 1.341 3 2.994 3a2.997 2.997 0 0 0 2.993-3a3 3 0 0 0-2.602-2.975a9 9 0 0 1-.101-.404a20 20 0 0 1-.32-1.87a17 17 0 0 1-.14-1.914q-.002-.304.015-.527q.576-.166 1.153-.297c.44-.1.7.42.912.842l.085.169h9.978V42H6v-5.43c0-3.032 3.602-5.92 7.813-7.577c.011.622.07 1.325.155 2.006c.091.735.216 1.466.353 2.068q.044.194.092.374"></svg:path><svg:path d="M15.977 37.015c.537 0 .998-.44.998-1.015c0-.574-.46-1.015-.998-1.015c-.537 0-.998.44-.998 1.015c0 .574.46 1.015.998 1.015"></svg:path><svg:path fill-rule="evenodd" d="M39.174 26a.999.999 0 1 0-1.996 0v.24h-2.245V26a.999.999 0 1 0-1.995 0v.24h-1.123c-1.033 0-1.87.839-1.87 1.875v12.01c0 1.035.837 1.875 1.87 1.875h8.314C41.163 42 42 41.16 42 40.125v-12.01a1.873 1.873 0 0 0-1.87-1.875h-.957zm-.722 5.402a.8.8 0 0 0 .075-1.129a.797.797 0 0 0-1.126-.075l-2.309 2.025l-.612-.572a.797.797 0 0 0-1.129.04c-.3.324-.282.83.04 1.13l1.135 1.059c.303.282.77.29 1.082.016zm0 4.25a.8.8 0 0 0 .075-1.129a.797.797 0 0 0-1.126-.075l-2.309 2.024l-.613-.571a.797.797 0 0 0-1.128.04c-.3.323-.282.83.04 1.13l1.134 1.058a.807.807 0 0 0 1.083.017z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSurveilanceOfficerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurveilanceOfficer24pxIcon],svg[healthicons-surveilance-officer-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-4.223 1A4.777 4.777 0 0 0 3 16.777V21h10.653a2.4 2.4 0 0 1-.153-.833v-6.334c0-.361.084-.71.235-1.024a7 7 0 0 1-1.623.191h-.223a7 7 0 0 1-3.13-.739l-.112-.056a1.94 1.94 0 0 0-.87-.205"></svg:path><svg:path fill-rule="evenodd" d="M17.55 12.75a.75.75 0 0 0-1.5 0V13h-.246c-.444 0-.804.373-.804.833v6.334c0 .46.36.833.804.833h4.392c.444 0 .804-.373.804-.833v-6.334c0-.46-.36-.833-.804-.833h-.348v-.25a.75.75 0 0 0-1.5 0V13h-.798zm1.713 2.801a.4.4 0 0 0-.526-.602L17.58 15.96l-.307-.286a.4.4 0 0 0-.546.586l.569.529a.405.405 0 0 0 .542.008zm.038 1.436a.4.4 0 0 1-.038.564l-1.425 1.247a.405.405 0 0 1-.542-.008l-.569-.53a.4.4 0 0 1 .546-.585l.307.286l1.157-1.012a.4.4 0 0 1 .564.038" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSurveilanceOfficer24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurveilanceOfficerOutlineIcon],svg[healthicons-surveilance-officer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M33.936 16c0 5.523-4.467 10-9.977 10s-9.977-4.477-9.977-10s4.466-10 9.977-10c5.51 0 9.977 4.477 9.977 10m-1.996 0c0 4.418-3.573 8-7.981 8s-7.982-3.582-7.982-8s3.573-8 7.982-8c4.408 0 7.981 3.582 7.981 8M17.887 28.855l.01.022l.075.147h9.978v2H16.767l-.413-.787l-.36.108q-.01.098-.015.224c-.013.345.013.754.07 1.17a8 8 0 0 0 .278 1.281A3 3 0 0 1 18.97 36c0 1.657-1.34 3-2.993 3a2.997 2.997 0 0 1-2.993-3a3 3 0 0 1 1.393-2.536l-.009-.028a10 10 0 0 1-.295-1.426a10 10 0 0 1-.084-.928c-1.234.528-2.383 1.166-3.347 1.87c-1.919 1.403-2.647 2.715-2.647 3.618V40H27.95v2H6v-5.43c0-3.775 5.583-7.327 10.975-8.557c.44-.1.7.42.912.842M16.975 36c0 .574-.46 1.015-.998 1.015c-.537 0-.998-.44-.998-1.015c0-.574.46-1.015.998-1.015c.537 0 .998.44.998 1.015" clip-rule="evenodd"></svg:path><svg:path d="M38.211 35.745a.8.8 0 0 0 .06-1.13a.797.797 0 0 0-1.128-.06L35.2 36.31l-.463-.444a.797.797 0 0 0-1.128.024a.8.8 0 0 0 .024 1.131l.991.951a.807.807 0 0 0 1.1.018zm.059-5.28a.8.8 0 0 1-.059 1.13l-2.487 2.243a.807.807 0 0 1-1.1-.017l-.99-.95a.8.8 0 0 1-.025-1.132a.797.797 0 0 1 1.128-.024l.463.443l1.943-1.753a.797.797 0 0 1 1.127.06"></svg:path><svg:path fill-rule="evenodd" d="M39.174 26a.999.999 0 1 0-1.996 0v.24h-2.245V26a.999.999 0 1 0-1.995 0v.24h-1.123c-1.033 0-1.87.839-1.87 1.875v12.01c0 1.035.837 1.875 1.87 1.875h8.314C41.163 42 42 41.16 42 40.125v-12.01a1.873 1.873 0 0 0-1.87-1.875h-.957zM31.94 40V28.24h8.065V40z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSurveilanceOfficerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSurveilanceOfficerOutline24pxIcon],svg[healthicons-surveilance-officer-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-7 5.777c0-1.53 1.236-2.77 2.764-2.777l.1.05a9 9 0 0 0 4.025.95h.223q.7 0 1.388-.108v-1.059c0-.361.084-.71.235-1.024a7 7 0 0 1-1.623.191h-.223a7 7 0 0 1-3.13-.739l-.112-.056a1.94 1.94 0 0 0-.87-.205A4.777 4.777 0 0 0 3 16.777V21h10.653a2.4 2.4 0 0 1-.153-.833V19H5zm14.08-.901a.5.5 0 0 0-.66-.752l-.731.64l-.098-.091a.5.5 0 0 0-.682.731l.426.397c.19.176.481.18.675.01zm0 2a.5.5 0 0 0-.66-.752l-.731.64l-.098-.091a.5.5 0 0 0-.682.732l.426.396c.19.176.481.18.675.01z"></svg:path><svg:path fill-rule="evenodd" d="M16.9 12a.75.75 0 0 1 .75.75V13h.798v-.25a.75.75 0 1 1 1.5 0V13h.552a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h.65v-.25a.75.75 0 0 1 .75-.75m-.4 2.5v5h3v-5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSurveilanceOfficerOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSweatingIcon],svg[healthicons-sweating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M34.767 35.835A15.94 15.94 0 0 1 24 40c-3.166 0-6.117-.92-8.6-2.506a5.7 5.7 0 0 1-1.195 1.61A17.9 17.9 0 0 0 24 42c5.06 0 9.633-2.088 12.903-5.45a5.35 5.35 0 0 1-2.136-.715m7.048-9.242Q41.999 25.322 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 1.897.293 3.725.837 5.442a21 21 0 0 1 1.51-2.114A16 16 0 0 1 8 24c0-8.837 7.163-16 16-16c8.758 0 15.873 7.037 15.998 15.765a18.6 18.6 0 0 1 1.817 2.828"></svg:path><svg:path d="M13.743 20.35c-.12.738.381 1.445 1.064 1.883c.714.457 1.732.707 2.93.53a3.8 3.8 0 0 0 2.654-1.665c.504-.764.711-1.693.48-2.382a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.642 1.448a.5.5 0 0 0-.668.39m20.076-.001c.119.738-.382 1.445-1.065 1.883c-.714.457-1.731.707-2.93.53a3.8 3.8 0 0 1-2.653-1.665c-.504-.764-.712-1.693-.48-2.382a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39M41 30.727C41 32.535 39.433 34 37.5 34S34 32.535 34 30.727C34 27.864 37.5 25 37.5 25s3.5 2.864 3.5 5.727M10.5 38c1.933 0 3.5-1.465 3.5-3.273C14 31.864 10.5 29 10.5 29S7 31.864 7 34.727C7 36.535 8.567 38 10.5 38m20.907-5C30.03 29.438 27.23 27 24 27s-6.03 2.438-7.407 6c-.387 1.003.42 2 1.495 2h11.824c1.075 0 1.882-.997 1.495-2"></svg:path></svg:g>`,
})
export class HealthiconsSweatingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSweating24pxIcon],svg[healthicons-sweating-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M19.921 7.375a9.2 9.2 0 0 1 1.241 4.566a54 54 0 0 0-.558-.949a8.75 8.75 0 1 0-17.382 2.06q-.214.36-.4.68A9.255 9.255 0 0 1 7.286 3.99A9.25 9.25 0 0 1 19.92 7.375Zm-3.04 11.827q.199.177.416.32a9.24 9.24 0 0 1-9.733.646q.14-.211.249-.435a8.74 8.74 0 0 0 9.068-.531ZM3.718 16.938c.148-.313.433-.802.865-1.477c.432.675.716 1.164.864 1.477c.202.424.284.786.284 1.093c0 .35-.112.626-.348.87l.54.52l-.54-.52a1.05 1.05 0 0 1-.8.349c-.313 0-.567-.106-.801-.349l-.54.52l.54-.52a1.18 1.18 0 0 1-.348-.87c0-.307.083-.669.284-1.093l-.678-.322zm15.384.524c-.313 0-.567-.105-.801-.348a1.18 1.18 0 0 1-.348-.87c0-.308.083-.67.284-1.094c.148-.313.433-.801.865-1.476c.432.675.716 1.163.864 1.476c.202.425.284.786.284 1.094c0 .35-.112.625-.348.87a1.05 1.05 0 0 1-.8.348ZM8.52 16c.032-.518.102-.89.211-1.196c.15-.418.394-.768.85-1.224c.833-.834 1.9-1.08 2.469-1.08c.568 0 1.635.246 2.47 1.08c.45.451.698.811.848 1.236c.11.307.179.678.21 1.184z"></svg:path>`,
})
export class HealthiconsSweating24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSweatingNegativeIcon],svg[healthicons-sweating-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSweatingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm34.767 35.835A15.94 15.94 0 0 1 24 40c-3.166 0-6.117-.92-8.6-2.506a5.7 5.7 0 0 1-1.195 1.61A17.9 17.9 0 0 0 24 42c5.06 0 9.633-2.088 12.903-5.45a5.35 5.35 0 0 1-2.136-.715m7.048-9.242Q41.999 25.322 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 1.897.293 3.725.837 5.442a21 21 0 0 1 1.51-2.114A16 16 0 0 1 8 24c0-8.837 7.163-16 16-16c8.758 0 15.873 7.037 15.998 15.765a18.6 18.6 0 0 1 1.817 2.828M37.5 34c1.933 0 3.5-1.465 3.5-3.273C41 27.864 37.5 25 37.5 25S34 27.864 34 30.727C34 32.535 35.567 34 37.5 34m-23.5.727C14 36.535 12.433 38 10.5 38S7 36.535 7 34.727C7 31.864 10.5 29 10.5 29s3.5 2.864 3.5 5.727M24 27c3.23 0 6.03 2.438 7.407 6c.387 1.003-.42 2-1.495 2H18.088c-1.075 0-1.882-.997-1.495-2c1.376-3.562 4.177-6 7.407-6m-9.304-4.762c-.684-.438-1.184-1.145-1.065-1.883a.5.5 0 0 1 .668-.39c1.818.676 3.846.257 5.642-1.448a.5.5 0 0 1 .818.204c.232.688.024 1.618-.48 2.381a3.8 3.8 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53m17.947 0c.682-.438 1.183-1.145 1.064-1.883a.5.5 0 0 0-.668-.39c-1.818.676-3.846.257-5.642-1.448a.5.5 0 0 0-.818.204c-.232.688-.024 1.618.48 2.381a3.8 3.8 0 0 0 2.654 1.666c1.198.177 2.216-.073 2.93-.53" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSweatingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSweatingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSweatingOutlineIcon],svg[healthicons-sweating-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 40c4.147 0 7.925-1.577 10.767-4.165c.642.38 1.365.63 2.136.715A17.95 17.95 0 0 1 24 42a17.9 17.9 0 0 1-9.795-2.896a5.7 5.7 0 0 0 1.194-1.61A15.93 15.93 0 0 0 24 40m18-16q-.001 1.321-.185 2.593a18.6 18.6 0 0 0-1.817-2.828C39.873 15.037 32.758 8 24 8C15.163 8 8 15.163 8 24c0 1.141.12 2.254.347 3.328a21 21 0 0 0-1.51 2.114A18 18 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18"></svg:path><svg:path d="M14.807 22.233c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.256 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.382a3.8 3.8 0 0 1-2.654 1.665c-1.198.177-2.216-.073-2.93-.53m17.947 0c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.256-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.382a3.8 3.8 0 0 0 2.653 1.665c1.199.177 2.216-.073 2.93-.53M37.5 34c1.933 0 3.5-1.465 3.5-3.273C41 27.864 37.5 25 37.5 25S34 27.864 34 30.727C34 32.535 35.567 34 37.5 34m-23.5.727C14 36.535 12.433 38 10.5 38S7 36.535 7 34.727C7 31.864 10.5 29 10.5 29s3.5 2.864 3.5 5.727"></svg:path><svg:path fill-rule="evenodd" d="M31.407 33C30.03 29.438 27.23 27 24 27s-6.03 2.438-7.407 6c-.387 1.003.42 2 1.495 2h11.824c1.075 0 1.882-.997 1.495-2M24 29c1.96 0 3.992 1.386 5.232 4H18.768c1.24-2.614 3.272-4 5.232-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSweatingOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSweatingOutline24pxIcon],svg[healthicons-sweating-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.839 8A8 8 0 0 0 4 13.213q-.98 1.622-1.382 2.486C.804 11.16 2.552 5.856 6.91 3.34C11.694.58 17.809 2.218 20.57 7a9.97 9.97 0 0 1 1.02 7.507a7 7 0 0 0-.216-.547q-.398-.9-1.499-2.724A8 8 0 0 0 18.839 8M6.653 20.119q.592-.657.742-1.513a8 8 0 0 0 9.573-.406q.075.096.158.189q.7.777 1.642.893c-.552.519-1.173.983-1.857 1.378a10 10 0 0 1-10.496-.303q.123-.11.238-.238"></svg:path><svg:path d="M9.703 7.856c-.03.154-.129.444-.317.713c-.184.263-.421.46-.72.54s-.603.028-.893-.108a2 2 0 0 1-.632-.458l-1.13.985a3.5 3.5 0 0 0 1.129.833c.51.238 1.183.393 1.914.197c.732-.195 1.236-.666 1.56-1.128c.32-.455.495-.944.561-1.286zm3.683 1.574a3.5 3.5 0 0 1-.561-1.286l1.472-.288c.03.154.129.444.317.713c.184.263.421.46.72.54s.603.028.893-.108c.298-.138.529-.34.632-.458l1.13.985a3.5 3.5 0 0 1-1.129.833c-.51.238-1.183.393-1.914.197c-.732-.195-1.236-.666-1.56-1.128m4.375 8.204q.558.578 1.34.578q.784 0 1.341-.578q.558-.578.558-1.39q0-.665-.356-1.415q-.355-.75-1.542-2.522q-1.186 1.771-1.543 2.522q-.356.75-.356 1.415q0 .812.558 1.39M3.242 19.422Q3.8 20 4.582 20q.784 0 1.341-.578q.558-.58.558-1.39q0-.665-.356-1.416t-1.542-2.522q-1.186 1.772-1.543 2.522q-.356.751-.356 1.415q0 .813.558 1.39"></svg:path><svg:path fill-rule="evenodd" d="M7.747 16.672V16a4.253 4.253 0 1 1 8.506 0v.672zm7.085-1.344a2.91 2.91 0 0 0-5.663 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSweatingOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSwimIcon],svg[healthicons-swim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28.35 27.606a.51.51 0 0 1-.23.681l-.672.336a3.57 3.57 0 0 1-3.193 0l-1.343-.672a2.55 2.55 0 0 0-2.281 0l-1.343.672a3.57 3.57 0 0 1-3.194 0l-2.555-1.277l-4.929.985a.51.51 0 0 1-.246-.989l6.955-2.09l-.045-.053c-1.453-1.757-2.083-3.646-2.183-5.448c-.166-2.999 1.203-5.645 1.741-6.685l.008-.015c.061-.12.108-.21.142-.28c.754-1.55 2.646-2.198 4.222-1.477c1.584.725 2.279 2.572 1.521 4.131q-.106.217-.215.435c-.58 1.166-1.141 2.318-1.073 3.558c.032.576.215 1.203.785 1.893c.602.728 1.745 1.652 3.903 2.564c1.871.791 3.37 1.991 4.224 3.731m5.663-10.996a5.1 5.1 0 1 1 0 10.2a5.1 5.1 0 0 1 0-10.2"></svg:path><svg:path fill-rule="evenodd" d="M4.222 37.379a1.044 1.044 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.08a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.756 3.015-.018c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.474 3.933-1.565 5.557-.208l1.434 1.198c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.738-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405m0-6a1.044 1.044 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.08a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.756 3.015-.018c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.474 3.933-1.565 5.557-.208l1.434 1.198c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.738-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSwimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSwimNegativeIcon],svg[healthicons-swim-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSwimNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm27.448 28.902c.484-.238.688-.833.456-1.33c-.858-1.838-2.358-3.09-4.183-3.902c-1.96-.872-2.95-1.734-3.448-2.368c-.464-.591-.601-1.107-.626-1.576c-.056-1.07.402-2.086.952-3.25l.002-.003q.102-.214.2-.428c.818-1.77.074-3.876-1.652-4.707c-1.723-.83-3.782-.079-4.598 1.687c-.028.062-.07.145-.127.264l-.013.026c-.506 1.029-1.828 3.72-1.667 6.79a9.76 9.76 0 0 0 1.757 5.106l-5.816 1.84a1 1 0 0 0-.642 1.245a.967.967 0 0 0 1.214.66l7.2-2.277a.99.99 0 0 0 .653-.699a1.01 1.01 0 0 0-.234-.938a10 10 0 0 1-.48-.565c-1.152-1.465-1.636-3.01-1.713-4.48c-.131-2.511.974-4.79 1.474-5.81l.005-.01c.053-.107.104-.211.144-.298a1.503 1.503 0 0 1 2.018-.737a1.553 1.553 0 0 1 .723 2.049l-.195.415l-.037.077c-.507 1.073-1.193 2.522-1.107 4.15c.045.865.32 1.786 1.053 2.72c.748.952 2.028 1.985 4.187 2.946c1.51.672 2.597 1.632 3.205 2.935a.96.96 0 0 0 1.295.468M38 21a4 4 0 1 1-8 0a4 4 0 0 1 8 0m2 0a6 6 0 1 1-12 0a6 6 0 0 1 12 0M4.222 37.379a1.043 1.043 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.081a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.757 3.015-.017c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.475 3.933-1.565 5.557-.209l1.434 1.199c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.739-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405m1.44-6.163a1.043 1.043 0 0 0-1.44.163a.983.983 0 0 0 .167 1.405l1.622 1.253a4.46 4.46 0 0 0 5.706-.225l.09-.08a2.237 2.237 0 0 1 2.995 0a4.327 4.327 0 0 0 5.795 0a2.237 2.237 0 0 1 2.996 0c1.64 1.49 4.19 1.46 5.815-.018c.83-.755 2.124-.759 2.938-.017l.07.063c1.613 1.467 4.127 1.425 5.686-.095a2.08 2.08 0 0 1 2.771-.104l1.434 1.198c.43.36 1.077.311 1.446-.108a.983.983 0 0 0-.111-1.41l-1.434-1.199c-1.623-1.356-4.044-1.266-5.556.209a2.08 2.08 0 0 1-2.836.047l-.07-.064c-1.618-1.472-4.136-1.44-5.738.018c-.851.774-2.18.778-3.015.017a4.327 4.327 0 0 0-5.795 0a2.237 2.237 0 0 1-2.996 0a4.327 4.327 0 0 0-5.796 0l-.089.081a2.37 2.37 0 0 1-3.032.12z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSwimNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSwimNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSwimOutlineIcon],svg[healthicons-swim-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27.448 28.902c.484-.238.688-.833.456-1.33c-.858-1.838-2.358-3.09-4.183-3.902c-1.96-.872-2.95-1.734-3.448-2.368c-.464-.591-.601-1.107-.626-1.576c-.056-1.07.402-2.086.952-3.25l.001-.002l.202-.43c.817-1.768.073-3.875-1.653-4.706c-1.723-.83-3.782-.079-4.598 1.687q-.069.146-.14.29c-.506 1.029-1.828 3.72-1.667 6.79a9.76 9.76 0 0 0 1.757 5.106l-5.816 1.84a1 1 0 0 0-.642 1.245a.967.967 0 0 0 1.214.66l7.2-2.277a.99.99 0 0 0 .653-.699a1.01 1.01 0 0 0-.234-.938a10 10 0 0 1-.48-.565c-1.152-1.465-1.636-3.01-1.713-4.48c-.131-2.511.974-4.79 1.474-5.81l.005-.01c.053-.107.104-.211.144-.298a1.503 1.503 0 0 1 2.018-.737a1.553 1.553 0 0 1 .723 2.049l-.232.492c-.507 1.073-1.193 2.522-1.107 4.15c.045.865.32 1.786 1.053 2.72c.748.952 2.028 1.985 4.187 2.946c1.51.672 2.597 1.632 3.205 2.935a.96.96 0 0 0 1.295.468M34 25a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M4.222 37.379a1.043 1.043 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.081a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.757 3.015-.017c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.475 3.933-1.565 5.557-.209l1.434 1.199c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.739-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405m0-6a1.043 1.043 0 0 1 1.44-.163l1.623 1.254a2.37 2.37 0 0 0 3.032-.12l.09-.081a4.327 4.327 0 0 1 5.795 0a2.237 2.237 0 0 0 2.996 0a4.327 4.327 0 0 1 5.795 0c.836.76 2.164.757 3.015-.017c1.602-1.459 4.12-1.49 5.738-.018l.07.064c.804.732 2.058.71 2.835-.047c1.512-1.475 3.933-1.565 5.557-.209l1.434 1.199c.43.36.48.99.111 1.41a1.044 1.044 0 0 1-1.446.108l-1.434-1.198a2.08 2.08 0 0 0-2.771.104c-1.56 1.52-4.073 1.562-5.685.095l-.07-.063c-.815-.742-2.11-.739-2.94.017c-1.623 1.477-4.174 1.509-5.814.017a2.237 2.237 0 0 0-2.996 0a4.327 4.327 0 0 1-5.795 0a2.237 2.237 0 0 0-2.996 0l-.09.081a4.46 4.46 0 0 1-5.705.225l-1.622-1.253a.983.983 0 0 1-.167-1.405" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSwimOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSymptomIcon],svg[healthicons-symptom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M35.084 38.183A17.97 17.97 0 0 0 42 24c0-7.857-5.034-14.538-12.052-16.994l.66-1.888C38.408 7.847 44 15.27 44 24c0 6.413-3.018 12.121-7.712 15.781zm-6.618 3.259A18 18 0 0 1 24 42a18 18 0 0 1-4.372-.535l-.475 1.944c1.552.386 3.175.591 4.847.591c1.706 0 3.361-.214 4.942-.615zM6 24c0 5.789 2.733 10.94 6.979 14.232l-1.204 1.598C7.045 36.172 4 30.442 4 24C4 15.27 9.593 7.847 17.391 5.118l.661 1.888C11.034 9.462 6 16.143 6 24M28.5 8.5A4.5 4.5 0 1 1 23.99 4h.02a4.5 4.5 0 0 1 4.49 4.5"></svg:path><svg:path fill-rule="evenodd" d="M16 22c.729 0 1.412-.195 2-.535V29v-.003v.001l-.002.011c-.007.046-.032.22-.125.57a22 22 0 0 1-.466 1.485l-.11.316a4 4 0 0 0-2.015 5.098a192 192 0 0 1-1.557 3.593l-.049.108a2 2 0 0 0 3.456 1.977l2.248-3.174a4 4 0 0 0 3.503-4.945L24 32.46l6.868 9.696a2 2 0 0 0 3.456-1.977l-.049-.108a126 126 0 0 1-.645-1.463c-.418-.96-.974-2.258-1.529-3.615a81 81 0 0 1-1.508-3.929a22 22 0 0 1-.466-1.486c-.093-.35-.118-.523-.125-.569l-.001-.01q0-.005-.001.001v-2.535A3.998 3.998 0 0 0 30.646 20H36a2 2 0 1 0 0-4H19.465A4 4 0 0 0 16 14c-1.48 0-2.773.804-3.465 2H12a2 2 0 1 0 0 4h.535A4 4 0 0 0 16 22m2-4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m12 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSymptomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSymptom24pxIcon],svg[healthicons-symptom-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6.343 17.657l-.001-.002A8 8 0 0 1 8 5.072L7 3.34a10 10 0 0 0-4.914 7.355a10 10 0 0 0 2.843 8.376zm11.316-.002l-.002.002l1.414 1.414a10 10 0 0 0 2.843-8.376a10 10 0 0 0-4.913-7.355L16 5.072a8 8 0 0 1 1.659 12.583"></svg:path><svg:path fill-rule="evenodd" d="M7.268 8a2 2 0 0 1 3.464 0H17a1 1 0 1 1 0 2h-1.208A2.496 2.496 0 0 1 15 13v1.59l2.226 5.544a1.153 1.153 0 0 1-1.977 1.142l-3.267-4.162l-.497.634a2 2 0 0 1-1.274 1.622l-1.495 1.906a1.153 1.153 0 0 1-1.977-1.142l.837-2.086a2 2 0 0 1 .913-2.274L9 14.5V11a2 2 0 0 1-1.732-1H7a1 1 0 1 1 0-2zM9 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.5 2.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-4 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSymptom24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSymptomNegativeIcon],svg[healthicons-symptom-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSymptomNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16 16a2 2 0 1 1 0 4a2 2 0 0 1 0-4m2 9.985v-4.52A4 4 0 0 1 12.535 20H12a2 2 0 1 1 0-4h.535A4 4 0 0 1 16 14c1.48 0 2.773.804 3.465 2H36a2 2 0 1 1 0 4h-5.354A3.998 3.998 0 0 1 30 26.465V29q0-.01.002.01c.007.045.032.219.125.568c.105.398.264.901.466 1.486a81 81 0 0 0 1.508 3.929a179 179 0 0 0 2.174 5.078l.037.082l.01.02l.001.005v.001a2 2 0 0 1-3.455 1.977l-1.5-2.118L24 32.46l-1.117 1.577Q23 34.5 23 35a4 4 0 0 1-3.62 3.982l-2.248 3.174a2 2 0 0 1-3.456-1.977l.049-.108a118 118 0 0 0 .644-1.463c.262-.6.578-1.333.913-2.13a4 4 0 0 1 2.014-5.098q.057-.16.11-.316a22 22 0 0 0 .467-1.486c.093-.35.118-.523.125-.569Q18 28.99 18 29zM28 25a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4-12a4.5 4.5 0 0 0 .01-9h-.019A4.5 4.5 0 0 0 24 13m18 11c0 5.76-2.706 10.889-6.916 14.183l1.204 1.598C40.982 36.121 44 30.413 44 24c0-8.73-5.593-16.153-13.391-18.882l-.661 1.888C36.966 9.462 42 16.143 42 24M24 42c1.542 0 3.038-.194 4.466-.558l.476 1.943c-1.58.401-3.236.615-4.942.615c-1.672 0-3.295-.205-4.847-.592l.475-1.943c1.4.35 2.864.535 4.372.535m-11.021-3.768C8.733 34.94 6 29.79 6 24c0-7.857 5.034-14.538 12.052-16.994l-.66-1.888C9.592 7.847 4 15.27 4 24c0 6.442 3.045 12.172 7.775 15.83zM19 37a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSymptomNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSymptomNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSymptomOutlineIcon],svg[healthicons-symptom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2.5-4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M12 21h2.354a4 4 0 0 0 3.146.97v6.945a5 5 0 0 1-.093.407a21 21 0 0 1-.445 1.415a66 66 0 0 1-.997 2.658a4 4 0 0 0-.957 2.342a189 189 0 0 1-1.557 3.613c-.281.634-.48 1.407-.371 2.183c.115.826.57 1.579 1.43 2.071a3 3 0 0 0 3.938-.87l1.5-2.118q.061-.085.116-.177l.446-.734a4 4 0 0 0 2.473-4.073l1.267-2.087l4.186 6.894q.054.09.116.177l1.5 2.118a3 3 0 0 0 3.938.87c.86-.492 1.315-1.245 1.43-2.071c.108-.776-.09-1.549-.371-2.183a194 194 0 0 1-2.022-4.736a80 80 0 0 1-1.489-3.877a21 21 0 0 1-.445-1.415l-.016-.064V26.19A4.5 4.5 0 0 0 33 22.5c0-.526-.09-1.03-.256-1.5H36a3 3 0 1 0 0-6H19.646A4 4 0 0 0 17 14a4 4 0 0 0-2.646 1H12a3 3 0 1 0 0 6m1.126-4H12a1 1 0 1 0 0 2h1.126a4 4 0 0 1 0-2m6.374 8.993v-4.87A3.99 3.99 0 0 0 20.874 17H36a1 1 0 1 1 0 2h-4.671a4.5 4.5 0 1 0-2.252 7.963v2.417a1 1 0 0 0 .027.232l.056.222c.114.431.281.96.488 1.558a81 81 0 0 0 1.527 3.98a180 180 0 0 0 2.046 4.789c.192.432.257.816.218 1.096c-.032.23-.134.435-.443.611a1 1 0 0 1-1.312-.29l-1.5-2.118l-.039-.059l-5.04-8.302a1 1 0 0 0-1.71 0l-1.38 2.273a3.99 3.99 0 0 0-3.385-1.355q.117-.321.222-.625a23 23 0 0 0 .488-1.558a6 6 0 0 0 .14-.639A1 1 0 0 0 19.5 29zm-3.714 13.014l.176-.405a4 4 0 0 0 2.058 1.277l-1.204 1.699a1 1 0 0 1-1.313.29c-.308-.176-.41-.38-.442-.61c-.04-.281.026-.665.218-1.097c.123-.276.297-.672.507-1.154M17 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11.5 5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M19 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M29.931 7C36.958 9.452 42 16.137 42 24a17.96 17.96 0 0 1-6.404 13.768l1.258 1.555C41.223 35.654 44 30.151 44 24c0-8.736-5.601-16.164-13.408-18.888zm-2.533 34.68a18.2 18.2 0 0 1-5.963.139l-.278 1.98a20.2 20.2 0 0 0 6.6-.151zM6 24c0 5.777 2.722 10.92 6.953 14.213L11.75 39.81C7.035 36.152 4 30.43 4 24C4 15.264 9.601 7.836 17.408 5.112L18.068 7C11.043 9.452 6 16.137 6 24"></svg:path></svg:g>`,
})
export class HealthiconsSymptomOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSymptomOutline24pxIcon],svg[healthicons-symptom-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6.343 17.657l-.001-.002A8 8 0 0 1 8 5.072L7 3.34a10 10 0 0 0-4.914 7.355a10 10 0 0 0 2.843 8.376zm11.316-.002l-.002.002l1.414 1.414a10 10 0 0 0 2.843-8.376a10 10 0 0 0-4.913-7.355L16 5.072a8 8 0 0 1 1.659 12.583"></svg:path><svg:path fill-rule="evenodd" d="M7.268 8a2 2 0 0 1 3.464 0H17a1 1 0 1 1 0 2h-1.208A2.496 2.496 0 0 1 15 13v1.59l2.226 5.544a1.153 1.153 0 0 1-1.977 1.142l-3.267-4.162l-.497.634a2 2 0 0 1-1.274 1.622l-1.495 1.906a1.153 1.153 0 0 1-1.977-1.142l.837-2.086a2 2 0 0 1 .913-2.274L9 14.5V11a2 2 0 0 1-1.732-1H7a1 1 0 1 1 0-2zM9 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4.5 2.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-4 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSymptomOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSynergistInsecticideBioassaysIcon],svg[healthicons-synergist-insecticide-bioassays-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 26a4 4 0 0 1 3.446 6.032l-5.478-5.478A4 4 0 0 1 14 26m-3.446 1.968a4 4 0 0 0 5.478 5.478z"></svg:path><svg:path fill-rule="evenodd" d="M11 6a1 1 0 0 0-1 1v3.333a1 1 0 0 0 1 1h2V13H9.5a1.5 1.5 0 0 0-.018 3a1 1 0 0 1-.051.159l-3.263 7.458a2 2 0 0 0-.168.801V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V24.418a2 2 0 0 0-.168-.801l-3.263-7.459a1 1 0 0 1-.05-.158a1.5 1.5 0 0 0-.019-3H15v-1.667h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm3 4a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 14 10m0 14a6 6 0 1 1 0 12a6 6 0 0 1 0-12" clip-rule="evenodd"></svg:path><svg:path d="M42 40c0 1.105-.625 2-5 2c-3.495 0-4.597-.571-4.899-1.364c-.363.517-1.042.949-1.876 1.13c-.709.155-1.392.098-1.917-.118c-.819.447-1.875.515-2.778-.069C24.528 40.931 24 39.667 24 38a1 1 0 1 1 2 0c0 1.3.404 1.762.617 1.9c.215.14.523.144.814-.058l.04-.026c.3-.627 1.06-1.176 2.026-1.387c1.333-.29 2.574.167 2.842 1.026c.223-.206.55-.423.957-.625l-2.066-2.392h-1.146a1.25 1.25 0 0 1-1.09-.637l-1.865-3.31a1 1 0 0 1 1.742-.982l1.65 2.928h.938c.436 0 .85.19 1.135.52l2.225 2.577c.17.197.25.442.243.683q.211-.047.432-.086l.134-2.222l-1.435-.828a1.5 1.5 0 0 1-.586-1.982l1.289-2.523a1 1 0 1 1 1.78.91l-1.072 2.1l1.291.745a1.5 1.5 0 0 1 .747 1.39l-.137 2.294l.181.012l1.853-1.711l-.943-1.587a1.25 1.25 0 0 1-.015-1.252l1.422-2.529a1 1 0 0 1 1.744.98l-1.21 2.152l.928 1.562a1.5 1.5 0 0 1-.271 1.868l-1.13 1.043C41.242 39 42 39.613 42 40"></svg:path><svg:path fill-rule="evenodd" d="M41 19.8c.616.338 1 .985 1 1.69V26H32v-4.51c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10v4.51c0 .705-.384 1.352-1 1.69zm-6-7.644c0-.705-.384-1.352-1-1.69v-.695h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSynergistInsecticideBioassaysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSynergistInsecticideBioassaysNegativeIcon],svg[healthicons-synergist-insecticide-bioassays-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsSynergistInsecticideBioassaysNegative0)"><svg:path d="M14 10a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 14 10"></svg:path><svg:path fill-rule="evenodd" d="M14 24a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 2a4 4 0 0 1 3.446 6.032l-5.478-5.478A4 4 0 0 1 14 26m-3.446 1.968a4 4 0 0 0 5.478 5.478z" clip-rule="evenodd"></svg:path><svg:path d="M35 12.156c0-.705-.384-1.352-1-1.69v-.695h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM10 10.333a1 1 0 0 0 1 1h2V13H9.5a1.5 1.5 0 0 0-.018 3a1 1 0 0 1-.051.159l-3.263 7.458a2 2 0 0 0-.168.801V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V24.418a2 2 0 0 0-.168-.801l-3.263-7.459a1 1 0 0 1-.05-.158a1.5 1.5 0 0 0-.019-3H15v-1.667h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zM42 40c0 1.105-.625 2-5 2c-3.495 0-4.597-.571-4.899-1.364c-.363.517-1.042.949-1.876 1.13c-.709.155-1.392.098-1.917-.118c-.819.447-1.875.515-2.778-.069C24.528 40.931 24 39.667 24 38a1 1 0 1 1 2 0c0 1.3.404 1.762.617 1.9c.215.14.523.144.814-.058l.04-.026c.3-.627 1.06-1.176 2.026-1.387c1.333-.29 2.574.167 2.842 1.026c.223-.206.55-.423.957-.625l-2.066-2.392h-1.146a1.25 1.25 0 0 1-1.09-.637l-1.865-3.31a1 1 0 0 1 1.742-.982l1.65 2.928h.938c.436 0 .85.19 1.135.52l2.225 2.577c.17.197.25.442.243.683q.211-.047.432-.086l.134-2.222l-1.435-.828a1.5 1.5 0 0 1-.586-1.982l1.289-2.523a1 1 0 0 1 1.78.91l-1.072 2.1l1.291.745a1.5 1.5 0 0 1 .747 1.39l-.137 2.294l.181.012l1.853-1.711l-.943-1.587a1.25 1.25 0 0 1-.015-1.252l1.422-2.529a1 1 0 0 1 1.744.98l-1.21 2.152l.928 1.562a1.5 1.5 0 0 1-.271 1.868l-1.13 1.043C41.242 39 42 39.613 42 40m-1-20.2c.616.338 1 .985 1 1.69V26H32v-4.51c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10v4.51c0 .705-.384 1.352-1 1.69z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSynergistInsecticideBioassaysNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSynergistInsecticideBioassaysNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSynergistInsecticideBioassaysOutlineIcon],svg[healthicons-synergist-insecticide-bioassays-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 24a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 0 1 2.708 4.293l-4.001-4c.391-.188.83-.293 1.293-.293m-2.708 1.707a3 3 0 0 0 4.001 4.001z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 6a1 1 0 0 0-1 1v3.333a1 1 0 0 0 1 1h2V13H9a1 1 0 1 0 0 2h.063l-2.895 6.617a2 2 0 0 0-.168.801V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V22.418a2 2 0 0 0-.168-.801L18.937 15H19a1 1 0 1 0 0-2h-4v-1.667h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm.245 9L8 22.418V40h12V22.418L16.755 15zM14 10a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 14 10" clip-rule="evenodd"></svg:path><svg:path d="M36.677 31.486a1 1 0 1 0-1.781-.91l-1.29 2.523q-.066.134-.107.273a1.5 1.5 0 0 0 .694 1.709l1.435.828l-.134 2.222a9 9 0 0 0-.432.086a1 1 0 0 0-.243-.683l-2.225-2.577a1.5 1.5 0 0 0-1.135-.52h-.937l-1.65-2.928a1 1 0 1 0-1.743.982l1.866 3.31a1.25 1.25 0 0 0 1.089.636h1.146l2.066 2.393a4.2 4.2 0 0 0-.957.625c-.268-.86-1.509-1.316-2.841-1.026c-.968.211-1.727.76-2.027 1.387l-.04.026c-.291.202-.6.197-.814.059C26.404 39.762 26 39.3 26 38a1 1 0 1 0-2 0c0 1.667.528 2.93 1.53 3.58c.903.584 1.96.515 2.778.068c.525.216 1.208.273 1.917.119c.834-.182 1.512-.614 1.876-1.131C32.403 41.429 33.505 42 37 42c4.375 0 5-.895 5-2c0-.388-.758-1.001-1.936-1.447l1.13-1.043a1.5 1.5 0 0 0 .271-1.868l-.928-1.562l1.21-2.151a1 1 0 0 0-1.744-.98l-1.422 2.528c-.22.39-.214.867.015 1.252l.943 1.587l-1.853 1.711l-.181-.012l.137-2.295a1.5 1.5 0 0 0-.747-1.389l-1.291-.745z"></svg:path><svg:path fill-rule="evenodd" d="M41 19.8c.616.338 1 .985 1 1.69V26H32v-4.51c0-.705.384-1.352 1-1.69v-7.6c-.616-.338-1-.985-1-1.69V6h10v4.51c0 .705-.384 1.352-1 1.69zm-6-7.644c0-.705-.384-1.352-1-1.69v-.695h6v.696c-.616.337-1 .984-1 1.689v7.688c0 .705.384 1.352 1 1.69v.695h-6v-.696c.616-.337 1-.984 1-1.689z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSynergistInsecticideBioassaysOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyphilisAltIcon],svg[healthicons-syphilis-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.548 3.75L5.942 8.77a38 38 0 0 0-1.584 15.702l2.148 19.691l1.988-.217l-2.148-19.691a36 36 0 0 1 1.5-14.876l1.607-5.02zm32.904 0l1.606 5.02a38 38 0 0 1 1.584 15.702l-2.148 19.691l-1.988-.217l2.148-19.691a36 36 0 0 0-1.5-14.876l-1.607-5.02z"></svg:path><svg:path fill-rule="evenodd" d="M13 24.055c0 5.035 3.383 9.28 8 10.586v9.414h2V35.01a11 11 0 0 0 2 0v9.045h2V34.64c4.617-1.306 8-5.551 8-10.586c0-6.075-4.925-11-11-11s-11 4.925-11 11m3.511 2.453a1 1 0 0 1 1.114-.872l.794.097a.543.543 0 0 0 .562-.76l-.074-.165a2.416 2.416 0 0 1 2.04-3.391c.12-.009.261-.073.4-.262c.143-.197.236-.476.238-.75c.004-.612.119-1.356.554-2.01c.46-.689 1.195-1.16 2.197-1.327a1 1 0 0 1 .328 1.973c-.525.088-.745.29-.86.463c-.138.208-.217.515-.22.913a3.33 3.33 0 0 1-.622 1.917c-.408.558-1.047 1.02-1.876 1.078a.416.416 0 0 0-.351.584l.073.165c.803 1.806-.67 3.796-2.63 3.557l-.795-.096a1 1 0 0 1-.872-1.114m14.23-6.88a1 1 0 0 1-.59 1.285l-1.679.62a.45.45 0 0 0-.131.768c1.685 1.398.829 4.136-1.353 4.325l-1.432.124a.465.465 0 0 0-.263.816c1.437 1.235 1.001 3.563-.786 4.194l-.674.238a1 1 0 0 1-.666-1.886l.674-.238a.465.465 0 0 0 .148-.791c-1.655-1.423-.78-4.137 1.394-4.325l1.433-.124a.45.45 0 0 0 .248-.794c-1.451-1.204-1.054-3.528.715-4.182l1.678-.62a1 1 0 0 1 1.285.59" clip-rule="evenodd"></svg:path><svg:path d="M25.15 6.055a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class HealthiconsSyphilisAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyphilisAltOutlineIcon],svg[healthicons-syphilis-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.548 3.75L5.942 8.77a38 38 0 0 0-1.584 15.702l2.148 19.691l1.988-.217l-2.148-19.691a36 36 0 0 1 1.5-14.876l1.607-5.02zm32.904 0l1.606 5.02a38 38 0 0 1 1.584 15.702l-2.148 19.691l-1.988-.217l2.148-19.691a36 36 0 0 0-1.5-14.876l-1.607-5.02zM30.15 20.913a1 1 0 1 0-.693-1.876l-1.678.62c-1.77.655-2.166 2.979-.715 4.183a.45.45 0 0 1-.248.794l-1.433.124c-2.175.188-3.05 2.902-1.394 4.325a.465.465 0 0 1-.148.79l-.674.239a1 1 0 0 0 .666 1.886l.674-.238c1.787-.631 2.223-2.959.786-4.194a.465.465 0 0 1 .263-.816l1.432-.124c2.182-.189 3.038-2.927 1.353-4.325a.45.45 0 0 1 .131-.767zm-12.525 4.723a1 1 0 1 0-.242 1.986l.794.096c1.961.24 3.434-1.751 2.631-3.557l-.073-.165a.416.416 0 0 1 .35-.584c.83-.058 1.47-.52 1.877-1.078c.402-.55.619-1.241.623-1.917c.002-.398.08-.705.22-.913c.114-.173.334-.375.86-.463a1 1 0 0 0-.33-1.973c-1.001.167-1.737.638-2.196 1.327c-.435.654-.55 1.398-.554 2.01a1.33 1.33 0 0 1-.239.75c-.138.189-.28.253-.4.262a2.416 2.416 0 0 0-2.039 3.39l.074.167a.543.543 0 0 1-.562.759z"></svg:path><svg:path fill-rule="evenodd" d="M12 24.055c0 5.591 3.824 10.29 9 11.622v8.378h2v-8.041a12 12 0 0 0 2 0v8.04h2v-8.377c5.176-1.332 9-6.03 9-11.622c0-6.628-5.373-12-12-12s-12 5.372-12 12m12-10c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10" clip-rule="evenodd"></svg:path><svg:path d="M24.15 5.055a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class HealthiconsSyphilisAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeIcon],svg[healthicons-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.818 13.364A1.157 1.157 0 0 0 8.455 15l.818-.818l4.09 4.09l-3.272 3.273a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636l13.91 13.91a5.79 5.79 0 0 0 6.204 1.296l1.16 1.159a2.31 2.31 0 0 0 2.235.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.636l-2.674-2.674a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.79 5.79 0 0 0-1.295-6.205l-13.91-13.91l1.637-1.636a1.157 1.157 0 1 0-1.637-1.637l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 1 0-1.636-1.637zm10.04 1.413l-4.09-4.09l-2.08 2.08l4.09 4.09zm3.273 0l-5.354 5.354l4.406 4.406l5.354-5.353zm.689 11.397l2.454 2.454l1.637 1.637l1.636 1.636l1.636 1.636l.504.504a3.79 3.79 0 0 0 4.062.847l2.139-2.139a3.79 3.79 0 0 0-.848-4.062l-7.867-7.867zm15.702 9.909l-.027-.032l-.824-.824a6 6 0 0 1-.445.444l.824.825q.015.015.032.027a1.16 1.16 0 0 1 .44-.44"></svg:path><svg:path d="M6.818 13.364A1.157 1.157 0 1 0 8.455 15l.818-.819l4.09 4.09l-3.272 3.274a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636l3.923 3.923q.278.277.581.509l-.036.036l4.03 4.03l3.272-3.274a1.157 1.157 0 1 1 1.636 1.637l-3.272 3.273l1.636 1.636l3.273-3.273a1.157 1.157 0 1 1 1.636 1.636l-3.273 3.273l.504.504a5.79 5.79 0 0 0 6.205 1.296l1.158 1.159a2.31 2.31 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 0 0 1.637-1.637l-2.674-2.673a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.79 5.79 0 0 0-1.296-6.205l-9.441-9.442l-.036.036a6 6 0 0 0-.51-.581l-3.922-3.923l1.637-1.637a1.157 1.157 0 1 0-1.637-1.636l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 1 0-1.636-1.637zm10.04 1.413l-4.09-4.09l-2.08 2.08l4.09 4.09zm3.273 0l3.922 3.923a4 4 0 0 1 .49.6l-5.242 5.243a4 4 0 0 1-.601-.49l-3.923-3.922z"></svg:path></svg:g>`,
})
export class HealthiconsSyringeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringe24pxIcon],svg[healthicons-syringe-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 3.707a1 1 0 0 0-1.414-1.414l-1 1l-1 1l-1 1a1 1 0 0 0 1.414 1.414L4 6.414L6.586 9l-2.293 2.293l1.414 1.414L7 11.414l7.086 7.086a2 2 0 0 0 2.828 0l.263-.263l2.293 2.293l1.06-1.06l-2.293-2.293l.263-.263a2 2 0 0 0 0-2.828l-.762-.763l-1.208 1.207a.75.75 0 1 1-1.06-1.06l1.207-1.208l-1.94-1.939l-1.207 1.207a.75.75 0 1 1-1.06-1.06l1.207-1.208L11.414 7l1.293-1.293l-1.414-1.414L9 6.586L6.414 4z"></svg:path>`,
})
export class HealthiconsSyringe24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeNegativeIcon],svg[healthicons-syringe-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSyringeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM15 19.908l-.223.223l3.923 3.922q.281.28.6.49l5.243-5.242a4 4 0 0 0-.49-.601l-3.922-3.923l-.222.222l-1.414 1.414l-2.08 2.081zm6.545-6.545l3.923 3.923q.276.278.509.581l.036-.036l9.441 9.442a5.79 5.79 0 0 1 1.296 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.31 2.31 0 0 1-2.236-.6l-1.158-1.158a5.79 5.79 0 0 1-6.205-1.296l-9.442-9.442l.036-.036a6 6 0 0 1-.581-.51l-3.923-3.922l-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273l-4.09-4.09l-.82.818a1.157 1.157 0 1 1-1.636-1.636l.819-.819L9.05 11.13l2.08-2.08l1.415-1.415l.818-.817A1.157 1.157 0 1 1 15 8.455l-.818.817l4.09 4.09l3.273-3.272a1.157 1.157 0 0 1 1.637 1.636zm-4.687 1.414l-4.09-4.09l-2.08 2.08l4.09 4.09zM24.01 29.53a1.157 1.157 0 0 1 0-1.637l1.124-1.124a1.157 1.157 0 1 1 1.636 1.637l-1.123 1.124a1.157 1.157 0 0 1-1.637 0m3.366 1.542a1.157 1.157 0 1 0 1.637 1.637l1.03-1.03a1.157 1.157 0 1 0-1.637-1.637z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSyringeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSyringeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeOutlineIcon],svg[healthicons-syringe-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.818 13.364A1.157 1.157 0 0 0 8.455 15l.818-.818l4.09 4.09l-3.272 3.273a1.157 1.157 0 1 0 1.636 1.636l1.636-1.636l13.91 13.91a5.79 5.79 0 0 0 6.204 1.296l1.16 1.159a2.31 2.31 0 0 0 2.235.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.636l-2.674-2.674a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.79 5.79 0 0 0-1.295-6.205l-13.91-13.91l1.637-1.636a1.157 1.157 0 1 0-1.637-1.637l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 1 0-1.636-1.637zm10.04 1.413l-4.09-4.09l-2.08 2.08l4.09 4.09zm3.273 0l-5.354 5.354l4.406 4.406l5.354-5.353zm.689 11.397l2.454 2.454l1.859-1.859a1.157 1.157 0 1 1 1.636 1.637l-1.858 1.859l1.636 1.636l1.858-1.86a1.157 1.157 0 1 1 1.637 1.637l-1.859 1.859l.504.504a3.79 3.79 0 0 0 4.062.847l2.139-2.139a3.79 3.79 0 0 0-.848-4.062l-7.867-7.867zm15.702 9.909l-.027-.032l-.824-.824a6 6 0 0 1-.445.444l.824.825q.015.015.032.027a1.16 1.16 0 0 1 .44-.44" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSyringeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeOutline24pxIcon],svg[healthicons-syringe-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.207 3.707a1 1 0 0 0-1.414-1.414l-3.5 3.5a1 1 0 0 0 1.414 1.414l.043-.043L6.586 10l-2.293 2.293l1.414 1.414L7 12.414l6.732 6.732a2.5 2.5 0 0 0 3.536 0l.409-.409l1.793 1.793l1.06-1.06l-1.793-1.793l.41-.41a2.5 2.5 0 0 0 0-3.535L12.413 7l1.293-1.293l-1.414-1.414L10 6.586L7.164 3.75zM5.75 5.164l-.586.586L8 8.586L8.586 8zM11 8.414L8.414 11l2.013 2.013l1.043-1.043a.75.75 0 1 1 1.06 1.06l-1.043 1.043l1.44 1.44l1.043-1.043a.75.75 0 1 1 1.06 1.06l-1.043 1.043l1.16 1.16a.5.5 0 0 0 .707 0l1.878-1.88a.5.5 0 0 0 0-.707z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSyringeOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeVaccineIcon],svg[healthicons-syringe-vaccine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.818 12.864A1.157 1.157 0 1 0 8.455 14.5l.818-.819l4.09 4.09l-3.272 3.274a1.157 1.157 0 0 0 1.636 1.636l1.636-1.636L16.318 24H8.374c-.63 0-1.233.253-1.679.703A2.4 2.4 0 0 0 6 26.4v3.598a12.35 12.35 0 0 0 2.66 7.69A12.12 12.12 0 0 0 15.5 42a12.12 12.12 0 0 0 6.84-4.31a12.3 12.3 0 0 0 2.422-5.246l2.51 2.51a5.79 5.79 0 0 0 6.206 1.297l1.158 1.159a2.31 2.31 0 0 0 2.236.599l2.673 2.673a1.157 1.157 0 1 0 1.637-1.637l-2.674-2.673a2.31 2.31 0 0 0-.6-2.235l-1.158-1.159a5.8 5.8 0 0 0 .352-2.85a5.76 5.76 0 0 0-1.647-3.355l-13.91-13.91l1.637-1.637a1.157 1.157 0 0 0-1.637-1.636l-3.272 3.273l-4.09-4.09l.817-.818a1.157 1.157 0 0 0-1.636-1.637zM26.547 31.4l5.353-5.353l-11.77-11.77l-5.353 5.354L19.147 24h3.479c.63 0 1.233.253 1.678.703c.446.45.696 1.06.696 1.697v3.454zm-9.689-17.123l-4.09-4.09l-2.08 2.08l4.09 4.09zm18.813 20.45a6 6 0 0 1-.445.444l.824.824a.314.314 0 1 0 .445-.444zm-2.135-7.044l.504.504a3.77 3.77 0 0 1 1.095 3.008a3.8 3.8 0 0 1-.247 1.054l-2.14 2.139a3.79 3.79 0 0 1-4.061-.847l-.504-.504zM17 29a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSyringeVaccineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeVaccineNegativeIcon],svg[healthicons-syringe-vaccine-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSyringeVaccineNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24.762 32.444a12.3 12.3 0 0 1-2.422 5.245A12.12 12.12 0 0 1 15.5 42a12.12 12.12 0 0 1-6.84-4.311A12.35 12.35 0 0 1 6 29.999v-3.6c0-.636.25-1.246.695-1.696A2.36 2.36 0 0 1 8.375 24h7.943l-2.955-2.955l-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273l-4.09-4.09l-.82.818a1.157 1.157 0 1 1-1.636-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817l4.09 4.09l3.273-3.272a1.157 1.157 0 0 1 1.637 1.636l-1.637 1.637l13.91 13.91a5.79 5.79 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.31 2.31 0 0 1-2.236-.6l-1.158-1.158a5.79 5.79 0 0 1-6.205-1.296zM20.13 14.277l11.77 11.77l-5.354 5.353L25 29.854V26.4c0-.637-.25-1.247-.695-1.697a2.36 2.36 0 0 0-1.68-.703h-3.479l-4.369-4.37zm-3.273 0l-4.09-4.09l-2.08 2.08l4.09 4.09zm18.03 17.972l-2.14 2.139a3.79 3.79 0 0 1-4.061-.847l-.504-.504l5.353-5.354l.504.504a3.79 3.79 0 0 1 .848 4.062m.338 2.922l.824.824a.314.314 0 1 0 .445-.444l-.824-.824a6 6 0 0 1-.445.444M16 28a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSyringeVaccineNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSyringeVaccineNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsSyringeVaccineOutlineIcon],svg[healthicons-syringe-vaccine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.818 14.5a1.157 1.157 0 0 1 0-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817l4.09 4.09l3.273-3.272a1.157 1.157 0 1 1 1.637 1.636l-1.637 1.637l13.91 13.91a5.79 5.79 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.31 2.31 0 0 1-2.236-.6l-1.158-1.158a5.79 5.79 0 0 1-6.205-1.296l-2.14-2.14l6.767-6.768l-11.77-11.77l-5.353 5.354L17.147 22h-2.829l-.955-.955l-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273l-4.09-4.09l-.82.818a1.157 1.157 0 0 1-1.636 0m5.95-4.313l-2.08 2.08l4.09 4.09l2.08-2.08zM28.687 33.54a3.79 3.79 0 0 0 4.061.847l2.14-2.14a3.79 3.79 0 0 0-.848-4.06l-.504-.505l-5.353 5.354zm6.768 1.414q-.112.113-.229.216l.824.824a.314.314 0 1 0 .445-.444l-.824-.824a6 6 0 0 1-.216.228" clip-rule="evenodd"></svg:path><svg:path d="M16 28a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M8.66 37.689A12.12 12.12 0 0 0 15.5 42a12.12 12.12 0 0 0 6.84-4.31A12.35 12.35 0 0 0 25 29.997V26.4c0-.637-.25-1.247-.695-1.697a2.36 2.36 0 0 0-1.68-.703H8.376c-.63 0-1.234.253-1.68.703A2.4 2.4 0 0 0 6 26.4v3.598a12.35 12.35 0 0 0 2.66 7.69M23 29.999v.004a10.35 10.35 0 0 1-2.228 6.445a10.13 10.13 0 0 1-5.273 3.492a10.13 10.13 0 0 1-5.271-3.492A10.35 10.35 0 0 1 8 30.002V26.4c0-.113.045-.217.117-.29a.36.36 0 0 1 .257-.11h14.252c.092 0 .185.037.257.11a.4.4 0 0 1 .117.29z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSyringeVaccineOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTIcon],svg[healthicons-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4h-6v22a2 2 0 1 1-4 0V14h-6a2 2 0 0 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTNegativeIcon],svg[healthicons-t-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16 10a2 2 0 1 0 0 4h6v22a2 2 0 1 0 4 0V14h6a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTOutlineIcon],svg[healthicons-t-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6h-5v21a3 3 0 1 1-6 0V15h-5a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h7v23a1 1 0 1 0 2 0V13h7a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTacIcon],svg[healthicons-tac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 25a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path fill-rule="evenodd" d="M7 23c0 3.942 1.342 7.571 3.594 10.455L9.33 36.444C8.217 39.08 10.153 42 13.016 42h21.968c2.863 0 4.799-2.92 3.685-5.556l-1.263-2.99A16.93 16.93 0 0 0 41 23c0-9.389-7.611-17-17-17S7 13.611 7 23m22 9l1.6 8h4.384a2 2 0 0 0 1.843-2.778L32.1 26.032a2 2 0 0 0-1.843-1.222h-1.621a6 6 0 0 0 1.086-2h.535c.804 0 1.57.24 2.212.667q.109-.671.11-1.372a8.526 8.526 0 1 0-16.953 1.31a4 4 0 0 1 2.117-.605h.535a6 6 0 0 0 1.086 2h-1.621a2 2 0 0 0-1.842 1.221l-4.727 11.19A2 2 0 0 0 13.016 40H17.4l1.6-8h-.585l-1.992 5.974a1.5 1.5 0 1 1-2.846-.948l2.544-7.633A3.5 3.5 0 0 1 19.441 27h9.118a3.5 3.5 0 0 1 3.32 2.393l2.544 7.633a1.5 1.5 0 1 1-2.846.948L29.585 32zm-9.184-20.33a11.26 11.26 0 0 1 8.62.06l.778-1.842a13.26 13.26 0 0 0-10.15-.072z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTacNegativeIcon],svg[healthicons-tac-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTacNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM10.594 33.455A16.93 16.93 0 0 1 7 23c0-9.389 7.611-17 17-17s17 7.611 17 17c0 3.942-1.342 7.571-3.594 10.455l1.263 2.989C39.783 39.08 37.847 42 34.984 42H13.016c-2.863 0-4.799-2.92-3.685-5.556zM34.984 40h-4.826l-1.6-8h1.027l1.992 5.974a1.5 1.5 0 1 0 2.846-.948l-2.544-7.633A3.5 3.5 0 0 0 28.559 27h-9.117a3.5 3.5 0 0 0-3.32 2.393l-2.545 7.633a1.5 1.5 0 1 0 2.846.948L18.415 32H19.6l-.8 4l-.8 4h-4.984a2 2 0 0 1-1.842-2.778l4.727-11.19a2 2 0 0 1 1.842-1.222h1.621a6 6 0 0 1-1.086-2h-.535c-.765 0-1.495.218-2.117.606a8.526 8.526 0 1 1 16.843.061a4 4 0 0 0-2.212-.667h-.535a6 6 0 0 1-1.086 2h1.621a2 2 0 0 1 1.843 1.22l4.728 11.19A2 2 0 0 1 34.984 40M24.132 10.842c-1.48-.01-2.946.271-4.316.827l-.753-1.853a13.26 13.26 0 0 1 10.151.072l-.778 1.842a11.3 11.3 0 0 0-4.304-.888M28 21a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTacNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTacNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTacOutlineIcon],svg[healthicons-tac-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38.214 31.353A15.9 15.9 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 2.651.645 5.151 1.786 7.353L8.73 33.535A17.9 17.9 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18c0 3.502-1 6.77-2.73 9.535z"></svg:path><svg:path fill-rule="evenodd" d="M24 17a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.058 25.253q.063-.147.135-.287A10 10 0 0 1 14 23c0-5.523 4.477-10 10-10s10 4.477 10 10q-.001 1.01-.193 1.966q.072.14.135.287l4.727 11.19C39.783 39.082 37.847 42 34.984 42H13.016c-2.863 0-4.799-2.92-3.685-5.556zM24 15a8 8 0 0 0-7.997 8.208c.464-.224.974-.36 1.505-.391a6.5 6.5 0 0 0 .414 1.993h-.179a2 2 0 0 0-1.842 1.221l-4.727 11.191A2 2 0 0 0 13.016 40h.322a3.5 3.5 0 0 1-.055-2.879l2.48-5.788A5.5 5.5 0 0 1 20.82 28h6.362a5.5 5.5 0 0 1 5.055 3.333l2.48 5.788a3.5 3.5 0 0 1-.054 2.88h.322a2 2 0 0 0 1.843-2.779L32.1 26.032a2 2 0 0 0-1.843-1.222h-.18a6.5 6.5 0 0 0 .415-1.993c.531.03 1.041.167 1.505.39Q32 23.106 32 23a8 8 0 0 0-8-8m8.09 24.879a1.5 1.5 0 0 1-.564.121h-.051a1.5 1.5 0 0 1-.97-.376a1 1 0 0 0-.113-.087l-1.963-4.908a1 1 0 0 0-1.857.742L28.423 40h-8.846l1.851-4.629a1 1 0 0 0-1.857-.742l-1.963 4.908q-.06.039-.113.087a1.5 1.5 0 0 1-.97.376h-.05a1.5 1.5 0 0 1-1.353-2.091l2.48-5.788A3.5 3.5 0 0 1 20.819 30h6.362a3.5 3.5 0 0 1 3.217 2.121l2.48 5.788a1.5 1.5 0 0 1-.787 1.97" clip-rule="evenodd"></svg:path><svg:path d="M19.376 12.381a12 12 0 0 1 9.184.065l.779-1.842a14 14 0 0 0-10.715-.076z"></svg:path></svg:g>`,
})
export class HealthiconsTacOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTallyIcon],svg[healthicons-tally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.157 44c11.046 0 20-8.954 20-20s-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20M17 14a1 1 0 0 0-1 1v.723l-2.468-2.107l-1.299 1.522L16 18.353V33a1 1 0 1 0 2 0V20.06l3 2.56V33a1 1 0 1 0 2 0v-8.673l3 2.56V33a1 1 0 1 0 2 0v-4.405l3 2.56V33a1 1 0 1 0 2 0v-.138l1.82 1.554l1.3-1.52L33 30.232V15a1 1 0 1 0-2 0v13.526l-3-2.56V15a1 1 0 1 0-2 0v9.258l-3-2.56V15a1 1 0 1 0-2 0v4.99l-3-2.56V15a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTallyNegativeIcon],svg[healthicons-tally-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTallyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 .048H0v48h48zM44.157 24c0 11.046-8.954 20-20 20s-20-8.954-20-20s8.954-20 20-20s20 8.954 20 20M16 15a1 1 0 1 1 2 0v2.43l3 2.56V15a1 1 0 1 1 2 0v6.698l3 2.56V15a1 1 0 1 1 2 0v10.965l3 2.56V15a1 1 0 1 1 2 0v15.233l3.12 2.662l-1.3 1.521L33 32.863V33a1 1 0 1 1-2 0v-1.845l-3-2.56V33a1 1 0 1 1-2 0v-6.112l-3-2.56V33a1 1 0 1 1-2 0V22.62l-3-2.56V33a1 1 0 1 1-2 0V18.353l-3.767-3.215l1.299-1.521L16 15.723z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTallyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTallyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTallyOutlineIcon],svg[healthicons-tally-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 15a1 1 0 1 1 2 0v2.43l3 2.56V15a1 1 0 1 1 2 0v6.698l3 2.56V15a1 1 0 1 1 2 0v10.965l3 2.56V15a1 1 0 1 1 2 0v15.233l3.12 2.662l-1.3 1.521L33 32.863V33a1 1 0 1 1-2 0v-1.845l-3-2.56V33a1 1 0 1 1-2 0v-6.112l-3-2.56V33a1 1 0 1 1-2 0V22.62l-3-2.56V33a1 1 0 1 1-2 0V18.353l-3.767-3.215l1.299-1.521L16 15.723z"></svg:path><svg:path fill-rule="evenodd" d="M24.157 44c11.046 0 20-8.954 20-20s-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20m0-2c9.941 0 18-8.059 18-18s-8.059-18-18-18s-18 8.059-18 18s8.059 18 18 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTallyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTbIcon],svg[healthicons-tb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 20.5V6h2v14.5c0 1.398.564 1.942 1.004 2.199q.073.042.148.078l-.004-.377c-.038-3.528-.112-10.4 5.327-10.4c7.45 0 12.773 26.007 9.58 28.66c-3.193 2.654-9.58 1.062-12.773-2.123c-2.578-2.57-2.355-8.578-2.195-12.891q.016-.395.028-.769a4.3 4.3 0 0 1-1.119-.45a3.8 3.8 0 0 1-.996-.835c-.297.352-.64.626-.996.834c-.4.234-.794.37-1.12.451l.029.769c.16 4.313.383 10.32-2.195 12.891c-3.193 3.185-9.58 4.777-12.773 2.123S9.075 12 16.525 12c5.439 0 5.365 6.872 5.327 10.4l-.004.377q.075-.036.148-.078c.44-.257 1.004-.801 1.004-2.199m9-1.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 11a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3-1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTb24pxIcon],svg[healthicons-tb-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 10.526c0 .52.011 1.22.199 1.783c.091.274.202.442.31.537c.085.077.22.154.491.154v.513c0-2.4.446-3.812 1.135-4.624A2.4 2.4 0 0 1 17.065 8c.457 0 .863.186 1.17.392c.32.212.605.492.837.79c.75.965 1.227 2.137 1.569 3.235c.234.751.42 1.527.581 2.196c.071.295.137.57.2.811c.225.87.414 1.768.51 2.565c.09.757.117 1.56-.09 2.158c-.217.629-.567 1.132-1.071 1.458c-.501.325-1.06.415-1.585.391c-.997-.045-2.076-.518-2.943-.936c-.921-.444-1.471-1.301-1.785-2.052c-.319-.761-.458-1.562-.458-2.102V15c-.729 0-1.344-.236-1.82-.659a3 3 0 0 1-.18-.175a3 3 0 0 1-.18.175c-.476.423-1.091.659-1.82.659v1.906c0 .54-.14 1.34-.458 2.102c-.314.75-.864 1.608-1.785 2.052c-.867.418-1.946.891-2.943.936c-.524.024-1.084-.066-1.585-.39c-.504-.327-.854-.83-1.071-1.459c-.207-.598-.18-1.401-.09-2.158c.096-.797.285-1.695.51-2.565c.063-.242.129-.516.2-.811c.16-.67.347-1.445.581-2.196c.342-1.098.818-2.27 1.57-3.235c.232-.299.517-.578.835-.79C6.072 8.186 6.478 8 6.936 8c.302 0 1.184.01 1.929.889C9.555 9.7 10 11.113 10 13.513V13c.271 0 .406-.077.492-.154c.107-.095.218-.263.31-.537c.187-.563.198-1.263.198-1.783V2h2zM18 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2 3.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2.5 2.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m.75-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTb24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTbNegativeIcon],svg[healthicons-tb-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTbNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm16.525 12c5.439 0 5.365 6.872 5.327 10.4l-.004.377q.076-.036.148-.078c.44-.257 1.004-.801 1.004-2.199V6h2v14.5c0 1.398.564 1.942 1.004 2.199q.073.042.148.078l-.004-.377c-.038-3.528-.112-10.4 5.327-10.4c7.45 0 12.773 26.007 9.58 28.66c-3.193 2.654-9.58 1.062-12.773-2.123c-2.578-2.57-2.355-8.578-2.195-12.891q.016-.395.028-.769a4.3 4.3 0 0 1-1.119-.45a3.8 3.8 0 0 1-.996-.835c-.297.352-.64.626-.996.834c-.4.234-.794.37-1.12.451l.029.767v.002c.16 4.313.383 10.32-2.195 12.891c-3.193 3.185-9.58 4.777-12.773 2.123S9.075 12 16.525 12M32 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 11a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3-1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTbNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTbNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTbOutlineIcon],svg[healthicons-tb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M35 30.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path d="M23 20.5V6h2v14.5c0 1.398.564 1.942 1.004 2.199q.073.042.148.078l-.004-.377c-.038-3.528-.112-10.4 5.327-10.4c4.126 0 7.599 7.974 9.335 15.542c.11.263.175.55.188.849c1.232 5.783 1.415 11.14.057 12.27c-3.193 2.653-9.58 1.06-12.773-2.124c-2.578-2.57-2.355-8.578-2.195-12.891v-.002q.016-.393.028-.767a4.3 4.3 0 0 1-1.119-.45a3.8 3.8 0 0 1-.996-.835c-.297.352-.64.626-.996.834c-.4.234-.794.37-1.12.451l.029.769c.16 4.313.383 10.32-2.195 12.891c-3.193 3.185-9.58 4.777-12.773 2.123S9.075 12 16.525 12c5.439 0 5.365 6.872 5.327 10.4v.002l-.004.375q.075-.036.148-.078c.44-.257 1.004-.801 1.004-2.199m15.327 5.36l.038.144a2.5 2.5 0 1 0 1.065 4.817c.27 1.566.449 3.05.526 4.36c.079 1.332.049 2.413-.068 3.188a3.7 3.7 0 0 1-.206.828c-.96.73-2.598 1.022-4.633.628c-2.058-.4-4.076-1.43-5.355-2.704c-.443-.442-.84-1.172-1.137-2.261c-.293-1.076-.45-2.361-.517-3.761c-.066-1.393-.04-2.833.004-4.208l.04-1.126v-.003q.019-.472.034-.927A3.001 3.001 0 0 0 34 24a3 3 0 0 0-5.847-.95q0-.344-.005-.719c-.015-1.648-.034-3.691.411-5.466c.254-1.014.616-1.732 1.05-2.178c.375-.386.912-.687 1.866-.687c.319 0 .777.134 1.395.654c.412.346.846.824 1.289 1.434A2.503 2.503 0 0 0 31 18.5a2.5 2.5 0 0 0 4.917.642c.927 1.962 1.748 4.292 2.41 6.719m.666 2.723l-.08-.366a.5.5 0 1 0 .08.366M16.525 14c.954 0 1.49.3 1.866.687c.434.446.796 1.164 1.05 2.178c.445 1.775.426 3.817.41 5.465l-.004.816c0 .76.033 1.67.069 2.616l.04 1.129c.044 1.375.07 2.815.004 4.208c-.067 1.4-.224 2.685-.517 3.76c-.297 1.09-.694 1.82-1.137 2.262c-1.279 1.275-3.297 2.304-5.355 2.704c-2.035.394-3.673.102-4.633-.628l-.016-.04a3.7 3.7 0 0 1-.19-.788c-.117-.775-.147-1.856-.068-3.188c.157-2.65.727-6.012 1.63-9.32c.905-3.321 2.109-6.46 3.474-8.722c.683-1.133 1.357-1.96 1.982-2.485c.618-.52 1.076-.654 1.395-.654M33.5 19a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M32 24a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class HealthiconsTbOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTbOutline24pxIcon],svg[healthicons-tb-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.5 18.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2m.75-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M13.199 12.309c-.188-.564-.199-1.264-.199-1.784V2h-2v8.525c0 .52-.01 1.22-.199 1.784c-.091.274-.202.442-.31.537c-.085.077-.22.154-.491.154v.513c0-2.4-.446-3.812-1.135-4.624A2.4 2.4 0 0 0 6.935 8c-.457 0-.863.186-1.17.392a3.6 3.6 0 0 0-.837.79c-.75.965-1.227 2.137-1.569 3.235c-.234.751-.42 1.527-.581 2.196c-.071.295-.137.57-.2.811c-.225.87-.414 1.768-.51 2.565c-.09.757-.117 1.56.09 2.158c.217.629.567 1.132 1.071 1.458c.501.325 1.06.415 1.585.391c.997-.045 2.076-.518 2.943-.936c.921-.444 1.471-1.301 1.785-2.052c.319-.761.458-1.562.458-2.102V15c.729 0 1.345-.236 1.82-.659a3 3 0 0 0 .18-.175q.084.09.18.175c.476.423 1.091.659 1.82.659v1.906c0 .54.14 1.34.458 2.102c.314.75.864 1.608 1.785 2.052c.867.418 1.946.891 2.943.936c.524.024 1.084-.066 1.585-.39c.504-.327.854-.83 1.072-1.459c.206-.598.18-1.401.089-2.158a20 20 0 0 0-.51-2.565a49 49 0 0 1-.2-.811a35 35 0 0 0-.581-2.196c-.342-1.098-.818-2.27-1.57-3.235a3.6 3.6 0 0 0-.835-.79C17.928 8.186 17.522 8 17.064 8c-.302 0-1.184.01-1.929.889C14.445 9.7 14 11.113 14 13.513V13c-.271 0-.405-.077-.492-.154c-.107-.095-.218-.263-.31-.537m-6.896-2.097c.14-.18.294-.324.433-.417a.6.6 0 0 1 .2-.097h.014c.138-.001.35-.002.586.277c.3.354.734 1.274.734 3.538v3.393c0 .308-.091.89-.328 1.457c-.241.577-.571.992-.948 1.174c-.892.43-1.67.737-2.26.764c-.27.012-.438-.038-.551-.112c-.11-.071-.262-.224-.387-.587c-.072-.207-.099-.676-.01-1.414c.084-.698.254-1.518.469-2.345q.113-.444.225-.913a31 31 0 0 1 .533-2.017c.319-1.022.722-1.97 1.29-2.702m10.96-.417c.14.093.294.237.433.416q.111.143.213.294a.75.75 0 1 0 .655 1.239c.158.372.297.765.422 1.169c.202.647.356 1.275.5 1.875a.751.751 0 1 0 .305 1.232c.193.766.345 1.52.423 2.168c.088.738.062 1.207-.01 1.414c-.125.363-.277.516-.387.587c-.113.074-.28.124-.55.112c-.592-.027-1.369-.334-2.261-.764c-.377-.182-.707-.597-.948-1.174c-.237-.566-.328-1.149-.328-1.457v-3.393c0-2.264.434-3.184.734-3.538c.237-.279.448-.278.586-.278h.014a.6.6 0 0 1 .2.098" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTbOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTelemedicineIcon],svg[healthicons-telemedicine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h15v4h-7v2h16v-2h-7v-4h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm31 28V10H9v24h3v-2.62c0-2.022 2.407-4.622 5.22-5.726c.008.414.047 1.558.104 2.012c.061.49.145.978.236 1.379q.03.13.062.25A1.999 1.999 0 0 0 18.667 33a2 2 0 0 0 .26-3.983a6 6 0 0 1-.067-.27c-.08-.349-.156-.791-.213-1.246c-.094-.754-.141-1.543-.084-2.303q.386-.11.77-.198c.259-.059.434.39.562.718c.04.1.074.189.105.248c1.305 0 2.653.008 4 .017c1.347.008 2.695.017 4 .017c.038-.073.078-.177.122-.291c.13-.34.294-.766.545-.709q.537.122 1.072.289q0 .387.009.788c.017.968.034 1.977-.204 2.923h-.877a.67.67 0 0 0-.597.369l-.666 1.333a.7.7 0 0 0-.07.298v1.333c0 .369.298.667.666.667h1.333v-1.333h-.666v-.51l.412-.824h1.842l.412.824v.51h-.666V33H32a.667.667 0 0 0 .667-.667V31a.7.7 0 0 0-.07-.298l-.667-1.334a.67.67 0 0 0-.597-.368h-.423c.212-1.06.226-2.126.225-3.202C33.793 26.922 36 29.444 36 31.38V34zm-20.333-2.323a.67.67 0 0 0 .666-.677a.67.67 0 0 0-.666-.677A.67.67 0 0 0 18 31c0 .383.308.677.667.677M24 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path d="M30 18a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path></svg:g>`,
})
export class HealthiconsTelemedicineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTelemedicineNegativeIcon],svg[healthicons-telemedicine-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTelemedicineNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm8 6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h15v4h-7v2h16v-2h-7v-4h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm31 28V10H9v24h3v-2.62c0-2.022 2.407-4.622 5.22-5.726c.008.414.047 1.558.104 2.012c.061.49.145.978.236 1.379q.03.13.062.25A1.999 1.999 0 0 0 18.667 33a2 2 0 0 0 .26-3.983a6 6 0 0 1-.067-.27c-.08-.349-.156-.791-.213-1.246c-.094-.754-.141-1.543-.084-2.303q.386-.11.77-.198c.259-.059.434.39.562.718c.04.1.074.189.105.248c1.305 0 2.653.008 4 .017c1.347.008 2.695.017 4 .017c.038-.073.078-.177.122-.291c.13-.34.294-.766.545-.709q.537.122 1.072.289q0 .387.009.788c.017.968.034 1.977-.204 2.923h-.877a.67.67 0 0 0-.597.369l-.666 1.333a.7.7 0 0 0-.07.298v1.333c0 .369.298.667.666.667h1.333v-1.333h-.666v-.51l.412-.824h1.842l.412.824v.51h-.666V33H32a.667.667 0 0 0 .667-.667V31a.7.7 0 0 0-.07-.298l-.667-1.334a.67.67 0 0 0-.597-.368h-.423c.212-1.06.226-2.126.225-3.202C33.793 26.922 36 29.444 36 31.38V34zm-20.333-2.323a.67.67 0 0 0 .666-.677a.67.67 0 0 0-.666-.677A.67.67 0 0 0 18 31c0 .383.308.677.667.677M24 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTelemedicineNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTelemedicineNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTelemedicineOutlineIcon],svg[healthicons-telemedicine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h15v4h-7v2h16v-2h-7v-4h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm4 25.38v-.666c0-2.518 3.73-4.885 7.333-5.706c.585-.133.519.71.667.992h7.833c.152-.289.499-1.068.834-.992c.753.172 1.511.411 2.24.705l.023-.011l.007.014l.005.01C33.685 26.842 36 28.732 36 30.714V34h3V10H9v24h3zm3.495-2.54a10.5 10.5 0 0 1 1.846-1.058a6.7 6.7 0 0 0 .25 1.51l.006.018a2 2 0 1 0 1.304-.296l-.03-.096a5.4 5.4 0 0 1-.204-1.474l.126.239H29.04l.23-.437q.268.087.534.184c.005.22-.013.472-.048.73a5.4 5.4 0 0 1-.182.84h-.907a.67.67 0 0 0-.597.369l-.666 1.333a.7.7 0 0 0-.07.298v1.333c0 .369.298.667.666.667h1.333v-1.333h-.666v-.51l.412-.824h1.842l.412.824v.51h-.666V33H32a.667.667 0 0 0 .667-.667V31a.7.7 0 0 0-.07-.298l-.667-1.334a.67.67 0 0 0-.597-.368h-.377a7 7 0 0 0 .16-1c.811.41 1.507.879 2.02 1.357c.732.683.864 1.158.864 1.356V34H14v-3.287c0-.274.264-.975 1.495-1.873M19.333 31a.67.67 0 0 1-.666.677A.67.67 0 0 1 18 31c0-.383.308-.677.667-.677s.666.294.666.677M24 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M24 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path></svg:g>`,
})
export class HealthiconsTelemedicineOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleIcon],svg[healthicons-temple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 10.762c0 3.572 3 3.286 3 3.286v4s-3.2 7-6 3.889c0 3.11 2.8 3.11 2.8 3.11H15v4s-2.4 7-6 3.89c0 1.67 1.039 2.444 2 2.802v8.309h26v-8.309c.962-.358 2-1.131 2-2.802c-2.749 2.375-5.06-1.145-6-2.942v-4.947h1.2s2.8 0 2.8-3.111c-2.272 2.524-5.038-1.608-6-3.257v-4.632s3 .286 3-3.286c-4 4.286-10-6.714-10-6.714s-6 11-10 6.714m-1 31.286v-6h2v6zm4 0h2v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h2v-6H17zm16-6v6h2v-6zm-4-22v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-4zm-12 15v-4h14v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTempleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleAltIcon],svg[healthicons-temple-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M36 11.048a1 1 0 0 0-1-1h-5.083a6.002 6.002 0 0 0-11.834 0H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1zm-22 1h7v2h-7zm7 4h-5v2h5zm2 2v-2h2v2zm-2 2h-8v2h8zm2 2v-2h2v2zm-2 2h-7v2h7zm2 2v-2h2v2zm-12 2v2h10v-2zm26 2v-2H27v2zm-12-2V30h-2v-1.952zm2-2h7v-2h-7zm0-4h8v-2h-8zm0-4h5v-2h-5zm0-4h7v-2h-7zm-2-2v2h-2v-2zM35 36v-3.952H13V36h7v-1.952h8V36zm-7 2v2h11v-2zm-8 0v2H9v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTempleAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleAltNegativeIcon],svg[healthicons-temple-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTempleAltNegative0)"><svg:path d="M14 12.048h7v2h-7zm7 4h-5v2h5zm2 2v-2h2v2zm-2 2h-8v2h8zm2 2v-2h2v2zm-2 2h-7v2h7zm2 2v-2h2v2zm-12 2v2h10v-2zm26 2v-2H27v2zm-12-2V30h-2v-1.952zm2-2h7v-2h-7zm0-4h8v-2h-8zm0-4h5v-2h-5zm0-4h7v-2h-7zm-2-2v2h-2v-2zM35 36v-3.952H13V36h7v-1.952h8V36zm-7 2v2h11v-2zm-8 0v2H9v-2z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM35 10.048h-5.083a6.002 6.002 0 0 0-11.834 0H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTempleAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTempleAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleAltOutlineIcon],svg[healthicons-temple-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 5.048a6 6 0 0 0-5.917 5H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5.083a6 6 0 0 0-5.917-5m3.874 5a4.002 4.002 0 0 0-7.748 0H21V10h6v.048zM15 32.048V36h-2v-3.952zm10-20v2h-2v-2zm-4 0h-7v2h7zm0 4h-5v2h5zm0 4h-8v2h8zm2 2v-2h2v2zm-2 2h-7v2h7zm2 2v-2h2v2zm-12 2v2h10v-2zm26 2v-2H27v2zm-12-2V30h-2v-1.952zm2-2h7v-2h-7zm0-4h8v-2h-8zm0-4h5v-2h-5zm-4-2v2h2v-2zm4-2h7v-2h-7zM35 36v-3.952h-2V36zm-4 0v-3.952H17V36h3v-1.952h8V36zm-3 2v2h11v-2zm-2-1.952h-4v4h4zM20 38v2H9v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTempleAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleNegativeIcon],svg[healthicons-temple-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTempleNegative0)"><svg:path d="M13 36.048v6h2v-6zm6 6h-2v-6h14v6h-2v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2zm14 0v-6h2v6zm-6-24h2v-4H19v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0zm-10 7v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-4z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM17 14.048s-3 .286-3-3.286c4 4.286 10-6.714 10-6.714s6 11 10 6.714c0 3.572-3 3.286-3 3.286v4.632c.962 1.649 3.728 5.781 6 3.257c0 3.11-2.8 3.11-2.8 3.11H33v4.948c.94 1.797 3.251 5.317 6 2.942c0 1.67-1.038 2.444-2 2.802v8.309H11v-8.309c-.961-.358-2-1.131-2-2.802c3.6 3.11 6-3.89 6-3.89v-4h-1.2s-2.8 0-2.8-3.11c2.8 3.11 6-3.89 6-3.89z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTempleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTempleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTempleOutlineIcon],svg[healthicons-temple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 10.762c0 1.729.703 2.554 1.428 2.945c.773.417 1.572.34 1.572.34v4s-1.8 3.939-3.882 4.595c-.693.218-1.418.072-2.118-.705c0 1.662.8 2.436 1.544 2.797c.649.314 1.256.314 1.256.314H15v4s-1.404 4.096-3.676 4.629c-.698.164-1.478-.009-2.324-.74c0 1.66 1.025 2.434 1.982 2.795l.018.007v8.309h26v-8.309l.017-.006c.956-.36 1.983-1.135 1.983-2.796c-.828.715-1.616.896-2.339.75c-1.678-.338-3.005-2.436-3.661-3.692v-4.947h1.2s.607 0 1.256-.314C36.2 24.374 37 23.599 37 21.937c-.684.76-1.414.917-2.125.719c-1.65-.46-3.203-2.824-3.875-3.976v-4.632s.799.076 1.572-.341C33.297 13.316 34 12.49 34 10.762c-.683.732-1.423 1.018-2.183.99c-2.472-.093-5.14-3.518-6.632-5.77C24.45 4.872 24 4.048 24 4.048s-.45.824-1.185 1.934c-1.492 2.252-4.16 5.677-6.632 5.77c-.76.028-1.5-.258-2.183-.99m15.522 9.342l-.034-.056H18.214l-.017.03c-.375.662-.932 1.558-1.62 2.372a10 10 0 0 1-.546.598h15.794q-.29-.278-.53-.544c-.733-.806-1.337-1.696-1.747-2.358l-.014-.023zM26 16.048a1 1 0 0 1 1 1v1h2v-4H19v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 0 1 1-1m2 11a1 1 0 0 1 1 1v1h2v-4H17v4h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 0 1 1-1m-.215-15a15.6 15.6 0 0 1-1.77-1.695A27 27 0 0 1 24 7.795a27 27 0 0 1-2.016 2.558a15.6 15.6 0 0 1-1.769 1.695zm5.12 21.41c.163.192.346.392.548.59h-19.09c.215-.225.405-.452.57-.667c.616-.799 1.083-1.669 1.397-2.333h14.964c.36.674.904 1.583 1.61 2.41M21 38.048a2 2 0 0 0-2 2v2h-2v-6h14v6h-2v-2a2 2 0 0 0-2-2zm-8 4v-6h2v6zm20 0v-6h2v6zm-6-2v2h-6v-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTempleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesIcon],svg[healthicons-test-tubes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31 10a1 1 0 1 0 0 2v7h-3v-7a1 1 0 1 0 0-2h-8a1 1 0 1 0 0 2v7h-3v-7a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2v7H7v-3H5v3H4v2h1v13H4v2h1v2h2v-2h34v2h2v-2h1v-2h-1V21h1v-2h-1v-3h-2v3h-2v-7a1 1 0 1 0 0-2zm6 9v-7h-4v7zm-4 2h4v5h-4zm-2 0v8a4 4 0 0 0 8 0v-8h2v13H7V21h2v8a4 4 0 0 0 8 0v-8h3v8a4 4 0 0 0 8 0v-8zm-5-2v-7h-4v7zm-11 0v-7h-4v7zm-4 2h4v2h-4z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTestTubesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubes24pxIcon],svg[healthicons-test-tubes-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 5h8V2H8z"></svg:path><svg:path fill-rule="evenodd" d="M15 6H9v12.824C9 20.578 10.343 22 12 22s3-1.422 3-3.177zm-2 8V8h-2v6z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTestTubes24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesNegativeIcon],svg[healthicons-test-tubes-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTestTubesNegative0)"><svg:path d="M15 23v-2h-4v2z"></svg:path><svg:path d="M17 29v-8h3v8a4 4 0 0 0 8 0v-8h3v8a4 4 0 0 0 8 0v-8h2v13H7V21h2v8a4 4 0 0 0 8 0m5-10h4v-7h-4z"></svg:path><svg:path d="M33 26v-5h4v5zm0-7h4v-7h-4zm-22-7v7h4v-7z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm17 19h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h3v-9h8v9h2v-3h2v3h1v2h-1v13h1v2h-1v2h-2v-2H7v2H5v-2H4v-2h1V21H4v-2h1v-3h2v3h2v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTestTubesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTestTubesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesOutlineIcon],svg[healthicons-test-tubes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 11a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2v7h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h2v-3h2v3h1v2h-1v13h1v2h-1v2h-2v-2H7v2H5v-2H4v-2h1V21H4v-2h1v-3h2v3h2v-7a1 1 0 0 1-1-1M7 34h34V21h-2v8a4 4 0 0 1-8 0v-8h-3v8a4 4 0 0 1-8 0v-8h-3v8a4 4 0 0 1-8 0v-8H7zm8-22v7h-4v-7zm11 7h-4v-7h4zm11 0h-4v-7h4zM11 29v-8h4v8a2 2 0 1 1-4 0m11 0v-8h4v8a2 2 0 1 1-4 0m11 0v-8h4v8a2 2 0 1 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTestTubesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesOutline24pxIcon],svg[healthicons-test-tubes-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 5h8V2H8z"></svg:path><svg:path fill-rule="evenodd" d="M15 6H9v12.824C9 20.578 10.343 22 12 22s3-1.422 3-3.177zm-2 8V8h-2v6zm-2 2h2v2.823c0 .76-.554 1.177-1 1.177s-1-.418-1-1.177z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTestTubesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTesticlesIcon],svg[healthicons-testicles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.087 6.846c1.1-.674 2.354-.846 3.47-.846H33v9a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0v-5a5 5 0 0 0-3-4.584V6h4a3 3 0 0 1 3 3v17c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.86a5.2 5.2 0 0 0-1.732.834C21.433 18.594 21 19.33 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091S17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51V14c0-3.184 1.652-5.66 4.087-7.153" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTesticlesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTesticlesNegativeIcon],svg[healthicons-testicles-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTesticlesNegative0)"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM13.087 6.846c1.1-.674 2.354-.846 3.47-.846H39a3 3 0 0 1 3 3v17c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.86a5.2 5.2 0 0 0-1.732.834C21.433 18.594 21 19.33 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091S17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51V14c0-3.184 1.652-5.66 4.087-7.153" clip-rule="evenodd"></svg:path><svg:path d="M28 20a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0z"></svg:path><svg:path fill-rule="evenodd" d="M35 6v10h-2V6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTesticlesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTesticlesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTesticlesOutlineIcon],svg[healthicons-testicles-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 14a9 9 0 0 1 5.625-8.346l.75 1.854A7 7 0 0 0 11 13.999v16.378l-.667.236c-.874.309-1.083.579-1.172.763c-.134.28-.16.683-.16 1.623c0 1.678.686 3.455 1.817 4.81c1.13 1.353 2.62 2.19 4.182 2.19s3.052-.837 4.182-2.19C20.313 36.453 21 34.676 21 32.998c0-.94-.027-1.343-.161-1.623c-.089-.184-.298-.454-1.172-.763L19 30.377V20a5 5 0 0 1 5-5h1v11c0 3.29 3.3 6 7 6s7-2.71 7-6V16h2v10c0 4.71-4.54 8-9 8s-9-3.29-9-8v-8.83A3 3 0 0 0 21 20v9c.756.357 1.313.827 1.641 1.51c.36.748.36 1.627.36 2.409v.08c0 2.19-.881 4.412-2.284 6.091S17.304 42 15 42s-4.314-1.23-5.717-2.91C7.88 37.411 7 35.188 7 33v-.081c0-.782 0-1.66.359-2.41c.328-.682.885-1.152 1.641-1.51z"></svg:path><svg:path fill-rule="evenodd" d="M32 15a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0v-5a5 5 0 0 0-3-4.584V6h-2zm3 10v-5a3 3 0 1 0-6 0v5a3 3 0 1 0 6 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTesticlesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerIcon],svg[healthicons-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.983 29.739l-.002-1.779l-.005-6.211l-.01-12.407c-.002-2.96 2.234-5.36 4.996-5.362c2.761-.002 5.002 2.395 5.004 5.353l.01 12.408l.005 6.212l.002 1.778a8 8 0 1 1-10 .008m3.975-8.337c1.196.31 2.562.662 4.019.637l-.002-2.085l-2 .001a1 1 0 0 1-.002-2l2-.001l-.001-2l-2 .001a1 1 0 1 1-.002-2l2-.001l-.002-2l-2 .001a1 1 0 0 1-.001-2l2-.001v-.62c-.002-1.774-1.347-3.212-3.003-3.21c-1.657 0-3 1.44-2.998 3.216l.01 11.641c.585.06 1.252.233 1.982.421" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsThermometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigitalIcon],svg[healthicons-thermometer-digital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m19.535 7.38l-1.523-2.383l-.009.005a2 2 0 0 0-.098-.172l-.028-.044a2 2 0 0 0-2.762-.61L10.8 6.934a2 2 0 0 0-.609 2.762l.029.044q.054.085.115.162l-.009.005l1.523 2.384zm-6.61 6.596l5.75 9c.614.96 1.123 1.37 1.791 1.907c.306.246.645.519 1.043.883c.174.16.39.327.658.535c1.488 1.156 4.553 3.537 10.543 12.356q.06-.053.128-.098l1.708-1.09q.066-.043.137-.074c-5.48-9.139-6.35-12.923-6.773-14.76c-.076-.331-.138-.6-.21-.824a20 20 0 0 1-.362-1.317c-.207-.833-.364-1.466-.978-2.427l-5.749-9zm22.788 25.113q.661 1.07 1.402 2.232l.646 1.01a1.108 1.108 0 0 1-1.867 1.193l-.596-.933a178 178 0 0 0-1.486-2.289a1 1 0 0 0 .103-.057l1.708-1.091a1 1 0 0 0 .09-.066M19.147 12.422l4.91 7.685l-2.562 1.636l-4.91-7.685z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsThermometerDigitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigital24pxIcon],svg[healthicons-thermometer-digital-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.662 6.135a1 1 0 0 1 .293-1.383l3.992-2.59a1 1 0 0 1 1.383.293l1.122 1.728l-5.668 3.68z"></svg:path><svg:path fill-rule="evenodd" d="m6.601 9.121l5.668-3.68l2.726 4.195c.311.48.516 1.02.601 1.585l.651 4.335c.084.56.287 1.096.593 1.572l.934 1.437l-1.417.92l-.934-1.436a4 4 0 0 0-1.196-1.182L10.53 14.51a4 4 0 0 1-1.204-1.193zm3.176.462l2.18 3.355l1.677-1.09l-2.18-3.354z" clip-rule="evenodd"></svg:path><svg:path d="m16.865 20.357l.758 1.168a.85.85 0 0 0 1.426-.926l-.759-1.168z"></svg:path></svg:g>`,
})
export class HealthiconsThermometerDigital24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigitalNegativeIcon],svg[healthicons-thermometer-digital-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsThermometerDigitalNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.012 4.997l1.523 2.384l-7.686 4.909l-1.522-2.384l.008-.005a2 2 0 0 1-.115-.162l-.028-.044a2 2 0 0 1 .608-2.762l4.314-2.756a2 2 0 0 1 2.763.609l.028.044q.054.085.098.172zm.663 17.979l-5.749-9l7.685-4.91l5.75 9c.613.962.77 1.595.977 2.428c.095.38.2.803.363 1.317c.071.225.133.492.209.823c.422 1.838 1.292 5.622 6.773 14.761a1 1 0 0 0-.137.073l-1.708 1.091a1 1 0 0 0-.128.097c-5.99-8.818-9.055-11.2-10.543-12.355a11 11 0 0 1-.658-.535a20 20 0 0 0-1.043-.883c-.668-.537-1.177-.946-1.79-1.907m18.44 18.344q-.74-1.16-1.401-2.231q-.045.035-.091.065l-1.708 1.09q-.05.033-.103.058q.717 1.085 1.486 2.289l.596.933a1.108 1.108 0 1 0 1.867-1.192zM24.057 20.107l-4.91-7.685l-2.561 1.636l4.909 7.685z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsThermometerDigitalNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsThermometerDigitalNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigitalOutlineIcon],svg[healthicons-thermometer-digital-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m35.972 39.531l-1.867 1.193l1.789 2.8a1.108 1.108 0 0 0 1.867-1.192zM24.057 20.107l-4.91-7.685l-2.561 1.636l4.909 7.685z"></svg:path><svg:path fill-rule="evenodd" d="m33.032 39.036l.1.157L35 38l-.1-.157c-7.104-11.145-7.1-13.677-7.1-15.093c0-.343.001-.62-.1-.94a20 20 0 0 1-.363-1.317c-.207-.833-.364-1.466-.978-2.427l-8.482-13.28a2 2 0 0 0-2.762-.61L10.8 6.934a2 2 0 0 0-.609 2.762l8.484 13.281c.614.96 1.123 1.37 1.791 1.907c.306.246.645.519 1.043.883c.247.227.5.343.812.487c1.285.592 3.587 1.653 10.711 12.783M11.877 8.618l4.314-2.756l1.699 2.66l-4.32 2.748zm2.77 4.337l4.32-2.748l5.708 8.936c.434.68.53 1.057.722 1.832l.003.012c.094.38.211.852.394 1.427v.008l.002.014q.003.028.004.106c.002.055.001.116.001.206c-.001.89.032 2.066.9 4.32c-1.68-1.735-2.734-2.259-3.543-2.632l-.188-.087l-.094-.049l-.006-.004l-.013-.007a22 22 0 0 0-1.128-.957l-.01-.008c-.622-.5-.924-.745-1.358-1.425z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsThermometerDigitalOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerDigitalOutline24pxIcon],svg[healthicons-thermometer-digital-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.225 8.794l2.022 3.114l1.678-1.09l-2.023-3.113z"></svg:path><svg:path fill-rule="evenodd" d="M4.662 6.135a1 1 0 0 1 .293-1.383l3.992-2.59a1 1 0 0 1 1.383.293l4.665 7.181c.311.48.516 1.02.601 1.585l.651 4.335a4 4 0 0 0 .594 1.574l.933 1.435l-1.417.92l-.933-1.435a4 4 0 0 0-1.197-1.183L10.53 14.51a4 4 0 0 1-1.204-1.193zm1.883-.201l2.835-1.84l.495.763l-2.834 1.84zm1.313 2.02l2.834-1.84l3.12 4.802l.605 4.033l-3.44-2.193z" clip-rule="evenodd"></svg:path><svg:path d="m16.865 20.357l.758 1.168a.85.85 0 0 0 1.426-.926l-.759-1.168z"></svg:path></svg:g>`,
})
export class HealthiconsThermometerDigitalOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerNegativeIcon],svg[healthicons-thermometer-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsThermometerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18.982 28.205v1.778a8 8 0 1 0 10-.008v-1.778l-.006-6.212l-.01-12.408c-.002-2.958-2.243-5.355-5.004-5.353c-2.762.003-4.998 2.403-4.996 5.362l.01 12.407zm7.995-5.922c-1.457.025-2.823-.328-4.018-.637c-.73-.188-1.397-.36-1.983-.42l-.01-11.642c-.001-1.775 1.34-3.215 2.998-3.217c1.657-.001 3 1.437 3.002 3.212v.619l-2 .002a1 1 0 0 0 .002 2l2-.002l.002 2l-2 .002a1 1 0 0 0 .002 2l2-.002l.001 2l-2 .002a1 1 0 0 0 .002 2l2-.002z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsThermometerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsThermometerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThermometerOutlineIcon],svg[healthicons-thermometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.995 44.077a7.96 7.96 0 0 0 3.963-1.053l.05.05l.198-.197a8 8 0 0 0 3.782-6.806a7.99 7.99 0 0 0-3.056-6.283a5 5 0 0 0 .05-.715l-.016-20a5 5 0 0 0-10 .008l.016 20q0 .365.051.715a8 8 0 0 0 4.961 14.282m-3.716-12.716l-.006.004q-.323.256-.609.552l8.49 8.477q.3-.289.557-.615zm-2.071 3.1q.125-.446.312-.86l7.952 7.94q-.413.188-.858.313zm-.122 2.704a6.01 6.01 0 0 0 4.824 4.816zm2.9-7.924l8.709 8.694q.15-.46.224-.947l-8.938-8.923l.001 1.015q0 .081.005.161m-.007-4.004l8.551 8.537a6 6 0 0 0-1.835-2.415a2 2 0 0 1-.749-1.336l-5.953-5.943h-.015zm2.842-1.16l3.16 3.155l-.001-1.172l-1.987-1.983zm-2.844-1.997l6-.005l-.002-2l-2 .002a1 1 0 1 1-.002-2l2-.002l-.002-2l-2 .002a1 1 0 0 1-.001-2l2-.002l-.002-2l-2 .002a1 1 0 0 1-.001-2l2-.002l-.001-1a3 3 0 0 0-6 .005z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsThermometerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThyroidIcon],svg[healthicons-thyroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m21.584 10.087l-.006.006l-.013-.234l-.008-.158c-.036-.66-.092-1.66-.498-2.45a2.44 2.44 0 0 0-1.083-1.098c-.515-.256-1.103-.314-1.731-.228c-.557.077-1.05.3-1.44.678c-.382.37-.61.834-.734 1.308c-.243.918-.14 2.016.11 3.073c.507 2.136 1.738 4.6 3.123 6.276c.533.645.696 1.617.696 2.036V21.5l2 .5v-1.315c.883-.328 1.479-.478 2.038-.49c.542-.01 1.12.108 1.962.456V22l2-.5v-2.204c0-.419.164-1.39.696-2.036c1.375-1.665 2.668-4.118 3.24-6.248c.282-1.051.423-2.148.211-3.07c-.109-.476-.323-.949-.702-1.328c-.387-.386-.883-.612-1.44-.689c-.628-.086-1.217-.028-1.731.228c-.52.26-.863.668-1.084 1.098c-.406.79-.461 1.79-.497 2.45l-.009.158l-.013.234l-.006-.006c-.477-.425-1.109-.57-1.535-.632a7 7 0 0 0-.88-.065H24v.001a7 7 0 0 0-.88.065c-.427.062-1.058.207-1.536.632m1.33 1.494l.03-.019l.056-.026V16h2v-4.538q.118.025.204.056a.7.7 0 0 1 .131.063c.423.377.853.695 1.284.84c.232.077.527.126.844.048a1.35 1.35 0 0 0 .753-.496c.285-.37.362-.842.398-1.126c.036-.28.053-.602.068-.895l.008-.142c.04-.746.102-1.3.28-1.645c.07-.138.136-.192.194-.22c.064-.033.224-.086.568-.039c.18.025.258.082.3.123c.049.05.118.151.166.36c.103.45.057 1.17-.194 2.105c-.494 1.843-1.65 4.04-2.85 5.493c-.67.81-.971 1.805-1.089 2.553c-.714-.238-1.378-.358-2.068-.344c-.68.014-1.344.159-2.055.39c-.113-.753-.413-1.772-1.096-2.6c-1.19-1.44-2.283-3.627-2.718-5.463c-.22-.93-.243-1.65-.123-2.102c.056-.212.131-.323.191-.381c.053-.05.14-.109.322-.134c.343-.047.503.006.567.038c.058.029.124.083.195.221c.178.345.24.899.28 1.645l.008.142c.015.293.032.615.067.895c.037.284.113.756.398 1.126c.169.22.418.414.753.496c.318.078.613.029.844-.049c.432-.144.861-.462 1.285-.84M26 35.315c-.883.328-1.479.478-2.038.49c-.542.01-1.12-.108-1.962-.456v-1.682l-2 2.166V38a4 4 0 0 0 8 0v-2.167l-2-2.166zM24 40a2 2 0 0 1-2-2v-.519c.69.224 1.334.337 2.003.323c.662-.014 1.308-.151 1.997-.371V38a2 2 0 0 1-2 2"></svg:path><svg:path d="M12.362 11.456c.991.627 1.807 1.763 2.412 3.269c.154.383.304.796.461 1.228c.519 1.423 1.113 3.055 2.157 4.515c1.294 1.808 3.244 3.27 6.608 3.27s5.314-1.462 6.608-3.27c1.044-1.46 1.638-3.092 2.157-4.515c.157-.432.307-.845.461-1.228c.605-1.506 1.42-2.642 2.412-3.269c1.045-.66 2.228-.706 3.28-.1c.992.57 1.754 1.65 2.266 3.021c.517 1.39.816 3.172.816 5.305v10.187c0 .85-.164 2.816-1.117 4.608C39.893 36.34 38.045 38 34.846 38c-1.595 0-2.786-.45-3.752-1.151c-.865-.626-1.526-1.442-2.1-2.15l-.116-.143c-.63-.774-1.188-1.428-1.917-1.91c-.7-.463-1.607-.796-2.961-.796s-2.261.333-2.96.796c-.73.481-1.288 1.136-1.918 1.91l-.116.144c-.574.707-1.235 1.522-2.1 2.149c-.966.7-2.157 1.151-3.752 1.151c-3.199 0-5.047-1.661-6.037-3.523C6.164 32.685 6 30.718 6 29.87V19.682c0-2.133.299-3.916.816-5.304c.512-1.373 1.274-2.452 2.265-3.022c1.053-.606 2.236-.56 3.28.1M12 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m16-9a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-3 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-6 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class HealthiconsThyroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThyroidCancerIcon],svg[healthicons-thyroid-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m21.584 10.187l-.006.005l-.012-.233l-.009-.157c-.036-.659-.092-1.656-.498-2.443a2.43 2.43 0 0 0-1.083-1.094c-.515-.255-1.103-.314-1.73-.228c-.558.077-1.051.3-1.441.677c-.382.369-.61.83-.734 1.303c-.242.915-.14 2.01.11 3.063c.507 2.13 1.738 4.586 3.123 6.257c.533.643.696 1.612.696 2.03v2.197l2 .498v-1.31c.883-.328 1.479-.477 2.038-.489c.542-.01 1.12.108 1.962.455v1.344l2-.498v-2.198c0-.417.164-1.386.696-2.029c1.376-1.66 2.668-4.105 3.24-6.228c.282-1.048.423-2.142.212-3.061c-.11-.475-.324-.946-.703-1.323c-.387-.386-.883-.611-1.44-.688c-.628-.086-1.217-.027-1.731.228c-.52.258-.863.666-1.084 1.094c-.406.787-.461 1.784-.497 2.443l-.009.157l-.013.233l-.006-.005c-.477-.424-1.109-.569-1.535-.63a7 7 0 0 0-.88-.066H24a7 7 0 0 0-.88.065c-.427.062-1.058.207-1.536.63m1.33 1.488l.03-.018l.056-.027v4.45h2v-4.523q.118.024.204.056a.7.7 0 0 1 .131.062c.423.376.853.693 1.284.837c.232.077.527.126.844.049a1.35 1.35 0 0 0 .753-.494c.285-.37.362-.84.398-1.123c.036-.279.053-.6.068-.892l.008-.142c.04-.744.102-1.296.28-1.64c.07-.138.137-.191.194-.22c.064-.032.224-.085.568-.038c.18.025.258.081.3.123c.049.049.118.15.166.36c.103.447.057 1.165-.194 2.097c-.494 1.837-1.65 4.028-2.85 5.475c-.67.809-.971 1.8-1.089 2.546c-.714-.237-1.379-.357-2.068-.343c-.68.014-1.344.159-2.055.389c-.113-.751-.413-1.767-1.096-2.591c-1.19-1.437-2.283-3.617-2.718-5.448c-.22-.926-.243-1.644-.123-2.095c.056-.211.131-.322.191-.38c.053-.05.14-.108.322-.133c.343-.047.503.006.567.038c.058.029.124.082.195.22c.178.344.24.896.28 1.64l.008.142c.015.292.032.613.067.892c.037.283.113.753.398 1.123c.169.218.418.412.753.494c.318.077.613.028.844-.049c.432-.144.861-.46 1.285-.837m1.047 24.15c-.542.01-1.12-.108-1.962-.454v-1.677l-2 2.16v2.16A3.994 3.994 0 0 0 24 42c2.21 0 4-1.785 4-3.987v-2.16l-2-2.16v1.643c-.883.327-1.479.476-2.038.488M24 40.006c-1.105 0-2-.892-2-1.993v-.518c.69.224 1.334.336 2.003.322c.662-.013 1.308-.15 1.997-.37v.565a1.997 1.997 0 0 1-2 1.994" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.774 14.81c-.605-1.501-1.42-2.634-2.412-3.258c-1.045-.658-2.228-.705-3.28-.1c-.992.568-1.754 1.643-2.266 3.011C6.3 15.848 6 17.625 6 19.751v10.156c0 .846.164 2.806 1.117 4.594c.99 1.855 2.838 3.512 6.037 3.512c1.595 0 2.786-.45 3.752-1.148c.865-.625 1.526-1.437 2.1-2.143l.116-.143c.63-.772 1.188-1.424 1.917-1.904c.7-.461 1.607-.793 2.961-.793s2.261.332 2.96.793c.73.48 1.288 1.132 1.918 1.904l.116.143c.313.385.652.801 1.035 1.202a5.8 5.8 0 0 1 .122-1.55c.156-.716.492-1.559 1.11-2.116q.007-.64.117-1.266c-.951-1.33-1.16-3.167-.078-4.49c1.09-1.336 2.914-1.452 4.372-.73a7 7 0 0 1 1.113-.32c.688-1.411 2.308-2.067 3.935-1.643c.421.11.857.296 1.28.554V19.75c0-2.126-.299-3.903-.816-5.288c-.512-1.368-1.274-2.443-2.265-3.012c-1.053-.604-2.236-.557-3.28.1c-.992.625-1.808 1.758-2.413 3.259a39 39 0 0 0-.461 1.224c-.519 1.419-1.113 3.045-2.157 4.5c-1.294 1.804-3.244 3.26-6.608 3.26s-5.314-1.456-6.608-3.26c-1.044-1.455-1.638-3.081-2.157-4.5c-.157-.43-.307-.842-.461-1.224M11 19.072a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m3 2.99a1 1 0 0 1-2 0a1 1 0 0 1 2 0m-3 4.985a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m6 3.987a1 1 0 0 1-2 0a1 1 0 0 1 2 0m-5 .997c.552 0 1-.446 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .447-1 .997s.448.997 1 .997m5-4.984a1 1 0 0 1-2 0a1 1 0 0 1 2 0m3 1.994a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m16-10.966a1 1 0 0 0 2 0a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997m-1 4.984c-.552 0-1-.446-1-.997s.448-.997 1-.997s1 .447 1 .997s-.448.997-1 .997m-8 4.985a1 1 0 0 0 2 0a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997m-3 .997a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997" clip-rule="evenodd"></svg:path><svg:path d="M32.198 36.614c-.128-.29-.193-.707-.175-1.16c.008-.214.035-.437.083-.657c.16-.737.457-1.063.59-1.124l.616-.286l-.04-.677a5.8 5.8 0 0 1 .152-1.734l.129-.517l-.361-.395c-.76-.828-.744-1.81-.341-2.304c.385-.472 1.28-.663 2.194-.051l.468.314l.512-.238a5.3 5.3 0 0 1 1.615-.451l.687-.082l.165-.67c.156-.63.79-1.087 1.721-.844c.569.149 1.264.576 1.787 1.295v2.874c0 .846-.164 2.806-1.117 4.594c-.828 1.553-2.258 2.966-4.578 3.386l-.001-.005c-.796.159-1.769.063-2.609-.231c-.885-.31-1.367-.742-1.497-1.037"></svg:path></svg:g>`,
})
export class HealthiconsThyroidCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThyroidCancerOutlineIcon],svg[healthicons-thyroid-cancer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m21.584 10.187l-.006.005l-.013-.233l-.008-.157c-.036-.659-.092-1.656-.498-2.443a2.43 2.43 0 0 0-1.083-1.094c-.515-.255-1.103-.314-1.731-.228c-.557.077-1.05.3-1.44.677c-.382.369-.61.83-.734 1.303c-.243.915-.14 2.01.11 3.063c.507 2.13 1.738 4.586 3.123 6.257c.533.643.696 1.612.696 2.03v2.197l2 .498v-1.31c.883-.328 1.479-.477 2.038-.489c.542-.01 1.12.108 1.962.455v1.344l2-.498v-2.198c0-.417.164-1.386.696-2.029c1.375-1.66 2.668-4.105 3.24-6.228c.282-1.048.423-2.142.211-3.061c-.109-.475-.323-.946-.702-1.323c-.387-.386-.883-.611-1.44-.688c-.628-.086-1.217-.027-1.731.228c-.52.258-.863.666-1.084 1.094c-.406.787-.461 1.784-.497 2.443l-.009.157l-.013.233l-.006-.005c-.477-.424-1.109-.569-1.535-.63a7 7 0 0 0-.88-.066H24a7 7 0 0 0-.88.065c-.427.062-1.058.207-1.536.63m1.33 1.488l.03-.018l.056-.027v4.45h2v-4.523q.118.024.204.056a.7.7 0 0 1 .131.063c.423.375.853.692 1.284.836c.232.077.527.126.844.049a1.35 1.35 0 0 0 .753-.494c.285-.37.362-.84.398-1.123c.036-.279.053-.6.068-.892l.008-.142c.04-.744.102-1.296.28-1.64c.07-.138.136-.191.194-.22c.064-.032.224-.085.568-.038c.18.025.258.081.3.123c.049.049.118.15.166.36c.103.447.057 1.165-.194 2.097c-.494 1.837-1.65 4.028-2.85 5.476c-.67.808-.97 1.799-1.089 2.545c-.714-.237-1.378-.357-2.068-.343c-.68.014-1.343.159-2.055.389c-.113-.751-.413-1.767-1.096-2.591c-1.19-1.437-2.283-3.617-2.718-5.448c-.22-.926-.243-1.644-.123-2.095c.056-.211.131-.322.191-.38c.053-.05.14-.108.322-.133c.343-.047.503.006.567.038c.058.029.124.082.195.22c.178.344.24.896.28 1.64l.008.142c.015.292.032.613.067.892c.037.283.113.753.398 1.123c.169.218.418.412.753.494c.318.077.613.028.844-.049c.432-.144.861-.46 1.285-.837M24 42c2.21 0 4-1.785 4-3.987v-2.16l-2-2.16v1.643c-.883.327-1.479.476-2.038.488c-.542.01-1.12-.108-1.962-.455v-1.676l-2 2.16v2.16A3.994 3.994 0 0 0 24 42m0-1.994c-1.105 0-2-.892-2-1.993v-.518c.69.224 1.335.336 2.003.322c.662-.013 1.308-.15 1.997-.37v.565a1.997 1.997 0 0 1-2 1.994" clip-rule="evenodd"></svg:path><svg:path d="M11 19.072a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m3 2.99a1 1 0 0 1-2 0a1 1 0 0 1 2 0m-3 4.985a1 1 0 0 0 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997s.448.997 1 .997m6 3.987a1 1 0 0 1-2 0a1 1 0 0 1 2 0m-5 .997c.552 0 1-.446 1-.997a1 1 0 0 0-1-.997c-.552 0-1 .447-1 .997s.448.997 1 .997m5-4.984a1 1 0 0 1-2 0a1 1 0 0 1 2 0m3 1.993c.552 0 1-.446 1-.996a1 1 0 0 0-1-.997a.998.998 0 1 0 0 1.993m16-10.965a1 1 0 0 0 2 0a1 1 0 0 0-1-.997c-.552 0-1 .446-1 .997m-1 4.985a.998.998 0 1 1 0-1.994c.552 0 1 .446 1 .996s-.448.997-1 .997m-7 5.981c-.552 0-1-.446-1-.996c0-.551.448-.997 1-.997s1 .446 1 .997s-.448.996-1 .996m-3-.996c0 .55-.448.996-1 .996s-1-.446-1-.996c0-.551.448-.997 1-.997s1 .446 1 .997"></svg:path><svg:path fill-rule="evenodd" d="M33.226 14.81c.605-1.501 1.42-2.634 2.412-3.259c1.045-.657 2.228-.704 3.28-.1c.992.569 1.754 1.644 2.266 3.012c.517 1.385.816 3.162.816 5.288v10.156c0 .846-.164 2.806-1.117 4.594c-.99 1.855-2.838 3.512-6.037 3.512c-1.595 0-2.786-.45-3.752-1.148c-.865-.625-1.526-1.437-2.1-2.143l-.116-.143c-.63-.772-1.188-1.424-1.917-1.904c-.7-.461-1.607-.793-2.961-.793s-2.261.332-2.96.793c-.73.48-1.288 1.132-1.918 1.904l-.116.143c-.574.706-1.235 1.518-2.1 2.143c-.966.698-2.157 1.148-3.752 1.148c-3.199 0-5.047-1.657-6.037-3.512C6.164 32.713 6 30.753 6 29.907V19.75c0-2.126.299-3.903.816-5.288c.512-1.368 1.274-2.443 2.265-3.012c1.053-.604 2.236-.557 3.28.1c.992.625 1.808 1.758 2.413 3.259c.154.382.304.793.461 1.223c.519 1.42 1.113 3.046 2.157 4.502c1.294 1.803 3.244 3.26 6.608 3.26s5.314-1.457 6.608-3.26c1.044-1.456 1.638-3.082 2.157-4.501a39 39 0 0 1 .461-1.224m-17.46 6.885c1.614 2.25 4.136 4.094 8.234 4.094s6.62-1.844 8.234-4.094c1.223-1.705 1.948-3.697 2.47-5.133c.139-.38.263-.722.378-1.01c.52-1.288 1.121-1.998 1.624-2.315c.45-.283.838-.274 1.215-.058c.44.252.968.855 1.389 1.98c.414 1.11.69 2.64.69 4.592v3.493a2.1 2.1 0 0 0-.908-.23c-1.347-.034-2.437.903-2.59 2.154a6.7 6.7 0 0 0-1.741.942c-1.227-.5-2.635-.083-3.279 1.03s-.303 2.536.745 3.345a6.7 6.7 0 0 0 .052 1.974a2.42 2.42 0 0 0-.97 1.91c-.262-.29-.525-.613-.811-.964l-.068-.084c-.62-.76-1.35-1.64-2.367-2.31c-1.045-.688-2.34-1.123-4.063-1.123s-3.018.435-4.063 1.123c-1.016.67-1.746 1.55-2.367 2.31l-.068.084c-.618.758-1.125 1.38-1.77 1.846c-.624.45-1.404.768-2.578.768c-2.34 0-3.568-1.137-4.271-2.454c-.74-1.386-.883-2.98-.883-3.657V19.75c0-1.952.276-3.482.69-4.591c.421-1.126.95-1.729 1.389-1.98c.377-.217.765-.226 1.215.057c.502.317 1.104 1.027 1.624 2.316c.115.287.24.628.378 1.009c.522 1.436 1.247 3.428 2.47 5.133" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsThyroidCancerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsThyroidOutlineIcon],svg[healthicons-thyroid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m21.584 10.087l-.006.006l-.013-.234l-.008-.158c-.036-.66-.092-1.66-.498-2.45a2.44 2.44 0 0 0-1.083-1.098c-.515-.256-1.103-.314-1.731-.228c-.557.077-1.05.3-1.44.678c-.382.37-.61.834-.734 1.308c-.243.918-.14 2.016.11 3.073c.507 2.136 1.738 4.6 3.123 6.276c.533.645.696 1.617.696 2.036V21.5l2 .5v-1.315c.883-.328 1.479-.478 2.038-.49c.542-.01 1.12.108 1.962.456V22l2-.5v-2.204c0-.419.164-1.39.696-2.036c1.375-1.665 2.668-4.118 3.24-6.248c.282-1.051.423-2.148.211-3.07c-.109-.476-.323-.949-.702-1.328c-.387-.386-.883-.612-1.44-.689c-.628-.086-1.217-.028-1.731.228c-.52.26-.863.668-1.084 1.098c-.406.79-.461 1.79-.497 2.45l-.009.158l-.013.234l-.006-.006c-.477-.425-1.109-.57-1.535-.632a7 7 0 0 0-.88-.065H24v.001a7 7 0 0 0-.88.065c-.427.062-1.058.207-1.536.632m1.33 1.494l.03-.019l.056-.026V16h2v-4.538q.118.025.204.056a.7.7 0 0 1 .131.063c.423.377.853.695 1.284.84c.232.077.527.126.844.048a1.35 1.35 0 0 0 .753-.496c.285-.37.362-.842.398-1.126c.036-.28.053-.602.068-.895l.008-.142c.04-.746.102-1.3.28-1.645c.07-.138.136-.192.194-.22c.064-.033.224-.086.568-.039c.18.025.258.082.3.123c.049.05.118.151.166.36c.103.45.057 1.17-.194 2.105c-.494 1.843-1.65 4.04-2.85 5.493c-.67.81-.971 1.805-1.089 2.553c-.714-.238-1.378-.358-2.068-.344c-.68.014-1.344.159-2.055.39c-.113-.753-.413-1.772-1.096-2.6c-1.19-1.44-2.283-3.627-2.718-5.463c-.22-.93-.243-1.65-.123-2.102c.056-.212.131-.323.191-.381c.053-.05.14-.109.322-.134c.343-.047.503.006.567.038c.058.029.124.083.195.221c.178.345.24.899.28 1.645l.008.142c.015.293.032.615.067.895c.037.284.113.756.398 1.126c.169.22.418.414.753.496c.318.078.613.029.844-.049c.432-.144.861-.462 1.285-.84M24 42a4 4 0 0 0 4-4v-2.167l-2-2.166v1.648c-.883.328-1.479.478-2.038.49c-.542.01-1.12-.108-1.962-.456v-1.682l-2 2.166V38a4 4 0 0 0 4 4m0-2a2 2 0 0 1-2-2v-.519c.69.224 1.335.337 2.003.323c.662-.014 1.308-.151 1.997-.371V38a2 2 0 0 1-2 2" clip-rule="evenodd"></svg:path><svg:path d="M11 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m16-11a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-1 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M33.226 14.725c.605-1.506 1.42-2.642 2.412-3.269c1.045-.66 2.228-.706 3.28-.1c.992.57 1.754 1.65 2.266 3.021c.517 1.39.816 3.172.816 5.305v10.187c0 .85-.164 2.816-1.117 4.608C39.893 36.34 38.045 38 34.846 38c-1.595 0-2.786-.45-3.752-1.151c-.865-.626-1.526-1.442-2.1-2.15l-.116-.143c-.63-.774-1.188-1.428-1.917-1.91c-.7-.463-1.607-.796-2.961-.796s-2.261.333-2.96.796c-.73.481-1.288 1.136-1.918 1.91l-.116.144c-.574.707-1.235 1.522-2.1 2.149c-.966.7-2.157 1.151-3.752 1.151c-3.199 0-5.047-1.661-6.037-3.523C6.164 32.685 6 30.718 6 29.87V19.682c0-2.133.299-3.916.816-5.304c.512-1.373 1.274-2.452 2.265-3.022c1.053-.606 2.236-.56 3.28.1c.992.627 1.808 1.763 2.413 3.269c.154.383.304.796.461 1.228c.519 1.423 1.113 3.055 2.157 4.515c1.294 1.808 3.244 3.27 6.608 3.27s5.314-1.462 6.608-3.27c1.044-1.46 1.638-3.092 2.157-4.515c.157-.432.308-.845.461-1.228m-17.46 6.906c1.614 2.257 4.136 4.107 8.234 4.107s6.62-1.85 8.234-4.107c1.223-1.71 1.948-3.708 2.47-5.148c.139-.382.263-.725.378-1.013c.52-1.293 1.121-2.005 1.624-2.322c.45-.284.838-.276 1.215-.059c.44.253.968.858 1.389 1.987c.414 1.112.69 2.648.69 4.606v10.187c0 .68-.144 2.278-.883 3.67C38.414 34.86 37.186 36 34.847 36c-1.175 0-1.955-.318-2.58-.77c-.644-.467-1.151-1.091-1.769-1.852l-.068-.084c-.62-.763-1.35-1.646-2.367-2.317c-1.045-.69-2.34-1.127-4.063-1.127s-3.018.436-4.063 1.127c-1.016.671-1.746 1.554-2.367 2.317l-.068.084c-.618.76-1.125 1.385-1.77 1.852c-.624.452-1.404.77-2.578.77c-2.34 0-3.568-1.14-4.271-2.462c-.74-1.39-.883-2.99-.883-3.669V19.682c0-1.958.276-3.494.69-4.606c.421-1.129.95-1.734 1.389-1.987c.377-.217.765-.225 1.215.059c.502.317 1.104 1.03 1.624 2.322c.115.288.24.63.378 1.012c.522 1.44 1.247 3.44 2.47 5.15" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsThyroidOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTissueIcon],svg[healthicons-tissue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M39.989 38h-4.012a1 1 0 0 0-.104-.444l-4.231-8.505L44 29.93V34c0 2.21-1.796 4-4.011 4m-3.17-4.198c.555 0 1.004-.448 1.004-1a1.002 1.002 0 0 0-2.006 0c0 .552.449 1 1.003 1m-3.61-13.775l-1.957 6.991L44 27.926v-8.833l-10.193.905zm2.607 4.775c0 .552-.449 1-1.003 1a1 1 0 0 1-1.003-1a1.002 1.002 0 0 1 2.006 0M18.14 27.876l11.002-.754l1.956-6.99l-14.92.735zm5.643-2.074c.554 0 1.003-.448 1.003-1a1.002 1.002 0 0 0-2.006 0c0 .552.449 1 1.003 1m5.648 3.305l-11.199.767L15.958 38h17.897zM25.606 34c.554 0 1.003-.448 1.003-1a1.002 1.002 0 0 0-2.006 0c0 .552.45 1 1.003 1M14.125 20.969l1.96 7.008L4 27.08v-8.034l9.382 1.96zm-3.217 3.233c0 .553-.449 1-1.003 1a1 1 0 0 1-1.003-1a1.002 1.002 0 0 1 2.006 0m5.211 5.783L4 29.085V34c0 2.21 1.796 4 4.011 4h5.903q0-.134.037-.269zm-4.21 4.382c.553 0 1.002-.448 1.002-1a1.001 1.001 0 0 0-2.005 0c0 .552.449 1 1.002 1M44 17.085l-10.331.917l-.423.021L31.001 10h8.988A4.006 4.006 0 0 1 44 14zm-5.174-2.283c0 .552-.45 1-1.003 1a1 1 0 0 1-1.003-1c0-.552.449-1 1.003-1s1.003.448 1.003 1m-7.634 3.322l-2.198-7.855a1 1 0 0 1-.037-.269h-8.023c0 .15-.033.301-.104.444l-4.177 8.397zm-3.398-3.322c0 .552-.449 1-1.003 1a1 1 0 0 1-1.003-1a1.002 1.002 0 0 1 2.006 0m-13.436 4.153L18.812 10h-10.8A4.006 4.006 0 0 0 4 14v3.006l.091.015l9.45 1.974zm-1.607-3.153c.554 0 1.003-.448 1.003-1s-.449-1-1.003-1s-1.003.448-1.003 1s.45 1 1.003 1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTissueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTissue24pxIcon],svg[healthicons-tissue-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.807 5h-3.43l-1.223 6.928l5.968-1.392zm-.787 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.364 3.265L9.446 13.4l1.33 5.6h3.74zM13.5 15.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.027 19l.82-6.597L22 14.6V17a2 2 0 0 1-2 2zm3.223-1.945a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M9.235 19l-1.312-5.52L2 11.892V17a2 2 0 0 0 2 2zM6.5 16A.75.75 0 1 1 5 16a.75.75 0 0 1 1.5 0m1.145-4.148L8.855 5H4a2 2 0 0 0-2 2v3.339zM5.75 9.197a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m10.956 1.515L15.349 5H20a2 2 0 0 1 2 2v5.97zM19 8.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTissue24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTissueOutlineIcon],svg[healthicons-tissue-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.84 15.802a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1.838 8.4a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 34.367a1 1 0 1 0 0-2a1 1 0 0 0 0 2M25.658 34a1 1 0 1 0 0-2a1 1 0 0 0 0 2m11.182-.198a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1-9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-12 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m11-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M4.114 28.302V34a4 4 0 0 0 4 4H40a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4H8.114a4 4 0 0 0-4 4v13.373a1 1 0 0 0 0 .929m4-16.302h9.874l-3.995 7.19l-7.764-1.826a1 1 0 0 0-.115-.02V14a2 2 0 0 1 2-2m-2 7.392l7.602 1.788l2.047 6.551l-9.649-.804zm0 9.542l9.407.784L13.558 36H8.114a2 2 0 0 1-2-2zm11.478.861L15.653 36h18.016l-3.965-7.137zm14.48-.789l3.802 6.846q.041.072.067.148h4.06a2 2 0 0 0 2-2v-4.2zM42 27.794l-10.825-.866l2.082-6.661L42 19.393zm-12.913-.89l-11.218.864l-2.032-6.503l15.278-.849zM16.254 19.24l14.909-.829L29.159 12h-8.883zm16.957-.977l8.79-.88V14a2 2 0 0 0-2-2h-8.746z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTissueOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTissueOutline24pxIcon],svg[healthicons-tissue-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.29 9.868a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m6.73-.36a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m5.23.36a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M13.5 15.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m4.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-11.21-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm5.072 2H4v3.608L7.668 11.8zm1.502 0a.8.8 0 0 1-.026.298l-1.352 4.62l5.769-1.346l-1.204-3.354A.8.8 0 0 1 13.718 7zm4.702 0l1.315 3.662L20 12.108V7zm.054 5.028L9.66 13.35l1.355 3.474a.8.8 0 0 1 .046.176h3.053zM15.659 17l1.13-4.625l2.756 1.17c.15.063.308.074.455.042V17zm-6.185 0l-1.357-3.477L4 12.185V17z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTissueOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToiletPaperIcon],svg[healthicons-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M27.743 11.65c0 1.05-1.666 1.9-3.72 1.9c-2.056 0-3.721-.85-3.721-1.9s1.665-1.9 3.72-1.9s3.72.85 3.72 1.9"></svg:path><svg:path fill-rule="evenodd" d="M21.304 11.65c.012.037.088.221.542.453c.505.258 1.273.447 2.176.447s1.67-.189 2.176-.447c.454-.232.53-.416.542-.453c-.012-.036-.088-.22-.542-.453c-.505-.258-1.273-.447-2.176-.447s-1.67.19-2.176.447c-.454.232-.53.417-.542.453m-.367-2.234c.84-.43 1.933-.666 3.085-.666s2.245.237 3.086.666c.787.402 1.635 1.138 1.635 2.234s-.848 1.832-1.635 2.234c-.841.43-1.934.666-3.086.666s-2.244-.236-3.085-.666c-.788-.402-1.636-1.137-1.636-2.234s.848-1.832 1.636-2.234" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.269 7.838C13.026 8.984 12 10.386 12 11.65c0 1.265 1.026 2.667 3.269 3.812c2.188 1.118 5.282 1.838 8.753 1.838s6.565-.72 8.753-1.838c2.243-1.145 3.27-2.547 3.27-3.812s-1.027-2.666-3.27-3.812C30.587 6.721 27.494 6 24.022 6c-3.471 0-6.564.72-8.753 1.838m-.91-1.78C16.884 4.767 20.302 4 24.022 4s7.139.768 9.663 2.057c2.47 1.262 4.36 3.185 4.36 5.593s-1.89 4.332-4.36 5.593c-2.525 1.29-5.942 2.057-9.663 2.057s-7.138-.768-9.663-2.057C11.89 15.982 10 14.058 10 11.65s1.889-4.331 4.36-5.593" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 36.351v-24.7h-2v24.7c0 2.408 1.889 4.331 4.36 5.593c2.524 1.29 5.942 2.057 9.662 2.057c2.546 0 4.951-.36 7.024-1h-7.024v-1c-3.471 0-6.564-.72-8.753-1.838C13.026 39.018 12 37.616 12 36.35m20.846 3.775l.478.975l-.64 1.307q.52-.218 1.001-.464c2.47-1.262 4.36-3.185 4.36-5.593v-24.7h-2v24.7c0 1.251-1.005 2.637-3.199 3.775" clip-rule="evenodd"></svg:path><svg:path d="M15.79 20.3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-11.4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M23.022 18.3a1 1 0 0 1 1-1h9.302a1 1 0 0 1 .898 1.44l-.715 1.46l.715 1.461a1 1 0 0 1 0 .88L33.507 24l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.93 1.9a1 1 0 0 1-.898.56h-8.372a1 1 0 0 1 0-2h7.748l.44-.9l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.226-.46h-7.699a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsToiletPaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToiletPaperNegativeIcon],svg[healthicons-toilet-paper-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsToiletPaperNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM21.846 12.103c-.454-.232-.53-.416-.542-.453c.012-.036.088-.22.542-.453c.505-.258 1.273-.447 2.176-.447s1.67.19 2.176.447c.454.232.53.417.542.453c-.012.037-.088.221-.542.453c-.505.258-1.273.447-2.176.447s-1.67-.189-2.176-.447m2.176-3.353c-1.152 0-2.244.237-3.085.666c-.788.402-1.636 1.138-1.636 2.234s.848 1.832 1.636 2.234c.84.43 1.933.666 3.085.666s2.245-.236 3.086-.666c.787-.402 1.635-1.137 1.635-2.234s-.848-1.832-1.635-2.234c-.841-.43-1.934-.666-3.086-.666m-8.753-.912C13.026 8.984 12 10.386 12 11.65c0 1.265 1.026 2.667 3.269 3.812c2.188 1.118 5.282 1.838 8.753 1.838s6.565-.72 8.753-1.838c2.243-1.145 3.27-2.547 3.27-3.812s-1.027-2.666-3.27-3.812C30.587 6.721 27.494 6 24.022 6c-3.471 0-6.564.72-8.753 1.838m20.775 7.813v20.7c0 1.073-.738 2.244-2.33 3.273l-.207-.423l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0 0-.88l-.715-1.46l.715-1.46a1 1 0 0 0-.693-1.42l.156-.078c.88-.45 1.686-.982 2.36-1.592m-12.038 3.65h7.715l-.226.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.715 1.46a1 1 0 0 0 0 .88l.715 1.46l-.44.9h-7.754c-3.47 0-6.56-.721-8.747-1.838C13.026 39.018 12 37.616 12 36.35v-20.7c.673.61 1.48 1.143 2.36 1.592c2.52 1.288 5.931 2.055 9.646 2.057m.051 24.7h-.035c-3.72 0-7.138-.768-9.663-2.057C11.89 40.682 10 38.76 10 36.351v-24.7c0-2.409 1.889-4.332 4.36-5.594C16.883 4.768 20.301 4 24.021 4s7.139.768 9.663 2.057c2.47 1.262 4.36 3.185 4.36 5.593v24.701c0 2.256-1.659 4.087-3.9 5.347l-.853 1.743a1 1 0 0 1-.898.56zm-8.267-22.7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 8.6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 6.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-10.4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 6.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsToiletPaperNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsToiletPaperNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToiletPaperOutlineIcon],svg[healthicons-toilet-paper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M21.304 11.65c.012.037.088.221.542.453c.505.258 1.273.447 2.176.447s1.67-.189 2.176-.447c.454-.232.53-.416.542-.453c-.012-.036-.088-.22-.542-.453c-.505-.258-1.273-.447-2.176-.447s-1.67.19-2.176.447c-.454.232-.53.417-.542.453m-.367-2.234c.84-.43 1.933-.666 3.085-.666s2.245.237 3.086.666c.787.402 1.635 1.138 1.635 2.234s-.848 1.832-1.635 2.234c-.841.43-1.934.666-3.086.666s-2.244-.236-3.085-.666c-.788-.402-1.636-1.137-1.636-2.234s.848-1.832 1.636-2.234" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M15.269 7.838C13.026 8.984 12 10.386 12 11.65c0 1.265 1.026 2.667 3.269 3.812c2.188 1.118 5.282 1.838 8.753 1.838s6.565-.72 8.753-1.838c2.243-1.145 3.27-2.547 3.27-3.812s-1.027-2.666-3.27-3.812C30.587 6.721 27.494 6 24.022 6c-3.471 0-6.564.72-8.753 1.838m-.91-1.78C16.884 4.767 20.302 4 24.022 4s7.139.768 9.663 2.057c2.47 1.262 4.36 3.185 4.36 5.593s-1.89 4.332-4.36 5.593c-2.525 1.29-5.942 2.057-9.663 2.057s-7.138-.768-9.663-2.057C11.89 15.982 10 14.058 10 11.65s1.889-4.331 4.36-5.593" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 36.351v-24.7h-2v24.7c0 2.408 1.889 4.331 4.36 5.593c2.524 1.29 5.942 2.057 9.662 2.057c2.546 0 4.951-.36 7.024-1h-7.024v-1c-3.471 0-6.564-.72-8.753-1.838C13.026 39.018 12 37.616 12 36.35m20.846 3.775l.478.975l-.64 1.307q.52-.218 1.001-.464c2.47-1.262 4.36-3.185 4.36-5.593v-24.7h-2v24.7c0 1.251-1.005 2.637-3.199 3.775" clip-rule="evenodd"></svg:path><svg:path d="M15.79 21.3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-11.4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M23.022 18.3a1 1 0 0 1 1-1h9.302a1 1 0 0 1 .898 1.44l-.715 1.46l.715 1.461a1 1 0 0 1 0 .88L33.507 24l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.93 1.9a1 1 0 0 1-.898.56h-8.372a1 1 0 0 1 0-2h7.748l.44-.9l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.226-.46h-7.699a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsToiletPaperOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTongueIcon],svg[healthicons-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 22c0 2.21-1.12 4-2.5 4S15 24.21 15 22s1.12-4 2.5-4s2.5 1.79 2.5 4m10.5 4c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4"></svg:path><svg:path fill-rule="evenodd" d="M27.874 41.582a18 18 0 0 0 3.276-1.058l.043-.019A18.04 18.04 0 0 0 38 35.316a18 18 0 0 0 2.325-3.721l.001-.004A17.9 17.9 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 7.333 4.385 13.642 10.676 16.447l.131.058c1.058.462 2.168.825 3.32 1.077A5.98 5.98 0 0 0 24 43a5.98 5.98 0 0 0 3.874-1.418M8 24c0 6.84 4.292 12.677 10.33 14.966A6 6 0 0 1 18 37v-2.122c-.92-.452-1.558-.992-2-1.522l-.025-.03C15 32.135 15 31 15 31s-.373-1.493 1.137-1.899l.06-.015c.225-.055.49-.086.803-.086h14.5q.18 0 .336.02l.016.003C33.5 29.243 33.5 31 33.5 31s-.133 1.332-1.5 2.621l-.08.075A7.3 7.3 0 0 1 30 34.929V37c0 .689-.116 1.35-.33 1.966a16.05 16.05 0 0 0 7.162-5.407l.018-.024l.103-.14A15.9 15.9 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24m16 12a1 1 0 0 1-1-1v-4h-3v6a4 4 0 0 0 8 0v-6h-3v4a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTongueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTongue24pxIcon],svg[healthicons-tongue-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.5 11.2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M17 9.7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M9 13a2 2 0 0 0-1 3.732V14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2.232A2 2 0 0 0 15 13z"></svg:path><svg:path d="M4 12a8 8 0 1 1 13 6.245V19c0 .733-.232 1.417-.645 2.004A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 5.645 9.004A3.46 3.46 0 0 1 7 19v-.755A7.99 7.99 0 0 1 4 12"></svg:path><svg:path d="M9.087 19.453C9.352 20.174 10.243 21 12 21s2.648-.826 2.913-1.547A8 8 0 0 1 12 20a8 8 0 0 1-2.913-.547"></svg:path><svg:path fill-rule="evenodd" d="M16 14v4.625C16 20.313 14.5 22 12 22s-4-1.687-4-3.375V14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1m-4 3.938a1 1 0 0 1-1-1V15h-1v3.625c0 .43.445 1.375 2 1.375s2-.945 2-1.375V15h-1v1.938a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTongue24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTongueNegativeIcon],svg[healthicons-tongue-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTongueNegative0)"><svg:path fill-rule="evenodd" d="M40 24c0 6.84-4.292 12.677-10.33 14.966c.214-.616.33-1.277.33-1.966v-1.272c1.158-.655 2.429-2.379 3.4-3.917c.793-1.258-.15-2.811-1.636-2.811H16.236c-1.487 0-2.429 1.553-1.635 2.81c.97 1.54 2.241 3.263 3.399 3.918V37c0 .689.116 1.35.33 1.966C12.292 36.677 8 30.84 8 24c0-8.837 7.163-16 16-16s16 7.163 16 16m-9.5 2c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4M20 22c0 2.21-1.12 4-2.5 4S15 24.21 15 22s1.12-4 2.5-4s2.5 1.79 2.5 4" clip-rule="evenodd"></svg:path><svg:path d="M20 31v6a4 4 0 0 0 8 0v-6h-3v4a1 1 0 1 1-2 0v-4z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-6 24c0 8.611-6.047 15.81-14.126 17.582A5.98 5.98 0 0 1 24 43a5.98 5.98 0 0 1-3.874-1.418C12.047 39.81 6 32.612 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTongueNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTongueNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTongueOutlineIcon],svg[healthicons-tongue-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M30.5 18a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.5 2.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m-15 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path d="M27.874 41.582C35.953 39.81 42 32.612 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 8.611 6.047 15.81 14.126 17.582A5.98 5.98 0 0 0 24 43a5.98 5.98 0 0 0 3.874-1.418m1.797-2.616C35.708 36.677 40 30.84 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 6.84 4.292 12.677 10.33 14.966A6 6 0 0 1 18 37v-1.811c-1.13-.401-1.959-.925-2.563-1.509c-1.383-1.336-1.397-2.8-1.397-3.18v-.014l-.003-.041l-.01-.123v-.011a8 8 0 0 1-.025-.41c-.009-.31.005-.738.148-1.174a2.33 2.33 0 0 1 .963-1.256c.504-.325 1.135-.471 1.868-.471h14.077c.66 0 1.23.167 1.695.491c.459.32.744.744.92 1.147c.328.749.327 1.548.327 1.84v.022c0 .507-.203 1.933-1.679 3.216c-.58.505-1.338.969-2.321 1.345V37c0 .689-.116 1.35-.33 1.966m-12.844-6.724c.266.257.643.532 1.173.786V32a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.875a5 5 0 0 0 1.01-.669c.48-.418.725-.831.851-1.142a2 2 0 0 0 .136-.516v-.008l.003-.027V30.5c0-.293-.01-.72-.159-1.06a.7.7 0 0 0-.232-.308c-.082-.057-.239-.132-.55-.132H16.98c-.48 0-.699.096-.786.152a.33.33 0 0 0-.145.199q-.058.176-.049.492c.003.102.01.201.02.308l.001.024c.007.088.018.215.018.325v.01c0 .197-.002.97.787 1.732M24 37a1 1 0 0 1-1-1v-3h-3v4a4 4 0 0 0 8 0v-4h-3v3a1 1 0 0 1-1 1"></svg:path></svg:g>`,
})
export class HealthiconsTongueOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTongueOutline24pxIcon],svg[healthicons-tongue-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.5 11.2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M17 9.7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M9 13a2 2 0 0 0-1 3.732V14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2.232A2 2 0 0 0 15 13z"></svg:path><svg:path d="M4 12a8 8 0 1 1 13 6.245V19c0 .733-.232 1.417-.645 2.004A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 5.645 9.004A3.46 3.46 0 0 1 7 19v-.755A7.99 7.99 0 0 1 4 12"></svg:path><svg:path d="M9.087 19.453C9.352 20.174 10.243 21 12 21s2.648-.826 2.913-1.547A8 8 0 0 1 12 20a8 8 0 0 1-2.913-.547"></svg:path><svg:path fill-rule="evenodd" d="M16 14v4.625C16 20.313 14.5 22 12 22s-4-1.687-4-3.375V14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1m-4 3.938a1 1 0 0 1-1-1V15h-1v3.625c0 .43.445 1.375 2 1.375s2-.945 2-1.375V15h-1v1.938a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTongueOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToothIcon],svg[healthicons-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.96 9.281c-4.338-2.44-8.18-1.293-11.375 2.585c-3.082 3.742-.98 10.488.53 15.338c.36 1.156.687 2.205.902 3.079c1.115 4.54 2.183 7.37 4.616 9.418c1.205 1.014 2.572-.729 4.014-2.567c1.25-1.594 2.556-3.26 3.863-3.264c1.285-.004 2.571 1.66 3.804 3.254c1.423 1.84 2.775 3.59 3.973 2.577c1.86-1.57 2.703-2.722 3.725-5.956c1.113-3.527 2.912-7.745 4.342-12.607c1.006-3.42 1.126-6.904-1.773-10.265c-4.14-4.8-9.877-2.32-12.548-.733l3.618 3.1a1 1 0 1 1-1.302 1.52z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsToothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTooth24pxIcon],svg[healthicons-tooth-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.003 3.417A5 5 0 0 0 3 8c0 4.49 1.467 8.668 4.21 12.267A1.5 1.5 0 0 0 10 19.5v-.02c.022-.928.534-2.48 2-2.48c1.467 0 1.978 1.552 2 2.48v.02a1.5 1.5 0 0 0 2.79.767C19.532 16.668 21 12.49 21 8a5 5 0 0 0-7.757-4.172l1.964 1.965a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class HealthiconsTooth24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToothNegativeIcon],svg[healthicons-tooth-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9.585 11.866c3.245-3.94 7.159-5.062 11.58-2.466l6.18 5.356a1 1 0 1 0 1.31-1.512l-3.598-3.118c2.68-1.588 8.396-4.039 12.524.747c3.02 3.5 2.763 7.133 1.643 10.69l-3.942 11.293c-1.153 3.927-1.975 5.14-3.995 6.845c-1.198 1.013-2.55-.736-3.973-2.577c-1.233-1.595-2.519-3.258-3.804-3.254c-1.307.004-2.614 1.67-3.864 3.264c-1.441 1.838-2.808 3.581-4.013 2.567c-2.433-2.048-3.5-4.877-4.616-9.418c-.215-.874-.541-1.923-.902-3.079c-1.51-4.85-3.612-11.596-.53-15.338" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsToothNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToothOutlineIcon],svg[healthicons-tooth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.56 11.126c.199-.157 8.52-6.63 14.02-.253c3.02 3.5 2.764 7.133 1.644 10.69l-3.942 11.293c-1.153 3.927-1.975 5.14-3.995 6.845c-1.198 1.013-2.55-.736-3.973-2.577c-1.233-1.595-2.519-3.258-3.804-3.254c-1.307.004-2.614 1.67-3.864 3.264c-1.441 1.838-2.808 3.581-4.013 2.567c-2.433-2.048-3.5-4.877-4.616-9.418c-.215-.874-.541-1.923-.902-3.08c-1.51-4.849-3.612-11.595-.53-15.337c3.807-4.622 8.535-5.366 13.924-.777zm-2.66.474c-1.864-1.28-3.45-1.688-4.77-1.584c-1.621.127-3.306 1.063-5 3.121c-1.276 1.548-1.405 4.162-.718 7.578c.327 1.627.805 3.274 1.286 4.839q.156.508.313 1.011c.365 1.17.717 2.301.948 3.24c1.021 4.158 1.91 6.392 3.521 7.966c.333-.31.753-.806 1.31-1.511l.27-.344c.57-.727 1.245-1.59 1.934-2.28c.732-.731 1.941-1.762 3.51-1.766c1.576-.005 2.782 1.042 3.499 1.769c.679.689 1.345 1.551 1.907 2.279l.267.345c.545.7.958 1.196 1.285 1.505c.647-.586 1.067-1.075 1.43-1.683c.47-.785.907-1.873 1.47-3.792l.031-.096l3.932-11.263c.514-1.64.775-3.137.64-4.544c-.134-1.37-.653-2.767-1.899-4.211c-2.064-2.394-4.6-2.43-6.994-1.689c-1.205.374-2.286.93-3.078 1.406c-.298.178-.548.341-.742.474l3.84 2.824a1 1 0 0 1-1.184 1.612l-5.425-3.99a2 2 0 0 1-.217-.159l-1.158-.851a1 1 0 0 1-.208-.206m-4.77 26.445l.003-.002z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsToothOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsToothOutline24pxIcon],svg[healthicons-tooth-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.444 5A3.444 3.444 0 0 0 5 8.444c0 3.758.066 6.622 1.863 9.342l.116.176l.035.208A1 1 0 0 0 9 18c0-.66.17-1.391.813-1.906c.584-.467 1.37-.594 2.187-.594s1.603.127 2.187.594C14.83 16.61 15 17.34 15 18a1 1 0 0 0 1.986.17l.035-.208l.116-.176C18.934 15.066 19 12.204 19 8.447v-.003a3.445 3.445 0 0 0-5.727-2.58l1.257 1.887a1 1 0 1 1-1.664 1.109l-1.504-2.257l-.035-.056l-.127-.169A3.44 3.44 0 0 0 8.445 5M12 4.321a5.444 5.444 0 0 0-9 4.123c0 3.633.02 7.042 2.089 10.283A3 3 0 0 0 11 18c0-.172.022-.264.038-.305c.01-.028.017-.033.023-.038l.001-.001c.041-.033.255-.156.938-.156s.897.123.938.156c.007.006.014.01.024.039A.9.9 0 0 1 13 18a3 3 0 0 0 5.911.727C20.98 15.487 21 12.079 21 8.447m0 0v-.002a5.445 5.445 0 0 0-9-4.124" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsToothOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTransgenderIcon],svg[healthicons-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 9a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.586l5.753 5.753a1 1 0 0 0 .365.233A9.96 9.96 0 0 0 14 21c0 5.185 3.947 9.449 9 9.95v5.98h-2a1 1 0 1 0 0 2h2V41a1 1 0 1 0 2 0v-2.07h2a1 1 0 0 0 0-2h-2v-5.98c5.053-.501 9-4.765 9-9.95a9.96 9.96 0 0 0-1.073-4.511l2.104-2.091l1.43 1.43a1 1 0 0 0 1.414-1.415l-1.425-1.425L39 10.454V12a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.626l-2.59 2.574l-1.404-1.404a1 1 0 0 0-1.414 1.415l1.399 1.398l-1.796 1.785A9.98 9.98 0 0 0 24 11a9.98 9.98 0 0 0-7.82 3.766l-.013-.013L10.414 9zm12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTransgenderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTransgenderNegativeIcon],svg[healthicons-transgender-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTransgenderNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm14 21c0 5.185 3.947 9.449 9 9.95v5.98h-2a1 1 0 1 0 0 2h2V41a1 1 0 1 0 2 0v-2.07h2a1 1 0 0 0 0-2h-2v-5.98c5.053-.501 9-4.765 9-9.95a9.96 9.96 0 0 0-1.073-4.511l2.104-2.091l1.43 1.43a1 1 0 0 0 1.414-1.415l-1.425-1.425L39 10.454V12a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h1.626l-2.59 2.574l-1.404-1.404a1 1 0 1 0-1.414 1.415l1.4 1.398l-1.797 1.785A9.98 9.98 0 0 0 24 11a9.98 9.98 0 0 0-7.82 3.766l-.013-.013L10.414 9H12a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-1.586l5.753 5.753a1 1 0 0 0 .365.233A9.96 9.96 0 0 0 14 21m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTransgenderNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTransgenderNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTransgenderOutlineIcon],svg[healthicons-transgender-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 9a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.586l5.753 5.753a1 1 0 0 0 .365.233A9.96 9.96 0 0 0 14 21c0 5.185 3.947 9.449 9 9.95v5.98h-2a1 1 0 1 0 0 2h2V41a1 1 0 1 0 2 0v-2.07h2a1 1 0 0 0 0-2h-2v-5.98c5.053-.501 9-4.765 9-9.95a9.96 9.96 0 0 0-1.073-4.511l2.104-2.091l1.43 1.43a1 1 0 0 0 1.414-1.415l-1.425-1.425L39 10.454V12a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.626l-2.59 2.574l-1.404-1.404a1 1 0 0 0-1.414 1.415l1.399 1.398l-1.796 1.785A9.98 9.98 0 0 0 24 11a9.98 9.98 0 0 0-7.82 3.766l-.013-.013L10.414 9zm12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTransgenderOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTraumatismIcon],svg[healthicons-traumatism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m4.057 3.03Q25.544 15 25 15h-8c-.878 0-1.7.076-2.413.286s-1.496.607-2.027 1.376c-.552.8-.61 1.684-.49 2.405c.113.686.4 1.335.709 1.897c.617 1.123 1.598 2.378 2.647 3.642l.48.573l2.84-2.839l-.242-.29c-1.053-1.267-1.806-2.262-2.22-3.014l-.004-.007A8 8 0 0 1 17 19h.893l1.921 2.271zm-6.013 8.84l-2.837 2.837c.575.673 1.165 1.363 1.757 2.073a2 2 0 1 0 3.073-2.56a225 225 0 0 0-1.86-2.194z"></svg:path><svg:path d="M28.548 15.367c2.725.611 4.542 1.92 5.708 3.392a8.6 8.6 0 0 1 1.438 2.695a7.6 7.6 0 0 1 .282 1.22c.026.198.02.174.016.15l-.003-.017l.003.017l.001.01a2 2 0 0 1-3.984.359v-.002l-.014-.086a4 4 0 0 0-.111-.434a4.6 4.6 0 0 0-.765-1.43c-.515-.65-1.432-1.446-3.119-1.892V42a2 2 0 0 1-3.993.166l-1-12A2 2 0 0 1 23 30h-.05a3.5 3.5 0 0 0 .222-4.76l-2.061-2.437zm-12.407 12.4a1 1 0 0 1-.14.1V42a2 2 0 0 0 3.992.166l.933-11.192a3.5 3.5 0 0 1-3.098-1.213z"></svg:path><svg:path d="M33 25a3 3 0 0 0-3 3v.833a1 1 0 1 0 2 0V28a1 1 0 1 1 2 0v15a1 1 0 1 0 2 0V28a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class HealthiconsTraumatismIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTraumatismNegativeIcon],svg[healthicons-traumatism-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTraumatismNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm30 28a3 3 0 1 1 6 0v15a1 1 0 1 1-2 0V28a1 1 0 1 0-2 0v.833a1 1 0 1 1-2 0zm-13-9h1.547l1.622 1.917L22.086 19l3-3l.97-.97Q25.547 15 25 15h-8c-.878 0-1.7.076-2.413.286s-1.497.607-2.027 1.376c-.552.8-.61 1.684-.49 2.405c.113.686.4 1.335.709 1.897c.617 1.123 1.598 2.378 2.647 3.642l.48.573l2.84-2.839l-.242-.29c-1.053-1.267-1.807-2.262-2.22-3.014l-.004-.007c.194-.018.431-.029.72-.029m6.554 5.916l-2.088-2.467L24.914 19l3-3l.634-.633c2.725.611 4.542 1.92 5.708 3.392a8.6 8.6 0 0 1 1.438 2.695a7.6 7.6 0 0 1 .281 1.22q.008.056.012.098l.004.035l.001.015v.009c.001.002.001.003-1.992.169l1.993-.166a2 2 0 0 1-3.984.359v-.002l-.014-.086a4 4 0 0 0-.111-.434a4.6 4.6 0 0 0-.765-1.43c-.515-.65-1.432-1.446-3.119-1.892V42a2 2 0 0 1-3.993.166l-.965-11.578l.042-.035a4 4 0 0 0 .47-5.637m-2.67 6.566a4 4 0 0 1-3.437-1.398L16 28.374V42a2 2 0 0 0 3.993.166zm-.84-7.612l-2.837 2.837c.575.673 1.165 1.363 1.757 2.073a2 2 0 0 0 3.073-2.56a226 226 0 0 0-1.86-2.194l-.01-.012zM22 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTraumatismNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTraumatismNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTraumatismOutlineIcon],svg[healthicons-traumatism-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.57 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-9.762 5.945C13.083 15.206 15.228 15 16.57 15h10c3.734 0 6.223 1.602 7.76 3.62c1.208 1.583 1.757 3.37 2 4.16l.006.019c.035.114.06.194.08.252a3 3 0 0 1-.992 3.308A3 3 0 0 1 37 29v14a1 1 0 1 1-2 0V29a1 1 0 1 0-2 0v.667a1 1 0 1 1-2 0V29c0-.957.448-1.81 1.147-2.36a3 3 0 0 1-1.422-1.691q-.069-.207-.133-.411l.013.034l-.024-.069c-.264-.829-.509-1.574-1.022-2.247a2.9 2.9 0 0 0-.988-.847v19.742a3 3 0 0 1-5.986.293L21.855 34h-.568l-.73 7.444a3 3 0 0 1-5.986-.293V26.6q-.36-.462-.689-.905c-.935-1.257-1.799-2.551-2.319-3.764c-.434-1.014-1.124-3.121.245-4.987M16.57 17c-1.285 0-2.497.237-3.15 1.127c-.683.93-.418 2.087-.02 3.017c.424.988 1.17 2.128 2.086 3.359q.407.548.87 1.136l.049.062l1.695-1.777a34 34 0 0 0-1.785-2.268a1 1 0 0 1 1.51-1.312a34 34 0 0 1 1.677 2.111L24.712 17zm10.845.034a1 1 0 0 1-.122.157L20.7 24.099c.49.672.982 1.334 1.528 2.001a3 3 0 1 1-4.644 3.8c-.32-.392-.66-.783-1.013-1.183V41.15a1 1 0 0 0 1.995.097L19.474 32h4.194l.907 9.248a1 1 0 0 0 1.996-.097V18.91l1.145.169c1.742.256 2.77 1.092 3.434 1.964c.738.968 1.07 2.014 1.323 2.81l.014.043q.069.222.135.42a1 1 0 0 0 1.897-.633l-.09-.289l-.003-.008c-.24-.777-.705-2.269-1.685-3.556c-1.067-1.4-2.736-2.585-5.325-2.797m-8.12 8.535l-1.474 1.544c.447.503.893 1.011 1.31 1.52a1 1 0 1 0 1.548-1.266a43 43 0 0 1-1.383-1.799" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTraumatismOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelIcon],svg[healthicons-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648c2.017.143 5.434.323 9.929.323c2.206 0 4.152-.043 5.8-.104h-.017a6 6 0 1 1-11.567 0q-1.111-.041-2.036-.09a8 8 0 1 0 15.64 0a113 113 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6"></svg:path><svg:path fill-rule="evenodd" d="m24.288 28.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A1 1 0 0 1 24 28q.125 0 .247.031l.008.002zM25 30.341l5 1.488V40h-5zm-7 1.488l5-1.488V40h-5z" clip-rule="evenodd"></svg:path><svg:path d="M37 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5a3 3 0 0 0-3-3zM9 34a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z"></svg:path></svg:g>`,
})
export class HealthiconsTravelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelAltIcon],svg[healthicons-travel-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M35 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill-rule="evenodd" d="M31.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 2a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M19 16a2 2 0 1 0 0 4h7v20a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V27.917A6.002 6.002 0 0 0 36 16zm20 6a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 32a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm4 7v-6h2v6zm7-6v6h2v-6zm-6-5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h-2v-2h-3v2h-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTravelAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelAltNegativeIcon],svg[healthicons-travel-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTravelAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm35 9.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M17 18a2 2 0 0 1 2-2h17a6 6 0 0 1 1 11.917V40a2 2 0 1 1-4 0v-9h-3v9a2 2 0 1 1-4 0V20h-7a2 2 0 0 1-2-2m20 2a2 2 0 1 1 0 4zM6 32a2 2 0 0 1 2-2h3v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10-2v-2h-3v2zm-6 9v-6h2v6zm7-6v6h2v-6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTravelAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTravelAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelAltOutlineIcon],svg[healthicons-travel-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M35.5 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0M11 28a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3zM8 40v-8h2v8zm8-12v2h-3v-2zm1 4h-5v8h5zm2 0v8h2v-8z" clip-rule="evenodd"></svg:path><svg:path d="M38 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2"></svg:path><svg:path fill-rule="evenodd" d="M28 42a3 3 0 0 1-3-3V22h-5a3 3 0 1 1 0-6h17.016C38.129 16 42 17.364 42 21.571c0 3.339-2.437 5.427-4 6.147V39a3 3 0 1 1-6 0v-8h-1v8c0 .701-.24 1.346-.644 1.857A3 3 0 0 1 28 42m8-15.563l1.163-.536c1.144-.527 2.837-2.047 2.837-4.33c0-1.394-.605-2.238-1.308-2.789a4.3 4.3 0 0 0-1.126-.63a2.7 2.7 0 0 0-.543-.15q-.02-.002-.008-.002H20a1 1 0 1 0 0 2h7v19a1 1 0 1 0 2 0V29h5v10a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTravelAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelNegativeIcon],svg[healthicons-travel-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTravelNegative0)"><svg:path d="M29.8 17.396c-1.648.06-3.594.104-5.8.104c-2.198 0-4.138-.043-5.783-.104a6 6 0 1 0 11.567 0zM25 30.341l5 1.488V40h-5zM23 40h-5v-8.17l5-1.489z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648q.887.064 2.12.13l-.011-.001a8 8 0 1 0 15.64 0a113 113 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6m.288 22.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A1 1 0 0 1 24 28a1 1 0 0 1 .288.042M37 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5a3 3 0 0 0-3-3zM9 34a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTravelNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTravelNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTravelOutlineIcon],svg[healthicons-travel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648c2.017.143 5.434.323 9.929.323c2.206 0 4.152-.043 5.8-.104h-.017a6 6 0 1 1-11.567 0q-1.111-.041-2.036-.09a8 8 0 1 0 15.64 0a113 113 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6m-5 6.828l-2.492 2.492c1.93.097 4.462.18 7.492.18s5.562-.083 7.492-.18L29 12.828V8.62l-.302-.08C27.656 8.276 26.07 8 24 8s-3.656.276-4.698.54q-.16.04-.302.08zM30.148 9.01l-.002-.002z"></svg:path><svg:path d="m24.288 28.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A1 1 0 0 1 24 28q.125 0 .247.031l.008.002zM25 30.341l5 1.488V40h-5zm-7 1.488l5-1.488V40h-5z"></svg:path><svg:path d="M9 36a1 1 0 0 0-1 1v3h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6zm33-1a1 1 0 0 1 1 1v3h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm3 1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5z"></svg:path></svg:g>`,
})
export class HealthiconsTravelOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTreatedWaterIcon],svg[healthicons-treated-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25.598 29l.402-.419V25h-2v4h-2v-4h-2v4h-2v-4h-2v3.581l.402.419h-4.688c-.947 0-1.714.767-1.714 1.714v1.475q3.516 2.04 7.032-.975q4.194 3.596 8.389 0q3.29 2.82 6.579 1.216v-1.716c0-.947-.767-1.714-1.714-1.714zM29 40.202V42h2v-1.924c1.725-.444 3-2.01 3-3.874v-3.19h1.506a1 1 0 0 1 1 1v1.696H41v-1.19a6 6 0 0 0-4.898-5.9h3.1v-2h-4.494v1.9h-1.427a3.7 3.7 0 0 0-.901-.872A3.7 3.7 0 0 0 30.286 27s.683-.713 1.463-1.81C32.79 23.726 34 21.582 34 19.53V5.643H8V19.53c0 2.053 1.211 4.197 2.25 5.66A18 18 0 0 0 11.715 27A3.71 3.71 0 0 0 8 30.714v5.488a4 4 0 0 0 3 3.874V42h2v-1.798zm3-25.054V7.643H10V15c8.464 1.397 13.455 1.385 22 .148M39.5 42c.828 0 1.5-.814 1.5-1.818C41 38.59 39.5 37 39.5 37S38 38.59 38 40.182c0 1.004.672 1.818 1.5 1.818" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTreatedWaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTreatedWaterNegativeIcon],svg[healthicons-treated-water-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTreatedWaterNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM26 28.581l-.402.419h4.688c.947 0 1.714.767 1.714 1.714v1.716q-3.29 1.605-6.58-1.216q-4.194 3.596-8.388 0q-3.516 3.014-7.032.975v-1.475c0-.947.768-1.714 1.714-1.714h4.688L16 28.581V25h2v4h2v-4h2v4h2v-4h2zM29 42v-1.798H13V42h-2v-1.924a4 4 0 0 1-3-3.874v-5.488A3.71 3.71 0 0 1 11.714 27s-.683-.713-1.463-1.81C9.21 23.726 8 21.582 8 19.53V5.643h26V19.53c0 2.053-1.211 4.197-2.25 5.66c-.781 1.097-1.464 1.81-1.464 1.81a3.7 3.7 0 0 1 2.995 1.518h1.427v-1.9h4.494v2h-3.1a6 6 0 0 1 4.898 5.9v1.19h-4.494v-1.696a1 1 0 0 0-1-1H34v3.19a4 4 0 0 1-3 3.874V42zm3-34.357v7.505c-8.545 1.237-13.536 1.25-22-.148V7.643zm9 32.539C41 41.186 40.328 42 39.5 42s-1.5-.814-1.5-1.818C38 38.59 39.5 37 39.5 37s1.5 1.59 1.5 3.182" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTreatedWaterNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTreatedWaterNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTreatedWaterOutlineIcon],svg[healthicons-treated-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 36.202a4 4 0 0 0 3 3.874V42h2v-1.798h16V42h2v-1.924c1.725-.444 3-2.01 3-3.874v-3.19h1.506a1 1 0 0 1 1 1v1.696H41v-1.19a6 6 0 0 0-4.898-5.9h3.1v-2h-4.494v1.9h-1.427a3.7 3.7 0 0 0-.901-.872A3.7 3.7 0 0 0 30.286 27s.683-.713 1.463-1.81C32.79 23.726 34 21.582 34 19.53V5.643H8V19.53c0 2.053 1.211 4.197 2.25 5.66A18 18 0 0 0 11.715 27A3.71 3.71 0 0 0 8 30.714zM25.598 29l.402-.419V25.5h-2V29h-2v-3.5h-2V29h-2v-3.5h-2v3.081l.402.419h-4.688c-.947 0-1.714.767-1.714 1.714v1.475q.32.188.643.33q3.194 1.433 6.389-1.305q4.194 3.596 8.389 0q3.194 2.738 6.389 1.306l.19-.09v-1.716c0-.947-.767-1.714-1.714-1.714zM32 19.53c0 1.188-.65 2.637-1.519 3.97H11.519C10.649 22.167 10 20.718 10 19.53v-2.814c8.346 1.6 13.515 1.622 22-.092zm0-4.948c-8.584 1.768-13.544 1.747-22 .097V7.643h22zm-2.174 23.62a2 2 0 0 0 1.983-2V34.66a7.1 7.1 0 0 1-2.194.352c-1.495 0-2.897-.481-4.195-1.308c-1.297.827-2.7 1.308-4.194 1.308c-1.495 0-2.897-.482-4.194-1.308c-1.297.826-2.7 1.308-4.195 1.308a7.1 7.1 0 0 1-2.194-.352v1.542a2 2 0 0 0 1.983 2z" clip-rule="evenodd"></svg:path><svg:path d="M39.5 42c.828 0 1.5-.814 1.5-1.818C41 38.59 39.5 37 39.5 37S38 38.59 38 40.182c0 1.004.672 1.818 1.5 1.818"></svg:path></svg:g>`,
})
export class HealthiconsTreatedWaterOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedLargeIcon],svg[healthicons-triangle-inverted-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 40c-.379 0-.725-.18-.894-.465l-18-30.316a.73.73 0 0 1 .043-.82C5.332 8.151 5.653 8 6 8h36c.347 0 .668.151.85.4a.73.73 0 0 1 .044.819l-18 30.316c-.169.285-.515.465-.894.465"></svg:path>`,
})
export class HealthiconsTriangleInvertedLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedLargeOutlineIcon],svg[healthicons-triangle-inverted-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 40c-.379 0-.725-.18-.894-.465l-18-30.316a.73.73 0 0 1 .043-.82C5.332 8.151 5.653 8 6 8h36c.347 0 .668.151.85.4a.73.73 0 0 1 .044.819l-18 30.316c-.169.285-.515.465-.894.465m0-2.725l16.382-27.59H7.618z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleInvertedLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedMediumIcon],svg[healthicons-triangle-inverted-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.106 37.516c.169.297.515.484.894.484s.725-.187.894-.484l15-26.25a.78.78 0 0 0-.043-.851A1.04 1.04 0 0 0 39 10H9c-.347 0-.668.157-.85.415a.78.78 0 0 0-.044.851z"></svg:path>`,
})
export class HealthiconsTriangleInvertedMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedMediumOutlineIcon],svg[healthicons-triangle-inverted-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 38c-.379 0-.725-.187-.894-.484l-15-26.25a.78.78 0 0 1 .043-.851A1.04 1.04 0 0 1 9 10h30c.347 0 .668.157.85.415c.183.258.2.58.044.851l-15 26.25c-.169.297-.515.484-.894.484m0-2.832L37.382 11.75H10.618z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleInvertedMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedSmallIcon],svg[healthicons-triangle-inverted-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.106 34.532c.169.287.515.468.894.468s.725-.181.894-.468l12-20.307a.735.735 0 0 0-.043-.824c-.183-.25-.504-.401-.851-.401H12c-.347 0-.668.152-.85.401a.735.735 0 0 0-.044.824z"></svg:path>`,
})
export class HealthiconsTriangleInvertedSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedSmallOutlineIcon],svg[healthicons-triangle-inverted-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 35c-.379 0-.725-.181-.894-.468l-12-20.307a.735.735 0 0 1 .043-.824c.183-.25.504-.401.851-.401h24c.347 0 .668.152.85.401c.183.25.2.561.044.824l-12 20.307c-.169.287-.515.468-.894.468m0-2.738l10.382-17.57H13.618z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleInvertedSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeIcon],svg[healthicons-triangle-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 8c.379 0 .725.18.894.466l18 30.315a.73.73 0 0 1-.043.82c-.183.248-.504.399-.851.399H6c-.347 0-.668-.151-.85-.4a.73.73 0 0 1-.044-.819l18-30.315C23.275 8.18 23.62 8 24 8"></svg:path>`,
})
export class HealthiconsTriangleLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeNegativeIcon],svg[healthicons-triangle-large-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTriangleLargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.767 6.474a.857.857 0 0 0-1.534 0L6.09 40.76A.857.857 0 0 0 6.857 42h34.286a.857.857 0 0 0 .767-1.24z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTriangleLargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTriangleLargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeOutlineIcon],svg[healthicons-triangle-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 8c.379 0 .725.18.894.466l18 30.315a.73.73 0 0 1-.043.82c-.183.248-.504.399-.851.399H6c-.347 0-.668-.151-.85-.4a.73.73 0 0 1-.044-.819l18-30.315C23.275 8.18 23.62 8 24 8m0 2.725L7.618 38.315h32.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleMediumIcon],svg[healthicons-triangle-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.894 10.484C24.725 10.187 24.38 10 24 10s-.725.187-.894.484l-15 26.25a.78.78 0 0 0 .043.851c.183.258.504.415.851.415h30c.347 0 .668-.157.85-.415a.78.78 0 0 0 .044-.851z"></svg:path>`,
})
export class HealthiconsTriangleMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleMediumNegativeIcon],svg[healthicons-triangle-medium-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTriangleMediumNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.79 9.488a.882.882 0 0 0-1.58 0L9.094 37.723A.882.882 0 0 0 9.883 39h28.235a.882.882 0 0 0 .789-1.277z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTriangleMediumNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTriangleMediumNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleMediumOutlineIcon],svg[healthicons-triangle-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 10c.379 0 .725.187.894.484l15 26.25a.78.78 0 0 1-.043.851A1.04 1.04 0 0 1 39 38H9c-.347 0-.668-.157-.85-.415a.78.78 0 0 1-.044-.851l15-26.25c.169-.297.515-.484.894-.484m0 2.832L10.618 36.25h26.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleMediumOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleSmallIcon],svg[healthicons-triangle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.894 13.468C24.725 13.18 24.38 13 24 13s-.725.181-.894.468l-12 20.307a.735.735 0 0 0 .043.824c.183.25.504.401.851.401h24c.347 0 .668-.152.85-.401a.735.735 0 0 0 .044-.824z"></svg:path>`,
})
export class HealthiconsTriangleSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleSmallNegativeIcon],svg[healthicons-triangle-small-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTriangleSmallNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.894 11.553a1 1 0 0 0-1.788 0l-12 24A1 1 0 0 0 12 37h24a1 1 0 0 0 .894-1.447z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTriangleSmallNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTriangleSmallNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleSmallOutlineIcon],svg[healthicons-triangle-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 13c.379 0 .725.181.894.468l12 20.307a.735.735 0 0 1-.043.824c-.183.25-.504.401-.851.401H12c-.347 0-.668-.152-.85-.401a.735.735 0 0 1-.044-.824l12-20.307c.169-.287.515-.468.894-.468m0 2.738l-10.382 17.57h20.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTruckDriverIcon],svg[healthicons-truck-driver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 9.5c0-.437 4.516-3.5 9-3.5s9 3.063 9 3.5c0 1.56-.166 2.484-.306 2.987c-.093.33-.402.513-.745.513H16.051c-.343 0-.652-.183-.745-.513C15.166 11.984 15 11.06 15 9.5m7.5-.5a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2zm-6.462 10.218c-3.33-1.03-2.49-2.87-1.22-4.218H33.46c1.016 1.298 1.561 3.049-1.51 4.097q.05.445.05.903a8 8 0 1 1-15.962-.782m7.69.782c2.642 0 4.69-.14 6.26-.384q.012.19.012.384a6 6 0 1 1-11.992-.315c1.463.202 3.338.315 5.72.315m8.689 14.6A9.99 9.99 0 0 0 24 30a9.99 9.99 0 0 0-8.42 4.602a2.5 2.5 0 0 0-1.447-1.05l-1.932-.517a2.5 2.5 0 0 0-3.062 1.767L8.363 37.7a2.5 2.5 0 0 0 1.768 3.062l1.931.518A2.5 2.5 0 0 0 14 41.006A1 1 0 0 0 16 41v-1q0-.572.078-1.123l5.204 1.395a3 3 0 0 0 5.436 0l5.204-1.395q.077.551.078 1.123v1a1 1 0 0 0 2 .01c.56.336 1.252.453 1.933.27l1.932-.517a2.5 2.5 0 0 0 1.768-3.062l-.777-2.898a2.5 2.5 0 0 0-3.062-1.767l-1.932.517a2.5 2.5 0 0 0-1.445 1.046m-15.814 2.347A8.01 8.01 0 0 1 23 32.062v4.109a3 3 0 0 0-1.88 1.987zm14.794 0A8.01 8.01 0 0 0 25 32.062v4.109c.904.32 1.61 1.06 1.88 1.987zM24 40a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTruckDriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTruckDriverNegativeIcon],svg[healthicons-truck-driver-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTruckDriverNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm31.95 19.097c3.071-1.048 2.526-2.8 1.51-4.097H14.819c-1.271 1.349-2.111 3.188 1.219 4.218a8 8 0 1 0 15.912-.12m-1.962.519c-1.57.244-3.618.384-6.26.384c-2.382 0-4.257-.113-5.72-.315Q18 19.842 18 20a6 6 0 1 0 11.988-.384M23 32.062v4.109a3 3 0 0 0-1.88 1.987l-4.517-1.21A8.01 8.01 0 0 1 23 32.061m2 0v4.109c.904.32 1.61 1.06 1.88 1.987l4.517-1.21A8.01 8.01 0 0 0 25 32.061m6.922 6.815l-5.204 1.395a3 3 0 0 1-5.436 0l-5.204-1.395A8 8 0 0 0 16 40v1a1 1 0 1 1-2 0v-.607a2 2 0 0 1-1.808.404l-1.932-.518a2 2 0 0 1-1.414-2.45l.776-2.897a2 2 0 0 1 2.45-1.414l1.932.517a2 2 0 0 1 1.28 1.058A10 10 0 0 1 24 30a10 10 0 0 1 8.713 5.089a2 2 0 0 1 1.279-1.053l1.932-.518a2 2 0 0 1 2.45 1.415l.776 2.897a2 2 0 0 1-1.415 2.45l-1.931.518a2 2 0 0 1-1.804-.4V41a1 1 0 1 1-2 0v-1q0-.572-.078-1.123M24 40a1 1 0 1 0 0-2a1 1 0 0 0 0 2M15 9.5c0-.437 4.516-3.5 9-3.5s9 3.063 9 3.5c0 1.56-.166 2.484-.306 2.987c-.093.33-.402.513-.745.513H16.051c-.343 0-.652-.183-.745-.513C15.166 11.984 15 11.06 15 9.5m7.5-.5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTruckDriverNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTruckDriverNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTruckDriverOutlineIcon],svg[healthicons-truck-driver-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M33.364 18.52c-.363.285-.834.513-1.402.698Q32 19.604 32 20a8 8 0 1 1-15.962-.782c-.568-.185-1.039-.413-1.401-.698c-.47-.37-.785-.864-.822-1.458c-.035-.551.183-1.019.401-1.349a4.3 4.3 0 0 1 .76-.841q.212-.184.406-.327q-.058-.309-.122-.74A27 27 0 0 1 15 10c0-.314.134-.548.196-.647c.078-.125.17-.232.254-.318c.167-.175.383-.353.62-.524c.48-.348 1.14-.739 1.924-1.105C19.557 6.676 21.704 6 24 6s4.443.677 6.006 1.406a12 12 0 0 1 1.924 1.105c.237.171.453.35.62.524c.084.086.176.193.254.318c.062.099.196.333.196.647c0 1.602-.13 2.9-.26 3.805q-.064.432-.122.74c.128.095.267.204.407.327c.25.219.536.504.759.841c.219.33.436.798.402 1.35c-.037.593-.352 1.087-.822 1.457m-16.362-8.202c.015 1.348.127 2.438.238 3.2q.04.27.076.482h13.368q.037-.213.076-.482c.11-.762.223-1.852.238-3.2a4 4 0 0 0-.241-.188c-.361-.261-.909-.59-1.597-.911C27.777 8.573 25.924 8 24 8s-3.777.573-5.16 1.219c-.688.321-1.236.65-1.596.91a4 4 0 0 0-.242.19M16.788 16l-.003.002a5 5 0 0 0-.495.376c-.178.156-.32.308-.406.44a1 1 0 0 0-.055.093l.044.037c.15.118.472.291 1.1.462q.186.05.399.098l.009.002c.502.111 1.12.21 1.873.288c1.067.111 2.41.184 4.088.2L24 18c3.227 0 5.314-.201 6.62-.49l.008-.002q.214-.047.4-.098c.627-.17.95-.344 1.099-.462l.044-.037a1 1 0 0 0-.054-.093a2.4 2.4 0 0 0-.407-.44a5 5 0 0 0-.494-.376L31.212 16zm6.94 4c2.642 0 4.69-.14 6.26-.384q.012.19.012.384a6 6 0 1 1-11.992-.315c1.463.202 3.338.315 5.72.315m-7.65 18.877A8 8 0 0 0 16 40v1a1 1 0 0 1-1.864.504a3 3 0 0 1-2.203.259l-1.932-.518a3 3 0 0 1-2.12-3.674l.776-2.898a3 3 0 0 1 3.674-2.121l1.932.517c.672.18 1.23.575 1.618 1.091a9.99 9.99 0 0 1 8.12-4.16a9.99 9.99 0 0 1 8.116 4.158a3 3 0 0 1 1.616-1.088l1.932-.517a3 3 0 0 1 3.674 2.12l.777 2.899a3 3 0 0 1-2.122 3.674l-1.931.517a3 3 0 0 1-2.2-.256A1 1 0 0 1 32 41v-1a8 8 0 0 0-.078-1.123l-5.204 1.395a3 3 0 0 1-5.436 0zm5.042-.72A3 3 0 0 1 23 36.172v-4.11a8.01 8.01 0 0 0-6.397 4.886zm10.277-1.21A8.01 8.01 0 0 0 25 32.062v4.109c.904.32 1.61 1.06 1.88 1.987zm2.147-.72a1 1 0 0 1 .707-1.225l1.932-.518a1 1 0 0 1 1.224.707l.777 2.898a1 1 0 0 1-.707 1.225l-1.932.518a1 1 0 0 1-1.225-.708zm-21.73-1.743a1 1 0 0 0-1.226.707l-.776 2.897a1 1 0 0 0 .707 1.225l1.932.518a1 1 0 0 0 1.225-.707l.776-2.898A1 1 0 0 0 13.745 35zM25 39a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTruckDriverOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTumourIcon],svg[healthicons-tumour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31.632 17.525a3.66 3.66 0 0 0 2.18-3.353c0-2.018-1.62-3.654-3.62-3.654h-.029q.03-.226.029-.46c0-2.018-1.621-3.654-3.62-3.654c-.5 0-.976.102-1.41.287c-.213-2.89-2.604-5.167-5.521-5.167c-3.047 0-5.52 2.484-5.538 5.554a4 4 0 0 0-1.281-.207c-2.252 0-4.078 1.842-4.078 4.114a4.12 4.12 0 0 0 1.866 3.457c-.57.4-1.036.943-1.344 1.578a4.03 4.03 0 0 0-2.027-.544c-2.252 0-4.078 1.842-4.078 4.114a4.12 4.12 0 0 0 2.484 3.789A4.81 4.81 0 0 0 2.5 27.903c0 2.657 2.135 4.81 4.768 4.81a4.73 4.73 0 0 0 3.51-1.555a4.8 4.8 0 0 0-.255 1.556c0 2.657 2.135 4.81 4.768 4.81c2.438 0 4.45-1.847 4.733-4.23a5.503 5.503 0 0 0 7.498.756a4.38 4.38 0 0 0 2.953 1.135c2.406 0 4.355-1.916 4.355-4.28q0-.241-.026-.476a4.82 4.82 0 0 0 2.696-4.334c0-2.657-2.135-4.81-4.767-4.81q-.11 0-.22.005q.043-.34.043-.693a5.53 5.53 0 0 0-.924-3.072M19.263 8.49c1 0 1.81-.818 1.81-1.827c0-1.01-.81-1.827-1.81-1.827s-1.81.818-1.81 1.827s.81 1.826 1.81 1.826M9.15 27.892c0 1.009-.81 1.826-1.81 1.826s-1.81-.817-1.81-1.826s.81-1.827 1.81-1.827s1.81.818 1.81 1.827m19.105-5.932c.667 0 1.207-.545 1.207-1.218s-.54-1.218-1.207-1.218c-.666 0-1.207.546-1.207 1.218c0 .673.54 1.218 1.207 1.218m-2.783 8.976c0 .673-.54 1.218-1.207 1.218a1.21 1.21 0 0 1-1.207-1.218c0-.672.54-1.218 1.207-1.218s1.207.546 1.207 1.218M13.338 19.524c.667 0 1.207-.545 1.207-1.218s-.54-1.217-1.207-1.217c-.666 0-1.207.545-1.207 1.218s.54 1.217 1.207 1.217m4.139 6.177l-.753.667l-.123.011c-.856.085-1.736.301-2.324.722c-.58.415-.983 1.08-1.246 1.733a6 6 0 0 0-.322 1.087l-.001.006v.002a1.21 1.21 0 0 1-1.377 1.013a1.216 1.216 0 0 1-1.008-1.39l1.192.186l-1.192-.186v-.003l.001-.004l.002-.012l.005-.032l.02-.106a8.7 8.7 0 0 1 .444-1.477c.346-.86.975-2.01 2.087-2.805c1.104-.789 2.491-1.06 3.481-1.158q.164-.016.317-.027a7 7 0 0 1-.132-1.485a9 9 0 0 1 .125-1.386l.005-.028l.002-.009v-.005l1.185.236l-1.184-.237c.13-.66.765-1.088 1.419-.957c.652.13 1.077.77.95 1.428l-.001.002l-.001.006l-.008.048a7 7 0 0 0-.078.93c-.007.617.082 1.19.291 1.55c.205.35.606.652 1.068.881a4.6 4.6 0 0 0 .742.287l.017.005h.003a1.22 1.22 0 0 1 .89 1.467a1.207 1.207 0 0 1-1.455.902l.28-1.185l-.28 1.185h-.003l-.004-.002l-.009-.002l-.027-.007l-.083-.023a7 7 0 0 1-1.133-.44a5.8 5.8 0 0 1-1.145-.737l-.096-.004h-.016l-.073-.005a10 10 0 0 0-1.205.025zm3.604-.507l-2.032-3.709l2.03 3.709z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTumourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTumour24pxIcon],svg[healthicons-tumour-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.463 10.899a2.012 2.012 0 0 0-.8-3.858h-.016q.015-.125.016-.254a2.012 2.012 0 0 0-2.795-1.854a3.077 3.077 0 0 0-6.144.213a2.266 2.266 0 0 0-1.94 4.055c-.319.22-.577.52-.748.87a2.266 2.266 0 1 0-2.012 4.052a2.65 2.65 0 1 0 2.852 4.284a2.649 2.649 0 1 0 5.138 1.176a3.07 3.07 0 0 0 2.307 1.04a3.06 3.06 0 0 0 1.858-.624a2.45 2.45 0 0 0 1.642.625c1.336 0 2.42-1.055 2.42-2.357q0-.133-.015-.262a2.649 2.649 0 0 0-1.273-5.033q.024-.188.024-.381c0-.627-.19-1.209-.514-1.692m-6.706-5.2a.947.947 0 1 0 0-1.895a.947.947 0 0 0 0 1.894m-5.783 10.87a.947.947 0 1 1-1.895 0a.947.947 0 0 1 1.895 0m8.324 2.205a.947.947 0 1 0 0-1.894a.947.947 0 0 0 0 1.894" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTumour24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTumourOutlineIcon],svg[healthicons-tumour-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25.153 11.794c0 .993-.783 1.797-1.75 1.797c-.966 0-1.749-.804-1.749-1.797s.783-1.796 1.75-1.796c.966 0 1.749.804 1.749 1.796M13.589 31.247c0 .992-.783 1.796-1.75 1.796c-.966 0-1.749-.804-1.749-1.796s.783-1.797 1.75-1.797c.966 0 1.749.805 1.749 1.797m5.735-7.933c0 .662-.522 1.198-1.166 1.198s-1.166-.537-1.166-1.198s.522-1.198 1.166-1.198s1.166.537 1.166 1.198m13.834 3.807c0 .662-.522 1.198-1.167 1.198c-.644 0-1.166-.537-1.166-1.198s.522-1.197 1.166-1.197c.645 0 1.167.536 1.167 1.197m-5.672 7.954c0 .661-.522 1.197-1.166 1.197c-.645 0-1.167-.536-1.167-1.197c0-.662.522-1.198 1.167-1.198c.644 0 1.166.536 1.166 1.198"></svg:path><svg:path fill-rule="evenodd" d="M16.16 34.129c-.143.54-.687.865-1.214.726a1 1 0 0 1-.698-1.228l.956.25l-.956-.25v-.003l.001-.004l.003-.01l.01-.032q.01-.039.03-.105q.04-.133.12-.355c.106-.292.27-.692.502-1.133c.454-.863 1.223-1.973 2.428-2.66c1.12-.639 2.367-.93 3.295-1.067a12 12 0 0 1 1.513-.129h.141l-.026.998l.026-.998a.987.987 0 0 1 .963 1.024a1.014 1.014 0 0 1-1.015.995h-.084a11 11 0 0 0-1.259.108c-.811.12-1.788.363-2.604.828c-.73.416-1.269 1.142-1.637 1.84a7 7 0 0 0-.493 1.194l-.003.012z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m22.06 25.2l-.982-.19v.002l-.001.003l-.002.008l-.005.027a6 6 0 0 0-.058.4c-.031.26-.064.62-.069 1.032c-.008.787.081 1.915.616 2.849c.541.943 1.424 1.522 2.082 1.853a7 7 0 0 0 1.234.478l.025.007l.009.002l.005.001l.24-.97l-.24.97a1 1 0 0 0 .48-1.941l-.002-.001h.003l-.007-.001l-.042-.012a5 5 0 0 1-.807-.32c-.505-.254-.985-.61-1.244-1.06c-.265-.462-.36-1.151-.352-1.833a7.6 7.6 0 0 1 .097-1.105l.002-.01a1 1 0 1 0-1.964-.379z" clip-rule="evenodd"></svg:path><svg:path d="M22.888 5.726h.703v.46h-.703z"></svg:path><svg:path fill-rule="evenodd" d="M14.836 35.928c.506-.255.636-.892.368-1.4c-.341-.648-1.21-.87-1.878-.593c-.36.149-.712.268-.939.308a3.13 3.13 0 0 1-2.898-1.002a3.3 3.3 0 0 1-.743-1.425a3.37 3.37 0 0 1 .79-3.047a3.24 3.24 0 0 1 1.877-1.01c.59-.091 1.17-.433 1.336-1.02c.191-.679-.234-1.383-.923-1.382c-.582.002-1.17.076-1.672.247a5.6 5.6 0 0 0-2.323 1.522a5.84 5.84 0 0 0-1.37 5.282a5.66 5.66 0 0 0 1.286 2.472a5.5 5.5 0 0 0 2.29 1.528a5.4 5.4 0 0 0 2.736.21a8 8 0 0 0 2.063-.69" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M21.643 36.56q.03-.05.064-.097c.316-.448.82-.828 1.28-.77c.314.04.59.26.63.573c.12.931-.218 1.838-.547 2.457a4.84 4.84 0 0 1-1.654 1.802a4.95 4.95 0 0 1-2.341.776a5.1 5.1 0 0 1-2.455-.44a5.2 5.2 0 0 1-1.972-1.55a5.1 5.1 0 0 1-1.007-2.278c-.14-.827-.187-1.391.127-2.34l.066-.187c.126-.365.266-.77.442-1.15c.287-.618 1.072-.558 1.49 0c.181.243.258.54.259.839a2 2 0 0 1-.05.432q-.042.18-.08.38l-.032.155c-.097.473-.202 1.09-.121 1.567c.08.477.28.93.58 1.315a3 3 0 0 0 1.137.893c.447.2.933.288 1.417.254a2.86 2.86 0 0 0 1.35-.447c.402-.26.73-.617.954-1.04a3.5 3.5 0 0 0 .248-.673a1.8 1.8 0 0 1 .215-.472m-1.079-22.932l-.001-.001zm-2.72 5.038c.638-.153.834-.918.51-1.493c-.319-.569-1.075-.716-1.71-.824a1.7 1.7 0 0 1-1.004-.573a1.78 1.78 0 0 1-.07-2.219a1.7 1.7 0 0 1 .964-.638a1.66 1.66 0 0 1 1.14.134c.354.18.636.479.799.847l.008.02c.256.598.583 1.292 1.201 1.462c.63.174 1.302-.22 1.282-.888a4.3 4.3 0 0 0-.359-1.586a4.1 4.1 0 0 0-1.895-2.01a3.95 3.95 0 0 0-2.708-.32a4.04 4.04 0 0 0-2.29 1.516a4.23 4.23 0 0 0-.834 2.664c.03.96.384 1.88 1.001 2.603a4.02 4.02 0 0 0 2.383 1.36c.53.09 1.067.07 1.583-.055m-4.042 8.196c.521-.397.414-1.164-.1-1.56l-.04-.03c-.499-.385-1.227-.22-1.836-.055c-.372.1-.766.068-1.118-.091a1.72 1.72 0 0 1-.82-.785a1.8 1.8 0 0 1-.169-1.138c.07-.389.267-.74.558-1a1.67 1.67 0 0 1 2.116-.097c.513.382 1.142.801 1.758.623c.625-.18 1.009-.859.667-1.416a4.1 4.1 0 0 0-1.053-1.154a3.97 3.97 0 0 0-2.55-.784a4 4 0 0 0-2.473 1.013a4.18 4.18 0 0 0-1.324 2.372a4.25 4.25 0 0 0 .399 2.703a4.1 4.1 0 0 0 1.949 1.863a3.95 3.95 0 0 0 2.654.216c.502-.135.97-.367 1.382-.68M26.936 11.26c-.287.559.113 1.171.71 1.318l.378.093c.445.11.883-.211 1.174-.577c.178-.226.41-.402.67-.513a1.66 1.66 0 0 1 1.614.174c.234.165.424.386.553.645A1.79 1.79 0 0 1 32 14.065c-.231.416-.383.945-.14 1.348l.177.291c.341.564 1.088.742 1.52.237q.271-.316.476-.684a4.25 4.25 0 0 0 .086-3.953a4.1 4.1 0 0 0-1.312-1.532a3.95 3.95 0 0 0-3.83-.413a4.06 4.06 0 0 0-1.594 1.217c-.179.226-.326.45-.447.684" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M32.608 14.036c-.642-.025-1.02.637-.863 1.275l.045.184c.136.548.712.853 1.234 1.043a1.7 1.7 0 0 1 .796.602c.202.278.319.61.336.956c.029.57.153 1.225.635 1.52l.133.08c.556.34 1.29.159 1.449-.477c.1-.405.143-.826.121-1.248a4.2 4.2 0 0 0-.797-2.268a4.06 4.06 0 0 0-1.89-1.431a4 4 0 0 0-1.199-.236M13.01 22.333c.272.544.966.606 1.44.234l.16-.125c.438-.343.477-1.007.35-1.555a1.8 1.8 0 0 1 .019-.866c.078-.281.175-.582.377-.787c.366-.37.656-.931.499-1.432l-.065-.21c-.183-.585-.8-.932-1.317-.616q-.406.25-.746.592a4.03 4.03 0 0 0-1.015 1.76a4.2 4.2 0 0 0-.043 2.056q.114.496.34.949" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M30.948 20.28c-.393.517-.083 1.227.52 1.471l.316.129c.425.172.894-.06 1.234-.365c.206-.184.452-.314.718-.38a1.66 1.66 0 0 1 .807.001c.265.067.51.198.716.383c.205.184.364.417.464.678a1.8 1.8 0 0 1-.164 1.601c-.248.387-.412.893-.19 1.301l.162.299c.319.585 1.059.806 1.51.33q.263-.28.473-.606a4.26 4.26 0 0 0 .389-3.803a4.16 4.16 0 0 0-1.102-1.61a4 4 0 0 0-1.7-.908a3.94 3.94 0 0 0-1.917-.002a4 4 0 0 0-1.702.903q-.296.263-.534.578M22.54 37.535l.004.002zm8.431.65c.298-.731-.27-1.46-1.037-1.569c-.75-.107-1.427.481-2.018.995l-.193.165a1.95 1.95 0 0 1-1.497.394a2.16 2.16 0 0 1-1.53-1.028c-.401-.661-.903-1.417-1.654-1.527c-.793-.116-1.537.48-1.371 1.285c.16.78.5 1.526 1.003 2.17c.82 1.05 2 1.745 3.282 1.932s2.611-.15 3.605-.936a4.6 4.6 0 0 0 1.41-1.882" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M30.185 34.845v-.002zm7.379-1.96v.002zm-.011-1.208c-.602-.5-1.454-.15-1.779.575l-.082.184c-.292.651.06 1.411.418 2.022c.22.372.314.809.272 1.247s-.22.857-.508 1.198s-.672.586-1.099.702a2.1 2.1 0 0 1-1.28-.056a2 2 0 0 1-.986-.791a2.06 2.06 0 0 1-.324-1.234c.04-.723-.005-1.573-.572-2.009l-.119-.091c-.614-.473-1.515-.36-1.816.368a5.1 5.1 0 0 0-.38 1.667a4.9 4.9 0 0 0 .768 2.929a4.77 4.77 0 0 0 2.34 1.88c.964.36 2.027.405 3.04.13a5.2 5.2 0 0 0 2.608-1.666a5.2 5.2 0 0 0 1.206-2.843a4.9 4.9 0 0 0-.645-2.962a4.8 4.8 0 0 0-1.062-1.25" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M35.82 24.1c-.745.202-.946 1.09-.565 1.759l.282.497c.27.476.905.587 1.453.554c.339-.02.679.052.988.21s.576.397.778.695s.33.644.374 1.007c.045.363.002.73-.122 1.068a2.1 2.1 0 0 1-.589.863c-.262.228-.575.38-.909.442c-.573.107-1.206.302-1.477.82l-.142.27c-.421.804-.035 1.775.862 1.858c.468.043.925.042 1.272-.023a4.55 4.55 0 0 0 2.157-1.05a5 5 0 0 0 1.398-2.049a5.45 5.45 0 0 0 .291-2.535a5.44 5.44 0 0 0-.89-2.39a5 5 0 0 0-1.847-1.65a4.53 4.53 0 0 0-2.345-.5q-.503.03-.969.154M18.017 13.026c.187.654.936.876 1.516.55c.57-.321.751-1.06.662-1.722a3.43 3.43 0 0 1 .336-1.992c.246-.485.605-.9 1.045-1.208s.946-.5 1.475-.56a3.16 3.16 0 0 1 1.56.22c.493.204.93.53 1.273.95a3.36 3.36 0 0 1 .744 1.864c.056.707.454 1.43 1.131 1.594c.623.151 1.262-.221 1.287-.872a6.8 6.8 0 0 0-.15-1.634a5.8 5.8 0 0 0-1.191-2.52a5.6 5.6 0 0 0-2.208-1.645a5.48 5.48 0 0 0-5.262.589a5.7 5.7 0 0 0-1.811 2.095a5.9 5.9 0 0 0-.407 4.291" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTumourOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsTumourOutline24pxIcon],svg[healthicons-tumour-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" d="m17.438 6.883l.058.286l.276.091a2.205 2.205 0 0 1 .833 3.688l-.235.224l.11.306q.11.313.155.651l.044.341l.333.082a2.777 2.777 0 0 1 .976 4.938l-.183.133l-.02.226c-.114 1.29-1.226 2.29-2.56 2.29c-.459 0-.89-.118-1.263-.324l-.23-.127l-.235.118a3.15 3.15 0 0 1-1.414.333c-.513 0-.996-.122-1.423-.338l-.408-.206l-.242.388a2.777 2.777 0 0 1-5.053-.79l-.122-.49l-.488.126a2.78 2.78 0 0 1-3.473-2.687c0-.763.307-1.452.804-1.954l.31-.313l-.27-.347a2.432 2.432 0 0 1 2.06-3.923l.868.05l-.395-.776a2.432 2.432 0 0 1 2.072-3.53l.361-.014l.1-.347a3.161 3.161 0 0 1 6.008-.201l.12.33h.366c1.067 0 1.958.759 2.16 1.766Zm-.354 1.063h-.013a.398.398 0 0 1-.396-.448q.01-.087.011-.178a1.408 1.408 0 0 0-1.956-1.298a.398.398 0 0 1-.552-.336a2.364 2.364 0 0 0-4.721.164a.398.398 0 0 1-.523.375a1.636 1.636 0 0 0-1.401 2.929a.398.398 0 0 1 .01.66c-.23.16-.416.376-.54.628a.397.397 0 0 1-.555.17a1.636 1.636 0 1 0-1.453 2.927a.398.398 0 0 1-.02.74a1.981 1.981 0 1 0 2.132 3.203a.398.398 0 0 1 .67.398q-.105.301-.106.64a1.98 1.98 0 0 0 3.946.239a.398.398 0 0 1 .693-.216c.434.492 1.067.8 1.773.8c.537 0 1.031-.178 1.428-.48a.4.4 0 0 1 .507.022l.334-.372l-.334.372a1.8 1.8 0 0 0 1.207.458c.993 0 1.775-.781 1.775-1.717q0-.097-.011-.19a.4.4 0 0 1 .222-.404a1.98 1.98 0 0 0-.951-3.762a.4.4 0 0 1-.31-.127l-.368.339l.367-.34a.4.4 0 0 1-.102-.319l-.496-.062l.496.062q.018-.143.018-.293c0-.48-.145-.927-.393-1.297a.398.398 0 0 1 .172-.586l-.2-.459l.2.459a1.409 1.409 0 0 0-.558-2.701zm-10.95 8.151a.398.398 0 1 1-.795 0a.398.398 0 0 1 .795 0Zm6.061-9.763a.398.398 0 1 1-.795 0a.398.398 0 0 1 .795 0Zm2.227 10.66a.398.398 0 1 1-.795 0a.398.398 0 0 1 .795 0Z"></svg:path>`,
})
export class HealthiconsTumourOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUIcon],svg[healthicons-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 10a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V12a2 2 0 1 1 4 0v16c0 5.523-4.477 10-10 10s-10-4.477-10-10V12a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUNegativeIcon],svg[healthicons-u-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 12a2 2 0 1 0-4 0v16c0 5.523 4.477 10 10 10s10-4.477 10-10V12a2 2 0 1 0-4 0v16a6 6 0 0 1-12 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUOutlineIcon],svg[healthicons-u-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 12a3 3 0 1 1 6 0v16a5 5 0 0 0 10 0V12a3 3 0 1 1 6 0v16c0 6.075-4.925 11-11 11s-11-4.925-11-11zm3-1a1 1 0 0 0-1 1v16a9 9 0 1 0 18 0V12a1 1 0 1 0-2 0v16a7 7 0 1 1-14 0V12a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderIcon],svg[healthicons-ui-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.712 10.555L27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555M8 12a1 1 0 0 1 1-1h13.083a1 1 0 0 1 .876.518L24.872 15H8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderFamilyIcon],svg[healthicons-ui-folder-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m27.154 15l-2.442-4.445A3 3 0 0 0 22.082 9H9a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V18a3 3 0 0 0-3-3zM9 11a1 1 0 0 0-1 1v3h16.872l-1.913-3.482a1 1 0 0 0-.876-.518zm3.5 14a3 3 0 1 1 6 0a3 3 0 0 1-6 0m20 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M28 33a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm-17 0a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm13-3.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 34a3 3 0 1 1 6 0v1h-6z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiFolderFamilyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderFamilyNegativeIcon],svg[healthicons-ui-folder-family-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiFolderFamilyNegative0)"><svg:path d="m24.872 15l-1.913-3.482a1 1 0 0 0-.876-.518H9a1 1 0 0 0-1 1v3zM12.5 25a3 3 0 1 1 6 0a3 3 0 0 1-6 0m20 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M28 33a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm-17 0a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm13-3.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 34a3 3 0 1 1 6 0v1h-6z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-9 15a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555L27.154 15z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiFolderFamilyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiFolderFamilyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderFamilyOutlineIcon],svg[healthicons-ui-folder-family-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.5 24a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M31 29a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3zm-17 0a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3zm12-2.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M24 30a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3"></svg:path><svg:path fill-rule="evenodd" d="M24.712 10.555L27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555M9 37a1 1 0 0 1-1-1V17h31a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm15.872-22l-1.913-3.482a1 1 0 0 0-.876-.518H9a1 1 0 0 0-1 1v3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiFolderFamilyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderNegativeIcon],svg[healthicons-ui-folder-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiFolderNegative0)"><svg:path d="m24.872 15l-1.913-3.482a1 1 0 0 0-.876-.518H9a1 1 0 0 0-1 1v3z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-9 15a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555L27.154 15z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiFolderNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiFolderNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderOutlineIcon],svg[healthicons-ui-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.712 10.555L27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555M40 18a1 1 0 0 0-1-1H8v19a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1zM9 11a1 1 0 0 0-1 1v3h16.872l-1.913-3.482a1 1 0 0 0-.876-.518z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiFolderOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuIcon],svg[healthicons-ui-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 11a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiMenuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuGridIcon],svg[healthicons-ui-menu-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM19 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zM32 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm0 13a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"></svg:path>`,
})
export class HealthiconsUiMenuGridIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuGridNegativeIcon],svg[healthicons-ui-menu-grid-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiMenuGridNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8 6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM6 21a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM19 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm2 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm-2 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zM34 6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm2 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiMenuGridNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiMenuGridNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuGridOutlineIcon],svg[healthicons-ui-menu-grid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 8H8v6h6zM8 6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15H8v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15H8v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM27 8h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM40 8h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm6 15h-6v6h6zm-6-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiMenuGridOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuNegativeIcon],svg[healthicons-ui-menu-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiMenuNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM7 10a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2zM6 24a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m1 12a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiMenuNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiMenuNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiMenuOutlineIcon],svg[healthicons-ui-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 11a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiMenuOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiPreferencesIcon],svg[healthicons-ui-preferences-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 22.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0zM28 16a4 4 0 0 0-3-3.874V7a1 1 0 1 0-2 0v5.126A4.002 4.002 0 0 0 24 20a4 4 0 0 0 4-4M12 36a4 4 0 0 0 1-7.874V7a1 1 0 1 0-2 0v21.126A4.002 4.002 0 0 0 12 36m24-3c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-7.078c0-.526-.474-.922-1-.922m1-9.874A4.002 4.002 0 0 1 36 31a4 4 0 0 1-1-7.874V7a1 1 0 1 1 2 0zM11 38.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0z"></svg:path>`,
})
export class HealthiconsUiPreferencesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiPreferencesNegativeIcon],svg[healthicons-ui-preferences-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiPreferencesNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm16 32a4 4 0 1 1-5-3.874V7a1 1 0 1 1 2 0v21.126c1.725.444 3 2.01 3 3.874m7-9.078c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0zM28 16a4 4 0 0 0-3-3.874V7a1 1 0 1 0-2 0v5.126A4.002 4.002 0 0 0 24 20a4 4 0 0 0 4-4m8 17c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-7.078c0-.526-.474-.922-1-.922m1-9.874A4.002 4.002 0 0 1 36 31a4 4 0 0 1-1-7.874V7a1 1 0 1 1 2 0zM11 38.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiPreferencesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiPreferencesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiPreferencesOutlineIcon],svg[healthicons-ui-preferences-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23 22.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M20 16a4 4 0 0 1 3-3.874V7a1 1 0 1 1 2 0v5.126A4.002 4.002 0 0 1 24 20a4 4 0 0 1-4-4m4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-8 14a4 4 0 1 1-4.992-3.876A1 1 0 0 1 11 28V7a1 1 0 1 1 2 0v21q0 .063-.008.124A4 4 0 0 1 16 32m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path d="M36 42a1 1 0 0 1-1-1v-7.078c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 0 1-1 1"></svg:path><svg:path fill-rule="evenodd" d="M36 6a1 1 0 0 0-1 1v16.126A4.002 4.002 0 0 0 36 31a4 4 0 0 0 1-7.874V7a1 1 0 0 0-1-1m0 19a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path><svg:path d="M11 41a1 1 0 1 0 2 0v-2.078c0-.526-.474-.922-1-.922s-1 .396-1 .922z"></svg:path></svg:g>`,
})
export class HealthiconsUiPreferencesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSecureIcon],svg[healthicons-ui-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 20a2 2 0 0 1 2-2h3v-2c0-5.523 4.477-10 10-10s10 4.477 10 10v2h3a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2zm15-10a6 6 0 0 1 6 6v2H18v-2a6 6 0 0 1 6-6m9 16H15v-2h18zm-18 5h18v-2H15zm18 5H15v-2h18z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiSecureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSecureNegativeIcon],svg[healthicons-ui-secure-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiSecureNegative0)"><svg:path d="M18 18h12v-2a6 6 0 0 0-12 0zm-3 8h18v-2H15zm18 5H15v-2h18zm-18 5h18v-2H15z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm11 18a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2h-3v-2c0-5.523-4.477-10-10-10s-10 4.477-10 10v2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiSecureNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiSecureNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSecureOutlineIcon],svg[healthicons-ui-secure-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 26h18v-2H15zm18 5H15v-2h18zm-18 5h18v-2H15z"></svg:path><svg:path fill-rule="evenodd" d="M39 20a2 2 0 0 0-2-2h-2v-1c0-6.075-4.925-11-11-11s-11 4.925-11 11v1h-2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2zm-24-3a9 9 0 1 1 18 0v1h-2v-1a7 7 0 1 0-14 0v3h20v20H11V20h4zm9-5a5 5 0 0 1 5 5v1H19v-1a5 5 0 0 1 5-5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiSecureOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSettingsIcon],svg[healthicons-ui-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 6h8v.734c.618 6.866 2.662 8.109 8.898 5.2l.69-.398l4 6.928l-.39.225c-5.904 4.1-5.965 6.509-.066 10.583l.457.264l-.02.034l-3.98 6.894l-.762-.44c-6.355-2.906-8.292-1.476-8.8 6L28 41.697V42h-8v-1.166c-.67-6.626-2.82-7.64-9.154-4.62l-.434.25l-4-6.928l1.035-.598c5.239-3.782 5.237-6.145-.103-9.935l-.932-.539l4-6.928l.223.129c6.47 3.097 8.7 2.166 9.365-4.463zm9 18a5 5 0 1 1-10 0a5 5 0 0 1 10 0m3 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0m2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSettingsNegativeIcon],svg[healthicons-ui-settings-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiSettingsNegative0)"><svg:path d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path fill-rule="evenodd" d="M24 34c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM20 6v1.202c-.666 6.63-2.895 7.56-9.365 4.463l-.223-.13l-4 6.93l.932.538c5.34 3.79 5.341 6.153.103 9.935l-1.035.598l4 6.928l.434-.25c6.335-3.02 8.484-2.006 9.154 4.62V42h8v-.304l.027.329c.508-7.477 2.444-8.907 8.8-6l.761.44l3.98-6.894l.02-.035l-.456-.264c-5.899-4.074-5.838-6.483.066-10.583l.39-.225l-4-6.928l-.69.399C30.662 14.843 28.618 13.6 28 6.734V6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiSettingsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiSettingsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiSettingsOutlineIcon],svg[healthicons-ui-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.134 5.603h9.732v1.663c.147 1.605.371 2.811.688 3.685c.318.877.694 1.326 1.083 1.555c.387.228.952.336 1.857.18c.905-.155 2.053-.558 3.51-1.235l1.496-.864l4.866 8.429l-1.207.696c-1.384.963-2.365 1.788-2.997 2.523c-.634.738-.845 1.304-.85 1.766c-.004.458.193 1.017.812 1.746c.617.729 1.588 1.547 2.97 2.503l1.272.735l-.519.899l-4.347 7.53l-1.56-.901c-1.485-.677-2.64-1.065-3.538-1.196c-.892-.13-1.435.006-1.808.264c-.39.27-.767.792-1.074 1.786c-.307.992-.51 2.344-.63 4.123h-.024v.908h-9.732v-2.076c-.159-1.541-.397-2.678-.723-3.488c-.324-.805-.7-1.201-1.094-1.397c-.407-.203-1.008-.28-1.956-.087c-.941.193-2.123.634-3.61 1.341l-1.251.722l-4.866-8.428l1.822-1.052c1.215-.88 2.068-1.638 2.611-2.314s.722-1.2.718-1.636c-.004-.437-.191-.965-.751-1.646s-1.432-1.44-2.674-2.325l-1.726-.996l4.866-8.429l1.048.605c1.521.727 2.736 1.188 3.708 1.398c.98.213 1.609.147 2.034-.05c.405-.189.786-.572 1.114-1.361c.33-.797.572-1.925.73-3.465zm-7.882 29.113c1.394-.645 2.626-1.103 3.707-1.325c1.185-.243 2.291-.222 3.25.256c.972.484 1.619 1.352 2.058 2.44c.433 1.076.696 2.447.862 4.083l.005.05v.178h5.837c.13-1.416.33-2.626.638-3.621c.374-1.21.94-2.213 1.847-2.84c.925-.64 2.033-.774 3.234-.599c1.174.171 2.528.648 4.073 1.352l2.89-5.006c-1.293-.916-2.326-1.784-3.055-2.644c-.796-.938-1.296-1.948-1.285-3.059c.01-1.108.528-2.113 1.332-3.05c.727-.846 1.745-1.702 3.012-2.607l-2.898-5.02c-1.483.685-2.788 1.158-3.926 1.354c-1.18.202-2.275.123-3.21-.428c-.934-.55-1.54-1.47-1.949-2.597c-.39-1.077-.632-2.428-.785-4.03h-5.755v.211l-.005.05c-.165 1.639-.433 3.01-.878 4.082c-.453 1.089-1.122 1.944-2.118 2.407c-.976.454-2.099.453-3.3.192c-1.047-.227-2.234-.667-3.57-1.278l-2.897 5.017l.076.044l.038.027c1.32.936 2.37 1.825 3.098 2.712c.734.892 1.198 1.85 1.207 2.9s-.44 2.01-1.159 2.905c-.713.888-1.746 1.777-3.04 2.712l-.042.03l-.178.103z"></svg:path><svg:path d="M24 27a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 2a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path></svg:g>`,
})
export class HealthiconsUiSettingsOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiUserProfileIcon],svg[healthicons-ui-user-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:path fill-rule="evenodd" d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20h-.274q-.272 0-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.94 17.94 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiUserProfileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiUserProfileNegativeIcon],svg[healthicons-ui-user-profile-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiUserProfileNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm11 35.63c0 .34.057.675.166.991A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.181 12.636a2.99 2.99 0 0 0-2.498-4.002c-7.758-.803-12.836-.88-20.632-.018A3.03 3.03 0 0 0 11 35.631M4 24c0 10.772 8.517 19.556 19.184 19.984a10 10 0 0 0 .678.015L24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24m20 4a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiUserProfileNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiUserProfileNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiUserProfileOutlineIcon],svg[healthicons-ui-user-profile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 27a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20M33.63 39.21A17.9 17.9 0 0 1 24 42a17.9 17.9 0 0 1-9.831-2.92q-.36-.45-.73-.93A2.14 2.14 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131c6.845-1 11.558-.914 18.412.035A2.08 2.08 0 0 1 35 36.818c0 .48-.165.946-.463 1.31q-.461.561-.907 1.082m3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698c-7.016-.971-11.92-1.064-18.975-.033c-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466"></svg:path></svg:g>`,
})
export class HealthiconsUiUserProfileOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomIcon],svg[healthicons-ui-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172l6.927-6.927l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiZoomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomInIcon],svg[healthicons-ui-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28 16v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.17l6.927-6.926l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomInNegativeIcon],svg[healthicons-ui-zoom-in-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsUiZoomInNegative0)" clip-rule="evenodd"><svg:path d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13m-18 1h4v4h2v-4h4v-2h-4v-4h-2v4h-4z"></svg:path><svg:path d="M48 0H0v48h48zM12.927 32.245l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.17z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiZoomInNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiZoomInNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomInOutlineIcon],svg[healthicons-ui-zoom-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28 16v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15c-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828l.004 2.825l-6.472 6.471l-4.242-4.242l6.524-6.524l2.707.12l1.893-1.892A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13M7.414 39.172l1.414 1.414l4.47-4.47l-.001-1.368l-1.397-.063z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomInOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomNegativeIcon],svg[healthicons-ui-zoom-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiZoomNegative0)"><svg:path d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM12.927 32.245l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiZoomNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiZoomNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutIcon],svg[healthicons-ui-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 22h12v-2H21z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172l6.927-6.927l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutNegativeIcon],svg[healthicons-ui-zoom-out-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsUiZoomOutNegative0)" clip-rule="evenodd"><svg:path d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13m-7 1H21v-2h12z"></svg:path><svg:path d="M0 0h48v48H0zm12.927 32.245l1.705-.12l1.158-1.158A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15a14.94 14.94 0 0 1-9.784-3.63l-1.346 1.346l-.158 1.4L8.828 42L6 39.172z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiZoomOutNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiZoomOutNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutOutlineIcon],svg[healthicons-ui-zoom-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M33 22H21v-2h12z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15c-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828l.004 2.825l-6.472 6.471l-4.242-4.242l6.524-6.524l2.707.12l1.893-1.892A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13M8.828 40.586l-1.414-1.414l4.486-4.487l1.397.063l.002 1.367z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomOutOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutlineIcon],svg[healthicons-ui-zoom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15c-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828l.004 2.825l-6.472 6.471l-4.242-4.242l6.524-6.524l2.707.12l1.893-1.892A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13M7.414 39.172l1.414 1.414l4.47-4.47l-.001-1.368l-1.397-.063z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiZoomOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUltrasoundScannerIcon],svg[healthicons-ultrasound-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.481 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.215-1.988c.477-.052.638-.187.761-.342c.196-.247.342-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875"></svg:path><svg:path d="m18 26.5l.5 2l1.5 3V37l3.5 3l4.5-2.5v-6l2-3v-2L24 25zm7 5.5a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0z"></svg:path><svg:path d="M19 23.064v1.807q.073-.03.149-.057c1.104-.415 2.723-.814 4.85-.814c2.129 0 3.748.4 4.852.814l.149.057v-1.807a8 8 0 0 0-.851-.378c-.896-.335-2.277-.686-4.15-.686c-1.871 0-3.252.35-4.148.686c-.362.136-.645.27-.851.378m11-.564l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 1 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.002-.001l.001-.002l.005-.003l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58c1.104-.415 2.723-.814 4.85-.814c2.129 0 3.748.4 4.852.814c.551.206.973.416 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-11.406 4.804h.001l.002-.002h.002m-.005.002l.005-.003l.043-.03a4 4 0 0 1 .37-.213a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 0 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395a6 6 0 0 1 .37.214l.048.032h-.002l-.001-.002H29.4s-.001-.002.382-.513L30 26.5m-1.012.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.253.35-4.149.686a8 8 0 0 0-.839.372M18.01 16.993a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601"></svg:path><svg:path d="M18.642 12.066A14 14 0 0 1 33.9 15.1a1 1 0 1 1-1.414 1.415a12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1a14 14 0 0 1 4.542-3.034"></svg:path></svg:g>`,
})
export class HealthiconsUltrasoundScannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUltrasoundScannerNegativeIcon],svg[healthicons-ultrasound-scanner-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUltrasoundScannerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-8.977 8.356a49.1 49.1 0 0 0-30.045-.002c-2.483.798-3.58 3.547-2.645 5.874l6.36 15.81l.07.178c.227.569.48 1.203.865 1.689c.503.634 1.183.987 2.11 1.088a1 1 0 0 0 .216-1.989c-.476-.051-.636-.186-.759-.341c-.195-.247-.34-.607-.626-1.319L8.19 13.482c-.543-1.35.123-2.813 1.4-3.224a47.1 47.1 0 0 1 28.822.002c1.278.411 1.943 1.874 1.4 3.224l-6.379 15.853c-.288.717-.434 1.08-.63 1.327c-.124.155-.285.29-.761.342a1 1 0 1 0 .214 1.988c.928-.1 1.609-.452 2.112-1.086c.387-.487.64-1.123.868-1.693q.035-.09.07-.174l6.362-15.81c.936-2.327-.161-5.076-2.644-5.875M25 32a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-6-7.13v-1.806a8 8 0 0 1 .851-.378C20.747 22.351 22.128 22 24 22s3.253.35 4.149.686c.362.136.645.27.851.378v1.807l-.149-.057C27.747 24.399 26.128 24 24 24s-3.747.4-4.851.814zm11.6-3.17l-.6.8zl-.003-.002l-.005-.004l-.01-.007a2 2 0 0 0-.127-.088a6 6 0 0 0-.34-.205a9 9 0 0 0-1.264-.58C27.747 20.399 26.128 20 24 20s-3.747.4-4.851.814a9 9 0 0 0-1.264.58a6 6 0 0 0-.467.293l-.01.007l-.005.004h-.001l-.001.001s-.001.001.599.801l-.6-.8a1 1 0 0 0-.4.8v4.289a5 5 0 0 0 .84 2.773l.656.985A3 3 0 0 1 19 32.211v3.768a5 5 0 0 0 4 4.9V41c0 2.32 2.525 3.757 4.52 2.573l2.118-1.258a2.394 2.394 0 0 1 3.261.805l.25.404a1 1 0 0 0 1.703-1.048l-.25-.405a4.394 4.394 0 0 0-5.985-1.475l-2.118 1.257A.992.992 0 0 1 25 41v-.121a5 5 0 0 0 4-4.9v-3.768a3 3 0 0 1 .504-1.664l.656-.985A5 5 0 0 0 31 26.79V22.5a1 1 0 0 0-.4-.8m-12.59-4.707a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601M24 11a14 14 0 0 0-9.9 4.1a1 1 0 0 0 1.415 1.415a12 12 0 0 1 16.97 0A1 1 0 0 0 33.9 15.1A14 14 0 0 0 24 11" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUltrasoundScannerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUltrasoundScannerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUltrasoundScannerOutlineIcon],svg[healthicons-ultrasound-scanner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.481 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.215-1.988c.477-.052.638-.187.761-.342c.196-.247.342-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875m9.664 3.712A14 14 0 0 1 33.9 15.1a1 1 0 0 1-1.415 1.415a12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1a14 14 0 0 1 4.542-3.034m-.632 4.927a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601m.99 6.07v1.808q.073-.03.149-.057C20.253 24.399 21.872 24 24 24s3.747.4 4.851.814l.149.057v-1.807a8 8 0 0 0-.851-.378C27.253 22.351 25.872 22 24 22s-3.253.35-4.149.686c-.362.136-.645.27-.851.378m11-.563l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 1 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.003-.002l.005-.004l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58C20.253 20.399 21.872 20 24 20s3.747.4 4.851.814c.551.206.973.416 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-1.012 4.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.253.35-4.149.686a8 8 0 0 0-.839.372a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 0 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395M24 31a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUltrasoundScannerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUmbrellaIcon],svg[healthicons-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 4a1 1 0 0 1 1 1v1.016c9.157.501 16.494 7.838 16.995 16.995c.016.293-.34.343-.557.147a7.18 7.18 0 0 0-4.823-1.85a7.2 7.2 0 0 0-5.433 2.47a.66.66 0 0 1-.497.233a.66.66 0 0 1-.453-.187A8.98 8.98 0 0 0 25 21.364V39.5a2.5 2.5 0 0 0 5 0V38a1 1 0 1 1 2 0v1.5a4.5 4.5 0 1 1-9 0V21.36a8.98 8.98 0 0 0-5.272 2.474a.62.62 0 0 1-.429.177a.63.63 0 0 1-.47-.22a7.2 7.2 0 0 0-5.444-2.483c-1.854 0-3.545.7-4.822 1.85c-.218.196-.573.146-.557-.147c.5-9.157 7.837-16.494 16.994-16.995V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUmbrellaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUmbrellaNegativeIcon],svg[healthicons-umbrella-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUmbrellaNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.976 5a1 1 0 1 0-2 0v1.029c-9.144.5-16.47 7.826-16.97 16.97c-.017.293.339.343.557.147a7.17 7.17 0 0 1 4.815-1.847c2.17 0 4.116.96 5.436 2.48c.119.137.289.22.47.22c.16 0 .313-.065.428-.177a8.97 8.97 0 0 1 5.264-2.47V39.5a4.5 4.5 0 1 0 9 0V38a1 1 0 1 0-2 0v1.5a2.5 2.5 0 0 1-5 0V21.356a8.97 8.97 0 0 1 5.223 2.456a.66.66 0 0 0 .453.187c.191 0 .37-.088.496-.232a7.18 7.18 0 0 1 5.426-2.468c1.851 0 3.54.699 4.815 1.847c.218.196.573.146.557-.147c-.5-9.144-7.826-16.47-16.97-16.97z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUmbrellaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUmbrellaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUmbrellaOutlineIcon],svg[healthicons-umbrella-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.99 4a1 1 0 0 1 1 1v1.005c8.438.467 15.33 6.732 16.76 14.877a18 18 0 0 1 .245 2.141c.016.293-.34.343-.557.147l-.125-.11a7.2 7.2 0 0 0-1.404-.946a7.2 7.2 0 0 0-3.3-.798a7.2 7.2 0 0 0-5.442 2.474a.66.66 0 0 1-.497.233a.66.66 0 0 1-.454-.187a9 9 0 0 0-5.24-2.463V39.5a2.5 2.5 0 0 0 5 0V38a1 1 0 1 1 2 0v1.5a4.5 4.5 0 1 1-9 0V21.37a9 9 0 0 0-5.28 2.476a.62.62 0 0 1-.43.177a.63.63 0 0 1-.471-.22a7.2 7.2 0 0 0-5.451-2.487a7.2 7.2 0 0 0-4.83 1.854c-.218.196-.573.146-.557-.147a18 18 0 0 1 .245-2.14C7.633 12.727 14.54 6.458 22.99 6.002V5a1 1 0 0 1 1-1m0 4q-.108 0-.209-.022c-7.301.087-13.43 5.051-15.28 11.785a9.2 9.2 0 0 1 2.843-.447c2.287 0 4.381.835 5.991 2.213a10.98 10.98 0 0 1 6.626-2.213c2.493 0 4.795.83 6.641 2.225a9.2 9.2 0 0 1 6.006-2.225a9.2 9.2 0 0 1 2.842.447C37.603 13.037 31.486 8.077 24.197 7.98a1 1 0 0 1-.207.02" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUmbrellaOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnPavedRoadIcon],svg[healthicons-un-paved-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M40.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1.5 4.85a1 1 0 1 0 0-2a1 1 0 0 0 0 2M36.687 7.922a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-.574 6.646a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m1.976 3.256a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-.574 6.646a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m-7.47-14.84a1.5 1.5 0 1 1-2.736 1.23a1.5 1.5 0 0 1 2.736-1.23m1.296 6.544a1.5 1.5 0 1 0-1.23-2.736a1.5 1.5 0 0 0 1.23 2.736m2.803 2.578a1.5 1.5 0 1 1-2.736 1.23a1.5 1.5 0 0 1 2.736-1.23m.431 4.836a1 1 0 1 0-.82-1.824a1 1 0 0 0 .82 1.824"></svg:path><svg:path fill-rule="evenodd" d="M23.025 12.91a1.5 1.5 0 0 1-.35 2.251l1.532 1.749a1.5 1.5 0 1 1 1.863 2.138l1.41 1.624a1.5 1.5 0 1 1 1.87 2.163l1.392 1.616a1.5 1.5 0 1 1 1.872 2.178l.007.008a18 18 0 0 0-8.51 13.367C23.99 41.102 23.105 42 22.001 42H8c-1.105 0-2.007-.896-1.945-1.999a36 36 0 0 1 14.623-27.008q.099-.134.231-.248a1.5 1.5 0 0 1 2.115.166m2.07 8.83l-.723.69a27 27 0 0 0-1.56 1.622l-.663.748l-1.497-1.326l.663-.748a29 29 0 0 1 1.676-1.742l.724-.69zm-4.452 5.069l-.535.845a30 30 0 0 0-2.114 3.986l-.4.916l-1.833-.8l.4-.917a32 32 0 0 1 2.258-4.255l.534-.845zm-3.886 8.128l-.262.965q-.296 1.087-.513 2.203l-.192.981l-1.963-.383l.192-.982q.231-1.186.546-2.343l.262-.965z" clip-rule="evenodd"></svg:path><svg:path d="M27.562 13.691a.868.868 0 1 1-1.737 0a.868.868 0 0 1 1.737 0m1.725 5.211a.868.868 0 1 0 0-1.736a.868.868 0 0 0 0 1.736m5.292-2.981a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0m3.887.079a.868.868 0 1 0 0-1.736a.868.868 0 0 0 0 1.736m-4.888-4.64a.868.868 0 1 1-1.737 0a.868.868 0 0 1 1.737 0m4.554-.36a.868.868 0 1 0 0-1.736a.868.868 0 0 0 0 1.736"></svg:path></svg:g>`,
})
export class HealthiconsUnPavedRoadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnPavedRoadNegativeIcon],svg[healthicons-un-paved-road-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUnPavedRoadNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16.544 16.545a36 36 0 0 1 4.134-3.55q.1-.136.232-.25a1.5 1.5 0 1 1 1.764 2.416c.495.562 1.007 1.148 1.533 1.749a1.5 1.5 0 1 1 1.863 2.138l1.409 1.624q.12-.196.304-.355a1.5 1.5 0 1 1 1.566 2.519l1.393 1.615q.116-.184.29-.334a1.5 1.5 0 1 1 1.582 2.512l.007.008a18 18 0 0 0-8.51 13.368C23.988 41.103 23.105 42 22 42H8c-1.105 0-2.006-.896-1.944-2a36 36 0 0 1 10.488-23.456m6.828 6.886l.724-.69l-1.381-1.447l-.724.69a29 29 0 0 0-1.676 1.742l-.663.748l1.497 1.326l.663-.748a27 27 0 0 1 1.56-1.621m-4.264 5.223l.535-.845l-1.69-1.07l-.534.845a32 32 0 0 0-2.258 4.255l-.4.916l1.832.801l.4-.916a30 30 0 0 1 2.115-3.986m-3.613 8.248l.262-.965l-1.93-.524l-.262.965q-.315 1.157-.546 2.343l-.192.982l1.963.383l.192-.981q.218-1.117.513-2.203M42 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M40.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1.5 4.85a1 1 0 1 0 0-2a1 1 0 0 0 0 2M36.687 7.922a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-.574 6.646a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m1.976 3.255a1.5 1.5 0 1 1-2.97.421a1.5 1.5 0 0 1 2.97-.42m-.574 6.647a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m-7.47-14.84a1.5 1.5 0 1 1-2.736 1.23a1.5 1.5 0 0 1 2.736-1.23m1.296 6.544a1.5 1.5 0 1 0-1.23-2.736a1.5 1.5 0 0 0 1.23 2.736m2.803 2.578a1.5 1.5 0 1 1-2.736 1.23a1.5 1.5 0 0 1 2.736-1.23m.43 4.836a1 1 0 1 0-.82-1.824a1 1 0 0 0 .82 1.824m-7.012-9.897a.868.868 0 1 1-1.737 0a.868.868 0 0 1 1.737 0m1.724 5.21a.868.868 0 1 0 0-1.735a.868.868 0 0 0 0 1.736m5.293-2.98a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0m3.887.08a.868.868 0 1 0 0-1.737a.868.868 0 0 0 0 1.736m-4.888-4.64a.868.868 0 1 1-1.737 0a.868.868 0 0 1 1.737 0M38.132 11a.868.868 0 1 0 0-1.736a.868.868 0 0 0 0 1.736" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUnPavedRoadNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUnPavedRoadNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnPavedRoadOutlineIcon],svg[healthicons-un-paved-road-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-19.387 5.172a33.9 33.9 0 0 0-10.542 13.85A34 34 0 0 0 8 41a1 1 0 0 1-2 0c0-4.715.925-9.384 2.721-13.74a35.9 35.9 0 0 1 11.68-15.06q.106-.08.222-.127a1.502 1.502 0 0 1 2.402-.162a1.5 1.5 0 0 1-1.912 2.26m3.26 9.259l.723-.69l-1.381-1.446l-.724.69a29 29 0 0 0-1.676 1.741l-.663.75l1.497 1.325l.663-.748a27 27 0 0 1 1.56-1.621m-4.264 5.223l.535-.845l-1.69-1.07l-.534.845a31.6 31.6 0 0 0-2.258 4.255l-.4.916l1.832.801l.4-.916a30 30 0 0 1 2.115-3.986m-3.613 8.248l.262-.965l-1.93-.524l-.262.965q-.315 1.157-.546 2.343l-.192.982l1.963.383l.192-.981q.217-1.117.513-2.203m15.034-9.053q.088-.056.162-.125a1.5 1.5 0 1 0-1.178-1.597l-.042.024a18.7 18.7 0 0 0-2.916 2.24a17.8 17.8 0 0 0-4.108 5.776A16.9 16.9 0 0 0 22 41a1 1 0 0 0 2 0c0-2.066.433-4.113 1.277-6.026a15.8 15.8 0 0 1 3.647-5.124a16.7 16.7 0 0 1 2.605-2.001M42 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M40.5 19a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1 2.35a1 1 0 1 1-2 0a1 1 0 0 1 2 0M35.412 9.618a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m1.976 3.255a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-.574 6.646a1.5 1.5 0 1 0-.42-2.97a1.5 1.5 0 0 0 .42 2.97m1.976 3.255a1.5 1.5 0 1 1-2.97.42a1.5 1.5 0 0 1 2.97-.42m-9.498-11.16a1.5 1.5 0 1 0-1.23-2.737a1.5 1.5 0 0 0 1.23 2.737m2.803 2.577a1.5 1.5 0 1 1-2.737 1.23a1.5 1.5 0 0 1 2.737-1.23m1.295 6.544a1.5 1.5 0 1 0-1.229-2.737a1.5 1.5 0 0 0 1.23 2.737m1.686 1.531a1 1 0 1 1-1.825.82a1 1 0 0 1 1.825-.82m-8.428-5.584a1.5 1.5 0 1 1-2.28 1.95a1.5 1.5 0 0 1 2.28-1.95m3.084 5.915a1.5 1.5 0 1 0-1.95-2.28a1.5 1.5 0 0 0 1.95 2.28m-3.039-8.037a.868.868 0 1 0 0-1.737a.868.868 0 0 0 0 1.736m3.461 3.475a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0m3.555-1.244a.868.868 0 1 0 0-1.737a.868.868 0 0 0 0 1.736m5.624-1.657a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0m-6.624-2.903a.868.868 0 1 0 0-1.737a.868.868 0 0 0 0 1.737M39 10.132a.868.868 0 1 1-1.736 0a.868.868 0 0 1 1.736 0"></svg:path>`,
})
export class HealthiconsUnPavedRoadOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnderweightIcon],svg[healthicons-underweight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path fill-rule="evenodd" d="M32.268 27.476a1.5 1.5 0 0 0 1.208-1.744c-.052-.285-.12-.722-.202-1.241c-.16-1.023-.372-2.368-.606-3.516c-.183-.898-.404-1.812-.673-2.545a5.3 5.3 0 0 0-.52-1.079c-.19-.287-.586-.795-1.267-.979c-4.44-1.196-8-1.14-12.413.036c-.68.181-1.076.687-1.267.974a5.2 5.2 0 0 0-.522 1.075c-.27.73-.49 1.64-.674 2.534c-.235 1.15-.447 2.492-.607 3.512c-.081.513-.149.944-.2 1.229a1.5 1.5 0 1 0 2.95.536c.078-.424.157-.93.245-1.49c.149-.958.323-2.07.551-3.185c.175-.853.36-1.585.55-2.097q.066-.178.116-.285q.61-.156 1.196-.277L21 25l-1.5 5.5v12a1.5 1.5 0 0 0 3 0v-12h3v12a1.5 1.5 0 0 0 3 0v-12L27 25l.872-6.101q.582.119 1.188.273q.051.11.119.291c.19.517.375 1.253.55 2.112c.228 1.118.4 2.226.549 3.183c.088.567.168 1.08.246 1.51a1.5 1.5 0 0 0 1.744 1.208m-3.313-8.494l.015.02zm-9.913.039l-.014.02z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUnderweightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnderweight24pxIcon],svg[healthicons-underweight-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 4q0-.824.588-1.412A1.93 1.93 0 0 1 12 2q.824 0 1.413.587Q14 3.176 14 4t-.587 1.412A1.93 1.93 0 0 1 12 6M8.175 8.075q.525-.525 1.175-.8T10.75 7h2.5q.75 0 1.4.275t1.175.8l3.53 3.53L17.95 13L15 10.05L14 9l-.415.83a3 3 0 0 0 .809 3.685L15 14v8h-2v-7h-2v7H9v-8l.606-.485a3 3 0 0 0 .81-3.684L10 9l-1 1.05l-3 3l-1.375-1.424z"></svg:path>`,
})
export class HealthiconsUnderweight24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnderweightNegativeIcon],svg[healthicons-underweight-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUnderweightNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m9.476 12.732a1.5 1.5 0 1 1-2.952.536c-.078-.43-.158-.943-.246-1.51a69 69 0 0 0-.55-3.183c-.174-.859-.36-1.595-.55-2.112a4 4 0 0 0-.118-.29a25 25 0 0 0-1.188-.274L27 25l1.5 5.5v12a1.5 1.5 0 0 1-3 0v-12h-3v12a1.5 1.5 0 0 1-3 0v-12L21 25l-.867-6.066q-.584.12-1.196.277a4 4 0 0 0-.117.285c-.189.512-.374 1.244-.549 2.097a68 68 0 0 0-.551 3.184c-.088.56-.167 1.067-.244 1.491a1.5 1.5 0 1 1-2.952-.536c.052-.285.12-.716.2-1.23c.161-1.02.373-2.361.608-3.51c.183-.895.404-1.805.674-2.535a5.2 5.2 0 0 1 .522-1.075c.191-.287.587-.793 1.267-.974c4.413-1.177 7.973-1.232 12.413-.036c.681.184 1.077.692 1.266.979c.22.332.388.716.521 1.079c.27.733.49 1.647.673 2.545c.234 1.148.445 2.493.606 3.515c.081.52.15.957.202 1.242m-4.521-6.75l.015.02zm-9.913.039l-.014.02z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUnderweightNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUnderweightNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnderweightOutlineIcon],svg[healthicons-underweight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 8.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M24.5 6a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m5.448 11.338c-4.262-1.148-7.642-1.098-11.895.036a.5.5 0 0 0-.219.124c-.387.374-.679 1.001-.912 1.667c-.242.69-.449 1.507-.627 2.337a73 73 0 0 0-.606 3.337l-.001.008c-.068.412-.129.78-.18 1.064a.5.5 0 1 0 .984.178q.094-.522.204-1.208l.002-.01c.152-.928.336-2.043.575-3.159c.174-.812.37-1.584.592-2.216q.159-.453.324-.777l.207-.404l.441-.11q.623-.156 1.224-.277l.906-.183l2.096 7.334l-2.563 5.638V41.5a.5.5 0 0 0 1 0v-12h5v12a.5.5 0 0 0 1 0V30.717l-2.563-5.638l2.105-7.365l.903.18q.675.134 1.376.313l.345.088l.212.286c.152.207.314.5.473.913c.238.622.417 1.385.56 2.195c.142.808.244 1.645.334 2.413l.028.236c.079.672.151 1.29.235 1.751a.5.5 0 0 0 .984-.178a30 30 0 0 1-.224-1.674l-.03-.251c-.09-.769-.195-1.63-.342-2.47c-.147-.837-.34-1.67-.612-2.38c-.266-.696-.635-1.343-1.179-1.725a.5.5 0 0 0-.157-.073m-12.41-1.896c4.573-1.22 8.31-1.28 12.93-.035c.281.075.547.2.785.367c1.036.726 1.585 1.828 1.9 2.647c.337.882.556 1.86.713 2.749c.158.901.269 1.814.36 2.583l.025.218v.009c.083.703.143 1.213.209 1.573a2.5 2.5 0 1 1-4.92.894a32 32 0 0 1-.25-1.853l-.03-.259a41 41 0 0 0-.319-2.3c-.133-.758-.286-1.377-.458-1.826l-.043-.108l-1.378 4.82l2.438 5.362V41.5a2.5 2.5 0 1 1-5 0v-10h-1v10a2.5 2.5 0 1 1-5 0V30.283l2.437-5.362l-1.279-4.478a19 19 0 0 0-.43 1.688a64 64 0 0 0-.558 3.074v.006c-.075.449-.144.87-.21 1.236a2.5 2.5 0 1 1-4.92-.894c.048-.265.107-.617.176-1.04l.001-.008c.158-.96.369-2.239.623-3.422c.185-.865.412-1.776.694-2.58c.246-.7.662-1.72 1.41-2.443a2.5 2.5 0 0 1 1.094-.618" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUnderweightOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnderweightOutline24pxIcon],svg[healthicons-underweight-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 4q0-.824.588-1.412A1.93 1.93 0 0 1 12 2q.824 0 1.413.587Q14 3.176 14 4t-.587 1.412A1.93 1.93 0 0 1 12 6M8.175 8.075q.525-.525 1.175-.8T10.75 7h2.5q.75 0 1.4.275t1.175.8l3.53 3.53L17.95 13L15 10.05L14 9l-.415.83a3 3 0 0 0 .809 3.685L15 14v8h-2v-7h-2v7H9v-8l.606-.485a3 3 0 0 0 .81-3.684L10 9l-1 1.05l-3 3l-1.375-1.424z"></svg:path>`,
})
export class HealthiconsUnderweightOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnhealthyFoodIcon],svg[healthicons-unhealthy-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.068 20.147l-2.44-9.103l5.602-5.237L17 12.41V8.79l7-2.14v3.893l6.086-2.913l-.069 1.01L31.227 4h7.117l-2.769 9.23l1.767-.452l-2.147 8.014q.21-.202.42-.41a1.293 1.293 0 0 1 2.203 1.071L35.22 42.248A2 2 0 0 1 33.235 44h-18.47a2 2 0 0 1-1.984-1.752l-2.599-20.79a1.297 1.297 0 0 1 1.886-1.31m19.523-3.38l2.84-.852l-1.96 7.312c-1.114.907-2.177 1.65-3.207 2.227zm-4.794 9.769l1.061-15.623l-2.59 1.239l-1.006 14.81a9.2 9.2 0 0 0 2.535-.426M19 25.544c1.027.554 2.021.947 3 1.177V9.35l-3 .918zm-4.214-2.98A31 31 0 0 0 17 24.294v-4.162L14.161 9.544l-2.29 2.141zm18.528-8.756l-2.762.706L32.772 6h2.884z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUnhealthyFoodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnhealthyFood24pxIcon],svg[healthicons-unhealthy-food-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.713 4.041l-.58-2.166l-4.399 2.903l1.293 4.825c-.66.238-1.157.869-.997 1.67l1.805 9.906a1 1 0 0 0 .984.821H17.18a1 1 0 0 0 .984-.82l1.805-9.907c.176-.88-.44-1.553-1.195-1.728l.761-7.503l-5.153-.055l-.409 3.3l-.974.326v-3zm8.032 6.222q-.354.226-.745.454V4.613l-.014.004l.054-.612l1.162.012zM14 11.715q-.526.211-1 .334V7.72l1-.334zm-3 .334V5.387l-1 .334v5.994q.526.211 1 .334m-3-1.332v-1.61L6.919 5.072l-.88.581l1.24 4.625q.343.218.721.44" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUnhealthyFood24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnhealthyFoodNegativeIcon],svg[healthicons-unhealthy-food-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUnhealthyFoodNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm15.23 5.807L17 12.41V8.79l7-2.14v3.893l6.086-2.913l-.069 1.01L31.227 4h7.117l-2.769 9.23l1.767-.452l-2.148 8.014q.21-.202.421-.41a1.293 1.293 0 0 1 2.203 1.071L35.22 42.248A2 2 0 0 1 33.234 44H14.766a2 2 0 0 1-1.985-1.752l-2.599-20.79a1.297 1.297 0 0 1 1.886-1.31l-2.44-9.104zM17 24.293a31 31 0 0 1-2.214-1.73L11.87 11.686l2.29-2.14L17 20.131zm5 2.428c-.979-.23-1.973-.623-3-1.177V10.269l3-.917zm4.797-.185a9.2 9.2 0 0 1-2.535.426l1.006-14.81l2.59-1.24zm5.675-3.31c-1.116.909-2.178 1.65-3.209 2.228l2.328-8.687l2.84-.852zm.842-9.418L35.656 6h-2.883l-2.221 8.514z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUnhealthyFoodNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUnhealthyFoodNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnhealthyFoodOutlineIcon],svg[healthicons-unhealthy-food-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m31.228 4l-1.21 4.64l.068-1.01L24 10.541V6.648L17 8.79v3.62l-1.77-6.603l-5.602 5.237l2.44 9.103q.174.09.317.228q1.244 1.204 2.4 2.189l-2.914-10.879l2.29-2.14l2.84 10.587v4.161q1.023.724 2 1.25V10.27l3-.917V26.72q1.137.267 2.261.241l1.006-14.81l2.59-1.24l-1.061 15.624a13 13 0 0 0 2.467-1.082l2.327-8.687l2.84-.852l-1.96 7.312a44 44 0 0 0 2.724-2.435l2.147-8.014l-1.767.452L38.345 4zm4.428 2l-2.342 7.808l-2.762.706L32.772 6z"></svg:path><svg:path d="M35.589 23.169c-3.952 3.63-7.601 5.802-11.543 5.796c-3.944-.006-7.625-2.194-11.638-5.828L14.766 42h18.469zM11.469 20c-.78 0-1.383.684-1.287 1.458l2.6 20.79A2 2 0 0 0 14.765 44h18.469a2 2 0 0 0 1.984-1.752l2.6-20.795a1.293 1.293 0 0 0-2.204-1.071c-8.94 8.796-14.159 8.76-23.23-.007A1.33 1.33 0 0 0 11.47 20"></svg:path></svg:g>`,
})
export class HealthiconsUnhealthyFoodOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUnhealthyFoodOutline24pxIcon],svg[healthicons-unhealthy-food-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.713 4.041l-.58-2.166l-4.399 2.903l1.293 4.825c-.66.238-1.157.869-.997 1.67l1.805 9.906a1 1 0 0 0 .984.821H17.18a1 1 0 0 0 .984-.82l1.805-9.907c.176-.88-.44-1.553-1.195-1.728l.761-7.503l-5.153-.055l-.409 3.3l-.974.326v-3zm8.032 6.222q-.354.226-.745.454V4.613l-.014.004l.054-.612l1.162.012zM14 11.715q-.526.211-1 .334V7.72l1-.334zm-3 .334V5.387l-1 .334v5.994q.526.211 1 .334m-3-1.332v-1.61L6.919 5.072l-.88.581l1.24 4.625q.343.218.721.44m7.69 2.413a21 21 0 0 0 2.032-1.13l-1.415 8.038H7.693l-1.415-8.037c.607.38 1.303.78 2.032 1.13c1.127.541 2.455 1.023 3.69 1.023s2.563-.482 3.69-1.024" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUnhealthyFoodOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrineSampleIcon],svg[healthicons-urine-sample-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.879 6.879A3 3 0 0 0 6 9v5h2.138q0 .066.004.133l1.734 26A2 2 0 0 0 11.87 42h23.26a2 2 0 0 0 1.995-1.867l1.734-26a2 2 0 0 0 .004-.133H42V9a2.99 2.99 0 0 0-1.832-2.764A3 3 0 0 0 39 6H9a3 3 0 0 0-2.121.879M36.862 14H10.138l.267 4H21a2 2 0 0 1 2 2v2h13.329zm-25.748 6l.778 14H21V20zM11 11.714H9V8.286h2zm4-3.428h-2v3.428h2zm4 3.428h-2V8.286h2zm4-3.428h-2v3.428h2zm4 3.428h-2V8.286h2zm4-3.428h-2v3.428h2zm4 3.428h-2V8.286h2zm4-3.428h-2v3.428h2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUrineSampleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrineSampleOutlineIcon],svg[healthicons-urine-sample-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 12V9h2v3zm4-3v3h2V9zm4 3V9h2v3zm4-3v3h2V9zm4 3V9h2v3zm4-3v3h2V9zm4 3V9h2v3zm4-3v3h2V9z"></svg:path><svg:path fill-rule="evenodd" d="M38.857 15H42V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v6h2.143q0 .068.004.138L9.448 34h-.035l.204 2.449l.255 3.689q.017.251.093.481L10.08 42h26.869l.07-1.332q.09-.252.11-.53l1.724-25q.004-.07.004-.138M40 13V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4zm-3.556 8l.413-6H10.143l.207 3H21a2 2 0 0 1 2 2v1zM21.595 35.91A2 2 0 0 0 23 34V23h12.946l-.895 17H11.92l-.309-3.703l-.02-.297h9.944zM21 20h-9.886l.778 14h8.573l.535-.803z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUrineSampleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrologyIcon],svg[healthicons-urology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm9.833 15.817A4 4 0 0 0 19.88 18h.117c.554 0 1 .447 1 .998V26.7q-.255.135-.485.299c-.91.642-1.513 1.595-1.513 2.858q0 .067.002.133V30c.064 2.424 1.759 4.429 3.996 4.897V37a1 1 0 1 0 2 0v-2.102c2.24-.467 3.936-2.473 4-4.898l.002-.143c0-1.477-.825-2.53-2-3.158V19A1 1 0 0 1 28 18h.118a4 4 0 0 0 6.705 3.817c1.258-1.259 2.18-2.986 2.175-4.817c.005-1.831-.917-3.571-2.175-4.83A4 4 0 0 0 28.12 16H28c-1.656 0-3 1.34-3 2.998v7.071a7.2 7.2 0 0 0-2.002 0V19a3 3 0 0 0-3-2.999h-.12a4 4 0 0 0-6.702-3.83C11.917 13.43 10.996 15.17 11 17c-.005 1.83.918 3.558 2.176 4.817a4 4 0 0 0 5.657 0M24 33c-1.561 0-2.925-1.282-2.997-3h5.994c-.072 1.718-1.436 3-2.997 3m-6.001-17.016c-.556 0-1.006-.45-1.006-1.005a1 1 0 1 0-2 0c0 .77.29 1.473.767 2.005a3 3 0 0 0-.767 2.005a1 1 0 0 0 2 0c0-.555.45-1.005 1.006-1.005a1 1 0 0 0 0-2m13.006-1.005c0 .555-.45 1.005-1.005 1.005a1 1 0 1 0 0 2c.555 0 1.005.45 1.005 1.005a1 1 0 1 0 2 0c0-.77-.29-1.473-.767-2.005a3 3 0 0 0 .767-2.006a1 1 0 1 0-2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUrologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrologyNegativeIcon],svg[healthicons-urology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsUrologyNegative0)" clip-rule="evenodd"><svg:path d="M19.88 18a4 4 0 0 1-6.705 3.817C11.919 20.558 10.996 18.83 11 17c-.005-1.831.917-3.571 2.176-4.83A4 4 0 0 1 19.877 16h.121c1.656 0 3 1.34 3 2.998v7.072a7.2 7.2 0 0 1 2.002 0v-7.072A3 3 0 0 1 28 16h.121a4 4 0 0 1 6.702-3.83c1.258 1.259 2.18 2.999 2.175 4.83c.005 1.83-.917 3.558-2.175 4.817A4 4 0 0 1 28.118 18H28c-.553 0-1 .447-1 .998V26.7c1.175.629 2 1.681 2 3.158q0 .072-.002.143c-.064 2.425-1.76 4.43-4 4.898V37a1 1 0 1 1-2 0v-2.103c-2.237-.468-3.932-2.473-3.996-4.897v-.01L19 29.857c0-1.263.603-2.216 1.513-2.858q.23-.163.485-.3V19a1 1 0 0 0-1-.999zm1.123 12c.072 1.718 1.436 3 2.997 3s2.925-1.282 2.997-3zm-4.01-15.021c0 .555.45 1.005 1.006 1.005a1 1 0 0 1 0 2c-.556 0-1.006.45-1.006 1.005a1 1 0 1 1-2 0c0-.77.29-1.473.767-2.005a3 3 0 0 1-.767-2.006a1 1 0 0 1 2 0M30 15.984c.555 0 1.005-.45 1.005-1.005a1 1 0 1 1 2 0c0 .77-.29 1.473-.767 2.005c.477.532.767 1.235.767 2.005a1 1 0 1 1-2 0c0-.555-.45-1.005-1.005-1.005a1 1 0 1 1 0-2"></svg:path><svg:path d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUrologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUrologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsUrologyOutlineIcon],svg[healthicons-urology-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M29.168 12.17A4 4 0 0 0 28.123 16H28c-1.656 0-3 1.34-3 2.998v7.074a7 7 0 0 0-2 0v-7.074A3 3 0 0 0 20 16h-.123a4 4 0 0 0-6.702-3.83c-1.257 1.26-2.179 3-2.175 4.83c-.005 1.83.918 3.558 2.176 4.817A4 4 0 0 0 19.88 18H20c.553 0 1 .447 1 .998v7.733a5 5 0 0 0-.305.187C19.715 27.572 19 28.612 19 30a5 5 0 0 0 4 4.9V37a1 1 0 1 0 2 0v-2.1a5 5 0 0 0 4-4.9c0-1.388-.715-2.428-1.695-3.082a5 5 0 0 0-.305-.187v-7.733A1 1 0 0 1 28 18h.12a4 4 0 0 0 6.705 3.817C36.082 20.558 37.004 18.83 37 17c.005-1.831-.917-3.571-2.175-4.83a4 4 0 0 0-5.657 0m4.242 1.415a2 2 0 0 0-3.171 2.37c.44-.107.766-.504.766-.976a1 1 0 1 1 2 0c0 .77-.29 1.473-.767 2.005c.477.532.767 1.235.767 2.005a1 1 0 1 1-2 0c0-.47-.322-.864-.757-.974a2.001 2.001 0 0 0 3.162 2.387c.985-.984 1.593-2.233 1.59-3.402c.003-1.17-.605-2.431-1.59-3.415M26.661 29a2 2 0 0 0-.466-.418C25.646 28.216 24.852 28 24 28s-1.646.216-2.195.582a2 2 0 0 0-.466.418zm.168 2a3.001 3.001 0 0 1-5.658 0zm-9.41-17.415a2 2 0 0 0-2.83 0C13.606 14.569 12.998 15.83 13 17c-.003 1.169.605 2.418 1.59 3.402a2 2 0 0 0 3.162-2.387c-.435.11-.757.505-.757.974a1 1 0 1 1-2 0c0-.77.29-1.473.767-2.005a3 3 0 0 1-.767-2.006a1 1 0 1 1 2 0c0 .473.326.87.766.977a2 2 0 0 0-.343-2.37"></svg:path><svg:path d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class HealthiconsUrologyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVIcon],svg[healthicons-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 38a2 2 0 0 0 1.846-1.23l10-24a2 2 0 0 0-3.692-1.54L24 30.8l-8.154-19.57a2 2 0 0 0-3.692 1.54l10 24A2 2 0 0 0 24 38" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVNegativeIcon],svg[healthicons-v-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.846 36.77a2 2 0 0 1-3.692 0l-10-24a2 2 0 1 1 3.692-1.54L24 30.8l8.154-19.57a2 2 0 0 1 3.692 1.54z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVOutlineIcon],svg[healthicons-v-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.23 37.154a3 3 0 0 0 5.54 0l10-24a3 3 0 0 0-5.54-2.308L24 28.2l-7.23-17.354a3 3 0 0 0-5.54 2.308zM24 37a1 1 0 0 1-.923-.615l-10-24a1 1 0 1 1 1.846-.77l8.154 19.57a1 1 0 0 0 1.846 0l8.154-19.57a1 1 0 0 1 1.846.77l-10 24A1 1 0 0 1 24 37" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaIcon],svg[healthicons-vagina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25.9 5.016l5.925 9.15a16.495 16.495 0 0 1 .518 18.707l-.518.8L24.023 44l-8.359-10.901l-.09-.145a16.74 16.74 0 0 1 .648-18.789l5.924-9.15c.877-1.354 2.877-1.354 3.754 0m-8.03 10.282l-.032.045a14.74 14.74 0 0 0-1.757 14.234q.06-.351.166-.698l6.327-20.845zM25.386 7.9l6.368 20.98q.085.28.142.566a14.5 14.5 0 0 0-1.687-14.103l-.032-.045zM24 23.162l-2.52 7.101c-.44 1.243-.557 2.22-.433 3.11c.124.895.503 1.79 1.2 2.85L24 38.893l1.753-2.669c.697-1.06 1.076-1.955 1.2-2.85c.124-.89.008-1.867-.433-3.11zM24 13a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m1 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVaginaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltIcon],svg[healthicons-vagina-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42 25.852c.008-5.746-1.58-12.004-4.705-19.852h-26.59C7.579 13.848 5.992 20.106 6 25.852c.008 5.614 1.538 10.66 4.504 16.148h26.992c2.966-5.489 4.496-10.534 4.504-16.148M23.143 42V31.546l-7.022-7.373l1.212-1.273L23 28.85V26a1 1 0 1 1 2 0v2.851l5.667-5.95l1.212 1.272l-7.021 7.373V42z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVaginaAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAlt24pxIcon],svg[healthicons-vagina-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 21C2.142 13.97 2.532 10.03 5 3h14.105c2.339 7.03 2.708 10.97 0 18H13v-3l4-4l-1.06-1.06L13 15.878V15a1 1 0 1 0-2 0v.879l-2.94-2.94L7 14l4 4v3z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVaginaAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltNegativeIcon],svg[healthicons-vagina-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsVaginaAltNegative0)"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-6 25.852c.008-5.746-1.58-12.004-4.705-19.852h-26.59C7.579 13.848 5.992 20.106 6 25.852c.008 5.614 1.538 10.66 4.504 16.148h26.992c2.966-5.489 4.496-10.534 4.504-16.148" clip-rule="evenodd"></svg:path><svg:path d="M23.143 31.546V42h1.715V31.546l7.022-7.373l-1.213-1.273l-6.667 7l-6.667-7l-1.212 1.273z"></svg:path><svg:path d="M23 26v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVaginaAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVaginaAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltOutlineIcon],svg[healthicons-vagina-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M35.434 6h1.86c3.127 7.848 4.714 14.106 4.706 19.852c-.008 5.614-1.538 10.66-4.504 16.148h-1.982c3.192-5.658 4.764-10.635 4.772-16.151C40.293 20.288 38.71 14.09 35.434 6M10.705 6h1.86c-3.277 8.09-4.858 14.288-4.85 19.849c.007 5.516 1.579 10.493 4.771 16.151h-1.982C7.538 36.511 6.008 31.466 6 25.852C5.992 20.106 7.579 13.848 10.705 6m12.438 25.546V42h1.714V31.546l7.022-7.373l-1.212-1.273l-6.667 7l-6.667-7l-1.212 1.273z"></svg:path><svg:path d="M23 26v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0"></svg:path></svg:g>`,
})
export class HealthiconsVaginaAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltOutline24pxIcon],svg[healthicons-vagina-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.003 11.982c.051-2.906.81-5.77 2.054-9.313l1.887.662C5.72 6.818 5.048 9.438 5.003 12.018c-.046 2.564.526 5.168 1.923 8.605l-1.852.754c-1.46-3.592-2.123-6.474-2.071-9.395m17.994 0c-.052-2.906-.81-5.77-2.053-9.313l-1.888.662c1.224 3.487 1.896 6.107 1.941 8.687c.046 2.564-.526 5.168-1.923 8.605l1.852.754c1.46-3.592 2.123-6.474 2.071-9.395M13 15a1 1 0 1 0-2 0v.879l-2.94-2.94L7 14l4 4v3h2v-3l4-4l-1.06-1.06L13 15.878z"></svg:path>`,
})
export class HealthiconsVaginaAltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaOutlineIcon],svg[healthicons-vagina-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 21a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M31.842 34.112L24.023 44l-8.378-10.438l-.075-.114a15.55 15.55 0 0 1 .634-18.014l5.87-10.31c.853-1.499 3.045-1.499 3.898 0l5.87 10.31a15.32 15.32 0 0 1 .506 17.931zM17.876 16.54l-.082.107a13.54 13.54 0 0 0-1.237 14.543q.038-.625.21-1.24L23 7.588v-.049zM23 15.034a1 1 0 0 0 1.999 0l4.307 15.453a4 4 0 0 1-.588 3.385l-1.02 1.442a9.4 9.4 0 0 0-.237-5.502l-2.546-7.069c-.357-.99-1.475-.99-1.832 0l-2.546 7.07a9.4 9.4 0 0 0-.236 5.5l-1.02-1.44a4 4 0 0 1-.59-3.386zm2-7.447v-.129l5.17 9.082l.082.107a13.32 13.32 0 0 1 1.178 14.375a6 6 0 0 0-.196-1.072zm-1 18.514l-1.58 4.389c-.756 2.098-.464 4.544.655 6.221L24 38.1l.925-1.388c1.119-1.677 1.411-4.123.656-6.221z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsVaginaOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
