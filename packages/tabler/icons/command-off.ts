import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCommandOffIcon],svg[tabler-command-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9v8a2 2 0 1 1-2-2h8m3.411 3.417A2 2 0 0 1 15 17v-2m0-4V7a2 2 0 1 1 2 2h-4M9 9H7a2 2 0 0 1-1.417-3.411M3 3l18 18"></svg:path>`,
})
export class TablerCommandOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
