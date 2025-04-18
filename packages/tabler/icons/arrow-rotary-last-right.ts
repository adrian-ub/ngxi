import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRotaryLastRightIcon],svg[tabler-arrow-rotary-last-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v6m2.5-11.5L18 3m-5 0h5v5"></svg:path>`,
})
export class TablerArrowRotaryLastRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
