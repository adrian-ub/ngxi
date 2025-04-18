import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycapPoundIcon],svg[openmoji-keycap-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.875 12.208h48v47.834h-48z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.125 11.958h48v48h-48zm21.328 15.658L30.94 44.634m9.87-17.018l-2.513 17.018M28.066 32.357l16.717-.017m-17.816 7.507l16.717-.017"></svg:path>`,
})
export class OpenmojiKeycapPoundIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
