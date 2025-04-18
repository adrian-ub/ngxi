import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAirmidUkIcon],svg[arcticons-airmid-uk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.526 17.962c.557 2.005.891 4.122.891 6.238c0 11.92-9.468 21.5-21.165 21.5S3.086 36.008 3.086 24.2S12.555 2.7 24.252 2.7q3.342 0 6.35 1.003"></svg:path><svg:circle cx="39.29" cy="9.495" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32 22.085a4.31 4.31 0 0 0-4.31-4.31a4.3 4.3 0 0 0-3.69 2.09a4.3 4.3 0 0 0-3.69-2.09a4.31 4.31 0 0 0-4.31 4.31c0 .544.105 1.063.29 1.542c1.424 4.1 7.71 8.599 7.71 8.599s6.286-4.5 7.71-8.599c.185-.48.29-.998.29-1.542"></svg:path>`,
})
export class ArcticonsAirmidUkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
