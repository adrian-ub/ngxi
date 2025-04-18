import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToLeftArrowLineToLeftIcon],svg[streamline-interface-arrows-button-to-left-arrow-line-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.29.5L2.15 6.65a.48.48 0 0 0 0 .7l6.14 6.15M12 .5v13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToLeftArrowLineToLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
