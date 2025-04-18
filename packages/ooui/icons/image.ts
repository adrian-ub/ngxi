import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiImageIcon],svg[ooui-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-.17 13l4.09-5.25l2.92 3.51L12.92 8l5.25 7z"></svg:path>`,
})
export class OouiImageIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
