import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCreditCardFillIcon],svg[mage-credit-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.14 3.025H6.86A4.87 4.87 0 0 0 2 7.885v8.23a4.87 4.87 0 0 0 4.86 4.86h10.28a4.87 4.87 0 0 0 4.86-4.86v-8.23a4.87 4.87 0 0 0-4.86-4.86m-5.78 14.09H6.22a1 1 0 0 1 0-2h5.14a1 1 0 1 1 0 2m9.14-8.95h-17v-.28a3.37 3.37 0 0 1 3.36-3.36h10.28a3.37 3.37 0 0 1 3.36 3.36z"></svg:path>`,
})
export class MageCreditCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
