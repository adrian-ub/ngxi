import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDirectionFIcon],svg[jam-direction-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4.98a2 2 0 0 1 1.03.286L18.863 4a2.333 2.333 0 0 1 0 4L16.01 9.714a2 2 0 0 1-1.03.286H10v9a1 1 0 0 1-2 0v-9H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamDirectionFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
