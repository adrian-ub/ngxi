import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAbrpAltIcon],svg[arcticons-abrp-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.15 42.5c2.38-7.84 9.18-14.31 12.35-21.58M16.81 5.5a14.7 14.7 0 0 0-2.38 8.05c0 10.62 10.87 18.58 14.02 28.95"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.227 37.332c-8.526 1.638-9.886-9.938-20.5-8.009"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.109 39.066c-9.023 2.944-14.913-6.308-21.382-3.672M35.7 10.6l-7.857.2l-2.557 11.49l3.055-.7l-1.682 7.696l7.766-9.58l-4.368.493z"></svg:path>`,
})
export class ArcticonsAbrpAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
