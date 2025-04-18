import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneOffIcon],svg[mdi-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.22 2.5L2.5 20.22l1.27 1.28l4.88-4.88C11.76 19.43 15.81 21 20 21a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2c-1.15-.58-2.21-1.32-3.15-2.17L21.5 3.77zM4 3a1 1 0 0 0-1 1c0 3.57 1.14 7.05 3.24 9.94l1.42-1.44a14 14 0 0 1-1.04-1.71l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class MdiPhoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
