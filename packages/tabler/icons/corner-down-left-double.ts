import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCornerDownLeftDoubleIcon],svg[tabler-corner-down-left-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 5v6a3 3 0 0 1-3 3H9"></svg:path><svg:path d="m13 10l-4 4l4 4m-5-8l-4 4l4 4"></svg:path></svg:g>`,
})
export class TablerCornerDownLeftDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
