import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandWishIcon],svg[tabler-brand-wish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 6l5.981 2.392l-.639 6.037c-.18.893.06 1.819.65 2.514A3 3 0 0 0 10.373 18a4.33 4.33 0 0 0 4.132-3.57c-.18.893.06 1.819.65 2.514A3 3 0 0 0 17.535 18a4.33 4.33 0 0 0 4.132-3.57L22 9.797m-7.496 4.632l.334-3"></svg:path>`,
})
export class TablerBrandWishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
