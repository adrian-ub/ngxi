import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faHouzzIcon],svg[fa-houzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 1191l512-295v591l-512 296zM0 896v591l512-296zM512 9v591L0 896V305zm0 591l512-295v591z"></svg:path>`,
})
export class FaHouzzIcon {
  readonly viewBox = input("0 0 1024 1792")
  readonly width = input("0.58em")
  readonly height = input("1em")
}
