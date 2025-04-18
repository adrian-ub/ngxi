import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPlanIcon],svg[icon-park-plan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 31L22 37L34 25"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 5V13"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 5V13"></svg:path></svg:g>`,
})
export class IconParkPlanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
