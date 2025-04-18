import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockCancelIcon],svg[tabler-clock-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.997 12.25a9 9 0 1 0-8.718 8.745M16 19a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4"></svg:path><svg:path d="M12 7v5l2 2"></svg:path></svg:g>`,
})
export class TablerClockCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
