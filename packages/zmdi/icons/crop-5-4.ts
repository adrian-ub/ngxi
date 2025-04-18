import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCrop54Icon],svg[zmdi-crop-5-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 43q18 0 30.5 12.5T384 85v214q0 17-12.5 29.5T341 341H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43zm0 256V85H43v214z"></svg:path>`,
})
export class ZmdiCrop54Icon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
