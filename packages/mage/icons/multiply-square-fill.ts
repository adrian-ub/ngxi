import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMultiplySquareFillIcon],svg[mage-multiply-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.31 13.15a1 1 0 0 1 0 1.41a1 1 0 0 1-1.41 0L12 13.41l-3.15 3.15a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.41L10.59 12L7.44 8.85a1 1 0 1 1 1.41-1.41L12 10.59l3.15-3.15a1 1 0 1 1 1.41 1.41L13.41 12z"></svg:path>`,
})
export class MageMultiplySquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
