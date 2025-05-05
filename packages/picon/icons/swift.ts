import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSwiftIcon],svg[picon-swift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2-3l-1-2l3-3l-2 3l1 1l5-4l-4 5l1 1l3-2l-3 3l-2-1"></svg:path>`,
})
export class PiconSwiftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
