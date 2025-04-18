import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesChevronDownOutlineIcon],svg[bubbles-chevron-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.25 7.311L12.53 18.03a.75.75 0 0 1-1.06 0L.75 7.311"></svg:path>`,
})
export class BubblesChevronDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
