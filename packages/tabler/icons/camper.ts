import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCamperIcon],svg[tabler-camper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M5 18H4a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4H3m6 10h6"></svg:path><svg:path d="M19 18h1a1 1 0 0 0 1-1v-4l-3-5m3 5h-7m0-5v10"></svg:path></svg:g>`,
})
export class TablerCamperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
