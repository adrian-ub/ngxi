import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoVideoIcon],svg[guidance-no-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17.5 17.5v-3h.054c.94 0 1.877.274 2.564.917c.814.761 1.51 1.644 2.061 2.624L23 19.5h.5v-15H23l-.82 1.459a11 11 0 0 1-2.062 2.624c-.687.643-1.624.917-2.564.917H17.5v-5h-13m11.5 15H.5V4M.5.5l23 23"></svg:path>`,
})
export class GuidanceNoVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
