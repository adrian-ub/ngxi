import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentResizeImage24RegularIcon],svg[fluent-resize-image-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.75a.75.75 0 0 0-.75-.75h-5A3.25 3.25 0 0 0 2 5.25v5a.75.75 0 0 0 1.5 0v-5c0-.966.784-1.75 1.75-1.75h5a.75.75 0 0 0 .75-.75M13.75 2a.75.75 0 0 0 0 1.5h5c.966 0 1.75.784 1.75 1.75v5a.75.75 0 0 0 1.5 0v-5A3.25 3.25 0 0 0 18.75 2zm0 20a.75.75 0 0 1 0-1.5h5a1.75 1.75 0 0 0 1.75-1.75v-5a.75.75 0 0 1 1.5 0v5A3.25 3.25 0 0 1 18.75 22zM4 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524L4.91 18.03a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415L5.97 19.09a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 9 23zm5-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentResizeImage24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
