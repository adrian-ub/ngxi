import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageScaleUpIcon],svg[mage-scale-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15.396V21h5.604m6.792-18H21v5.604M21 3l-7.2 7.2m-3.6 3.6L3 21"></svg:path>`,
})
export class MageScaleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
