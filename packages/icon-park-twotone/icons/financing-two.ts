import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFinancingTwoIcon],svg[icon-park-twotone-financing-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFinancingTwo0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path d="M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983"></svg:path><svg:rect width="34" height="34" x="4" y="10" fill="#555" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 17l6 6l6-6m-13 8h14m-14 6h14m-7-6v11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFinancingTwo0)"></svg:path>`,
})
export class IconParkTwotoneFinancingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
