import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLockOffFilledIcon],svg[tdesign-lock-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a4 4 0 0 1 7.817-1.2l.3.954l1.908-.6l-.3-.954A6.001 6.001 0 0 0 6 7v3H3.5v12h17V10H8zm7 8v2H9v-2z"></svg:path>`,
})
export class TdesignLockOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
