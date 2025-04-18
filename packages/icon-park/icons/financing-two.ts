import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFinancingTwoIcon],svg[icon-park-financing-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" d="M12 9.92704V7C12 5.34315 13.3431 4 15 4H41C42.6569 4 44 5.34315 44 7V33C44 34.6569 42.6569 36 41 36H38.0174"></svg:path><svg:rect width="34" height="34" x="4" y="10" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M15 17L21 23L27 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 25H28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 31H28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 25V36"></svg:path></svg:g>`,
})
export class IconParkFinancingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
