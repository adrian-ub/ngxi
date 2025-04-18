import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHistoryQueryIcon],svg[icon-park-outline-history-query-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 24V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h15"></svg:path><svg:circle cx="32" cy="32" r="6"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m37 36l5 4M14 16h20m-20 8h8"></svg:path></svg:g>`,
})
export class IconParkOutlineHistoryQueryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
