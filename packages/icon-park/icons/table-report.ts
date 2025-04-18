import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTableReportIcon],svg[icon-park-table-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 7C5 5.34315 6.34315 4 8 4H32C33.6569 4 35 5.34315 35 7V44H8C6.34315 44 5 42.6569 5 41V7Z"></svg:path><svg:path stroke="#000" d="M35 24C35 22.8954 35.8954 22 37 22H41C42.1046 22 43 22.8954 43 24V41C43 42.6569 41.6569 44 40 44H35V24Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M11 12H19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M11 19H23"></svg:path></svg:g>`,
})
export class IconParkTableReportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
