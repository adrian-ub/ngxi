import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImageFilledIcon],svg[tdesign-image-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-2 2v15.586l-11-11l-5 5V4z"></svg:path>`,
})
export class TdesignImageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
