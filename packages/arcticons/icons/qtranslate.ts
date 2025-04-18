import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQtranslateIcon],svg[arcticons-qtranslate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.891 10.108c1.303 11.998 7.015 16.062 17.288 19.128m-5.405-19.128C21.471 22.107 15.76 26.17 5.486 29.237M16.833 5.93v4.14m-11.5 0h23m11.885 24.3h-9.972m12.421 7.7l-7.322-23.017m-7.639 22.949l7.639-22.949"></svg:path>`,
})
export class ArcticonsQtranslateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
