import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCopyleftFillIcon],svg[ri-copyleft-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10s-4.48 10-10 10m0-5c2.76 0 5-2.24 5-5a5.002 5.002 0 0 0-9.288-2.572l1.715 1.028A3 3 0 1 1 12 15a3 3 0 0 1-2.574-1.457l-1.714 1.03A5 5 0 0 0 12 17"></svg:path>`,
})
export class RiCopyleftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
