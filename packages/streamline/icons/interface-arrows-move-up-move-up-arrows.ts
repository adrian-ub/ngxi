import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveUpMoveUpArrowsIcon],svg[streamline-interface-arrows-move-up-move-up-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 6.5v-6M9.5 3L7 .5L4.5 3"></svg:path><svg:rect width="4.5" height="13" x="4.75" y="4.75" rx="1" transform="rotate(90 7 11.25)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveUpMoveUpArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
