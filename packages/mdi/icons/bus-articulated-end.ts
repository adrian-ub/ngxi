import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBusArticulatedEndIcon],svg[mdi-bus-articulated-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 6L20 7.5L21.5 9L20 10.5l1.5 1.5l-1.5 1.5l1.5 1.5h-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3h-4V8c0-1.11.89-2 2-2zm-3 1.5H15V10h3.5zm-5 0h-4V10h4zM8 7.5H4V10h4zm1.5 6A1.5 1.5 0 0 0 8 15a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 11 15a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiBusArticulatedEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
