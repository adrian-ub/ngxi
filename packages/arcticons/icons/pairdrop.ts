import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPairdropIcon],svg[arcticons-pairdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24.134" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.609 34.55c3.739-2.003 6.143-5.876 6.143-10.416c0-6.544-5.342-11.885-11.886-11.885S11.981 17.59 11.981 24.134c0 4.54 2.538 8.413 6.277 10.416"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.15 42.963C40.825 39.357 45.5 32.279 45.5 24c0-11.885-9.615-21.5-21.5-21.5c-11.885.134-21.5 9.749-21.5 21.634c0 8.146 4.54 15.357 11.35 18.962"></svg:path>`,
})
export class ArcticonsPairdropIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
