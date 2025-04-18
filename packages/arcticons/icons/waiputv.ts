import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWaiputvIcon],svg[arcticons-waiputv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.434 40.872l12.83-7.564a5.65 5.65 0 0 0 2.779-4.864v-15.64c0-5.099-5.542-8.265-9.934-5.676l-12.83 7.564A5.65 5.65 0 0 0 4.5 19.556v15.64c0 5.099 5.542 8.265 9.934 5.676"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.891 40.872l12.83-7.564a5.65 5.65 0 0 0 2.779-4.864v-15.64c0-5.099-5.542-8.265-9.934-5.676l-12.83 7.564a5.65 5.65 0 0 0-2.779 4.864v15.64c0 5.099 5.542 8.265 9.934 5.676"></svg:path>`,
})
export class ArcticonsWaiputvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
