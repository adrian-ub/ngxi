import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSnowmanIcon],svg[tabler-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1-5.81 0A4 4 0 0 1 12 3m5.5 8.5L20 10M6.5 11.5L4 10m8 3h.01M12 16h.01"></svg:path>`,
})
export class TablerSnowmanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
