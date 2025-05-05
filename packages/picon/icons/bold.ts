import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBoldIcon],svg[picon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 4l2-2H3v4h2M1 0q10 0 4 4q6 4-4 4"></svg:path>`,
})
export class PiconBoldIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
