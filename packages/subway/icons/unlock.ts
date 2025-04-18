import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayUnlockIcon],svg[subway-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M412.4 232.7h-256V69.8c0-12.9 10.4-23.3 23.3-23.3h139.6c12.8 0 23.3 10.4 23.3 23.3v93.1h46.5V69.8c0-38.6-31.3-69.8-69.8-69.8H179.7c-38.6 0-69.8 31.3-69.8 69.8v162.9H86.6c-12.8 0-23.3 10.4-23.3 23.3v232.7c0 12.9 10.4 23.3 23.3 23.3h325.8c12.8 0 23.3-10.4 23.3-23.3V256c0-12.9-10.5-23.3-23.3-23.3"></svg:path>`,
})
export class SubwayUnlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
