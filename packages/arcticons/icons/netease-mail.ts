import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeteaseMailIcon],svg[arcticons-netease-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.566 5.308v28.379M9.768 23.49h13.255m5.183-13.17v26.425H4.84"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 39.464V12.023h23.67m5.983 30.669V12.954a3.555 3.555 0 0 1 3.23-3.144H43.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.558 23.83h3.994c.75 0 .948-1.155.948-1.87V7.857m0 17.503v8.582a3.206 3.206 0 0 1-3.059 3.143h-6.287m4.404-13.255h3.872c.785 0 1.079.912 1.07 1.53"></svg:path>`,
})
export class ArcticonsNeteaseMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
