import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxEqualizerIcon],svg[bx-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2v6h-2zm4-3h2v12h-2zM7 4h2v16H7zm12 7h2v2h-2zM3 10h2v4H3z"></svg:path>`,
})
export class BxEqualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
