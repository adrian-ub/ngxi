import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHdIcon],svg[picon-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V1h2l1 1v3L6 6M5 2v3h1V2M0 6V1h1v2h1V1h1v5H2V4H1v2"></svg:path>`,
})
export class PiconHdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
