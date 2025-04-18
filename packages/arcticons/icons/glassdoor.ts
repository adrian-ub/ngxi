import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGlassdoorIcon],svg[arcticons-glassdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 10.5v20h6v-20h21a6 6 0 0 0-6-6h-15a6 6 0 0 0-6 6m21 27h-21a6 6 0 0 0 6 6h15a6 6 0 0 0 6-6v-20h-6z"></svg:path>`,
})
export class ArcticonsGlassdoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
