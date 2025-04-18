import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCursorHandHandSelectCursorFingerIcon],svg[streamline-interface-cursor-hand-hand-select-cursor-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.13a2 2 0 0 1 1.59 2.24l-.61 4.27a1 1 0 0 1-1 .86H4a1 1 0 0 1-.93-.63L2 10.21a2 2 0 0 1 1-2.53L4.35 7V2a1.5 1.5 0 0 1 3 0v3.5Z"></svg:path>`,
})
export class StreamlineInterfaceCursorHandHandSelectCursorFingerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
