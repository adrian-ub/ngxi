import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderInformationOutlineIcon],svg[mdi-folder-information-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.1V8c0-1.1-.9-2-2-2h-8L9 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7.2c1.2 1.8 3.4 3 5.8 3c3.9 0 7-3.1 7-7c0-1.9-.8-3.6-2-4.9M9.3 18H3V8h16v1.7c-.9-.5-1.9-.7-3-.7c-3.9 0-7 3.1-7 7c0 .7.1 1.4.3 2m6.7 3c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m1-7h-2v-2h2zm0 6h-2v-5h2z"></svg:path>`,
})
export class MdiFolderInformationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
