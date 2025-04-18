import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMailFilledIcon],svg[ix-mail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.687 114.04l213.334 192.001l213.333-192v312.633H42.688zm394.776-28.7L256.021 248.626L74.577 85.34z"></svg:path>`,
})
export class IxMailFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
