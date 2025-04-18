import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsInboxInIcon],svg[majesticons-inbox-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M9.707 7.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 8.586V3h5a3 3 0 0 1 3 3v7h-5a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2H3V6a3 3 0 0 1 3-3h5v5.586L9.707 7.293zM3 18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-3h-5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H3v3z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsInboxInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
