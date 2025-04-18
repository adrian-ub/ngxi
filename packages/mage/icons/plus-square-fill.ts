import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePlusSquareFillIcon],svg[mage-plus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.89 11H13v4.14a1 1 0 0 1-2 0V13H6.86a1 1 0 0 1 0-2H11V6.86a1 1 0 0 1 2 0V11h4.14a1 1 0 0 1 0 2"></svg:path>`,
})
export class MagePlusSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
