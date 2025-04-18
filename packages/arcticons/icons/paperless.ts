import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPaperlessIcon],svg[arcticons-paperless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.461 40.263Q4.626 36.386 7.143 22.47c3.343 6.384 14.023 10.155 7.318 17.793m0 0a6.4 6.4 0 0 1 1.625 2.586"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.813 43.5a14.4 14.4 0 0 1 4.064-6.1Q44.339 31.487 40.96 4.5C35.9 15.464 10.594 17.989 19.877 37.4m-9.017-7.86a8.54 8.54 0 0 1 4.17 7.745"></svg:path>`,
})
export class ArcticonsPaperlessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
