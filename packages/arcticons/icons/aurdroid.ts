import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAurdroidIcon],svg[arcticons-aurdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 34.21l-20.33 5.72V19.08l20.33-5.71zm-39 .76l18.67 4.96V19.08L4.5 14.12z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 14.12L24 8.07l19.5 5.3m-7.9 2.22v7.99l-5.08 1.56v-8.12m2.54-.72l-17.7-5.2"></svg:path>`,
})
export class ArcticonsAurdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
