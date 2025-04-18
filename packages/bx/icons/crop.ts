import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCropIcon],svg[bx-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7c0-1.103-.897-2-2-2H7V2H5v3H2v2h15v15h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M5 9v8c0 1.103.897 2 2 2h8v-2H7V9z"></svg:path>`,
})
export class BxCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
