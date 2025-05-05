import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLeftmostIcon],svg[picon-leftmost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h1V1m4 1L4 4l2 2l-1 1l-3-3l3-3"></svg:path>`,
})
export class PiconLeftmostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
