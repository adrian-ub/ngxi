import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirOrthogonalViewIcon],svg[iconoir-orthogonal-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21V3h18v18zm0-4.5h18M3 12h18M3 7.5h18M16.5 3v18M12 3v18M7.5 3v18"></svg:path>`,
})
export class IconoirOrthogonalViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
