import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChevronLeftSIcon],svg[tdesign-chevron-left-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.315 12l4.95-4.95l1.414 1.415L11.144 12l3.535 3.536l-1.414 1.414z"></svg:path>`,
})
export class TdesignChevronLeftSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
