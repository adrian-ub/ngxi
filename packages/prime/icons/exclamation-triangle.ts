import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeExclamationTriangleIcon],svg[prime-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18.75H4a.76.76 0 0 1-.65-.37a.77.77 0 0 1 0-.75l8-14a.78.78 0 0 1 1.3 0l8 14a.77.77 0 0 1 0 .75a.76.76 0 0 1-.65.37m-14.71-1.5h13.42L12 5.51Z"></svg:path><svg:path fill="currentColor" d="M12 13.25a.76.76 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v3.5a.76.76 0 0 1-.75.75m0 3a.76.76 0 0 1-.75-.75V15a.75.75 0 0 1 1.5 0v.5a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeExclamationTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
