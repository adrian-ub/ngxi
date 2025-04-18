import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siUserAltFillIcon],svg[si-user-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8.5c0 2.75 2.25 5 5 5s5-2.25 5-5V7c0-2.75-2.25-5-5-5S7 4.25 7 7z"></svg:path><svg:path fill="currentColor" d="M2 20.4c0 .88.72 1.6 1.6 1.6h16.78c.88 0 1.6-.72 1.6-1.6v-4.65c0-.24 0-.5-.12-.62c-.37-.87-1.5-1.63-3.25-2.25c-1.24 2.38-3.75 4-6.62 4s-5.37-1.62-6.62-4c-1.75.63-2.87 1.37-3.25 2.25c-.12.24-.12.37-.12.62z"></svg:path>`,
})
export class SiUserAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
