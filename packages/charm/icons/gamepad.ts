import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGamepadIcon],svg[charm-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.25 3.75c-2 5-2 9 0 9.5s2.5-2 2.5-2h4.5s.5 2.5 2.5 2s2-4.5 0-9.5h-2l-1 1h-3.5l-1-1z"></svg:path>`,
})
export class CharmGamepadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
