import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAdjustHalfIcon],svg[uil-adjust-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.83 7.32a10.1 10.1 0 0 0-3.44-3.73A10 10 0 1 0 12 22h.29a10 10 0 0 0 8.54-14.68M11 19.93a8 8 0 0 1 0-15.86Zm2-15.86a8 8 0 0 1 2.49.74L13 9.12Zm0 9l4.17-7.17a8.1 8.1 0 0 1 1.58 1.83L13 17.69Zm1.15 6.58L19.74 10a8.2 8.2 0 0 1 .26 2a8 8 0 0 1-5.85 7.7Z"></svg:path>`,
})
export class UilAdjustHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
