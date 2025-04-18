import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiElevatorIcon],svg[openmoji-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M22 19h28v34H22z"></svg:path><svg:path fill="#FFF" d="m29 53l19-34H22v34z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M22 19h28v34H22zm-6 42V11m20 38V23m20 38V11"></svg:path>`,
})
export class OpenmojiElevatorIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
