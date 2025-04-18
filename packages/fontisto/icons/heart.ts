import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoHeartIcon],svg[fontisto-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 6.857l-.001-.097A6.76 6.76 0 0 1 6.863.001h-.005c3.428 0 6 2.572 6.857 3.428c.857-.856 3.428-3.428 6.857-3.428c5.143 0 6.857 3.428 6.857 6.857c0 6.857-12 16.285-13.715 17.143C11.999 23.144-.001 13.716-.001 6.858z"></svg:path>`,
})
export class FontistoHeartIcon {
  readonly viewBox = input("0 0 27 24")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
