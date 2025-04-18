import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignForkFilledIcon],svg[tdesign-fork-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 1a3.5 3.5 0 0 0-1 6.855V10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V7.855A3.502 3.502 0 0 0 4.5 1a3.5 3.5 0 0 0-1 6.855V10a3 3 0 0 0 3 3H11v3.145A3.502 3.502 0 0 0 12 23a3.5 3.5 0 0 0 1-6.855V13h4.5a3 3 0 0 0 3-3V7.855A3.502 3.502 0 0 0 19.5 1"></svg:path>`,
})
export class TdesignForkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
