import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVersionsOffIcon],svg[tabler-versions-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.184 6.162A2 2 0 0 1 12 5h6a2 2 0 0 1 2 2v9m-1.185 2.827A2 2 0 0 1 18 19h-6a2 2 0 0 1-2-2v-7M7 7v10M4 8v8M3 3l18 18"></svg:path>`,
})
export class TablerVersionsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
