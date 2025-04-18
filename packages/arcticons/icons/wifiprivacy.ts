import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWifiprivacyIcon],svg[arcticons-wifiprivacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.18 20.45a14.78 14.78 0 0 1 11.82-6h0a14.77 14.77 0 0 1 11.82 6m-19.41 3.18a9.49 9.49 0 0 1 7.59-4a9.49 9.49 0 0 1 7.59 4m-11.24 2.95a4.56 4.56 0 0 1 7.3 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5c1.69 0 15.25-7.77 15.25-16.94v-20c-4 0-15.25-2-15.25-2s-11.26 2-15.25 2v20C8.75 35.73 22.31 43.5 24 43.5"></svg:path>`,
})
export class ArcticonsWifiprivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
