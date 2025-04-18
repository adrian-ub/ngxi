import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiguIcon],svg[arcticons-migu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.572 28.149l-.654-8.965l5.142 8.647l3.833-9.288l.654 8.96m8.916-6.627l.49 6.73a2.25 2.25 0 0 1-2.079 2.408h0a2.24 2.24 0 0 1-1.634-.542"></svg:path><svg:rect width="4.499" height="5.961" x="25.186" y="21.032" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.249" ry="2.249" transform="rotate(175.825 27.436 24.012)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.997 20.69l.27 3.703a2.25 2.25 0 0 0 2.407 2.08h0a2.25 2.25 0 0 0 2.08-2.408l-.27-3.702m.27 3.702l.164 2.243"></svg:path><svg:circle cx="22.344" cy="18.632" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.544 21.381l.434 5.945"></svg:path>`,
})
export class ArcticonsMiguIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
