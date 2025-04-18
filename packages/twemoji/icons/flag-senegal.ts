import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagSenegalIcon],svg[twemoji-flag-senegal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00853F" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"></svg:path><svg:path fill="#FDEF42" d="M12 5h12v26H12z"></svg:path><svg:path fill="#E31B23" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#00853F" d="M18.869 16.674L18 14l-.869 2.674H14.32l2.274 1.652L15.726 21L18 19.348L20.274 21l-.868-2.674l2.274-1.652z"></svg:path>`,
})
export class TwemojiFlagSenegalIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
