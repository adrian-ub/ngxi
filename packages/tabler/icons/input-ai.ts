import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInputAiIcon],svg[tabler-input-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 11V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4m4 5v-4a2 2 0 1 1 4 0v4m-4-2h4m3-4v6"></svg:path>`,
})
export class TablerInputAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
