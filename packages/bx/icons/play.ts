import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPlayIcon],svg[bx-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6v12l10-6z"></svg:path>`,
})
export class BxPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
