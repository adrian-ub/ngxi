import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSunHatIcon],svg[icon-park-sun-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 10C12 8.89543 12.8954 8 14 8H34C35.1046 8 36 8.89543 36 10V20H12V10Z"></svg:path><svg:path d="M44 35C42.8917 36.3333 41.625 40 36.4 40C33.6627 40 29.9439 38.3161 25 37"></svg:path><svg:path d="M4 35C4 35 10 26 12 20H36C38 26 44 35 44 35C38 31 19 40 12 40C6.5 40 5.16667 36.3333 4 35Z"></svg:path></svg:g>`,
})
export class IconParkSunHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
