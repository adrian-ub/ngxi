import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPnbOneIcon],svg[arcticons-pnb-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.487 26.247v-8.813l5.839 8.813v-8.813m1.767 4.406h2.873m1.534 4.407h-4.407v-8.813H38.5"></svg:path><svg:circle cx="19.037" cy="23.202" r="5.768" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.326 34.566V28h-6.241a8.525 8.525 0 0 1-15.573-4.798V20.05c0-2.162-1.012-2.615-1.012-2.615"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4"></svg:path>`,
})
export class ArcticonsPnbOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
