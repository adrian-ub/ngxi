import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignOutIcon],svg[lets-icons-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.95 11h-9.536l3.293-3.293l-1.414-1.414l-5 5l-.707.707l.707.707l5 5l1.414-1.414L12.414 13h9.537c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10S6.477 2 12 2c5.185 0 9.449 3.947 9.95 9" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsSignOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
