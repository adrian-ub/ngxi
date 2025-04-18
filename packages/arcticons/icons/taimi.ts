import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTaimiIcon],svg[arcticons-taimi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 14.517h5.63m-2.762 8.498v-8.498"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.804 26.39a2.13 2.13 0 0 1-2.124 2.125h0a2.13 2.13 0 0 1-2.125-2.125v-1.38a2.13 2.13 0 0 1 2.124-2.125h0a2.13 2.13 0 0 1 2.125 2.124m0 3.506v-5.63"></svg:path><svg:circle cx="22.991" cy="20.335" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.991 22.885v5.63"></svg:path><svg:circle cx="37.65" cy="20.335" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.65 22.885v5.63M26.178 25.01a2.13 2.13 0 0 1 2.124-2.125h0a2.13 2.13 0 0 1 2.125 2.124v3.4m-4.249-5.524v5.523m4.249-3.398a2.13 2.13 0 0 1 2.124-2.125h0a2.13 2.13 0 0 1 2.125 2.124v3.4"></svg:path>`,
})
export class ArcticonsTaimiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
