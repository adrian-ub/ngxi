import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRotaryFirstRightIcon],svg[tabler-arrow-rotary-first-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v10m2.5-10.5L19 18m-5 0h5v-5"></svg:path>`,
})
export class TablerArrowRotaryFirstRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
