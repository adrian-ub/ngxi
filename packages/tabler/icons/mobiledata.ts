import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMobiledataIcon],svg[tabler-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12V4M8 20v-8m5-5l3-3l3 3M5 17l3 3l3-3"></svg:path>`,
})
export class TablerMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
