import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHomeSecurityLockIcon],svg[mage-home-security-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251"></svg:path><svg:path d="M14.611 11.538H9.39c-.721 0-1.306.54-1.306 1.208v3.623c0 .667.585 1.208 1.306 1.208h5.222c.721 0 1.306-.541 1.306-1.208v-3.623c0-.667-.585-1.208-1.306-1.208"></svg:path><svg:path d="M9.585 11.538v-1.207a2.415 2.415 0 1 1 4.83 0v1.207"></svg:path></svg:g>`,
})
export class MageHomeSecurityLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
