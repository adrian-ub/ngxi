import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVuejsLineIcon],svg[ri-vuejs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.317 3L12 18l8.684-15H23L12 22L1 3zm4.342 0L12 10.5L16.343 3h2.316L12 14.5L5.343 3z"></svg:path>`,
})
export class RiVuejsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
