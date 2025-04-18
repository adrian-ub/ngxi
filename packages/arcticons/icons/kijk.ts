import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKijkIcon],svg[arcticons-kijk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 24c6.832-8.079 10.85-11.85 19.5-11.85S36.668 15.92 43.5 24m-39 0c6.832 8.079 10.85 11.85 19.5 11.85S36.668 32.08 43.5 24m-21.544-4.782v9.251"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.968 19.218v9.251a2.313 2.313 0 0 1-2.313 2.313h0M14.5 19.218v9.251m4.972 0l-3.809-4.625l3.809-4.595m-3.809 4.595H14.5m19-4.626v9.251m-4.972 0l3.809-4.625l-3.809-4.595m3.809 4.595H33.5"></svg:path>`,
})
export class ArcticonsKijkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
