import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMailCheckIcon],svg[pixelarticons-mail-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h18v10h-2V6H4v12h8v2H2V4zm4 4H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8zm6 10h2v2h-2zm4 2v2h-2v-2zm2-2h-2v2h2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsMailCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
