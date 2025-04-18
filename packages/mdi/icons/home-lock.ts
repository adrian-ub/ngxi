import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLockIcon],svg[mdi-home-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm0 6a3 3 0 0 1 3 3v1h1v4H8v-4h1v-1a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v1h2v-1c0-.5-.4-1-1-1"></svg:path>`,
})
export class MdiHomeLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
