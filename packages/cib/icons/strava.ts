import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibStravaIcon],svg[cib-strava-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.516 23.927l-2.786-5.49h-4.083L20.517 32l6.865-13.563h-4.083zm-6.563-12.953l3.781 7.464h5.563L13.953 0L4.62 18.438h5.557z"></svg:path>`,
})
export class CibStravaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
