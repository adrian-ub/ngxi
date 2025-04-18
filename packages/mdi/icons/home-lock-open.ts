import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLockOpenIcon],svg[mdi-home-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm0 5a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1a1 1 0 0 0-1 1v2h5v4H8v-4h1v-2a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiHomeLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
