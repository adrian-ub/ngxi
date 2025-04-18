import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFinancingTwoIcon],svg[icon-park-outline-financing-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983"></svg:path><svg:rect width="34" height="34" x="4" y="10" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 17l6 6l6-6m-13 8h14m-14 6h14m-7-6v11"></svg:path></svg:g>`,
})
export class IconParkOutlineFinancingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
