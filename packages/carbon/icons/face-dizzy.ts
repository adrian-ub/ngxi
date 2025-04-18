import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFaceDizzyIcon],svg[carbon-face-dizzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M24.41 11L23 9.59l-2 2l-2-2L17.59 11l2 2l-2 2L19 16.41l2-2l2 2L24.41 15l-2-2zm-10 0L13 9.59l-2 2l-2-2L7.59 11l2 2l-2 2L9 16.41l2-2l2 2L14.41 15l-2-2zM16 19a3 3 0 1 0 3 3a3 3 0 0 0-3-3"></svg:path>`,
})
export class CarbonFaceDizzyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
