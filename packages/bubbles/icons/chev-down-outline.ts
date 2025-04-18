import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesChevDownOutlineIcon],svg[bubbles-chev-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9.083L12.283 14.8a.4.4 0 0 1-.566 0L6 9.083"></svg:path>`,
})
export class BubblesChevDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
