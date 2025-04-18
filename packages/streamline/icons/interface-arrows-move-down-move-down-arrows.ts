import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveDownMoveDownArrowsIcon],svg[streamline-interface-arrows-move-down-move-down-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 7.5v6M4.5 11L7 13.5L9.5 11"></svg:path><svg:rect width="4.5" height="13" x="4.75" y="-3.75" rx="1" transform="rotate(-90 7 2.75)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveDownMoveDownArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
