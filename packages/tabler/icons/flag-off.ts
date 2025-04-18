import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlagOffIcon],svg[tabler-flag-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5v16M19 5v9M7.641 3.645A5 5 0 0 1 12 5a5 5 0 0 0 7 0M5 14a5 5 0 0 1 7 0a4.98 4.98 0 0 0 3.437 1.429m3.019-.966q.285-.21.544-.463M3 3l18 18"></svg:path>`,
})
export class TablerFlagOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
