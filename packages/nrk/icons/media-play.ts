import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPlayIcon],svg[nrk-media-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h8l5.5 10L14 22H6l5.5-10z"></svg:path>`,
})
export class NrkMediaPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
