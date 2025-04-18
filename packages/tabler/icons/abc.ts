import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAbcIcon],svg[tabler-abc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16v-6a2 2 0 1 1 4 0v6m-4-3h4m3-5v6a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0v1m10.732-2A2 2 0 0 0 17 13v1a2 2 0 0 0 3.726 1.01"></svg:path>`,
})
export class TablerAbcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
