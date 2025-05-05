import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPerlIcon],svg[picon-perl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4L6 8V4L5 8V4H4L3 8V4Q2 4 2 2q-3 0 0-1l1-1v3q2-4 5 1"></svg:path>`,
})
export class PiconPerlIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
