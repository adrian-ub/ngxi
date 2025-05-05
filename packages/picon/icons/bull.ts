import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBullIcon],svg[picon-bull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v1h1V3M3 3H2v1h1m1 3L1 5l1-4l2-1l2 1l1 4m0-3l1-2v3H0V0l1 2"></svg:path>`,
})
export class PiconBullIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
