import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusDuplicateIcon],svg[nimbus-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.869 6.092V3.955h1.25v2.137h2.118v1.25h-2.118v2.213h-1.25V7.342H6.636v-1.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.5 10.76c0 .69-.56 1.25-1.25 1.25H4.623c-.69 0-1.25-.56-1.25-1.25V2.75c0-.69.56-1.25 1.25-1.25h9.627c.69 0 1.25.56 1.25 1.25zm-1.25 0H4.623V2.75h9.627z"></svg:path><svg:path fill="currentColor" d="M1.75 13.25h9.615v-.62h1.25v.62c0 .69-.56 1.25-1.25 1.25H1.75c-.69 0-1.25-.56-1.25-1.25v-8C.5 4.56 1.06 4 1.75 4h1.005v1.25H1.75z"></svg:path>`,
})
export class NimbusDuplicateIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
