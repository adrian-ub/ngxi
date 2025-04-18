import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNotebookOffIcon],svg[tabler-notebook-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h9a2 2 0 0 1 2 2v9m-.179 3.828A2 2 0 0 1 17 20H6a1 1 0 0 1-1-1V5m4-1v1m0 4v13m4-14h2M3 3l18 18"></svg:path>`,
})
export class TablerNotebookOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
