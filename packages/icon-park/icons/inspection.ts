import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInspectionIcon],svg[icon-park-inspection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 33V19H5V41C5 42.1046 5.89543 43 7 43H24"></svg:path><svg:path stroke-linejoin="round" d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"></svg:path><svg:path stroke-linecap="round" d="M16 5V13"></svg:path><svg:path stroke-linecap="round" d="M32 5V13"></svg:path><svg:circle cx="30" cy="32" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 37L42 42"></svg:path></svg:g>`,
})
export class IconParkInspectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
