import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrightnessUpIcon],svg[tabler-brightness-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7V3m5 4l1.4-1.4M19 12h2m-4 5l1.4 1.4M12 19v2m-5-4l-1.4 1.4M6 12H4m3-5L5.6 5.6"></svg:path>`,
})
export class TablerBrightnessUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
