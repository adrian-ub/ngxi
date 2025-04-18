import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsRoundedCornerIcon],svg[pixelarticons-rounded-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v2H3zm0 4h2v2H3zm2 4H3v2h2zm-2 4h2v2H3zm2 4H3v2h2zm2 0h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-2-4h2v2h-2zM17 5h-2V3h-4v2h4v2h2v2h2v4h2V9h-2V7h-2zM7 3h2v2H7z"></svg:path>`,
})
export class PixelarticonsRoundedCornerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
