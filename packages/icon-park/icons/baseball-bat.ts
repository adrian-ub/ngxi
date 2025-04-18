import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBaseballBatIcon],svg[icon-park-baseball-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:circle cx="40" cy="40" r="3"></svg:circle><svg:path stroke-linejoin="round" d="M16.502 9.43095C16.502 9.43095 26.4998 22 37.4998 37.5C21.4998 26 9.43102 16.5021 9.43102 16.5021C9.43102 16.5021 3.11056 10.8894 6.99983 7.00032C10.8891 3.11124 16.502 9.43095 16.502 9.43095Z"></svg:path></svg:g>`,
})
export class IconParkBaseballBatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
