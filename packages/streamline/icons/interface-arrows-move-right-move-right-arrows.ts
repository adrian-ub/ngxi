import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveRightMoveRightArrowsIcon],svg[streamline-interface-arrows-move-right-move-right-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 7h6M11 4.5L13.5 7L11 9.5"></svg:path><svg:rect width="4.5" height="13" x=".5" y=".5" rx="1" transform="rotate(-180 2.75 7)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveRightMoveRightArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
