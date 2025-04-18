import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockXIcon],svg[tabler-clock-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.926 13.15a9 9 0 1 0-7.835 7.784"></svg:path><svg:path d="M12 7v5l2 2m8 8l-5-5m0 5l5-5"></svg:path></svg:g>`,
})
export class TablerClockXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
