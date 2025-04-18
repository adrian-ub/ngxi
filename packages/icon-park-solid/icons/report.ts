import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidReportIcon],svg[icon-park-solid-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M36 35H12V21c0-6.627 5.373-12 12-12s12 5.373 12 12z"></svg:path><svg:path stroke-linecap="round" d="M8 42h32M4 13l3 1m6-10l1 3m-4 3L7 7"></svg:path></svg:g>`,
})
export class IconParkSolidReportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
