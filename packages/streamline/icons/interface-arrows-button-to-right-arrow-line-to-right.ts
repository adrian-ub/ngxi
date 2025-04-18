import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToRightArrowLineToRightIcon],svg[streamline-interface-arrows-button-to-right-arrow-line-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.71.5l6.14 6.15a.48.48 0 0 1 0 .7L5.71 13.5M2 .5v13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToRightArrowLineToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
