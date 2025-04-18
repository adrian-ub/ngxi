import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForGreeceIcon],svg[emojione-flag-for-greece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#428bc1" d="M56 14H32v6h27.5c-.9-2.1-2.1-4.2-3.5-6"></svg:path><svg:path fill="#f9f9f9" d="M32 14h24q-2.55-3.45-6-6H32zm27.5 6H32v6h29.4c-.4-2.1-1.1-4.1-1.9-6"></svg:path><svg:path fill="#428bc1" d="M4.5 44h55c.8-1.9 1.5-3.9 1.9-6H2.6c.4 2.1 1.1 4.1 1.9 6"></svg:path><svg:path fill="#f9f9f9" d="M8 50h48c1.4-1.8 2.6-3.9 3.5-6h-55c.9 2.1 2.1 4.2 3.5 6"></svg:path><svg:path fill="#428bc1" d="M8 50q2.55 3.45 6 6h36q3.45-2.55 6-6z"></svg:path><svg:path fill="#f9f9f9" d="M14 56c5 3.8 11.2 6 18 6s13-2.2 18-6zm6-24V20h12v-6H20V4.5c-2.1.9-4.2 2.1-6 3.5v6H8c-1.4 1.8-2.6 3.9-3.5 6H14v12H2q0 3.15.6 6h58.8q.6-2.85.6-6z"></svg:path><svg:path fill="#428bc1" d="M61.4 26H32v-6H20v12h42q0-3.15-.6-6M32 2c-4.3 0-8.3.9-12 2.5V14h12V8h18c-5-3.8-11.2-6-18-6M14 14V8q-3.45 2.55-6 6zm-9.5 6C2.9 23.7 2 27.7 2 32h12V20z"></svg:path>`,
})
export class EmojioneFlagForGreeceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
