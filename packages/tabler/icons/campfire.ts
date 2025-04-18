import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCampfireIcon],svg[tabler-campfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 21l16-4m0 4L4 17m8-2a4 4 0 0 0 4-4c0-3-2-3-2-8c-4 2-6 5-6 8a4 4 0 0 0 4 4"></svg:path>`,
})
export class TablerCampfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
