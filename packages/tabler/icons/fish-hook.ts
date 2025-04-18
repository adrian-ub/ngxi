import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFishHookIcon],svg[tabler-fish-hook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 9v6a5 5 0 0 1-10 0v-4l3 3"></svg:path><svg:path d="M14 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2V3"></svg:path></svg:g>`,
})
export class TablerFishHookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
