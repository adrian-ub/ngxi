import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockCheckIcon],svg[tabler-clock-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.942 13.021a9 9 0 1 0-9.407 7.967"></svg:path><svg:path d="M12 7v5l3 3m0 4l2 2l4-4"></svg:path></svg:g>`,
})
export class TablerClockCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
