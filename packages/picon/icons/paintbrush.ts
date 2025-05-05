import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPaintbrushIcon],svg[picon-paintbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8c3-7 8-2 3 0m2-4l2-4l1 1l-2 4"></svg:path>`,
})
export class PiconPaintbrushIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
