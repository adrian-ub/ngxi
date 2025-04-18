import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiElgatoKeyLightIcon],svg[cbi-elgato-key-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.61 4.73a3 3 0 0 1 3 3v9.69a3 3 0 0 1-3 3H4.39a3 3 0 0 1-3-3V7.73a3 3 0 0 1 3-3zm0-1H4.39a4 4 0 0 0-4 4v9.69a4 4 0 0 0 4 4h16.22a4 4 0 0 0 4-4V7.73a4 4 0 0 0-4-4"></svg:path>`,
})
export class CbiElgatoKeyLightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
