import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeMinusInSolidIcon],svg[iconoir-keyframe-minus-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.035 2.124a2.75 2.75 0 0 0-4.07 0L2.668 10.15a2.75 2.75 0 0 0 0 3.7l7.297 8.026a2.75 2.75 0 0 0 4.07 0l7.297-8.027a2.75 2.75 0 0 0 0-3.7zM9 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirKeyframeMinusInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
