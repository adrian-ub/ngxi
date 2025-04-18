import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoneybusterIcon],svg[arcticons-moneybuster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.92 33.94a6.86 6.86 0 0 0 3.65.86h3.2a5.41 5.41 0 0 0 5.39-5.4h0a5.4 5.4 0 0 0-5.39-5.4h-3.54a5.4 5.4 0 0 1-5.39-5.4h0a5.4 5.4 0 0 1 5.39-5.4h3.2a7.36 7.36 0 0 1 3.23.63M24 13.2v-2.7m0 27v-2.7M8.8 39.2L39.2 8.8"></svg:path>`,
})
export class ArcticonsMoneybusterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
