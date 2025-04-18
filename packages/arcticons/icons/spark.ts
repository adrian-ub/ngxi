import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSparkIcon],svg[arcticons-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.882 33.568L24 4.5m0 0l17.002 34.973l-13.12-5.905L24 43.5m0-39v39m-3.882-9.932L24 4.5m0 0L6.998 39.473l13.12-5.905L24 43.5"></svg:path>`,
})
export class ArcticonsSparkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
