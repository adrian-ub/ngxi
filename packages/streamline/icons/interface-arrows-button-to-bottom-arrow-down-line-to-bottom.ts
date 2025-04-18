import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToBottomArrowDownLineToBottomIcon],svg[streamline-interface-arrows-button-to-bottom-arrow-down-line-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 5.71l6.15 6.14a.48.48 0 0 0 .7 0l6.15-6.14M.5 2h13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToBottomArrowDownLineToBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
