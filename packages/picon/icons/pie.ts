import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPieIcon],svg[picon-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 4l3-3c1 1 2 7-3 7s-5-8 0-8"></svg:path>`,
})
export class PiconPieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
