import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnkiconnectAndroidIcon],svg[arcticons-ankiconnect-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.082 7.447c6.97.045 12.584 5.732 12.538 12.702v9.649c0 7.015-5.687 12.702-12.702 12.702c-6.97-.045-12.583-5.732-12.538-12.702v-9.649c0-7.015 5.687-12.702 12.702-12.702q0 0 0 0M11.38 22.296h25.24"></svg:path><svg:circle cx="18.778" cy="16.268" r="1.623" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.222" cy="16.268" r="1.623" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.639 9.158L34.297 5.5M17.361 9.158L13.703 5.5"></svg:path>`,
})
export class ArcticonsAnkiconnectAndroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
