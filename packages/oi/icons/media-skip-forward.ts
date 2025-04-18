import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMediaSkipForwardIcon],svg[oi-media-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v6l4-3zm4 3v3l4-3l-4-3z"></svg:path>`,
})
export class OiMediaSkipForwardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
