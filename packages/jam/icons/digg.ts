import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDiggIcon],svg[jam-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.548.006v3.5H0v7h5.544V.006zm-1.552 8.75v-3.5h1.552v3.5zm3.992-5.25h1.996v7H5.988zm0-3.5h1.996v1.969H5.988V.005zm8.205 3.5H8.871v7h3.326v1.531H8.871v1.969h5.322zm-3.326 5.25v-3.5h1.33v3.5zm9.092-5.25h-5.322v7h3.548v1.531h-3.548v1.969h5.322zm-1.774 5.25h-1.552v-3.5h1.552z"></svg:path>`,
})
export class JamDiggIcon {
  readonly viewBox = input("-2 -4.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
