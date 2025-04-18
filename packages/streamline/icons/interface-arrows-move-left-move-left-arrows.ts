import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveLeftMoveLeftArrowsIcon],svg[streamline-interface-arrows-move-left-move-left-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 7h-6M3 4.5L.5 7L3 9.5"></svg:path><svg:rect width="4.5" height="13" x="9" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveLeftMoveLeftArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
