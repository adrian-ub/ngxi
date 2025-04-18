import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsJIcon],svg[ls-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 82h-82V0h82zm-77 694V164h73v610c0 53-30 99-73 124c-20 12-45 19-72 19c-13 0-27-2-39-5v-78c11 7 25 12 39 12c39 0 71-32 72-70"></svg:path>`,
})
export class LsJIcon {
  readonly viewBox = input("0 0 188 917")
  readonly width = input("0.21em")
  readonly height = input("1em")
}
