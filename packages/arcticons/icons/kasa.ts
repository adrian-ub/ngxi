import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKasaIcon],svg[arcticons-kasa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.369 6.654L6.852 22.17A4.6 4.6 0 0 0 5.5 25.433v14.282a2.307 2.307 0 0 0 2.307 2.307h32.386a2.307 2.307 0 0 0 2.307-2.307V25.433a4.6 4.6 0 0 0-1.351-3.262L25.63 6.654a2.307 2.307 0 0 0-3.262 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.964 42.022V25.434a4.6 4.6 0 0 0-1.351-3.263L18.233 10.79m1.196 31.232V25.434a4.6 4.6 0 0 0-1.352-3.263l-5.613-5.613"></svg:path>`,
})
export class ArcticonsKasaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
