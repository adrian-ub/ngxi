import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDropAreaIcon],svg[pixelarticons-drop-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2zm2 0h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm4 0h2v2h-2zM3 7h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm2 0h2v2H7zm6 0h-2v2h2zm6-8h2v2h-2zm2-4h-2v2h2zm-6 10v-2h6v2h-2v2h-2v2h-2zm4 2v2h2v-2z"></svg:path>`,
})
export class PixelarticonsDropAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
