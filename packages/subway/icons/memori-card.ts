import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMemoriCardIcon],svg[subway-memori-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416.7 0H118L32.7 85.3v384c0 23.5 19.1 42.7 42.7 42.7h341.3c23.6 0 42.7-19.1 42.7-42.7V42.7c0-23.6-19.2-42.7-42.7-42.7m-256 128H118V42.7h42.7zm64 0H182V42.7h42.7zm64 0H246V42.7h42.7zm64 0H310V42.7h42.7zm64 0H374V42.7h42.7z"></svg:path>`,
})
export class SubwayMemoriCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
