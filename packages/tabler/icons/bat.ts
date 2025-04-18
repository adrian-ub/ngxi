import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatIcon],svg[tabler-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 16c.74-2.286 2.778-3.762 5-3c-.173-2.595.13-5.314-2-7.5c-1.708 2.648-3.358 2.557-5 2.5V4l-3 2l-3-2v4c-1.642.057-3.292.148-5-2.5c-2.13 2.186-1.827 4.905-2 7.5c2.222-.762 4.26.714 5 3c2.593 0 3.889.952 5 4c1.111-3.048 2.407-4 5-4"></svg:path><svg:path d="M9 8a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class TablerBatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
