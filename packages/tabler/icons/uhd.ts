import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUhdIcon],svg[tabler-uhd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16V8m0 4h4m0-4v8m3-8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM3 8v6a2 2 0 1 0 4 0V8"></svg:path>`,
})
export class TablerUhdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
