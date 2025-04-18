import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDoughnutIcon],svg[icon-park-doughnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="24" r="19"></svg:circle><svg:circle cx="24" cy="24" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 28C6 28 9.38888 25.0417 12 27C16 30 18 28 18 28"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 29C29.6667 28 33 24.7143 36 26C40 27.7143 43 26 43 25"></svg:path></svg:g>`,
})
export class IconParkDoughnutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
