import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseMinusIcon],svg[pixelarticons-briefcase-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v6h-2V9H4v10h10v2H2V7h6zm6 2h-4v2h4zm2 12h6v2h-6z"></svg:path>`,
})
export class PixelarticonsBriefcaseMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
