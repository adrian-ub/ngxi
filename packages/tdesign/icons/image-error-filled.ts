import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImageErrorFilledIcon],svg[tdesign-image-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h11.232a6.5 6.5 0 0 1-.732-3c0-1.9.816-3.61 2.116-4.799L9 8.586l-5 5V4h16v8.576a6.5 6.5 0 0 1 2 .656z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m5.829 17.993l1.414-1.415L20.415 19l2.828-2.828l-1.414-1.415L19 17.586l-2.828-2.829l-1.414 1.415L17.586 19l-2.828 2.828l1.414 1.415L19 20.414z"></svg:path>`,
})
export class TdesignImageErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
