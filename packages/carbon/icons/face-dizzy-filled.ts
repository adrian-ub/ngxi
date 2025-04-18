import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFaceDizzyFilledIcon],svg[carbon-face-dizzy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M9 16.41L7.59 15l2-2l-2-2L9 9.59l2 2l2-2L14.41 11l-2 2l2 2L13 16.41l-2-2ZM16 25a3 3 0 1 1 3-3a3 3 0 0 1-3 3m8.41-10L23 16.41l-2-2l-2 2L17.59 15l2-2l-2-2L19 9.59l2 2l2-2L24.41 11l-2 2Z"></svg:path>`,
})
export class CarbonFaceDizzyFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
