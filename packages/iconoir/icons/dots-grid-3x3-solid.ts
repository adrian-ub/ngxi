import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDotsGrid3x3SolidIcon],svg[iconoir-dots-grid-3x3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 20.4a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35V3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDotsGrid3x3SolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
