import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonUpDoubleArrowArrowsDoubleUpIcon],svg[streamline-interface-arrows-button-up-double-arrow-arrows-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7.54L6.65 1.4a.48.48 0 0 1 .7 0l6.15 6.14"></svg:path><svg:path d="M.5 12.75L6.65 6.6a.5.5 0 0 1 .7 0l6.15 6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonUpDoubleArrowArrowsDoubleUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
