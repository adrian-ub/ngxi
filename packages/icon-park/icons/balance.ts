import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBalanceIcon],svg[icon-park-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M35 25C27.89 22.42 20.11 22.42 13 25L12 14C19 11 29 11 36 14L35 25Z"></svg:path><svg:path stroke="#fff" d="M24 23L21 18"></svg:path><svg:path stroke="#000" d="M42 39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39Z"></svg:path><svg:path stroke="#000" d="M29 23.4552C25.6869 22.9348 22.3131 22.9348 19 23.4552"></svg:path></svg:g>`,
})
export class IconParkBalanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
