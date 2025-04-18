import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImagesearchmanIcon],svg[arcticons-imagesearchman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.108 9.237c4.962 4.962 4.988 12.98.051 17.917c-4.936 4.936-12.954 4.91-17.916-.051s-4.987-12.98-.051-17.917s12.955-4.91 17.916.051m.052 17.917l1.355 1.355"></svg:path><svg:rect width="8.872" height="16.05" x="29.748" y="26.164" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.208" ry="1.208" transform="rotate(-45 34.183 34.189)"></svg:rect>`,
})
export class ArcticonsImagesearchmanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
