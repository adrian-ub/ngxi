import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHttpPostOffIcon],svg[tabler-http-post-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h2a2 2 0 1 0 0-4H3v8m9-8a2 2 0 0 1 2 2m0 4a2 2 0 1 1-4 0v-4m10 6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1M3 3l18 18"></svg:path>`,
})
export class TablerHttpPostOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
