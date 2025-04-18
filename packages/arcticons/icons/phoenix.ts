import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhoenixIcon],svg[arcticons-phoenix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.802 43.498h3.488c1.842 0 5.786-2.748 5.786-5.493v-5.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.879 6.713c5.886-3.357 13.458-2.857 18.76 1.24c5.302 4.095 7.13 10.857 4.528 16.752c-2.601 5.896-9.04 9.585-15.954 9.142S10.482 28.928 8.799 22.758"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.738 6.779S13.133 4.974 10.63 4.86c-.298-.014-1.963-.144-2.97-.103M8.797 43.5V8.127s-.065-2.762-1.13-3.361"></svg:path><svg:path d="M18.498 19.49v-7.149c0-2.4-1.594-4.53-2.762-5.571"></svg:path></svg:g><svg:ellipse cx="24.447" cy="19.104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.959" ry="5.872"></svg:ellipse>`,
})
export class ArcticonsPhoenixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
