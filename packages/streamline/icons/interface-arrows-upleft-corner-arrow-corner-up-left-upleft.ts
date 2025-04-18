import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUpleftCornerArrowCornerUpLeftUpleftIcon],svg[streamline-interface-arrows-upleft-corner-arrow-corner-up-left-upleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5h-12a1 1 0 0 0-1 1v12"></svg:path>`,
})
export class StreamlineInterfaceArrowsUpleftCornerArrowCornerUpLeftUpleftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
