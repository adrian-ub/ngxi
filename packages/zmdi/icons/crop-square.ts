import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCropSquareIcon],svg[zmdi-crop-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 21q17 0 29.5 12.5T341 64v256q0 18-12.5 30.5T299 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V64H43v256z"></svg:path>`,
})
export class ZmdiCropSquareIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
