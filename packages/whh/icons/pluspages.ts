import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPluspagesIcon],svg[whh-pluspages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-416V720l192 48l-48-192h304v416q0 13-9.5 22.5t-22.5 9.5m-224-768l-192 48V0h416q13 0 22.5 9.5t9.5 22.5v416h-304zm-464 192h-304V32q0-13 9.5-22.5t22.5-9.5h416v304l-192-48zm-48 320l192-48v304h-416q-13 0-22.5-9.5t-9.5-22.5V576h304z"></svg:path>`,
})
export class WhhPluspagesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
