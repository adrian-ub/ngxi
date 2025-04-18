import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasLockIcon],svg[pajamas-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a4 4 0 1 1 8 0v1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1zm6.5 0v1h-5V5a2.5 2.5 0 0 1 5 0m-7 2.5v6h9v-6zM9 12V9H7v3z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
