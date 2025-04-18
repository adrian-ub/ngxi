import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsEnvelopeOpenIcon],svg[bxs-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.555 8.168l-9-6a1 1 0 0 0-1.109 0l-9 6A1 1 0 0 0 2.004 9H2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9h-.004a1 1 0 0 0-.441-.832M20 12.7L12 17l-8-4.3v-2.403l8 4.299l8-4.299z"></svg:path>`,
})
export class BxsEnvelopeOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
