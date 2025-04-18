import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagSwitzerlandIcon],svg[twemoji-flag-switzerland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D32D27" d="M31 27a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M25 16.063h-5v-5h-4v5h-5V20h5v5.063h4V20h5z"></svg:path>`,
})
export class TwemojiFlagSwitzerlandIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
