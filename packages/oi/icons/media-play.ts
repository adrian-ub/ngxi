import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMediaPlayIcon],svg[oi-media-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6l6-3z"></svg:path>`,
})
export class OiMediaPlayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
