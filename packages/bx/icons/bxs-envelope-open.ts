import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsEnvelopeOpenIcon],svg[bx-bxs-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.555 8.168l-9-6a1 1 0 0 0-1.109 0l-9 6A.995.995 0 0 0 2.004 9H2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9h-.004a.997.997 0 0 0-.441-.832zM20 12.7L12 17l-8-4.3v-2.403l8 4.299l8-4.299V12.7z" fill="currentColor"></svg:path>`,
})
export class BxBxsEnvelopeOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
