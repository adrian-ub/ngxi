import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsToolsIcon],svg[grommet-icons-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m11 2l11 11l-4.5 4.5l-11-11zm5 4l1-1l2 2l-1 1m-5 5l-9 9l-2-2l9-9m-6 7l1 1"></svg:path>`,
})
export class GrommetIconsToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
