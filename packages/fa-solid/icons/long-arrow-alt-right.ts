import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidLongArrowAltRightIcon],svg[fa-solid-long-arrow-alt-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971z"></svg:path>`,
})
export class FaSolidLongArrowAltRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
