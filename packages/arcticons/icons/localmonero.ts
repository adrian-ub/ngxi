import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLocalmoneroIcon],svg[arcticons-localmonero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.383 28.418h4.322v-8.836L24 26.407l6.29-6.825v8.836h4.328"></svg:path><svg:path d="M35.5 24c0 6.351-5.149 11.5-11.5 11.5S12.5 30.351 12.5 24S17.65 12.5 24 12.5S35.5 17.65 35.5 24"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 24L13.75 6.246h20.5L44.5 24L34.25 41.754h-20.5z"></svg:path>`,
})
export class ArcticonsLocalmoneroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
