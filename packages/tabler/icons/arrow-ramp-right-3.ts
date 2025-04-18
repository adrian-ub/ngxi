import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRampRight3Icon],svg[tabler-arrow-ramp-right-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 3v6m10 7l4-4l-4-4"></svg:path><svg:path d="M6 21v-6a3 3 0 0 1 3-3h11"></svg:path></svg:g>`,
})
export class TablerArrowRampRight3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
