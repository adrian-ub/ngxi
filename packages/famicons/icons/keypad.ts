import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsKeypadIcon],svg[famicons-keypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 400a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m128 256a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48M128 272a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0-128a48 48 0 1 0 48 48a48 48 0 0 0-48-48"></svg:path>`,
})
export class FamiconsKeypadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
