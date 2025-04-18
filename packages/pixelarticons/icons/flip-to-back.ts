import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFlipToBackIcon],svg[pixelarticons-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3H7v2h2zm0 12H7v2h2zm2-12h2v2h-2zm2 12h-2v2h2zm2-12h2v2h-2zm2 12h-2v2h2zm2-12h2v2h-2zm2 4h-2v2h2zM7 7h2v2H7zm14 4h-2v2h2zM7 11h2v2H7zm14 4h-2v2h2zM3 7h2v12h12v2H3z"></svg:path>`,
})
export class PixelarticonsFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
