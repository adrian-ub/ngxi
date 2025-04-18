import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPositionIcon],svg[iconoir-position-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 0v2m-7-9H3m9-7V3m7 9h2"></svg:path>`,
})
export class IconoirPositionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
