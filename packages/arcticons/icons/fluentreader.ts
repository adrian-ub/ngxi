import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFluentreaderIcon],svg[arcticons-fluentreader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.855 39.146h5.842a1.82 1.82 0 0 0 1.819-1.819V7.319A1.82 1.82 0 0 0 40.697 5.5H10.69a1.82 1.82 0 0 0-1.82 1.819v5.636"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.888 40.753h6.348a1.48 1.48 0 0 0 1.48-1.48V14.845a1.48 1.48 0 0 0-1.48-1.48H8.808a1.48 1.48 0 0 0-1.48 1.48v6.206"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.495 21.345H6.628a1.144 1.144 0 0 0-1.144 1.144v18.867A1.144 1.144 0 0 0 6.628 42.5h18.867a1.144 1.144 0 0 0 1.144-1.143h0V22.489a1.144 1.144 0 0 0-1.144-1.144m-12.449 4.546h6.031m-6.031 6.032h3.92m-3.92-6.032v12.064"></svg:path>`,
})
export class ArcticonsFluentreaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
