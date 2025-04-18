import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldCrownIcon],svg[mdi-shield-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9 4v6c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5zm4 13H8v1.5c0 .27.19.46.47.5h6.96c.31 0 .52-.16.57-.41zm1-6l-2.67 2.67L12 8.34l-2.33 2.33L7 8l1 5h8z"></svg:path>`,
})
export class MdiShieldCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
