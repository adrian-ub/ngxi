import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCrop75Icon],svg[zmdi-crop-7-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 85q18 0 30.5 12.5T384 128v128q0 18-12.5 30.5T341 299H43q-18 0-30.5-12.5T0 256V128q0-18 12.5-30.5T43 85zm0 171V128H43v128z"></svg:path>`,
})
export class ZmdiCrop75Icon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
