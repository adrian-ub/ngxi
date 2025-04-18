import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapIcon],svg[tabler-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3zm6-3v13m6-10v13"></svg:path>`,
})
export class TablerMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
