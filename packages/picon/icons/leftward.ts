import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLeftwardIcon],svg[picon-leftward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h4v4H4v2L0 4l4-4"></svg:path>`,
})
export class PiconLeftwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
