import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBrightnessIcon],svg[mdi-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 4h4.686L12 .686L15.314 4H20v4.686L23.314 12L20 15.314V20h-4.686L12 23.314L8.686 20H4v-4.686L.686 12L4 8.686V4zm8 2v12a6 6 0 0 0 0-12z" fill="currentColor"></svg:path>`,
})
export class MdiBrightnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
