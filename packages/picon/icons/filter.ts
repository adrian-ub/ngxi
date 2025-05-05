import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFilterIcon],svg[picon-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l3 3v3l2-1V4l3-3"></svg:path>`,
})
export class PiconFilterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
