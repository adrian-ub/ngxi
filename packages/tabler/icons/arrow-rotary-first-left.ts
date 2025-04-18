import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRotaryFirstLeftIcon],svg[tabler-arrow-rotary-first-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 0v10M13.5 9.5L5 18m5 0H5v-5"></svg:path>`,
})
export class TablerArrowRotaryFirstLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
