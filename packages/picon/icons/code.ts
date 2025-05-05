import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCodeIcon],svg[picon-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6H5l2-2l-2-2h1l2 2M3 6H2L0 4l2-2h1L1 4"></svg:path>`,
})
export class PiconCodeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
