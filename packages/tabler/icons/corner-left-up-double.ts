import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCornerLeftUpDoubleIcon],svg[tabler-corner-left-up-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 19h-6a3 3 0 0 1-3-3V9"></svg:path><svg:path d="M13 13L9 9l-4 4m8-5L9 4L5 8"></svg:path></svg:g>`,
})
export class TablerCornerLeftUpDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
