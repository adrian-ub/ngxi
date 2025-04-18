import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFishHookOffIcon],svg[tabler-fish-hook-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 9v3m-.085 3.924A5 5 0 0 1 6 15v-4l3 3m5-7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2V3M3 3l18 18"></svg:path>`,
})
export class TablerFishHookOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
