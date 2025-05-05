import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTtyIcon],svg[picon-tty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V5h1v3m1 0V5h1v3M1 6V5h1v2h5V5h1v1M1 4c0-4 7-4 7 0H6V3H3v1"></svg:path>`,
})
export class PiconTtyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
