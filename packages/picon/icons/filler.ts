import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFillerIcon],svg[picon-filler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0H5v4h1M1 4v4H0V4l4-2h1M4 8L2 4l4-2l2 4"></svg:path>`,
})
export class PiconFillerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
