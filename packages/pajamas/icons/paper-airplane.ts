import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasPaperAirplaneIcon],svg[pajamas-paper-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.968 1.966a.75.75 0 0 0-.934-.934l-12.5 3.75a.75.75 0 0 0-.18 1.355L5.952 8.99l-1.731 1.73a.75.75 0 1 0 1.06 1.061l1.731-1.73l2.852 4.595a.75.75 0 0 0 1.355-.18l3.75-12.5ZM8.101 8.96l2.159 3.48l2.417-8.056L8.1 8.96Zm3.515-5.637L3.56 5.74L7.04 7.9z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasPaperAirplaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
