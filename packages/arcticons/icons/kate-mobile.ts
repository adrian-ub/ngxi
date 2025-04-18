import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKateMobileIcon],svg[arcticons-kate-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.314 42.406h7.547V31.052l5.921-5.917L30.817 42.5h9.869L25.977 19.923L40.234 5.679H29.702L14.86 21.642V5.5H7.33c0 12.404-.015 24.54-.015 36.905Z"></svg:path>`,
})
export class ArcticonsKateMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
