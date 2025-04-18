import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidParagraphIcon],svg[fa6-solid-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V96h-32v352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-32c-88.4 0-160-71.6-160-160S103.6 32 192 32"></svg:path>`,
})
export class Fa6SolidParagraphIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
