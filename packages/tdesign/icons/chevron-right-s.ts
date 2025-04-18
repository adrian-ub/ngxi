import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronRightSIcon],svg[tdesign-chevron-right-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.684 12l-4.95 4.95l-1.414-1.414L12.856 12L9.32 8.465l1.415-1.415z"></svg:path>`,
})
export class TdesignChevronRightSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
