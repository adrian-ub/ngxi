import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCropIcon],svg[zmdi-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 304V133H171V91h170q18 0 30.5 12.5T384 133v171zm-213 43h341v42h-85v86h-43v-86H128q-18 0-30.5-12.5T85 347V133H0V91h85V5h43z"></svg:path>`,
})
export class ZmdiCropIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
