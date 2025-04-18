import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagBahrainIcon],svg[twemoji-flag-bahrain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M15 6L8 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h4l7-1z"></svg:path><svg:path fill="#CE1126" d="M32 5H8l6.081 2.6L8 10.2l6.081 2.6L8 15.4l6.081 2.6L8 20.6l6.081 2.6L8 25.8l6.081 2.6L8 31h24a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiFlagBahrainIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
