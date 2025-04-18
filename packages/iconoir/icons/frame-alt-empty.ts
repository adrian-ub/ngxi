import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameAltEmptyIcon],svg[iconoir-frame-alt-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 3v18M18 3v18M3 6h18M3 18h18"></svg:path>`,
})
export class IconoirFrameAltEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
