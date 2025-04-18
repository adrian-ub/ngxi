import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkReportIcon],svg[icon-park-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M36 35H12V21C12 14.3726 17.3726 9 24 9C30.6274 9 36 14.3726 36 21V35Z"></svg:path><svg:path stroke-linecap="round" d="M8 42H40"></svg:path><svg:path stroke-linecap="round" d="M4 13L7 14"></svg:path><svg:path stroke-linecap="round" d="M13 3.9999L14 6.9999"></svg:path><svg:path stroke-linecap="round" d="M10.0001 9.99989L7.00009 6.99989"></svg:path></svg:g>`,
})
export class IconParkReportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
