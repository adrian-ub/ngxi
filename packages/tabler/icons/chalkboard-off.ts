import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChalkboardOffIcon],svg[tabler-chalkboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m4 0h10a2 2 0 0 1 2 2v10m-4 0v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4M3 3l18 18"></svg:path>`,
})
export class TablerChalkboardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
