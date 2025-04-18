import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRampLeftIcon],svg[tabler-arrow-ramp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 3v8.707M13 7l4-4l4 4M7 14l-4-4l4-4"></svg:path><svg:path d="M17 21A11 11 0 0 0 6 10H3"></svg:path></svg:g>`,
})
export class TablerArrowRampLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
