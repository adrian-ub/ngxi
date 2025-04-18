import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlphaIcon],svg[tabler-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.1 6q-1.65 4.37-2.4 6c-1.879 4.088-3.713 6-6 6c-2.4 0-4.8-2.4-4.8-6s2.4-6 4.8-6c2.267 0 4.135 1.986 6 6q.768 1.653 2.4 6"></svg:path>`,
})
export class TablerAlphaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
