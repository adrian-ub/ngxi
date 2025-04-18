import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiiaIcon],svg[arcticons-diia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.632 29V19h-3.274a3.359 3.359 0 0 0 0 6.717h3.274m-3.273 0l-3.274 3.28"></svg:path><svg:circle cx="26.288" cy="19.312" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.548 28.006s-1.183 1.286-1.92 1.286h0a.993.993 0 0 1-.923-1.309l1.25-6.314H24.08M20.692 31.5v-4.104H10.357V31.5m8.693-4.104V16.5h-6.38c0 3.172.597 7.873-1.343 10.896"></svg:path>`,
})
export class ArcticonsDiiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
