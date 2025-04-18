import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeSolidIcon],svg[iconoir-keyframe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.965 2.124a2.75 2.75 0 0 1 4.07 0l7.297 8.027a2.75 2.75 0 0 1 0 3.7l-7.297 8.026a2.75 2.75 0 0 1-4.07 0L2.668 13.85a2.75 2.75 0 0 1 0-3.7z"></svg:path>`,
})
export class IconoirKeyframeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
