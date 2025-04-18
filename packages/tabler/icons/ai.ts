import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAiIcon],svg[tabler-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16v-6a2 2 0 1 1 4 0v6m-4-3h4m4-5v8"></svg:path>`,
})
export class TablerAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
