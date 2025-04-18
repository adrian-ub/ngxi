import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclesIcon],svg[whh-circles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m64-768H448q-53 0-90.5 37.5T320 384t37.5 90.5T448 512h128q26 0 45 19t19 45v64q0 27-19 45.5T576 704H448q-26 0-45-18.5T384 640q0-13-9.5-22.5T352 608t-22.5 9.5T320 640q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640v-64q0-53-37.5-90.5T576 448H448q-26 0-45-18.5t-19-45t19-45.5t45-19h128q27 0 45.5 19t18.5 45q0 13 9.5 22.5T672 416t22.5-9.5T704 384q0-53-37.5-90.5T576 256"></svg:path>`,
})
export class WhhCirclesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
