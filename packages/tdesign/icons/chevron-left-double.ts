import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftDoubleIcon],svg[tdesign-chevron-left-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.414 7.5l-4.5 4.5l4.5 4.5L17 17.914L11.086 12L17 6.086zm-6.5 0l-4.5 4.5l4.5 4.5l-1.414 1.414L4.586 12L10.5 6.086z"></svg:path>`,
})
export class TdesignChevronLeftDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
