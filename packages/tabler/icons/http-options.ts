import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHttpOptionsIcon],svg[tabler-http-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m5 4h2a2 2 0 1 0 0-4h-2v8m7-8h4m-2 0v8"></svg:path>`,
})
export class TablerHttpOptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
