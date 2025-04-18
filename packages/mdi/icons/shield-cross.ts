import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldCrossIcon],svg[mdi-shield-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12c5.2-1.3 9-6.5 9-12V5zm4 9h-3v8h-2v-8H8V8h3V5h2v3h3z"></svg:path>`,
})
export class MdiShieldCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
