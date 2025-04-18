import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTeaDrinkIcon],svg[icon-park-tea-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M2 20C2 32.1503 8 42 20 42C32 42 38 32.1503 38 20H2Z" clip-rule="evenodd"></svg:path><svg:path d="M20 14V6"></svg:path><svg:path d="M30 14V10"></svg:path><svg:path d="M10 14V10"></svg:path><svg:path d="M36.1904 30.6229C37.1802 28.039 37.764 25.1374 37.9417 22.0511C38.2868 22.0174 38.6402 22 39 22C42.866 22 46 24.0147 46 26.5C46 28.9853 42.866 31 39 31C38.0007 31 37.0504 30.8654 36.1904 30.6229Z"></svg:path></svg:g>`,
})
export class IconParkTeaDrinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
