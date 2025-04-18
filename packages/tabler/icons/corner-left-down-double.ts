import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCornerLeftDownDoubleIcon],svg[tabler-corner-left-down-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 4h-6a3 3 0 0 0-3 3v7"></svg:path><svg:path d="m13 10l-4 4l-4-4m8 5l-4 4l-4-4"></svg:path></svg:g>`,
})
export class TablerCornerLeftDownDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
