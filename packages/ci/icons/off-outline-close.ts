import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciOffOutlineCloseIcon],svg[ci-off-outline-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22A10 10 0 0 1 4.926 4.926a10.004 10.004 0 1 1 14.148 14.148A9.936 9.936 0 0 1 12 22Zm-8-9.828A8 8 0 1 0 4 12v.172ZM9.409 16l-1.41-1.41L10.59 12L8 9.41L9.41 8L12 10.59L14.59 8L16 9.41L13.41 12L16 14.59L14.592 16L12 13.41L9.41 16h-.001Z"></svg:path>`,
})
export class CiOffOutlineCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
