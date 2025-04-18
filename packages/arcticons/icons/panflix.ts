import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPanflixIcon],svg[arcticons-panflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.368 43.626v-10.25a14.375 14.375 0 0 0 0-28.75H11.79a4.44 4.44 0 0 0-4.44 4.442v16.401c0 9.936 9.003 18.157 19.019 18.157Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.368 33.376v-5.961a8.36 8.36 0 0 0 0-16.72h-8.452a2.58 2.58 0 0 0-2.576 2.583v9.539c0 5.778 5.22 10.559 11.028 10.559"></svg:path>`,
})
export class ArcticonsPanflixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
