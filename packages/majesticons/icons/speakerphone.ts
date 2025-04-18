import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSpeakerphoneIcon],svg[majesticons-speakerphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M21 4.723c0-1.535-1.659-2.498-2.992-1.736L12.734 6H7a5 5 0 0 0-1 9.9v3.6a2.5 2.5 0 0 0 5 0V16h1.734l5.274 3.013c1.333.762 2.992-.2 2.992-1.736V4.723z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsSpeakerphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
