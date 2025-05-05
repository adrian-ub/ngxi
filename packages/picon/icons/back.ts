import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBackIcon],svg[picon-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h4v6H4l1-2h1V4H4v2L0 3l4-3"></svg:path>`,
})
export class PiconBackIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
