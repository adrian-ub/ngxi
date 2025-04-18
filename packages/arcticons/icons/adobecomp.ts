import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobecompIcon],svg[arcticons-adobecomp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40 5.5H7a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2ZM24 24V12.5m9.5 5.75h-19"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 12.5l9.5 5.75L24 24l-9.5-5.75Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.75 21.12L33.5 24L24 29.75L14.5 24l4.75-2.88m-4.75 8.63l4.75-2.87m-2.37 4.32l4.74-2.9m11.88 1.45L24 35.5M21.62 34l9.5-5.7m-11.87 4.32L24 29.75"></svg:path>`,
})
export class ArcticonsAdobecompIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
