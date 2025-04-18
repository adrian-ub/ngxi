import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRampRightIcon],svg[tabler-arrow-ramp-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 3v8.707M11 7L7 3L3 7m14 7l4-4l-4-4"></svg:path><svg:path d="M7 21a11 11 0 0 1 11-11h3"></svg:path></svg:g>`,
})
export class TablerArrowRampRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
