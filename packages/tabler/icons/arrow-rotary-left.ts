import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRotaryLeftIcon],svg[tabler-arrow-rotary-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 0v10M13 7H3m4 4L3 7l4-4"></svg:path>`,
})
export class TablerArrowRotaryLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
