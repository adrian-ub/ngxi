import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCodeVariablePlusIcon],svg[tabler-code-variable-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1m-4 7h6m-3-3v6"></svg:path>`,
})
export class TablerCodeVariablePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
