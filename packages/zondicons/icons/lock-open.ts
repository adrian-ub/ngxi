import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsLockOpenIcon],svg[zondicons-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0M7 6v2h6V6a3 3 0 0 0-6 0"></svg:path>`,
})
export class ZondiconsLockOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
