import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUpwardIcon],svg[picon-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v3h2V4h2L4 1L1 4"></svg:path>`,
})
export class PiconUpwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
