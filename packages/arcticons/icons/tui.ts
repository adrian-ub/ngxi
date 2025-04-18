import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTuiIcon],svg[arcticons-tui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.24 20.413v4.426a2.683 2.683 0 0 0 2.683 2.683h0a2.683 2.683 0 0 0 2.682-2.683v-4.426m0 4.426v2.682"></svg:path><svg:circle cx="38.42" cy="17.127" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.42 20.413v7.108M20.646 18.2v7.98c0 .741.6 1.341 1.341 1.341h.403m-3.152-7.108h2.816m-8.331 6.237l4.024-2.683l-4.024-2.682M8.359 26.65l4.023-2.683l-4.023-2.682m16.379 2.682h2.682"></svg:path>`,
})
export class ArcticonsTuiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
