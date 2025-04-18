import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSailsIcon],svg[logos-sails-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#28A3B2" d="M24.34 255.334S-73.092 100.291 127.341.457v254.877zm134.033 0V97.36s31.99 52.206 97.003 157.975z"></svg:path>`,
})
export class LogosSailsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
