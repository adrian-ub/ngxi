import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDoorClosedLockIcon],svg[mdi-door-closed-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h2v2h-2zm-4-8h7a2 2 0 0 1 2 2v14h1v2H2v-2h8V5a2 2 0 0 1 2-2m0 2v14h7V5M6.2 5H2.8v-.5a1.7 1.7 0 0 1 3.4 0M7 5v-.5a2.5 2.5 0 0 0-5 0V5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiDoorClosedLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
