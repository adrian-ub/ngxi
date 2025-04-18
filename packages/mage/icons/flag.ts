import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFlagIcon],svg[mage-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.382 14.72s1.089-1.088 4.353-1.088c3.265 0 3.265 2.177 6.53 2.177a11.3 11.3 0 0 0 4.353-1.088V3.838a11.3 11.3 0 0 1-4.353 1.088C12 4.926 12 2.75 8.735 2.75c-3.264 0-4.353 1.088-4.353 1.088m0 17.412V3.838"></svg:path>`,
})
export class MageFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
