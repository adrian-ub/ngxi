import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCornerRightUpDoubleIcon],svg[tabler-corner-right-up-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 19h6a3 3 0 0 0 3-3V9"></svg:path><svg:path d="m10 13l4-4l4 4m-8-5l4-4l4 4"></svg:path></svg:g>`,
})
export class TablerCornerRightUpDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
