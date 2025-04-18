import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignRightIcon],svg[iconoir-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 10h14M3 6h18M7 18h14M3 14h18"></svg:path>`,
})
export class IconoirAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
