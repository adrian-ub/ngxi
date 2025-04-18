import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBabIcon],svg[cryptocurrency-color-bab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#F19F13"></svg:circle><svg:path fill="#FFF" d="M22.77 13.95h4.87l.36-2h-4.71a4.8 4.8 0 0 0-2.59.86c-.28-1-3-.86-3-.86l.36-2H17l-.36 2h-1.11l.31-2h-1.15l-.42 2h-1.19l-.61 3.12l-.81-3.06H9l-5 7.35h4.12l.42-1.95H7.7l2.4-3.51l.9 3.53h-.9l-.39 1.93h3.06l-.25 1.34h1.2l.28-1.34h1l-.25 1.34H16l.25-1.34h1.56a3 3 0 0 0 1.87-.95a3.2 3.2 0 0 0 2.2.95h4.71l.31-1.95h-4.23c-2.91-.05-1.67-3.48.1-3.46m-5.29 3.41h-3.12l.25-.95h3c.76.05.51.95-.13.95m.47-2.56h-3.12l.25-.95h3c.76.05.48.99-.13.99z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorBabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
