import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChickenLegIcon],svg[icon-park-chicken-leg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.3748 33.8744C37.6175 29.6318 34.7891 15.4897 28.4251 9.12572C25.5966 6.29723 17.465 0.286877 8.62606 9.12565C-0.212837 17.9644 5.7977 26.0963 8.62606 28.9246C14.9901 35.2887 29.1322 38.1171 33.3748 33.8744Z"></svg:path><svg:path stroke="#000" stroke-width="4" d="M41 41C40.2533 40.2533 36.0222 36.0222 33.9999 33.9999"></svg:path><svg:circle cx="42.193" cy="40.071" r="2.5" fill="#000" transform="rotate(135 42.193 40.071)"></svg:circle><svg:circle cx="40.072" cy="42.192" r="2.5" fill="#000" transform="rotate(135 40.072 42.192)"></svg:circle><svg:circle cx="17" cy="18" r="2" fill="#fff"></svg:circle><svg:circle cx="12" cy="21" r="2" fill="#fff"></svg:circle><svg:circle cx="17" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkChickenLegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
