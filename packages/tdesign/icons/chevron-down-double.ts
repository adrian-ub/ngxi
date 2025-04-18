import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronDownDoubleIcon],svg[tdesign-chevron-down-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 5.586l-4.5 4.5l-4.5-4.5L6.086 7L12 12.914L17.914 7zm0 6.5l-4.5 4.5l-4.5-4.5L6.086 13.5L12 19.414l5.914-5.914z"></svg:path>`,
})
export class TdesignChevronDownDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
