import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAvastPasswordsIcon],svg[arcticons-avast-passwords-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23 27.226l2.126 2.057h2.635v2.827h2.79v2.751h4.189v-3.96l-7.52-7.974l.056-.106a7.32 7.32 0 0 0-3.017-8.594a7.15 7.15 0 0 0-8.957 1.116a7.34 7.34 0 0 0-.86 9.078a7.17 7.17 0 0 0 8.585 2.813Z"></svg:path><svg:ellipse cx="17.913" cy="17.79" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.747" ry="1.76"></svg:ellipse>`,
})
export class ArcticonsAvastPasswordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
