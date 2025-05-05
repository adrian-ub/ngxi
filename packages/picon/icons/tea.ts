import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTeaIcon],svg[picon-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v2L1 3l1 1l1.5-1l-1-1V0M5 2v1h1V2M0 8V7h7v1M0 6V0h5v1c3 0 3 3 0 3v2"></svg:path>`,
})
export class PiconTeaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
