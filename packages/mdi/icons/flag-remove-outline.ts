import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlagRemoveOutlineIcon],svg[mdi-flag-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16l-.4-2H7v7H5V4h9l.4 2H20v7.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V8h-5.24l-.4-2H7v6h7.24l.4 2h1.05c-.77.5-1.42 1.2-1.88 2zm8.12-.54L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiFlagRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
