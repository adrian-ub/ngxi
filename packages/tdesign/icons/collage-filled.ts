import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCollageFilledIcon],svg[tdesign-collage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.294 22H22v-3.805L11.52 13.47zM22 16.001V2h-7.488l-2.48 9.507zM12.445 2H2v20h5.227z"></svg:path>`,
})
export class TdesignCollageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
