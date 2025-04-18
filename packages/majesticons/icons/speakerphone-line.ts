import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSpeakerphoneLineIcon],svg[majesticons-speakerphone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.008 2.987C19.34 2.225 21 3.187 21 4.723v12.554c0 1.535-1.659 2.498-2.992 1.736L12.734 16H11v3.5a2.5 2.5 0 0 1-5 0v-3.6A5.002 5.002 0 0 1 7 6h5.734l5.274-3.013zM12 8H7a3 3 0 0 0 0 6h5V8zm2 6.42l5 2.857V4.723L14 7.58v6.84zM8 16v3.5a.5.5 0 0 0 1 0V16H8z"></svg:path></svg:g>`,
})
export class MajesticonsSpeakerphoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
