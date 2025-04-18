import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRampLeft3Icon],svg[tabler-arrow-ramp-left-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 3v6M8 16l-4-4l4-4"></svg:path><svg:path d="M18 21v-6a3 3 0 0 0-3-3H4"></svg:path></svg:g>`,
})
export class TablerArrowRampLeft3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
