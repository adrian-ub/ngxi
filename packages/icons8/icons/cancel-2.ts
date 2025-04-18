import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8Cancel2Icon],svg[icons8-cancel-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11c0 2.726-.99 5.206-2.625 7.125L9.03 7.47A10.95 10.95 0 0 1 16 5M7.625 8.875L22.97 24.53A10.95 10.95 0 0 1 16 27C9.913 27 5 22.087 5 16c0-2.726.99-5.206 2.625-7.125"></svg:path>`,
})
export class Icons8Cancel2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
