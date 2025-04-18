import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSundrugIcon],svg[arcticons-sundrug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 24c0-10.272 8.328-18.6 18.6-18.6v4.737"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 5.4c-10.272 0-18.6 8.328-18.6 18.6H8.5v18.6c10.272 0 18.6-8.327 18.6-18.6h12.4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 24c0 10.272-8.327 18.6-18.6 18.6v-4.737"></svg:path>`,
})
export class ArcticonsSundrugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
