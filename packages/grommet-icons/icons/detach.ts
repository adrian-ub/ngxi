import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDetachIcon],svg[grommet-icons-detach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m4 4l16 16m2-8l-5.28 5.28M15 19l-2 2c-6 6-15-3-9-9l2-2m2-2l5-5c4-4 10 2 6 6l-5 5m-2 2l-2 2c-2 2-5-1-3-3l2-2m2-2l5-5"></svg:path>`,
})
export class GrommetIconsDetachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
