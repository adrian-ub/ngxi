import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCreditCardFilledIcon],svg[tabler-credit-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6zM7.01 14H7a1 1 0 1 0 .01 2a1 1 0 0 0 0-2M13 14h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m5-10a4 4 0 0 1 4 4H2a4 4 0 0 1 4-4z"></svg:path>`,
})
export class TablerCreditCardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
