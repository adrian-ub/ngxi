import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFountainOffIcon],svg[tabler-fountain-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 16v-5a2 2 0 1 0-4 0m10 5v-1m0-4a2 2 0 1 1 4 0m-7 5v-4m0-4V6a3 3 0 0 1 6 0"></svg:path><svg:path d="M7.451 3.43A3 3 0 0 1 12 6m8 10h1v1m-.871 3.114A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3v-2h13M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerFountainOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
