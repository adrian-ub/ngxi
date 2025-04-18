import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPantoneFilledIcon],svg[tdesign-pantone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.525 4.447l2.098-.716l1.915 5.602H23V21H1V9.333h1.652L14.347-.009zm-1.976.673l-1.604-2.248l-6.103 4.875zm1.244 1.69L9.388 9.332h10.036l-1.037-3.034zM5.285 14.163v2.004H7.29v-2.004z"></svg:path>`,
})
export class TdesignPantoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
