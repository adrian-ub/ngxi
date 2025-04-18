import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMicroscopeIcon],svg[tabler-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21h14M6 18h2m-1 0v3m2-10l3 3l6-6l-3-3zm1.5 1.5L9 14m8-11l3 3m-8 15a6 6 0 0 0 3.715-10.712"></svg:path>`,
})
export class TablerMicroscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
