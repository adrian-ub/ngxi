import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTurnstileIcon],svg[mdi-turnstile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-6V11l-6-6V2h12zM9.17 6.17C8.42 6.92 8 7.94 8 9H2v2h6.55c.35.6.85 1.1 1.45 1.45V19h2v-6c1.06 0 2.08-.42 2.83-1.17z"></svg:path>`,
})
export class MdiTurnstileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
