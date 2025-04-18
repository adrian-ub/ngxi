import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUpIcon],svg[lets-icons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 4l.707-.707L10 2.586l-.707.707zm8 17a1 1 0 1 0 0-2zM15.707 8.293l-5-5l-1.414 1.414l5 5zm-6.414-5l-5 5l1.414 1.414l5-5zM9 4v10h2V4zm7 17h2v-2h-2zm-7-7a7 7 0 0 0 7 7v-2a5 5 0 0 1-5-5z"></svg:path>`,
})
export class LetsIconsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
