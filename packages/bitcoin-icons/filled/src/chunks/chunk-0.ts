import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsAddressBookFilledIcon],svg[bitcoin-icons-address-book-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.005 19.996c.05.563.524 1.004 1.1 1.004h9.79c.61 0 1.105-.495 1.105-1.105V6.105c0-.576-.442-1.05-1.005-1.1q.005.05.005.1v13.79c0 .61-.495 1.105-1.105 1.105h-9.79a1 1 0 0 1-.1-.005"></svg:path><svg:path d="M5 4.105C5 3.495 5.495 3 6.105 3h9.79C16.505 3 17 3.495 17 4.105v13.79c0 .61-.495 1.105-1.105 1.105h-9.79C5.495 19 5 18.505 5 17.895zm3.34 10.502a.808.808 0 0 1 0-1.291a4.36 4.36 0 0 1 2.66-.9c1 0 1.923.335 2.66.9c.43.329.43.962 0 1.291c-.737.565-1.66.9-2.66.9s-1.923-.335-2.66-.9m2.658-2.965c1.136 0 2.058-1.153 2.058-2.575s-.922-2.574-2.058-2.574c-1.137 0-2.058 1.152-2.058 2.574s.921 2.575 2.058 2.575"></svg:path></svg:g>`,
})
export class BitcoinIconsAddressBookFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsAlertCircleFilledIcon],svg[bitcoin-icons-alert-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-7.75 4.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M13 6.5h-2v7h2z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsAlertCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsAlertFilledIcon],svg[bitcoin-icons-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="16.75" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11 6h2v8h-2z"></svg:path>`,
})
export class BitcoinIconsAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsArrowDownFilledIcon],svg[bitcoin-icons-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.013 2.25a.75.75 0 0 1 .75.75l-.012 16.19l5.72-5.708a.75.75 0 1 1 1.059 1.061l-7 6.988a.75.75 0 0 1-1.06 0l-7-6.988a.75.75 0 0 1 1.06-1.061l5.721 5.71L11.262 3a.75.75 0 0 1 .751-.75" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsArrowDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsArrowLeftFilledIcon],svg[bitcoin-icons-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.461 12a.75.75 0 0 1 .75-.75l17.79.012a.75.75 0 1 1-.002 1.5L3.21 12.75a.75.75 0 0 1-.749-.75"></svg:path><svg:path d="M10.517 4.47a.75.75 0 0 1 .001 1.06L4.06 12l6.458 6.47a.75.75 0 0 1-1.061 1.06l-6.988-7a.75.75 0 0 1 0-1.06l6.988-7a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class BitcoinIconsArrowLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsArrowRightFilledIcon],svg[bitcoin-icons-arrow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.483 4.47a.75.75 0 0 1 1.06 0l6.988 7a.75.75 0 0 1 0 1.06l-6.988 7a.75.75 0 0 1-1.061-1.06l5.709-5.719L3 12.762a.75.75 0 0 1-.002-1.5l16.194-.01l-5.711-5.722a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsArrowRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsArrowUpFilledIcon],svg[bitcoin-icons-arrow-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7 6.987a.75.75 0 1 1-1.06 1.061L12.751 4.81L12.762 21a.75.75 0 0 1-1.5.002l-.01-16.194l-5.722 5.711a.75.75 0 1 1-1.06-1.061z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsArrowUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBellFilledIcon],svg[bitcoin-icons-bell-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.1 5.374a2.001 2.001 0 0 1 3.8 0A5 5 0 0 1 17 10v4l2.146 2.146a.5.5 0 0 1-.353.854H5.207a.5.5 0 0 1-.353-.854L7 14v-4a5 5 0 0 1 3.1-4.626M10 18a2 2 0 1 0 4 0z"></svg:path>`,
})
export class BitcoinIconsBellFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBitcoinCircleFilledIcon],svg[bitcoin-icons-bitcoin-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.864 14.36c.806.213 2.567.678 2.847-.447c.287-1.151-1.422-1.534-2.255-1.721q-.14-.031-.243-.056l-.542 2.174q.083.02.193.05m.759-3.177c.672.18 2.138.57 2.393-.452c.26-1.046-1.164-1.36-1.86-1.515l-.203-.047l-.492 1.972q.07.017.162.042"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.822 20.73a9 9 0 0 0 4.354-17.46A9 9 0 0 0 3.27 9.823A8.997 8.997 0 0 0 9.822 20.73m4.165-12.252c1.247.43 2.16 1.073 1.98 2.27c-.13.877-.616 1.302-1.261 1.45c.886.462 1.337 1.17.907 2.396c-.532 1.522-1.799 1.65-3.483 1.332l-.409 1.638l-.987-.246l.403-1.616a39 39 0 0 1-.787-.204l-.405 1.623l-.986-.246l.408-1.64l-.256-.067l-.448-.115l-1.285-.32l.49-1.13s.728.193.718.178c.28.07.404-.113.453-.234l.646-2.589l.084.021l.02.005a1 1 0 0 0-.103-.033l.46-1.848c.013-.21-.06-.475-.46-.574c.016-.01-.716-.179-.716-.179l.262-1.054l1.362.34v.005q.307.075.63.148l.405-1.622l.986.246l-.396 1.59c.265.06.532.121.791.186l.394-1.58l.988.247z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsBitcoinCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBitcoinFilledIcon],svg[bitcoin-icons-bitcoin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.425 6.432c1.983.19 3.538.778 3.71 2.528c.117 1.276-.438 2.035-1.355 2.463c1.481.359 2.382 1.202 2.196 3.072c-.227 2.343-2.035 2.952-4.62 3.08l.004 2.42l-1.522.002l-.004-2.42q-.25-.002-.519.003c-.238.003-.484.006-.731-.001l.004 2.42l-1.52.001l-.004-2.42l-3.044-.058l.256-1.768s1.15.024 1.129.012c.423-.002.549-.293.58-.485l-.008-3.878l.012-2.76c-.046-.288-.248-.634-.87-.644c.033-.03-1.115.001-1.115.001L6 6.38l3.12-.005l-.004-2.37l1.571-.002l.004 2.37c.304-.008.603-.005.906-.003l.3.002l-.005-2.37L13.422 4zm-2.92 4.46l.076.002c.926.04 3.67.155 3.673-1.457c-.004-1.532-2.339-1.482-3.423-1.46q-.195.006-.327.005zm.129 4.75l-.134-.005v-2.91q.146.002.359-.002c1.282-.015 4.145-.05 4.132 1.494c.014 1.597-3.218 1.468-4.357 1.423" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsBitcoinFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBlockFilledIcon],svg[bitcoin-icons-block-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 8.344a.73.73 0 0 0-.364-.645l-7.494-4.395a2.21 2.21 0 0 0-2.23-.003L3.368 7.698a.73.73 0 0 0-.365.646H3v7.43h.004a.73.73 0 0 0 .376.622l7.563 4.242a2.21 2.21 0 0 0 2.167-.003l7.515-4.24a.73.73 0 0 0 .375-.62zm-16.236.564a.375.375 0 0 0-.368.653l6.359 3.588a2.59 2.59 0 0 0 2.551-.006l6.278-3.583a.375.375 0 1 0-.372-.651l-6.278 3.582c-.56.32-1.248.322-1.81.005z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsBlockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBrushFilledIcon],svg[bitcoin-icons-brush-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5H5v6h14V5h-2.5v3a.5.5 0 0 1-1 0V5H14v4.5a.5.5 0 0 1-1 0V5H8.5v2a.5.5 0 0 1-1 0zM5 13v-1h14v1a2 2 0 0 1-2 2h-3v3a2 2 0 1 1-4 0v-3H7a2 2 0 0 1-2-2"></svg:path>`,
})
export class BitcoinIconsBrushFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsBuoyFilledIcon],svg[bitcoin-icons-buoy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.315 5.022c-.473.386-.907.82-1.293 1.293L7.877 9.17A5 5 0 0 1 9.17 7.877zm9.808 9.808a5 5 0 0 1-1.293 1.293l2.855 2.855a9 9 0 0 0 1.293-1.293zm3.45 2.036l-2.952-2.952c.244-.59.379-1.236.379-1.914s-.135-1.324-.38-1.914l2.953-2.952A8.96 8.96 0 0 1 21 12a8.96 8.96 0 0 1-1.427 4.866M10.086 7.38L7.134 4.426A8.96 8.96 0 0 1 12 3a8.96 8.96 0 0 1 4.866 1.427L13.914 7.38A5 5 0 0 0 12 7c-.678 0-1.324.135-1.914.38M5.022 17.685c.386.473.82.907 1.293 1.293l2.855-2.855a5 5 0 0 1-1.293-1.293zM7 12c0-.678.135-1.324.38-1.914L4.426 7.134A8.96 8.96 0 0 0 3 12a8.96 8.96 0 0 0 1.427 4.866l2.952-2.952A5 5 0 0 1 7 12m9.866 7.573l-2.952-2.952A5 5 0 0 1 12 17a5 5 0 0 1-1.914-.38l-2.952 2.953A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 4.866-1.427M14.83 7.877a5 5 0 0 1 1.293 1.293l2.855-2.855a9 9 0 0 0-1.293-1.293z"></svg:path>`,
})
export class BitcoinIconsBuoyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCalendarFilledIcon],svg[bitcoin-icons-calendar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5V9H5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16 4.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m-8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5M5 10h14v6.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5zm10.5 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M7 13.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm8.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M7 15.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm5.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCalendarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCarFilledIcon],svg[bitcoin-icons-car-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 10l1.5-4.5h11L19 10z"></svg:path>`,
})
export class BitcoinIconsCarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCaretDownFilledIcon],svg[bitcoin-icons-caret-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.47 9.4a.75.75 0 0 1 1.06 0l6.364 6.364a.25.25 0 0 0 .354 0L18.612 9.4a.75.75 0 0 1 1.06 1.06l-6.364 6.364a1.75 1.75 0 0 1-2.475 0L4.47 10.46a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCaretDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCaretLeftFilledIcon],svg[bitcoin-icons-caret-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.601 4.47a.75.75 0 0 1 0 1.06l-6.364 6.364a.25.25 0 0 0 0 .354l6.364 6.364a.75.75 0 0 1-1.06 1.06L7.177 13.31a1.75 1.75 0 0 1 0-2.475L13.54 4.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCaretLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCaretRightFilledIcon],svg[bitcoin-icons-caret-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.399 4.328a.75.75 0 0 1 1.06 0l6.364 6.363a1.75 1.75 0 0 1 0 2.475L10.46 19.53a.75.75 0 0 1-1.06-1.06l6.364-6.364a.25.25 0 0 0 0-.354L9.399 5.388a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCaretRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCaretUpFilledIcon],svg[bitcoin-icons-caret-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.248 8.237a.25.25 0 0 0-.354 0L5.53 14.601a.75.75 0 1 1-1.06-1.06l6.363-6.364a1.75 1.75 0 0 1 2.475 0l6.364 6.364a.75.75 0 0 1-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCaretUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCartFilledIcon],svg[bitcoin-icons-cart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 19.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4M3 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .476.348L9.37 14.5H17a.5.5 0 0 1 0 1H9.004a.5.5 0 0 1-.476-.348L5.135 4.5H3.5A.5.5 0 0 1 3 4" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.5 13L6 6h13.337a.5.5 0 0 1 .48.637l-1.713 6a.5.5 0 0 1-.481.363z"></svg:path>`,
})
export class BitcoinIconsCartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsChannelFilledIcon],svg[bitcoin-icons-channel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 12a3.5 3.5 0 0 1 3.5-3.5h11a3.5 3.5 0 1 1 0 7h-11A3.5 3.5 0 0 1 3 12m3.5-2.5a2.5 2.5 0 0 0 0 5h11a2.5 2.5 0 0 0 0-5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 12a1.5 1.5 0 0 1 1.5-1.5h7v3h-7A1.5 1.5 0 0 1 5 12m9.5-1.5h3a1.5 1.5 0 0 1 0 3h-3z"></svg:path>`,
})
export class BitcoinIconsChannelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsChannelsFilledIcon],svg[bitcoin-icons-channels-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8.5A1.5 1.5 0 0 1 4.5 7H13v3H4.5A1.5 1.5 0 0 1 3 8.5M14 7h5.5a1.5 1.5 0 0 1 0 3H14zM3 12.5A1.5 1.5 0 0 1 4.5 11H10v3H4.5A1.5 1.5 0 0 1 3 12.5m8-1.5h8.5a1.5 1.5 0 0 1 0 3H11zm-8 5.5A1.5 1.5 0 0 1 4.5 15H16v3H4.5A1.5 1.5 0 0 1 3 16.5M17 15h2.5a1.5 1.5 0 0 1 0 3H17z"></svg:path>`,
})
export class BitcoinIconsChannelsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCheckFilledIcon],svg[bitcoin-icons-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.381 5.354a.75.75 0 0 1 .265 1.027l-7.087 12a.75.75 0 0 1-1.164.16L5.48 13.838a.75.75 0 0 1 1.038-1.084l4.23 4.051L17.353 5.62a.75.75 0 0 1 1.027-.265" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCheckFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsClearCharacterFilledIcon],svg[bitcoin-icons-clear-character-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 5a.53.53 0 0 0-.431.222l-3.923 5.486a1.64 1.64 0 0 0-.047 1.839L7.58 18.77A.5.5 0 0 0 8 19h11.359c.906 0 1.641-.735 1.641-1.641V6.64C21 5.735 20.265 5 19.359 5zm1.646 3.146a.5.5 0 0 1 .708 0l3.127 3.128l3.094-3.126a.5.5 0 0 1 .71.704l-3.097 3.129l3.166 3.165a.5.5 0 0 1-.708.708l-3.162-3.163l-3.129 3.16a.5.5 0 0 1-.71-.703l3.132-3.164l-3.13-3.13a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsClearCharacterFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsClockFilledIcon],svg[bitcoin-icons-clock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8.5-.207V6.97a.5.5 0 1 0-1 0v5.015a.5.5 0 0 0 .146.369l2.829 2.828a.5.5 0 1 0 .707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsClockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCloudFilledIcon],svg[bitcoin-icons-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6a4.5 4.5 0 0 1 4.366 3.404a3.5 3.5 0 0 1 5.105 2.64A2.5 2.5 0 0 1 18.5 17h-12a3.5 3.5 0 0 1-1.497-6.665A4.5 4.5 0 0 1 9.5 6"></svg:path>`,
})
export class BitcoinIconsCloudFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCodeFilledIcon],svg[bitcoin-icons-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.737 6.789a.75.75 0 0 1 .475.948l-3 9a.75.75 0 0 1-1.423-.474l3-9a.75.75 0 0 1 .948-.474m2.275 1.141a.75.75 0 0 1 1.058.082l3 3.5a.75.75 0 0 1 0 .976l-3 3.5a.75.75 0 0 1-1.14-.976L18.513 12l-2.581-3.012a.75.75 0 0 1 .08-1.057M7.988 7.93a.75.75 0 0 1 .081 1.058L5.488 12l2.581 3.012a.75.75 0 0 1-1.138.976l-3-3.5a.75.75 0 0 1 0-.976l3-3.5a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCoinsFilledIcon],svg[bitcoin-icons-coins-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16a6 6 0 0 0 5.97-6.597a5.001 5.001 0 1 1-6.567 6.568Q9.7 16 10 16"></svg:path><svg:circle cx="10" cy="10" r="5" fill="currentColor"></svg:circle>`,
})
export class BitcoinIconsCoinsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations0FilledIcon],svg[bitcoin-icons-confirmations-0-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.018 4.806a.5.5 0 0 1 .593-.385a7.75 7.75 0 0 1 4.148 2.395a.5.5 0 0 1-.743.669a6.75 6.75 0 0 0-3.612-2.086a.5.5 0 0 1-.386-.593m5.722 4.48a.5.5 0 0 1 .63.32a7.75 7.75 0 0 1 0 4.79a.5.5 0 0 1-.95-.308a6.75 6.75 0 0 0 0-4.172a.5.5 0 0 1 .32-.63m-1.017 7.195a.5.5 0 0 1 .037.706a7.75 7.75 0 0 1-4.149 2.395a.5.5 0 1 1-.208-.978a6.75 6.75 0 0 0 3.613-2.086a.5.5 0 0 1 .707-.037m-11.445 0a.5.5 0 0 1 .706.037a6.75 6.75 0 0 0 3.613 2.086a.5.5 0 1 1-.208.978a7.75 7.75 0 0 1-4.148-2.395a.5.5 0 0 1 .037-.706M5.26 9.286a.5.5 0 0 1 .32.63a6.75 6.75 0 0 0 0 4.172a.5.5 0 1 1-.95.309a7.75 7.75 0 0 1 0-4.79a.5.5 0 0 1 .63-.321m5.722-4.48a.5.5 0 0 1-.385.593a6.75 6.75 0 0 0-3.613 2.086a.5.5 0 1 1-.743-.67a7.75 7.75 0 0 1 4.148-2.394a.5.5 0 0 1 .593.385" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsConfirmations0FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations1FilledIcon],svg[bitcoin-icons-confirmations-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5.66c0 .244.177.45.415.508a6 6 0 0 1 2.928 1.692a.53.53 0 0 0 .646.105l1.773-1.024a.477.477 0 0 0 .139-.719a9 9 0 0 0-5.348-3.087a.477.477 0 0 0-.553.48z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.74 9.286a.5.5 0 0 1 .63.32a7.75 7.75 0 0 1 0 4.79a.5.5 0 0 1-.95-.308a6.75 6.75 0 0 0 0-4.172a.5.5 0 0 1 .32-.63m-1.017 7.195a.5.5 0 0 1 .037.706a7.75 7.75 0 0 1-4.149 2.395a.5.5 0 1 1-.208-.978a6.75 6.75 0 0 0 3.613-2.086a.5.5 0 0 1 .707-.037m-11.445 0a.5.5 0 0 1 .706.037a6.75 6.75 0 0 0 3.613 2.086a.5.5 0 1 1-.208.978a7.75 7.75 0 0 1-4.148-2.395a.5.5 0 0 1 .037-.706M5.26 9.286a.5.5 0 0 1 .32.63a6.75 6.75 0 0 0 0 4.172a.5.5 0 1 1-.95.309a7.75 7.75 0 0 1 0-4.79a.5.5 0 0 1 .63-.321m5.722-4.48a.5.5 0 0 1-.385.593a6.75 6.75 0 0 0-3.613 2.086a.5.5 0 1 1-.743-.67a7.75 7.75 0 0 1 4.148-2.394a.5.5 0 0 1 .593.385" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsConfirmations1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations2FilledIcon],svg[bitcoin-icons-confirmations-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5.66c0 .244.177.45.415.508a6 6 0 0 1 2.928 1.692a.53.53 0 0 0 .646.105l1.773-1.024a.477.477 0 0 0 .139-.719a9 9 0 0 0-5.348-3.087a.477.477 0 0 0-.553.48zM18 12c0-.588-.084-1.155-.242-1.692a.53.53 0 0 1 .233-.612l1.77-1.023a.478.478 0 0 1 .693.24a9 9 0 0 1 0 6.174a.477.477 0 0 1-.692.24l-1.771-1.023a.53.53 0 0 1-.233-.612A6 6 0 0 0 18 12"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.723 16.481a.5.5 0 0 1 .037.706a7.75 7.75 0 0 1-4.149 2.395a.5.5 0 1 1-.208-.978a6.75 6.75 0 0 0 3.613-2.086a.5.5 0 0 1 .707-.037m-11.445 0a.5.5 0 0 1 .706.037a6.75 6.75 0 0 0 3.613 2.086a.5.5 0 1 1-.208.978a7.75 7.75 0 0 1-4.148-2.395a.5.5 0 0 1 .037-.706M5.26 9.286a.5.5 0 0 1 .32.63a6.75 6.75 0 0 0 0 4.172a.5.5 0 1 1-.95.309a7.75 7.75 0 0 1 0-4.79a.5.5 0 0 1 .63-.321m5.722-4.48a.5.5 0 0 1-.385.593a6.75 6.75 0 0 0-3.613 2.086a.5.5 0 1 1-.743-.67a7.75 7.75 0 0 1 4.148-2.394a.5.5 0 0 1 .593.385" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsConfirmations2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations3FilledIcon],svg[bitcoin-icons-confirmations-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20.385c0 .298.26.531.553.48a9 9 0 0 0 5.348-3.087a.477.477 0 0 0-.14-.72l-1.772-1.023a.53.53 0 0 0-.646.105a6 6 0 0 1-2.928 1.692a.53.53 0 0 0-.415.508zm4.758-6.693a.53.53 0 0 0 .233.612l2.102 1.214a.155.155 0 0 0 .222-.074a9 9 0 0 0 0-6.888a.155.155 0 0 0-.222-.074l-2.102 1.214a.53.53 0 0 0-.233.612c.158.537.242 1.104.242 1.692s-.084 1.155-.242 1.692m.606-8.056q.282.282.537.586a.478.478 0 0 1-.14.72L16.99 7.964a.53.53 0 0 1-.646-.105a6 6 0 0 0-2.928-1.692A.53.53 0 0 1 13 5.66V3.615c0-.298.26-.531.553-.48a9 9 0 0 1 4.811 2.501"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.278 16.481a.5.5 0 0 1 .706.037a6.75 6.75 0 0 0 3.613 2.086a.5.5 0 1 1-.208.978a7.75 7.75 0 0 1-4.148-2.395a.5.5 0 0 1 .037-.706M5.26 9.286a.5.5 0 0 1 .32.63a6.75 6.75 0 0 0 0 4.172a.5.5 0 1 1-.95.309a7.75 7.75 0 0 1 0-4.79a.5.5 0 0 1 .63-.321m5.722-4.48a.5.5 0 0 1-.385.593a6.75 6.75 0 0 0-3.613 2.086a.5.5 0 1 1-.743-.67a7.75 7.75 0 0 1 4.148-2.394a.5.5 0 0 1 .593.385" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsConfirmations3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations4FilledIcon],svg[bitcoin-icons-confirmations-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18.34a.53.53 0 0 0-.415-.508a6 6 0 0 1-2.928-1.692a.53.53 0 0 0-.646-.105L5.238 17.06a.477.477 0 0 0-.139.719a9 9 0 0 0 5.348 3.087a.477.477 0 0 0 .553-.48zm2 2.045c0 .298.26.531.553.48a9 9 0 0 0 5.348-3.087a.477.477 0 0 0-.14-.72l-1.772-1.023a.53.53 0 0 0-.646.105a6 6 0 0 1-2.928 1.692a.53.53 0 0 0-.415.508zm4.758-6.693a.53.53 0 0 0 .233.612l1.77 1.023c.259.149.59.04.693-.24a9 9 0 0 0 0-6.174a.477.477 0 0 0-.692-.24L17.99 9.696a.53.53 0 0 0-.233.612c.158.537.242 1.104.242 1.692s-.084 1.155-.242 1.692M16.542 4.23A9 9 0 0 1 18.9 6.222a.478.478 0 0 1-.14.72l-1.77 1.022a.53.53 0 0 1-.646-.105a6 6 0 0 0-2.928-1.692A.53.53 0 0 1 13 5.66V3.615c0-.298.26-.531.553-.48a9 9 0 0 1 2.988 1.095"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.723 16.481a.5.5 0 0 1 .037.706a7.75 7.75 0 0 1-4.149 2.395a.5.5 0 1 1-.208-.978a6.75 6.75 0 0 0 3.613-2.086a.5.5 0 0 1 .707-.037m-11.445 0a.5.5 0 0 1 .706.037a6.75 6.75 0 0 0 3.613 2.086a.5.5 0 1 1-.208.978a7.75 7.75 0 0 1-4.148-2.395a.5.5 0 0 1 .037-.706M5.26 9.286a.5.5 0 0 1 .32.63a6.75 6.75 0 0 0 0 4.172a.5.5 0 1 1-.95.309a7.75 7.75 0 0 1 0-4.79a.5.5 0 0 1 .63-.321m5.722-4.48a.5.5 0 0 1-.385.593a6.75 6.75 0 0 0-3.613 2.086a.5.5 0 1 1-.743-.67a7.75 7.75 0 0 1 4.148-2.394a.5.5 0 0 1 .593.385" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsConfirmations4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations5FilledIcon],svg[bitcoin-icons-confirmations-5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18.34a.53.53 0 0 0-.415-.508a6 6 0 0 1-2.928-1.692a.53.53 0 0 0-.646-.105L5.238 17.06a.477.477 0 0 0-.139.719a9 9 0 0 0 5.8 3.155a.09.09 0 0 0 .101-.09zM18 12c0-.588-.084-1.155-.242-1.692a.53.53 0 0 1 .233-.612l1.77-1.023c.26-.149.59-.04.693.24a9 9 0 0 1-.151 6.56a.13.13 0 0 1-.182.06l-2.13-1.229a.53.53 0 0 1-.233-.612A6 6 0 0 0 18 12M6.01 9.696a.53.53 0 0 1 .232.612A6 6 0 0 0 6 12c0 .588.084 1.155.242 1.692a.53.53 0 0 1-.233.612l-1.77 1.023a.477.477 0 0 1-.693-.24a9 9 0 0 1 0-6.174a.477.477 0 0 1 .692-.24zm10.98 6.339a.53.53 0 0 0-.647.105a6 6 0 0 1-2.928 1.692a.53.53 0 0 0-.415.508v2.045c0 .298.26.531.553.48a9 9 0 0 0 5.348-3.087a.477.477 0 0 0-.14-.72zm-.647-8.175a.53.53 0 0 0 .646.105l1.773-1.024a.477.477 0 0 0 .139-.719a9 9 0 0 0-5.348-3.087a.477.477 0 0 0-.553.48V5.66c0 .244.177.45.415.508a6 6 0 0 1 2.928 1.692"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.982 4.806a.5.5 0 0 1-.385.593a6.75 6.75 0 0 0-3.613 2.086a.5.5 0 1 1-.743-.67a7.75 7.75 0 0 1 4.148-2.394a.5.5 0 0 1 .593.385" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsConfirmations5FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations6FilledIcon],svg[bitcoin-icons-confirmations-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.236 8.672a.477.477 0 0 0-.692.24A9 9 0 0 0 3 12c0 1.085.192 2.126.544 3.089c.102.28.434.388.692.239l1.773-1.024a.53.53 0 0 0 .233-.612A6 6 0 0 1 6 12c0-.588.084-1.155.242-1.692a.53.53 0 0 0-.233-.612zm.864-2.45a.477.477 0 0 0 .138.72l1.773 1.023a.53.53 0 0 0 .646-.105a6 6 0 0 1 2.928-1.692A.53.53 0 0 0 11 5.66V3.613c0-.298-.26-.53-.553-.48A9 9 0 0 0 5.1 6.222m11.89 9.813a.53.53 0 0 0-.647.105a6 6 0 0 1-2.928 1.692a.53.53 0 0 0-.415.508v2.047c0 .298.26.53.553.48a9 9 0 0 0 5.348-3.089a.477.477 0 0 0-.139-.72zm3.466-.946a.477.477 0 0 1-.692.239l-1.773-1.024a.53.53 0 0 1-.233-.612A6 6 0 0 0 18 12c0-.588-.084-1.155-.242-1.692a.53.53 0 0 1 .233-.612l1.773-1.024a.477.477 0 0 1 .692.24c.352.962.544 2.003.544 3.088a9 9 0 0 1-.544 3.089M11 20.387c0 .298-.26.53-.553.48A9 9 0 0 1 5.1 17.778a.477.477 0 0 1 .139-.72l1.773-1.023a.53.53 0 0 1 .646.105a6 6 0 0 0 2.928 1.692a.53.53 0 0 1 .415.508zm2-16.774c0-.298.26-.53.553-.48A9 9 0 0 1 18.9 6.222c.191.229.12.57-.139.72l-1.773 1.023a.53.53 0 0 1-.646-.105a6 6 0 0 0-2.928-1.692A.53.53 0 0 1 13 5.66z"></svg:path>`,
})
export class BitcoinIconsConfirmations6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConsoleFilledIcon],svg[bitcoin-icons-console-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.22 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06-1.06L9.69 12L3.22 5.53a.75.75 0 0 1 0-1.06M9.25 19a.75.75 0 0 1 .75-.75h10.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsConsoleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsContactsFilledIcon],svg[bitcoin-icons-contacts-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.436 14.778c-.595-.25-1.336-.563-1.336-.803v-1.57A3.55 3.55 0 0 0 15.5 9.6V7.5C15.5 5.57 13.93 4 12 4S8.5 5.57 8.5 7.5v2.1a3.55 3.55 0 0 0 1.4 2.806v1.569c0 .226-.734.54-1.323.792C7.152 15.376 5 16.296 5 18.7v.35h14v-.35c0-2.42-2.144-3.324-3.564-3.922" opacity=".25"></svg:path><svg:path fill="currentColor" d="M8.5 9.5v-2a3.5 3.5 0 1 1 7 0v2c0 1.19-.593 2.24-1.5 2.873v.95a1 1 0 0 0 .629.928l1.586.635A4.43 4.43 0 0 1 19 19H5a4.43 4.43 0 0 1 2.785-4.114l1.586-.635a1 1 0 0 0 .629-.928v-.95A3.5 3.5 0 0 1 8.5 9.5"></svg:path>`,
})
export class BitcoinIconsContactsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCopyFilledIcon],svg[bitcoin-icons-copy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="14" x="6" y="6" fill="currentColor" rx="1.5"></svg:rect><svg:path fill="currentColor" d="M8.064 5.064A1.5 1.5 0 0 1 8.5 5h7A1.5 1.5 0 0 1 17 6.5v11a1.5 1.5 0 0 1-.064.436A1.5 1.5 0 0 0 18 16.5v-11A1.5 1.5 0 0 0 16.5 4h-7a1.5 1.5 0 0 0-1.436 1.064"></svg:path>`,
})
export class BitcoinIconsCopyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCreditCardFilledIcon],svg[bitcoin-icons-credit-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V9H4z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 10h16v6.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5zm3 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 7 13m.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCreditCardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCrossFilledIcon],svg[bitcoin-icons-cross-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class BitcoinIconsCrossFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsDevicesFilledIcon],svg[bitcoin-icons-devices-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 4A1.5 1.5 0 0 0 7 5.5v13A1.5 1.5 0 0 0 8.5 20h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 15.5 4zm1.25 2a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zM9 14.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0-.75.75m4.75.75a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsDevicesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsEditFilledIcon],svg[bitcoin-icons-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.995 17.207V19.5a.5.5 0 0 0 .5.5h2.298a.5.5 0 0 0 .353-.146l9.448-9.448l-3-3l-9.452 9.448a.5.5 0 0 0-.147.353m10.837-11.04l3 3l1.46-1.46a1 1 0 0 0 0-1.414l-1.585-1.586a1 1 0 0 0-1.414 0z"></svg:path>`,
})
export class BitcoinIconsEditFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsEllipsisFilledIcon],svg[bitcoin-icons-ellipsis-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6.5" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="12" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BitcoinIconsEllipsisFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsExchangeFilledIcon],svg[bitcoin-icons-exchange-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.013 10.15a.55.55 0 0 0-.145.493Q19 11.303 19 12a7 7 0 0 1-12.167 4.722a.53.53 0 0 0-.76-.032a.475.475 0 0 0-.027.654a8 8 0 0 0 13.788-6.971c-.079-.383-.545-.498-.821-.222m-1.224-2.99a.475.475 0 0 0 .018-.664A8 8 0 0 0 4.192 13.75c.084.378.546.489.82.215c.13-.13.18-.32.142-.5A7 7 0 0 1 17.038 7.14a.53.53 0 0 0 .75.021"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.125 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 1 1 0-1h1.5V5.5a.5.5 0 0 1 .5-.5M5.521 16.147A.5.5 0 0 1 5.875 16h2a.5.5 0 0 1 0 1h-1.5v1.5a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.224 12.334v1.941c.662-.074 1.138-.457 1.138-1.006c0-.558-.525-.766-1.116-.93zm-1.433-1.679c0 .555.57.785.985.902V9.741c-.602.08-.985.44-.985.914"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m.224-1.5h-.448v-.61c-1.075-.07-1.731-.672-1.794-1.534h.7c.05.563.52.859 1.094.919v-2.07l-.219-.063c-.875-.251-1.422-.7-1.422-1.454c0-.86.703-1.455 1.64-1.55V8.5h.45v.629c.99.066 1.69.673 1.716 1.471h-.656c-.06-.498-.481-.81-1.06-.867v1.944l.218.06c.58.154 1.575.493 1.575 1.543c0 .853-.645 1.531-1.794 1.61z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsExchangeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsExitFilledIcon],svg[bitcoin-icons-exit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.99 7.823a.75.75 0 0 1 1.061.021l3.49 3.637a.75.75 0 0 1 0 1.038l-3.49 3.637a.75.75 0 0 1-1.082-1.039l2.271-2.367h-6.967a.75.75 0 0 1 0-1.5h6.968l-2.272-2.367a.75.75 0 0 1 .022-1.06"></svg:path><svg:path d="M3.25 4A.75.75 0 0 1 4 3.25h9.455a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0V4.75H4.75v14.5h7.954V17a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75z"></svg:path></svg:g>`,
})
export class BitcoinIconsExitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsExportFilledIcon],svg[bitcoin-icons-export-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.37 10.384a1.5 1.5 0 0 0 0 2.121l.067.067a1.5 1.5 0 0 0 2.122 0l3.115-3.115c.144-.144.253-.31.326-.488V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.851a1.5 1.5 0 0 0-.366.269z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.218 4.782a.5.5 0 0 1 0 .708l-6.364 6.364a.5.5 0 0 1-.708-.707l6.364-6.365a.5.5 0 0 1 .707 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5h-4.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsExportFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsFileFilledIcon],svg[bitcoin-icons-file-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 4H7.5A1.5 1.5 0 0 0 6 5.5v13A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5V9h-.004zm-1 1.604V9.75c0 .138.112.25.25.25h4.147a.25.25 0 0 0 .176-.427l-4.146-4.146a.25.25 0 0 0-.427.177" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsFileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsFlipHorizontalFilledIcon],svg[bitcoin-icons-flip-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.079 3.462a.75.75 0 0 1 1.06.016l3.399 3.5a.75.75 0 0 1 0 1.045l-3.398 3.5a.75.75 0 1 1-1.077-1.045l2.163-2.228H5a.75.75 0 1 1 0-1.5h12.226l-2.163-2.227a.75.75 0 0 1 .016-1.06m-6.158 9a.75.75 0 0 1 .015 1.06L6.773 15.75H19a.75.75 0 0 1 0 1.5H6.774l2.162 2.227a.75.75 0 0 1-1.076 1.045l-3.398-3.5a.75.75 0 0 1 0-1.045l3.398-3.5a.75.75 0 0 1 1.06-.015" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsFlipHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsFlipVerticalFilledIcon],svg[bitcoin-icons-flip-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4.25a.75.75 0 0 1 .75.75v12.227l2.227-2.163a.75.75 0 1 1 1.045 1.076l-3.5 3.398a.75.75 0 0 1-1.045 0l-3.5-3.398a.75.75 0 1 1 1.045-1.076l2.228 2.162V5a.75.75 0 0 1 .75-.75m8.477.212a.75.75 0 0 1 1.045 0l3.5 3.398a.75.75 0 0 1-1.045 1.076L17.25 6.774V19a.75.75 0 0 1-1.5 0V6.774l-2.228 2.162a.75.75 0 0 1-1.045-1.076z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsFlipVerticalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsGearFilledIcon],svg[bitcoin-icons-gear-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17.653 10.35l2.056.336a.35.35 0 0 1 .291.343v1.913a.35.35 0 0 1-.288.342l-2.058.362a5.8 5.8 0 0 1-.49 1.185l1.217 1.69a.35.35 0 0 1-.036.45l-1.353 1.352a.35.35 0 0 1-.445.04l-1.707-1.198q-.566.315-1.193.5l-.363 2.048a.35.35 0 0 1-.343.287h-1.913a.35.35 0 0 1-.343-.29l-.34-2.039a6 6 0 0 1-1.197-.495l-1.694 1.186a.35.35 0 0 1-.446-.038L5.655 16.97a.35.35 0 0 1-.036-.448l1.197-1.674a6 6 0 0 1-.5-1.204l-2.029-.36A.35.35 0 0 1 4 12.942v-1.913c0-.17.123-.315.29-.343l2.03-.338q.183-.63.5-1.203L5.636 7.453a.35.35 0 0 1 .039-.445l1.352-1.352c.12-.12.31-.136.448-.037l1.68 1.2a6 6 0 0 1 1.196-.491l.333-2.036A.35.35 0 0 1 11.028 4h1.913c.17 0 .314.122.343.288l.359 2.047q.624.182 1.193.497l1.685-1.211a.35.35 0 0 1 .45.036l1.352 1.352c.12.12.136.308.039.446l-1.2 1.71q.31.565.49 1.185M9.565 12a2.435 2.435 0 1 0 4.87 0a2.435 2.435 0 0 0-4.87 0" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsGearFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsGlobeFilledIcon],svg[bitcoin-icons-globe-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.51 6.617c-.518 1.341-.855 3.245-.855 5.385s.337 4.044.856 5.385c.26.673.552 1.166.838 1.478s.506.385.651.385s.366-.073.652-.385c.285-.312.577-.805.837-1.478c.52-1.341.856-3.245.856-5.385s-.337-4.044-.856-5.385c-.26-.673-.552-1.166-.838-1.478s-.506-.385-.651-.385s-.366.073-.651.385s-.578.805-.838 1.478m-.268-2.49c.455-.499 1.048-.873 1.758-.873s1.303.374 1.758.872c.455.497.83 1.175 1.13 1.95c.601 1.553.957 3.649.957 5.926s-.356 4.373-.957 5.926c-.3.774-.675 1.453-1.13 1.95s-1.048.872-1.758.872s-1.303-.375-1.758-.872s-.83-1.175-1.13-1.95c-.601-1.553-.957-3.649-.957-5.926s.356-4.373.957-5.926c.3-.775.675-1.453 1.13-1.95"></svg:path><svg:path d="M12 4.746a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5m-8.75 7.25a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"></svg:path><svg:path d="M3.25 11.99a.75.75 0 0 1 .75-.75l16 .012a.75.75 0 1 1 0 1.5l-16-.011a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class BitcoinIconsGlobeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsGraphFilledIcon],svg[bitcoin-icons-graph-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 18a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:rect width="3" height="7" x="6.5" y="11.5" fill="currentColor" rx=".5"></svg:rect><svg:rect width="3" height="13" x="10.5" y="5.5" fill="currentColor" rx=".5"></svg:rect><svg:rect width="3" height="10" x="14.5" y="8.5" fill="currentColor" rx=".5"></svg:rect>`,
})
export class BitcoinIconsGraphFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsGridFilledIcon],svg[bitcoin-icons-grid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.2V5.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8H5.8a.8.8 0 0 1-.8-.8m8 0V5.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8h-4.4a.8.8 0 0 1-.8-.8m0 8v-4.4a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8h-4.4a.8.8 0 0 1-.8-.8m-8 0v-4.4a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8H5.8a.8.8 0 0 1-.8-.8"></svg:path>`,
})
export class BitcoinIconsGridFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsHiddenFilledIcon],svg[bitcoin-icons-hidden-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.33 7.17A16 16 0 0 0 12 7c-4.97 0-9 2.239-9 5c0 1.44 1.096 2.738 2.85 3.65l2.362-2.362a4 4 0 0 1 5.076-5.076zm-3.1 8.756q.375.074.77.074a4 4 0 0 0 3.926-4.77l2.647-2.646C20.078 9.478 21 10.68 21 12c0 2.761-4.03 5-9 5q-.899 0-1.749-.094zm6.563-10.719a1 1 0 1 1 1.414 1.414L6.48 19.35a1 1 0 1 1-1.414-1.414z"></svg:path>`,
})
export class BitcoinIconsHiddenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsHomeFilledIcon],svg[bitcoin-icons-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.827 3.834a1.5 1.5 0 0 0-2.26.054L5 10.58v8.92A1.5 1.5 0 0 0 6.5 21h1.79a1.5 1.5 0 0 0 1.5-1.5v-3.011a1.5 1.5 0 0 1 1.5-1.5h1.42a1.5 1.5 0 0 1 1.5 1.5V19.5a1.5 1.5 0 0 0 1.5 1.5h1.79a1.5 1.5 0 0 0 1.5-1.5v-8.92z"></svg:path>`,
})
export class BitcoinIconsHomeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsInfoCircleFilledIcon],svg[bitcoin-icons-info-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-7.75-4.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M13 17.5v-7h-2v7z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsInfoCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsInfoFilledIcon],svg[bitcoin-icons-info-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="7.25" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11 10h2v8h-2z"></svg:path>`,
})
export class BitcoinIconsInfoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsInvoiceFilledIcon],svg[bitcoin-icons-invoice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4A1.5 1.5 0 0 0 6 5.5v13A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 4zm6.854 4.354a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 .708.708zM11.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsInvoiceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsKeyFilledIcon],svg[bitcoin-icons-key-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.865 7.374c.74 2.968-1.163 5.998-4.25 6.767a6 6 0 0 1-1.155.172l-3.435 5.471a2 2 0 0 1-1.21.877l-1.974.492a1 1 0 0 1-1.212-.728l-.445-1.786a2 2 0 0 1 .246-1.547l3.157-5.028a5.3 5.3 0 0 1-.9-1.903c-.74-2.968 1.162-5.998 4.249-6.768s6.189 1.013 6.929 3.98m-4.627 1.324c.685-.171 1.108-.844.944-1.504s-.854-1.055-1.54-.884s-1.109.844-.944 1.503c.164.66.854 1.056 1.54.885" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsKeyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLightningCircleFilledIcon],svg[bitcoin-icons-lightning-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-1.58-3.89l6.215-5.966a.2.2 0 0 0-.14-.344l-4.519.052a.2.2 0 0 1-.184-.283l1.654-3.64c.09-.2-.16-.378-.32-.227l-5.76 5.448a.2.2 0 0 0 .137.345h4.641a.2.2 0 0 1 .176.295l-2.215 4.08c-.11.2.15.397.314.24" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsLightningCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLightningFilledIcon],svg[bitcoin-icons-lightning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.496 10.709l-8.636 8.88c-.24.246-.638-.039-.482-.345l3.074-6.066a.3.3 0 0 0-.268-.436H5.718a.3.3 0 0 1-.214-.51l8.01-8.115c.232-.235.618.023.489.328L11.706 9.86a.3.3 0 0 0 .28.417l6.291-.078a.3.3 0 0 1 .22.509"></svg:path>`,
})
export class BitcoinIconsLightningFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLinkFilledIcon],svg[bitcoin-icons-link-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 11.293l-2.12 2.121a4 4 0 0 0 5.657 5.657l2.828-2.828a4 4 0 0 0 0-5.657l-1.06 1.06a2.5 2.5 0 0 1 0 3.536l-2.83 2.828a2.5 2.5 0 0 1-3.535-3.535l2.12-2.121z"></svg:path><svg:path fill="currentColor" d="m15.889 11.646l2.121-2.12a2.5 2.5 0 0 0-3.535-3.536l-2.829 2.828a2.5 2.5 0 0 0 0 3.536l-1.06 1.06a4 4 0 0 1 0-5.657l2.828-2.828a4 4 0 0 1 5.657 5.657l-2.121 2.121z"></svg:path>`,
})
export class BitcoinIconsLinkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLinuxTerminalFilledIcon],svg[bitcoin-icons-linux-terminal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.25 19a.75.75 0 0 1 .75-.75h10.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75m-2.645-2.5a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-1.75a.75.75 0 0 1 .75-.75m0-12a.75.75 0 0 1 .75.75V7a.75.75 0 1 1-1.5 0V5.25a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M2.965 9.51c0-1.907 1.753-3.208 3.707-3.208c1.925 0 3.449 1.143 3.746 2.456a.75.75 0 1 1-1.464.33c-.103-.457-.865-1.286-2.282-1.286c-1.39 0-2.207.87-2.207 1.707c0 .257.06.428.145.558c.09.138.233.272.456.404c.45.267 1.061.44 1.816.654l.138.04c.755.215 1.655.48 2.356.97c.76.532 1.289 1.33 1.289 2.503c0 .968-.578 1.772-1.302 2.302a4.62 4.62 0 0 1-2.691.862c-1.995 0-3.446-1.237-3.888-2.655a.75.75 0 1 1 1.432-.447c.244.782 1.107 1.602 2.456 1.602c.678 0 1.333-.227 1.805-.573c.48-.35.688-.753.688-1.091c0-.634-.247-.992-.65-1.274c-.46-.323-1.111-.53-1.906-.757l-.19-.053c-.691-.196-1.49-.421-2.118-.793a2.8 2.8 0 0 1-.95-.877a2.5 2.5 0 0 1-.386-1.375"></svg:path></svg:g>`,
})
export class BitcoinIconsLinuxTerminalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLockFilledIcon],svg[bitcoin-icons-lock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="14" height="10" x="5" y="11" fill="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 6.75a.25.25 0 0 0-.25.25v5h-1.5V7c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v5h-1.5V7a.25.25 0 0 0-.25-.25z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsLockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMagicWandFilledIcon],svg[bitcoin-icons-magic-wand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.999 20l7-7.003a2.822 2.822 0 0 0-3.99-3.993l-7.007 6.997a2.827 2.827 0 1 0 3.997 4M11 11l2 2l1-1a1.414 1.414 0 1 0-2-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.759 4.897c.066-.247.416-.247.482 0L7.6 6.225a.25.25 0 0 0 .176.176l1.328.358c.247.066.247.416 0 .482L7.775 7.6a.25.25 0 0 0-.176.176L7.24 9.103c-.066.247-.416.247-.482 0L6.4 7.775a.25.25 0 0 0-.176-.176l-1.329-.358c-.246-.066-.246-.416 0-.482l1.33-.359a.25.25 0 0 0 .176-.176zm10-1c.066-.247.416-.247.482 0l.358 1.328a.25.25 0 0 0 .176.176l1.328.358c.247.066.247.416 0 .482l-1.328.358a.25.25 0 0 0-.176.176l-.358 1.328c-.066.247-.416.247-.482 0L16.4 6.775a.25.25 0 0 0-.177-.176l-1.328-.358c-.246-.066-.246-.416 0-.482l1.328-.358a.25.25 0 0 0 .177-.176zm1 9c.066-.247.416-.247.482 0l.358 1.328a.25.25 0 0 0 .176.176l1.328.358c.247.066.247.416 0 .482l-1.328.358a.25.25 0 0 0-.176.176l-.358 1.328c-.066.247-.416.247-.482 0l-.358-1.328a.25.25 0 0 0-.177-.176l-1.328-.358c-.246-.066-.246-.416 0-.482l1.328-.358a.25.25 0 0 0 .177-.176z"></svg:path>`,
})
export class BitcoinIconsMagicWandFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMenuFilledIcon],svg[bitcoin-icons-menu-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18" height="1.5" x="3" y="7.001" fill="currentColor" rx=".75"></svg:rect><svg:rect width="15" height="1.5" x="3" y="11.251" fill="currentColor" rx=".75"></svg:rect><svg:rect width="18" height="1.5" x="3" y="15.499" fill="currentColor" rx=".75"></svg:rect>`,
})
export class BitcoinIconsMenuFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMessageFilledIcon],svg[bitcoin-icons-message-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 18.896V16H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6l-3.073 3.073a.25.25 0 0 1-.427-.177M8 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M8.5 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsMessageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMilkFilledIcon],svg[bitcoin-icons-milk-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.278 4.977a.95.95 0 0 0-.832-.477h-2.858a.96.96 0 0 0-.861.518c-.13.253-.296.589-.48.982h5.569a22 22 0 0 0-.538-1.023"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 12c0-1.542.66-3.48 1.302-5h6.475c.616 1.43 1.223 3.275 1.223 5v7a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zM9 12a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6A.5.5 0 0 0 9 12" clip-rule="evenodd"></svg:path><svg:rect width="7" height="3" x="8.5" y="3" fill="currentColor" rx="1"></svg:rect>`,
})
export class BitcoinIconsMilkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMinerFilledIcon],svg[bitcoin-icons-miner-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.642 18.37a1.224 1.224 0 0 1 0-1.74A8.97 8.97 0 0 1 12 14a8.97 8.97 0 0 1 6.358 2.63a1.224 1.224 0 0 1 0 1.74A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.358-2.63"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 7.5h7V8h.5c0 2.637-1.681 5-4 5s-4-2.363-4-5h.5zm.523 1C9.213 10.568 10.566 12 12 12s2.787-1.432 2.977-3.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 3c2.485 0 4.5 2.239 4.5 5h-9c0-2.761 2.015-5 4.5-5m0 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-5.5 1A.5.5 0 0 1 7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsMinerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMiningDeviceFilledIcon],svg[bitcoin-icons-mining-device-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 12c0-.786.26-1.512.697-2.096L11.293 12l-2.096 2.096A3.5 3.5 0 0 1 8.5 12m5.596-2.803A3.5 3.5 0 0 0 12 8.5c-.786 0-1.512.26-2.096.697L12 11.293zM12 12.707l2.096 2.096A3.5 3.5 0 0 1 12 15.5c-.786 0-1.512-.26-2.096-.697zm.707-.707l2.096-2.096c.438.584.697 1.31.697 2.096s-.26 1.512-.697 2.096z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 5H5v14h14zM8.484 14.809l-1.338 1.338a.5.5 0 1 0 .708.707l1.337-1.338A4.48 4.48 0 0 0 12 16.5a4.48 4.48 0 0 0 2.809-.984l1.337 1.338a.5.5 0 0 0 .708-.707l-1.338-1.338A4.48 4.48 0 0 0 16.5 12a4.48 4.48 0 0 0-.984-2.809l1.338-1.337a.5.5 0 0 0-.708-.708L14.81 8.484A4.48 4.48 0 0 0 12 7.5a4.48 4.48 0 0 0-2.809.984L7.854 7.146a.5.5 0 1 0-.708.708L8.484 9.19A4.48 4.48 0 0 0 7.5 12a4.48 4.48 0 0 0 .984 2.809" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsMiningDeviceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMiningFilledIcon],svg[bitcoin-icons-mining-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.101 2.9a.5.5 0 0 1 .378-.056l3.397.847a.5.5 0 0 1 .37.573c2.365 1.107 4.125 2.93 4.815 4.983a.5.5 0 0 1-.82.52c-1.21-1.16-2.794-2.171-4.642-2.902l-.025.1a.5.5 0 0 1-.606.364l-.485-.12l-.907 3.638a.5.5 0 0 1 .364.606l-2.298 9.218a.5.5 0 0 1-.606.364L8.61 20.43a.5.5 0 0 1-.364-.606l2.298-9.218a.5.5 0 0 1 .606-.364l.907-3.638l-.485-.121a.5.5 0 0 1-.364-.607l.025-.1c-1.974-.222-3.847-.073-5.46.383a.5.5 0 0 1-.48-.844c1.572-1.488 3.982-2.272 6.59-2.14a.5.5 0 0 1 .218-.274"></svg:path>`,
})
export class BitcoinIconsMiningFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMinusFilledIcon],svg[bitcoin-icons-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.85 11.25h14.302a.75.75 0 1 1 0 1.5H4.85a.75.75 0 0 1 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMixedFilledIcon],svg[bitcoin-icons-mixed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.504 15.7c-1.172 1.09-2.594 1.873-4.513 1.85a.75.75 0 0 1 .018-1.5c1.435.018 2.502-.545 3.473-1.449c.778-.724 1.451-1.62 2.187-2.6q.33-.442.684-.903c.994-1.288 2.139-2.62 3.69-3.514c1.577-.909 3.515-1.333 6.037-.924a.75.75 0 1 1-.24 1.48c-2.21-.357-3.794.021-5.049.744c-1.28.738-2.276 1.867-3.25 3.13q-.307.4-.62.818c-.75 1-1.531 2.043-2.417 2.867"></svg:path><svg:path d="M16.04 3.469a.75.75 0 0 1 1.06.001l3.431 3.44a.75.75 0 0 1 0 1.06l-3.432 3.44a.75.75 0 0 1-1.062-1.06l2.904-2.91l-2.903-2.91a.75.75 0 0 1 .001-1.061m.016 9.185a.75.75 0 0 1 1.06.032l3.39 3.6a.75.75 0 0 1-.03 1.06l-3.391 3.2a.75.75 0 0 1-1.03-1.091l2.846-2.686l-2.877-3.055a.75.75 0 0 1 .032-1.06"></svg:path><svg:path d="M7.53 9.396C6.574 8.49 5.496 7.923 4.014 7.95a.75.75 0 0 1-.026-1.5c1.962-.035 3.403.748 4.575 1.856c.921.872 1.71 1.983 2.46 3.04q.255.36.506.709c.936 1.29 1.876 2.441 3.094 3.2c1.187.74 2.692 1.14 4.822.804a.75.75 0 0 1 .233 1.482c-2.459.387-4.333-.068-5.848-1.013c-1.485-.925-2.569-2.287-3.515-3.593q-.285-.393-.553-.773c-.745-1.048-1.426-2.006-2.23-2.766"></svg:path></svg:g>`,
})
export class BitcoinIconsMixedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMnemonicFilledIcon],svg[bitcoin-icons-mnemonic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17.5zm1.5 0H9V8H6.5zM9 9.667H6.5v1.5H9zm-2.5 3.166H9v1.5H6.5zM9 16H6.5v1.5H9zm1.75-9.5h2.5V8h-2.5zm2.5 3.167h-2.5v1.5h2.5zm-2.5 3.166h2.5v1.5h-2.5zM13.25 16h-2.5v1.5h2.5zM15 6.5h2.5V8H15zm2.5 3.167H15v1.5h2.5zM15 12.833h2.5v1.5H15zM17.5 16H15v1.5h2.5z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsMnemonicFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMoonFilledIcon],svg[bitcoin-icons-moon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.993 13.313a6 6 0 0 1-7.306-7.306a7 7 0 1 0 7.306 7.306"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 8.25a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 9.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5M7.5 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsMoonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNoDollarsFilledIcon],svg[bitcoin-icons-no-dollars-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.509 18.216A9 9 0 1 1 5.784 5.49l3.097 3.097a2.5 2.5 0 0 0-.224 1.06c0 1.352.98 2.156 2.549 2.607l.392.113v3.71c-1.03-.108-1.872-.637-1.96-1.647H8.383c.113 1.544 1.289 2.622 3.215 2.75v1.093h.804V17.18c1.64-.114 2.707-.908 3.073-1.999zm.651-.763l-3.574-3.574c-.193-1.248-1.251-1.841-2.158-2.158l-1.026-1.026V7.937c1.039.103 1.794.662 1.902 1.554h1.176c-.05-1.432-1.304-2.52-3.078-2.637V5.726h-.804v1.142c-.853.087-1.598.405-2.124.899L6.547 4.84A9 9 0 0 1 19.16 17.454"></svg:path><svg:path fill="currentColor" d="M9.834 9.541v.048c0 .933.897 1.353 1.624 1.576zm1.764.349l-1.337-1.336c.308-.312.768-.527 1.337-.602zm1.512 2.928a9 9 0 0 0-.669-.21l-.04-.01v3.48c1.187-.133 2.04-.819 2.04-1.804q0-.068-.006-.132z"></svg:path>`,
})
export class BitcoinIconsNoDollarsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNode0ConnectionsFilledIcon],svg[bitcoin-icons-node-0-connections-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.54 7.165c.5-.162.901-.543 1.091-1.03l4.233 4.234a1.76 1.76 0 0 0-1.03 1.092zm4.295 5.375l-4.296 4.295c.5.162.902.543 1.092 1.03l4.233-4.234a1.76 1.76 0 0 1-1.03-1.092m-5.374 4.296l-4.295-4.296c-.162.5-.542.902-1.03 1.092l4.234 4.233c.19-.487.591-.867 1.092-1.03m-.001-9.669l-4.295 4.296a1.76 1.76 0 0 0-1.03-1.092l4.234-4.233c.19.487.591.867 1.092 1.03"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m-4-7.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M3 12a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m15.5-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M16 12a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsNode0ConnectionsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNode1ConnectionFilledIcon],svg[bitcoin-icons-node-1-connection-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.54 7.165c.5-.162.901-.543 1.091-1.03l4.233 4.234a1.76 1.76 0 0 0-1.03 1.092zm4.295 5.375l-4.296 4.295c.5.162.902.543 1.092 1.03l4.233-4.234a1.76 1.76 0 0 1-1.03-1.092m-5.374 4.296l-4.295-4.296c-.162.5-.542.902-1.03 1.092l4.234 4.233c.19-.487.591-.867 1.092-1.03m-.001-9.669l-4.295 4.296a1.76 1.76 0 0 0-1.03-1.092l4.234-4.233c.19.487.591.867 1.092 1.03"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m2.5 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path><svg:circle cx="5.5" cy="12" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2M16 12a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsNode1ConnectionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNode2ConnectionsFilledIcon],svg[bitcoin-icons-node-2-connections-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.54 7.165c.5-.162.901-.543 1.091-1.03l4.233 4.234a1.76 1.76 0 0 0-1.03 1.092zm4.295 5.375l-4.296 4.295c.5.162.902.543 1.092 1.03l4.233-4.234a1.76 1.76 0 0 1-1.03-1.092m-5.374 4.296l-4.295-4.296c-.162.5-.542.902-1.03 1.092l4.234 4.233c.19-.487.591-.867 1.092-1.03m-.001-9.669l-4.295 4.296a1.76 1.76 0 0 0-1.03-1.092l4.234-4.233c.19.487.591.867 1.092 1.03"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="18.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="5.5" cy="12" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2M16 12a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsNode2ConnectionsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNode3ConnectionsFilledIcon],svg[bitcoin-icons-node-3-connections-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.54 7.165c.5-.162.901-.543 1.091-1.03l4.233 4.234a1.76 1.76 0 0 0-1.03 1.092zm4.295 5.375l-4.296 4.295c.5.162.902.543 1.092 1.03l4.233-4.234a1.76 1.76 0 0 1-1.03-1.092m-5.374 4.296l-4.295-4.296c-.162.5-.542.902-1.03 1.092l4.234 4.233c.19-.487.591-.867 1.092-1.03m-.001-9.669l-4.295 4.296a1.76 1.76 0 0 0-1.03-1.092l4.234-4.233c.19.487.591.867 1.092 1.03"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="18.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="5.5" cy="12" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="18.5" cy="12" r="2.5" fill="currentColor"></svg:circle>`,
})
export class BitcoinIconsNode3ConnectionsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNodeFilledIcon],svg[bitcoin-icons-node-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.31 4.815l7.496 7.496l-7.495 7.495l-7.496-7.495zm-5.373 7.496l5.374 5.374l5.374-5.374l-5.374-5.374z" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="5.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="5.5" cy="12" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="18.5" cy="12" r="2.5" fill="currentColor"></svg:circle>`,
})
export class BitcoinIconsNodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNodeHardwareFilledIcon],svg[bitcoin-icons-node-hardware-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 9.884a.73.73 0 0 0-.364-.646l-7.494-4.395a2.21 2.21 0 0 0-2.23-.003L3.368 9.237a.73.73 0 0 0-.365.647H3v4.43h.004a.73.73 0 0 0 .376.621l7.563 4.243a2.21 2.21 0 0 0 2.167-.003l7.515-4.24a.73.73 0 0 0 .375-.62zm-16.236.563a.375.375 0 1 0-.368.654l6.359 3.587a2.59 2.59 0 0 0 2.551-.006l6.278-3.582a.375.375 0 0 0-.372-.652l-6.278 3.583c-.56.32-1.248.322-1.81.004z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsNodeHardwareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPantheonFilledIcon],svg[bitcoin-icons-pantheon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.99 8H4.01A.01.01 0 0 1 4 7.99V6.507a.01.01 0 0 1 .007-.01l7.99-2.496h.006l7.99 2.497a.01.01 0 0 1 .007.01V7.99a.01.01 0 0 1-.01.01M4 20h16v-2H4zm2-3h2V9H6zm10 0h2V9h-2zm-5 0h2V9h-2z"></svg:path>`,
})
export class BitcoinIconsPantheonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPasswordFilledIcon],svg[bitcoin-icons-password-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.91 8a.91.91 0 0 0-.91.91v6.18c0 .503.407.91.91.91h16.18a.91.91 0 0 0 .91-.91V8.91a.91.91 0 0 0-.91-.91zM7 13.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsPasswordFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPhotoFilledIcon],svg[bitcoin-icons-photo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm3.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-2.022 4.735l1.598-2.557a.5.5 0 0 1 .848 0l1.305 2.088l2.09-3.537a.5.5 0 0 1 .861 0l2.374 4.017a.5.5 0 0 1-.43.754h-4.748a.5.5 0 0 1-.139-.02a.5.5 0 0 1-.14.02H7.903a.5.5 0 0 1-.424-.765" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsPhotoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPieChartFilledIcon],svg[bitcoin-icons-pie-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 11.5a5 5 0 0 0-5-5v5z"></svg:path><svg:path fill="currentColor" d="M11.5 7.5a5 5 0 1 0 5 5h-5z"></svg:path>`,
})
export class BitcoinIconsPieChartFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPlusFilledIcon],svg[bitcoin-icons-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v7.25H20a.75.75 0 0 1 0 1.5h-7.25V20a.75.75 0 0 1-1.5 0v-7.25H4a.75.75 0 0 1 0-1.5h7.25V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsPlusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPodcastFilledIcon],svg[bitcoin-icons-podcast-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 0-4 4h2a.5.5 0 0 1 0 1H8v1h2a.5.5 0 0 1 0 1H8v1h2a.5.5 0 0 1 0 1H8a4 4 0 0 0 8 0h-2a.5.5 0 0 1 0-1h2v-1h-2a.5.5 0 0 1 0-1h2V8h-2a.5.5 0 0 1 0-1h2a4 4 0 0 0-4-4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 20v-2.5h1V20zm-3.5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.227 13.709a.5.5 0 0 1 .647.284a5.5 5.5 0 0 0 10.16.222a.5.5 0 0 1 .916.403a6.5 6.5 0 0 1-12.008-.262a.5.5 0 0 1 .285-.647" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsPodcastFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPointOfSaleFilledIcon],svg[bitcoin-icons-point-of-sale-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18.5zm2 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 8 11zM8.5 17a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm5.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM8 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M8.5 13a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm5.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsPointOfSaleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsProxyFilledIcon],svg[bitcoin-icons-proxy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 .75-.75M6.065 8.399a.75.75 0 0 1 1.06.02l2.953 3.06c.28.29.28.751 0 1.042l-2.953 3.06a.75.75 0 1 1-1.08-1.04l1.728-1.79H4a.75.75 0 1 1 0-1.5h3.773L6.046 9.458a.75.75 0 0 1 .019-1.06m10.461.001a.75.75 0 0 1 1.06.02l2.954 3.06c.28.29.28.751 0 1.042l-2.953 3.06a.75.75 0 1 1-1.08-1.04l1.727-1.79l-3.772-.001a.75.75 0 0 1 0-1.5h3.773l-1.728-1.79a.75.75 0 0 1 .02-1.061" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsProxyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsQrCodeFilledIcon],svg[bitcoin-icons-qr-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5h4.5v4.5H5zm1.5 1.5V8H8V6.5zm8-1.5H19v4.5h-4.5zM16 6.5V8h1.5V6.5zm-11 8h4.5V19H5zM6.5 16v1.5H8V16z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 11.25h1.5v1.5H5zm3 0h1.5v1.5H8zm3.167 0h1.5v1.5h-1.5zm0 3.125h1.5v1.5h-1.5zm0 3.125h1.5V19h-1.5zm0-9.375h1.5v1.5h-1.5zm0-3.125h1.5v1.5h-1.5zm3.166 6.25h1.5v1.5h-1.5zm3.167 0H19v1.5h-1.5zm-3.167 3.125h1.5v1.5h-1.5zm3.167 0H19v1.5h-1.5zM14.333 17.5h1.5V19h-1.5zm3.167 0H19V19h-1.5z"></svg:path>`,
})
export class BitcoinIconsQrCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsQuestionCircleFilledIcon],svg[bitcoin-icons-question-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8 3.5v2h-2v-2zM10.5 10c0-.844.59-1.5 1.5-1.5c.523 0 .88.17 1.105.395c.225.224.395.582.395 1.105c0 .32-.081.462-.168.57c-.113.14-.251.244-.507.437l-.183.14c-.335.256-.774.615-1.11 1.178c-.343.574-.532 1.279-.532 2.175h2c0-.604.123-.94.25-1.15c.133-.223.318-.394.608-.615q.053-.042.12-.09c.255-.191.626-.468.909-.817c.382-.472.613-1.06.613-1.828c0-.977-.33-1.87-.98-2.52S12.977 6.5 12 6.5c-2.09 0-3.5 1.627-3.5 3.5z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsQuestionCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsQuestionFilledIcon],svg[bitcoin-icons-question-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 15.75h2.5v2.5h-2.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 8c-1.195 0-2 1.086-2 2H8c0-1.802 1.496-4 4-4c2.496 0 4 2.142 4 4c0 1.578-1.108 2.378-1.794 2.873l-.116.084c-.755.552-1.09.866-1.09 1.543h-2c0-1.762 1.161-2.61 1.907-3.155l.003-.002c.832-.609 1.09-.84 1.09-1.343c0-.95-.796-2-2-2" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsQuestionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsReceiveFilledIcon],svg[bitcoin-icons-receive-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 14.997a.75.75 0 0 1 .75.75V18c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-2.253a.75.75 0 0 1 1.5 0V18A1.75 1.75 0 0 1 18 19.75H6A1.75 1.75 0 0 1 4.25 18v-2.253a.75.75 0 0 1 .75-.75M12.202 4.25a.75.75 0 0 1 .75.75v8.086a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M8.322 10.626a.75.75 0 0 1 1.06-.013l2.82 2.755l2.82-2.755a.75.75 0 1 1 1.048 1.073l-3.344 3.267a.75.75 0 0 1-1.048 0l-3.344-3.267a.75.75 0 0 1-.012-1.06"></svg:path></svg:g>`,
})
export class BitcoinIconsReceiveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsRefreshFilledIcon],svg[bitcoin-icons-refresh-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.64 9.788a.75.75 0 0 1 .53.918a5 5 0 0 0 7.33 5.624a.75.75 0 1 1 .75 1.3a6.501 6.501 0 0 1-9.529-7.312a.75.75 0 0 1 .919-.53M8.75 6.37a6.5 6.5 0 0 1 9.529 7.312a.75.75 0 1 1-1.45-.388A5.001 5.001 0 0 0 9.5 7.67a.75.75 0 1 1-.75-1.3"></svg:path><svg:path d="M5.72 9.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 0 1-1.06-1.06zm9 1.5a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class BitcoinIconsRefreshFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsRelayFilledIcon],svg[bitcoin-icons-relay-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.383 4.844a.75.75 0 0 1 .935-.5a8 8 0 0 1-3.765 15.524a.75.75 0 0 1 .271-1.475a6.5 6.5 0 0 0 3.06-12.614a.75.75 0 0 1-.501-.935m-2.66-.02a.75.75 0 0 1-.514.928a6.5 6.5 0 0 0-2.544 11.091a.75.75 0 0 1-1 1.118A8 8 0 0 1 9.794 4.31a.75.75 0 0 1 .928.514"></svg:path><svg:path d="M10.842 6.88a5.25 5.25 0 0 1 6.276 6.292a.75.75 0 1 1-1.463-.335a3.75 3.75 0 1 0-2.041 2.548a.75.75 0 0 1 .645 1.354a5.25 5.25 0 1 1-3.417-9.86"></svg:path><svg:path d="M12.297 11.045a1 1 0 0 0-.986.23a.75.75 0 0 1-1.033-1.087a2.5 2.5 0 1 1 .875 4.164a.75.75 0 1 1 .508-1.411a1 1 0 1 0 .636-1.896"></svg:path></svg:g>`,
})
export class BitcoinIconsRelayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsRocketFilledIcon],svg[bitcoin-icons-rocket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 16a.5.5 0 0 1 0 .707l-1 1A.5.5 0 1 1 6.293 17l1-1A.5.5 0 0 1 8 16m1.5 1.5a.5.5 0 0 1 0 .707l-1 1a.5.5 0 1 1-.707-.707l1-1a.5.5 0 0 1 .707 0m-3-3a.5.5 0 0 1 0 .707l-1 1a.5.5 0 1 1-.707-.708l1-1a.5.5 0 0 1 .707 0m6.102-8.483a11.54 11.54 0 0 0-5.797 6.495l4.684 4.685a11.54 11.54 0 0 0 6.495-5.798zm1.045 5.337a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.41 10.41a11.5 11.5 0 0 0 .737-4.057q-.001-.718-.086-1.414a12 12 0 0 0-1.414-.086c-1.428 0-2.795.26-4.057.736zm-6.144 7.562l1.027 1.027a.5.5 0 0 0 .854-.353v-1.614a12.5 12.5 0 0 1-1.881.94m-6.238-6.238q.393-.985.94-1.881H5.354a.5.5 0 0 0-.354.854z"></svg:path>`,
})
export class BitcoinIconsRocketFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSafeFilledIcon],svg[bitcoin-icons-safe-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 7.5v9h9v-9zM12 14c.37 0 .718-.101 1.016-.277l1.13 1.13a.5.5 0 0 0 .708-.707l-1.13-1.13a2 2 0 0 0-.001-2.032l1.13-1.13a.5.5 0 0 0-.707-.708l-1.13 1.13A2 2 0 0 0 12 10c-.37 0-.718.101-1.016.277l-1.13-1.13a.5.5 0 1 0-.708.707l1.13 1.13A2 2 0 0 0 10 12c0 .37.101.718.277 1.016l-1.13 1.13a.5.5 0 0 0 .707.708l1.13-1.13A2 2 0 0 0 12 14" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11.935a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm1.5 1a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7 19h2v.578a.42.42 0 0 1-.422.422H7.422A.42.42 0 0 1 7 19.578zm8 0h2v.578a.42.42 0 0 1-.422.422h-1.156a.42.42 0 0 1-.422-.422z"></svg:path>`,
})
export class BitcoinIconsSafeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSatoshiV1FilledIcon],svg[bitcoin-icons-satoshi-v1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M8.693 8.742l7.637 2.063l.337-1.462L9.029 7.28zm5.526-3.05l-.406 1.774l-1.448-.392l.407-1.774zM11.227 18.7l.408-1.774l-1.448-.391l-.408 1.774zm4.421-4.934L8.011 11.7l.336-1.462l7.637 2.066zm-8.316.89l7.638 2.064l.336-1.462l-7.638-2.064z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSatoshiV1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSatoshiV2FilledIcon],svg[bitcoin-icons-satoshi-v2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 18.5V21h-1.5v-2.5zM17 16.75H7v-1.5h10zm0-4H7v-1.5h10zm0-4H7v-1.5h10zM12.75 3v2.5h-1.5V3z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSatoshiV2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSatoshiV3FilledIcon],svg[bitcoin-icons-satoshi-v3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.96 5.54a6.8 6.8 0 0 0-1.961-.29c-2.207 0-3.652.809-4.806 2.106c-.967 1.087-1.338 2.438-1.338 3.449c0 2.902 2.813 5.013 5.953 4.945h.022c.602 0 1.183-.2 1.599-.502c.424-.309.593-.651.593-.92c0-.541-.208-.842-.557-1.084c-.407-.283-.987-.468-1.71-.672l-.172-.048c-.626-.175-1.36-.38-1.937-.72a2.6 2.6 0 0 1-.885-.812a2.3 2.3 0 0 1-.364-1.28c0-1.775 1.64-2.962 3.433-2.962c1.766 0 3.186 1.04 3.466 2.268a.75.75 0 0 1-1.463.333c-.083-.367-.736-1.101-2.003-1.101c-1.24 0-1.933.767-1.933 1.461a.8.8 0 0 0 .12.46c.072.11.193.225.389.34c.4.236.948.39 1.637.584l.12.034c.684.193 1.51.433 2.158.883c.706.49 1.201 1.23 1.201 2.315c0 .906-.544 1.65-1.212 2.134a4.3 4.3 0 0 1-2.478.789c-3.676.075-7.477-2.43-7.477-6.445c0-1.331.476-3.05 1.717-4.446C7.49 4.766 9.332 3.75 12 3.75m0 0a8.25 8.25 0 1 1-2.134 16.219a.75.75 0 0 1 .388-1.449A6.75 6.75 0 0 0 13.96 5.54" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSatoshiV3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsScanFilledIcon],svg[bitcoin-icons-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.25 14a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h2.75v-2.75a.75.75 0 0 1 .75-.75m-12.5 0a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75M14 5.75a.75.75 0 0 1 .75-.75h3.496a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.5H14.75a.75.75 0 0 1-.75-.75m-9 0A.75.75 0 0 1 5.75 5h3.5a.75.75 0 0 1 0 1.5H6.5v2.75a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsScanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSdCardFilledIcon],svg[bitcoin-icons-sd-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6 9l5-5h5.5A1.5 1.5 0 0 1 18 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18.5zm9.75-3a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75M13 6.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0zM11.75 6a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSdCardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSearchFilledIcon],svg[bitcoin-icons-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.5 5.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6.5 5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"></svg:path><svg:path d="M14.47 14.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class BitcoinIconsSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSendFilledIcon],svg[bitcoin-icons-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 14.997a.75.75 0 0 1 .75.75V18c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25v-2.253a.75.75 0 0 1 1.5 0V18A1.75 1.75 0 0 1 18 19.75H6A1.75 1.75 0 0 1 4.25 18v-2.253a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M12.202 5.58a.75.75 0 0 1 .75.75v8.086a.75.75 0 0 1-1.5 0V6.331a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M11.678 4.464a.75.75 0 0 1 1.048 0L16.07 7.73a.75.75 0 0 1-1.048 1.073l-2.82-2.754l-2.82 2.754A.75.75 0 1 1 8.334 7.73z"></svg:path></svg:g>`,
})
export class BitcoinIconsSendFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsShareFilledIcon],svg[bitcoin-icons-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.336 3.221L3.873 8.71a.35.35 0 0 0-.027.654l6.05 2.593a.2.2 0 0 0 .196-.021l5.931-4.238c.184-.13.41.096.28.28l-4.238 5.931a.2.2 0 0 0-.02.195l2.592 6.05a.35.35 0 0 0 .654-.026L20.78 3.664a.35.35 0 0 0-.443-.443"></svg:path>`,
})
export class BitcoinIconsShareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSharedWalletFilledIcon],svg[bitcoin-icons-shared-wallet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4.5A1.5 1.5 0 0 1 6.5 3h8A1.5 1.5 0 0 1 16 4.5v4.504h-1V4.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5H11v1H6.5A1.5 1.5 0 0 1 5 16.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6 15h5v2H6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 11.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.5 18.5h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class BitcoinIconsSharedWalletFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsShieldFilledIcon],svg[bitcoin-icons-shield-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7c0-.276.225-.499.498-.535c2.149-.28 5.282-2.186 6.224-2.785a.52.52 0 0 1 .556 0c.942.599 4.075 2.504 6.224 2.785c.273.036.498.259.498.535v4.75c0 6.5-7 8.75-7 8.75s-7-2.25-7-8.75z"></svg:path>`,
})
export class BitcoinIconsShieldFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSignFilledIcon],svg[bitcoin-icons-sign-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm3.49 11.598l.001-.005l.004-.02a12 12 0 0 1 .078-.35c.053-.228.129-.53.219-.83c.07-.234.146-.455.222-.633c.094.189.193.424.3.681l.03.074c.117.283.243.587.366.825c.067.128.147.265.24.375c.074.087.26.285.55.285c.326 0 .54-.196.658-.337c.106-.128.193-.287.253-.397l.014-.024l.074-.131q.031.052.073.13l.013.023c.06.11.148.27.255.4c.12.142.334.336.66.336c.256 0 .507-.13.67-.224c.189-.11.383-.25.551-.382a10 10 0 0 0 .57-.482l.047-.044l.004-.003a.5.5 0 0 0-.684-.73l-.002.002l-.008.008l-.032.029a9 9 0 0 1-.51.432a4 4 0 0 1-.44.306q-.06.034-.099.053a4 4 0 0 1-.118-.206l-.006-.01a2.4 2.4 0 0 0-.275-.42A.88.88 0 0 0 12.5 16c-.32 0-.539.18-.668.327c-.12.138-.214.307-.278.422l-.01.02c-.087-.18-.18-.403-.281-.649l-.025-.061a9 9 0 0 0-.417-.911a2 2 0 0 0-.266-.383c-.094-.1-.282-.265-.555-.265c-.276 0-.464.168-.558.273c-.105.117-.189.26-.256.394a6 6 0 0 0-.352.94a15 15 0 0 0-.323 1.286v.006l-.001.002a.5.5 0 0 0 .98.197M9 6.54a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.71a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5M9 11a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSignFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSnowflakeFilledIcon],svg[bitcoin-icons-snowflake-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v3.175l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.28 3.281v1.954h1.925l3.295-3.295a.75.75 0 1 1 1.06 1.06l-2.234 2.235H20a.75.75 0 0 1 0 1.5h-3.175l2.205 2.205a.75.75 0 1 1-1.06 1.06l-3.266-3.265H12.75v1.925l3.28 3.28a.75.75 0 1 1-1.06 1.06l-2.22-2.219V20a.75.75 0 0 1-1.5 0v-3.204l-2.22 2.22a.75.75 0 0 1-1.06-1.06l3.28-3.281V12.75H9.296L6.03 16.016a.75.75 0 0 1-1.06-1.06l2.205-2.206H4a.75.75 0 0 1 0-1.5h3.204L4.97 9.016a.75.75 0 0 1 1.06-1.06l3.295 3.294h1.925V9.296l-3.28-3.28a.75.75 0 1 1 1.06-1.06l2.22 2.219V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSnowflakeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSofaFilledIcon],svg[bitcoin-icons-sofa-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.5a1.5 1.5 0 0 1 3 0V14h12v-2.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5z"></svg:path><svg:path fill="currentColor" d="M5.5 7.5A1.5 1.5 0 0 1 7 6h10a1.5 1.5 0 0 1 1.5 1.5v1.708A2.5 2.5 0 0 0 17 11.5V13H7v-1.5a2.5 2.5 0 0 0-1.5-2.292z"></svg:path>`,
})
export class BitcoinIconsSofaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsStarFilledIcon],svg[bitcoin-icons-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.334 3.549c.21-.645 1.122-.645 1.332 0L14.2 8.272a.7.7 0 0 0 .666.483h4.966c.678 0 .96.868.411 1.267l-4.017 2.918a.7.7 0 0 0-.254.783l1.534 4.723c.21.645-.529 1.18-1.077.782l-4.017-2.918a.7.7 0 0 0-.823 0L7.57 19.228c-.548.399-1.287-.137-1.077-.782l1.534-4.723a.7.7 0 0 0-.254-.783l-4.017-2.918c-.549-.399-.267-1.267.411-1.267h4.966a.7.7 0 0 0 .666-.483z"></svg:path>`,
})
export class BitcoinIconsStarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSunFilledIcon],svg[bitcoin-icons-sun-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.5A4.505 4.505 0 0 1 7.5 12c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 12 3m6 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5M3 12a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 3 12m9 6a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m6.354-12.354a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0m-10.5 10.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0m-2.208-10.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708m10.5 10.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSunFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTagFilledIcon],svg[bitcoin-icons-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.647 18.646l-5.293-5.292a.5.5 0 0 1 0-.708l6.5-6.5A.5.5 0 0 1 12.207 6h3.586l.069.005Q15.929 6 16 6a2 2 0 0 1 1.995 2.139l.005.068v3.586a.5.5 0 0 1-.146.353l-6.5 6.5a.5.5 0 0 1-.707 0M12 9.672a.5.5 0 0 0-1 0v5.656a.5.5 0 1 0 1 0zm-1.914 2.12a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.414m4.243 1.415a1 1 0 1 0-1.415-1.414a1 1 0 0 0 1.415 1.414" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsTagFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTipJarFilledIcon],svg[bitcoin-icons-tip-jar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="8" x="5.5" y="13" fill="currentColor" rx="1"></svg:rect><svg:path fill="currentColor" d="M6.5 11.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1h-11z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 10a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m.727-4.35a.5.5 0 0 0-.97-.241l-.484 1.94a.5.5 0 1 0 .97.242z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsTipJarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTransactionsFilledIcon],svg[bitcoin-icons-transactions-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:circle cx="5.5" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M8 11a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8A.5.5 0 0 1 8 11m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 8 13" clip-rule="evenodd"></svg:path><svg:circle cx="5.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M8 15.5a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 0 1H8.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsTransactionsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTransferFilledIcon],svg[bitcoin-icons-transfer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 15.243a.75.75 0 0 1 .75.75V19c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-3.007a.75.75 0 0 1 1.5 0V19A1.75 1.75 0 0 1 19 20.75H5A1.75 1.75 0 0 1 3.25 19v-3.007a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M19.87 10.893c.3.286.311.76.025 1.06l-3.047 3.199a.75.75 0 0 1-1.086 0l-3.048-3.198a.75.75 0 1 1 1.086-1.035l2.505 2.628l2.504-2.628a.75.75 0 0 1 1.06-.026"></svg:path><svg:path d="M11.352 4.75A4.2 4.2 0 0 0 7.15 8.952v5.006a.75.75 0 0 1-1.5 0V8.952a5.702 5.702 0 0 1 11.405 0v5.006a.75.75 0 0 1-1.5 0V8.952a4.2 4.2 0 0 0-4.203-4.202"></svg:path></svg:g>`,
})
export class BitcoinIconsTransferFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTrashFilledIcon],svg[bitcoin-icons-trash-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.25 6.91A.75.75 0 0 1 6 6.16h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M11.333 4.75c-.69 0-1.25.56-1.25 1.25v.91h-1.5V6a2.75 2.75 0 0 1 2.75-2.75h1.334A2.75 2.75 0 0 1 15.417 6v.91h-1.5V6c0-.69-.56-1.25-1.25-1.25zM6 6.91L8 20h8l2-13.09zm6.5 3.636a.5.5 0 1 0-1 0v5.818a.5.5 0 1 0 1 0zm-3.224-.5a.476.476 0 0 1 .55.423l.666 5.818a.525.525 0 0 1-.435.576a.477.477 0 0 1-.549-.423l-.667-5.818a.525.525 0 0 1 .435-.575m5.883.576a.525.525 0 0 0-.435-.575a.476.476 0 0 0-.55.422l-.666 5.818a.525.525 0 0 0 .435.576a.476.476 0 0 0 .549-.423z"></svg:path></svg:g>`,
})
export class BitcoinIconsTrashFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTwoKeysFilledIcon],svg[bitcoin-icons-two-keys-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20.854 10.308c.6 2.411-.923 4.867-3.403 5.486q-.466.115-.928.137l-2.666 4.298a2 2 0 0 1-1.216.887l-1.236.308a1 1 0 0 1-1.212-.729l-.28-1.12a2 2 0 0 1 .241-1.538l2.445-3.943a4.4 4.4 0 0 1-.728-1.547c-.6-2.411.922-4.867 3.403-5.486s4.978.835 5.58 3.247m-3.872 1.48c.552-.137.89-.683.756-1.219c-.133-.536-.688-.859-1.24-.721c-.55.137-.89.683-.756 1.219s.69.859 1.24.721"></svg:path><svg:path d="M11.251 12.187c2.48-.619 4.004-3.075 3.403-5.486c-.601-2.412-3.1-3.865-5.58-3.247S5.07 6.529 5.672 8.94a4.4 4.4 0 0 0 .728 1.547l-2.445 3.942a2 2 0 0 0-.241 1.538l.28 1.121a1 1 0 0 0 1.211.728l1.236-.308a2 2 0 0 0 1.216-.886l2.666-4.298q.462-.022.928-.137m.288-5.225c.133.536-.205 1.082-.756 1.219s-1.106-.186-1.24-.721c-.134-.536.205-1.082.756-1.22s1.106.186 1.24.722"></svg:path></svg:g>`,
})
export class BitcoinIconsTwoKeysFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsUnlockFilledIcon],svg[bitcoin-icons-unlock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="14" height="10" x="5" y="11.225" fill="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M10 5.75a.75.75 0 0 0-.75.75V12a.75.75 0 0 1-1.5 0V6.5A2.25 2.25 0 0 1 10 4.25h4a2.25 2.25 0 0 1 2.25 2.25v2.522a.75.75 0 0 1-1.5 0V6.5a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsUnlockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsUnmixedFilledIcon],svg[bitcoin-icons-unmixed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.08 2.462a.75.75 0 0 1 1.06.016l3.398 3.5a.75.75 0 0 1 0 1.045l-3.398 3.5a.75.75 0 1 1-1.077-1.045l2.163-2.228H5a.75.75 0 0 1 0-1.5h12.226l-2.162-2.227a.75.75 0 0 1 .015-1.061m0 11a.75.75 0 0 1 1.06.015l3.398 3.5a.75.75 0 0 1 0 1.045l-3.398 3.5a.75.75 0 1 1-1.077-1.045l2.163-2.227H5a.75.75 0 0 1 0-1.5h12.227l-2.164-2.228a.75.75 0 0 1 .016-1.06" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsUnmixedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsUsbFilledIcon],svg[bitcoin-icons-usb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7h9v9.5a4.5 4.5 0 1 1-9 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 3h6v5H9zm1 1v3h4V4z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsUsbFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsVerifyFilledIcon],svg[bitcoin-icons-verify-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.418 5.643a1.25 1.25 0 0 0-1.34-.555l-1.798.413a1.25 1.25 0 0 1-.56 0l-1.798-.413a1.25 1.25 0 0 0-1.34.555l-.98 1.564c-.1.16-.235.295-.395.396l-1.564.98a1.25 1.25 0 0 0-.555 1.338l.413 1.8a1.25 1.25 0 0 1 0 .559l-.413 1.799a1.25 1.25 0 0 0 .555 1.339l1.564.98c.16.1.295.235.396.395l.98 1.564c.282.451.82.674 1.339.555l1.798-.413a1.25 1.25 0 0 1 .56 0l1.799.413a1.25 1.25 0 0 0 1.339-.555l.98-1.564c.1-.16.235-.295.395-.395l1.565-.98a1.25 1.25 0 0 0 .554-1.34L18.5 12.28a1.25 1.25 0 0 1 0-.56l.413-1.799a1.25 1.25 0 0 0-.554-1.339l-1.565-.98a1.25 1.25 0 0 1-.395-.395zm-.503 4.127a.5.5 0 0 0-.86-.509l-2.615 4.426l-1.579-1.512a.5.5 0 1 0-.691.722l2.034 1.949a.5.5 0 0 0 .776-.107z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsVerifyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsVisibleFilledIcon],svg[bitcoin-icons-visible-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 12c0 2.761-4.03 5-9 5s-9-2.239-9-5s4.03-5 9-5s9 2.239 9 5m-5 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsVisibleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsWalletFilledIcon],svg[bitcoin-icons-wallet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"></svg:path><svg:path d="M5.5 6A1.5 1.5 0 0 0 4 7.5v9A1.5 1.5 0 0 0 5.5 18h10a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 15.5 6zm2 7.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class BitcoinIconsWalletFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
