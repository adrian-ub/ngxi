import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons3dmarkIcon],svg[arcticons-3dmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.842 5.5l29.375 24.707l-14.712-3.739zm28.593 26.296L6.783 26.615l20.577 9.238zm.171 1.784L19.858 42.5l12.292-.806z"></svg:path>`,
})
export class Arcticons3dmarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
