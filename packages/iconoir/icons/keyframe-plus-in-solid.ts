import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframePlusInSolidIcon],svg[iconoir-keyframe-plus-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.035 2.124a2.75 2.75 0 0 0-4.07 0L2.668 10.15a2.75 2.75 0 0 0 0 3.7l7.297 8.026a2.75 2.75 0 0 0 4.07 0l7.297-8.027a2.75 2.75 0 0 0 0-3.7zM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirKeyframePlusInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
