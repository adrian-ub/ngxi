import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGridLargeIcon],svg[mdi-grid-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4c-1.08 0-2-.9-2-2V4a2 2 0 0 1 2-2m0 2v7h7V4zm0 16h7v-7H4zm16 0v-7h-7v7zm0-16h-7v7h7z"></svg:path>`,
})
export class MdiGridLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
