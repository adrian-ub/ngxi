import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsArrowDownIcon],svg[rivet-icons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v10.844L2.146 7.737L.854 9.263L8 15.31l7.146-6.047l-1.292-1.526L9 11.844V1z"></svg:path>`,
})
export class RivetIconsArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
