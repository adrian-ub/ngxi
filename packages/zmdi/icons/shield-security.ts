import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiShieldSecurityIcon],svg[zmdi-shield-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 5l192 86v128q0 89-55 162.5T192 475q-82-20-137-93.5T0 219V91zm0 235V52L43 118v122zv191q59-19 100-72t49-119z"></svg:path>`,
})
export class ZmdiShieldSecurityIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
