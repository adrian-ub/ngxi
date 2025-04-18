import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightDoubleIcon],svg[tdesign-chevron-right-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.586 16.5l4.5-4.5l-4.5-4.5L7 6.086L12.914 12L7 17.914zm6.5 0l4.5-4.5l-4.5-4.5L13.5 6.086L19.414 12L13.5 17.914z"></svg:path>`,
})
export class TdesignChevronRightDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
