import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSdkIcon],svg[tabler-sdk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3m14-8v8m4-8l-3 4l3 4m-4-4h1m-8-4v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"></svg:path>`,
})
export class TablerSdkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
