import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCreditCardIcon],svg[fe-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v3h16V6zm0 5v7h16v-7zm2 3v2h4v-2zm6 0v2h4v-2z"></svg:path>`,
})
export class FeCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
