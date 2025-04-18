import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGraveIcon],svg[tabler-grave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2zm5-5v-5H6V7h4V3h4v4h4v4h-4v5"></svg:path>`,
})
export class TablerGraveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
