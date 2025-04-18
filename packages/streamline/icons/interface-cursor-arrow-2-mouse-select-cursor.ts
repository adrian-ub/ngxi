import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCursorArrow2MouseSelectCursorIcon],svg[streamline-interface-cursor-arrow-2-mouse-select-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.15 5.45a.5.5 0 0 0 0-1L1.83.56A1 1 0 0 0 .56 1.83L4.5 13.16a.5.5 0 0 0 1 0l2-5.66Z"></svg:path>`,
})
export class StreamlineInterfaceCursorArrow2MouseSelectCursorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
