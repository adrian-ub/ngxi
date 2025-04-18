import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBarChartOutlineIcon],svg[famicons-bar-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 32v432a16 16 0 0 0 16 16h432"></svg:path><svg:rect width="80" height="192" x="96" y="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="80" height="240" x="240" y="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect><svg:rect width="80" height="304" x="383.64" y="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></svg:rect>`,
})
export class FamiconsBarChartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
