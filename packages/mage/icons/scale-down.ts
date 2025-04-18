import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageScaleDownIcon],svg[mage-scale-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2 19.404V13.8H4.596m14.808-3.6H13.8V4.596M21 3l-7.2 7.2m-3.6 3.6L3 21"></svg:path>`,
})
export class MageScaleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
