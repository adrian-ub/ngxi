import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiShieldCheckIcon],svg[zmdi-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 5l192 86v128q0 89-55 162.5T192 475q-82-20-137-93.5T0 219V91zm-43 342l171-171l-30-30l-141 140l-55-55l-30 30z"></svg:path>`,
})
export class ZmdiShieldCheckIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
