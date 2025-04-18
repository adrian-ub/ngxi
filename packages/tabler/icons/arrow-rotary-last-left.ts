import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRotaryLastLeftIcon],svg[tabler-arrow-rotary-last-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 0v6M12.5 9.5L6 3m5 0H6v5"></svg:path>`,
})
export class TablerArrowRotaryLastLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
