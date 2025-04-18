import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSpeedboatIcon],svg[tabler-speedboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 17h14.4a3 3 0 0 0 2.5-1.34L22 11h-6.23a4 4 0 0 0-1.49.29l-3.56 1.42a4 4 0 0 1-1.49.29H3.5zm4-4l1.5-5"></svg:path><svg:path d="M6 8h8l2 3"></svg:path></svg:g>`,
})
export class TablerSpeedboatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
