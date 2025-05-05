import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLegoIcon],svg[picon-lego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5h4L5 6H3m2-2V3h1v1M0 6q0 2 2 2h4q2 0 2-2V3q0-2-2.5-2V0h-3v1Q0 1 0 3m2 1V3h1v1"></svg:path>`,
})
export class PiconLegoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
