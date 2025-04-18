import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEndTimeSortIcon],svg[icon-park-outline-end-time-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5v25.004h36V5M30 37l-6 6l-6-6m6-7v13"></svg:path><svg:path stroke-linejoin="round" d="m18.96 10.979l5.037 5.014l-5.037 5.097"></svg:path><svg:path d="M29 10.002V22"></svg:path></svg:g>`,
})
export class IconParkOutlineEndTimeSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
