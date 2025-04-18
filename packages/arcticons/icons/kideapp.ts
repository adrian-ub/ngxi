import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKideappIcon],svg[arcticons-kideapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m16.574 12.06l2.378-3.282l2.4 3.282v11.544l6.817-6.779h3.04v3.149l-8.46 8.413l-3.17.845l-3.018-3z"></svg:path><svg:path d="m19.578 29.232l8.605 9.99h3.256v-3.135l-7.903-8.483"></svg:path></svg:g><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKideappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
