import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTandemIcon],svg[arcticons-tandem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.313 11.813H43.5V24a12.19 12.19 0 0 1-12.187 12.188h0A12.19 12.19 0 0 1 19.124 24v0a12.19 12.19 0 0 1 12.188-12.187"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.688 36.188H4.501h0V24a12.19 12.19 0 0 1 12.188-12.187h0A12.19 12.19 0 0 1 28.876 24h0a12.19 12.19 0 0 1-12.188 12.188"></svg:path>`,
})
export class ArcticonsTandemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
