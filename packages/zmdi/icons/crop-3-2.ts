import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCrop32Icon],svg[zmdi-crop-3-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 21q18 0 30.5 12.5T384 64v256q0 18-12.5 30.5T341 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V64H43v256z"></svg:path>`,
})
export class ZmdiCrop32Icon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
