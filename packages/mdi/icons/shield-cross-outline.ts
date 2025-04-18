import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldCrossOutlineIcon],svg[mdi-shield-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11c0 5.5-3.8 10.7-9 12c-5.2-1.3-9-6.5-9-12V5l9-4l9 4zm-9 10c3.8-1 7-5.5 7-9.8V6.3l-7-3.1l-7 3.1v4.9c0 4.3 3.3 8.8 7 9.8m4-12h-3V6h-2v3H8v2h3v8h2v-8h3z"></svg:path>`,
})
export class MdiShieldCrossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
