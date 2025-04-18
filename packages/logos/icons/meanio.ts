import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMeanioIcon],svg[logos-meanio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 44.3l20.1 174L128 273.7l108.1-55.3L256 44.1S188.6 0 128.1 0S0 44.3 0 44.3z" fill="#007D96"></svg:path><svg:path d="M8.3 49.4l18.8 159.5l101 50.8L229.2 209l18.6-159.7S184.7 8.9 128.1 8.9S8.3 49.4 8.3 49.4z" fill="#FFF"></svg:path><svg:path d="M14.9 54l17.8 149.6l95.4 47.6l95.5-47.5l17.5-149.8S181.5 16 128 16C74.5 16 14.9 54 14.9 54z" fill="#007D96"></svg:path><svg:path d="M57.5 200.7V52.9l35.3-.2l35.2 92.9l38.1-92.4l34.8-.3v147.8h-28.7l1.5-103.8L128 200.7L83.9 97.1l2.3 103.6H57.5z" fill="#FFF"></svg:path><svg:path d="M128.1 0C67.5 0 0 44.3 0 44.3l20.1 174L128 273.7V0h.1z" opacity=".1" fill="#000"></svg:path>`,
})
export class LogosMeanioIcon {
  readonly viewBox = input("0 0 256 274")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
