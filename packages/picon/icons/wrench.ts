import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWrenchIcon],svg[picon-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 3l4 4l-1 1l-4-4H1L0 2l2 1l1-1l-1-2l2 1"></svg:path>`,
})
export class PiconWrenchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
