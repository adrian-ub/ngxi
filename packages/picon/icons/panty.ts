import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPantyIcon],svg[picon-panty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v1q3 1 3 3h2q0-2 3-3V2"></svg:path>`,
})
export class PiconPantyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
