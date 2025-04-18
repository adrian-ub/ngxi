import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCropIcon],svg[vaadin-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 .7V0h-.7l-3 3H5V0H3v3H0v2h3v8h8v3h2v-3h3v-2h-3V3.7zM5 5h5.3L5 10.3zm6 6H5.7L11 5.7z"></svg:path>`,
})
export class VaadinCropIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
