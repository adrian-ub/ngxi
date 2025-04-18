import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageOffIcon],svg[mdi-image-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17.2L6.8 3H19c1.1 0 2 .9 2 2zm-.3 4.8l-1-1H5c-1.1 0-2-.9-2-2V4.3l-1-1L3.3 2L22 20.7zm-3.9-4l-3.9-3.9l-1.9 2.4l-2.5-3L5 18z"></svg:path>`,
})
export class MdiImageOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
