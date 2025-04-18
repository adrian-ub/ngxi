import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLampOffIcon],svg[tabler-lamp-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20h6m-3 0v-8M7.325 7.35L5 12h7m4 0h3l-4-8H9l-.338.676M3 3l18 18"></svg:path>`,
})
export class TablerLampOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
