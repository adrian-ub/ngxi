import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceVideoIcon],svg[guidance-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 4.5h17v5h.054c.94 0 1.877-.274 2.564-.917a11 11 0 0 0 2.061-2.624L23 4.5h.5v15H23l-.82-1.459a11 11 0 0 0-2.062-2.624c-.687-.643-1.624-.917-2.564-.917H17.5v5H.5z"></svg:path>`,
})
export class GuidanceVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
