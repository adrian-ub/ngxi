import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonLeftDoubleArrowArrowsDoubleLeftIcon],svg[streamline-interface-arrows-button-left-double-arrow-arrows-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.54.5L1.4 6.65a.48.48 0 0 0 0 .7l6.14 6.15"></svg:path><svg:path d="M12.75.5L6.6 6.65a.5.5 0 0 0 0 .7l6.15 6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonLeftDoubleArrowArrowsDoubleLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
