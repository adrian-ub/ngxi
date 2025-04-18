import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownleftCornerArrowCornerDownLeftDownleftIcon],svg[streamline-interface-arrows-downleft-corner-arrow-corner-down-left-downleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5h-12a1 1 0 0 1-1-1V.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsDownleftCornerArrowCornerDownLeftDownleftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
