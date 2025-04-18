import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconEditorLayoutIcon],svg[codicon-editor-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 6.5l-.47-.5H7V1.47L6.53 1H1.47L1 1.47v8.06l.47.47H4v4.53l.47.47h10.06l.47-.47zM2 9V3h4v6zm12 5H5v-4h1.53L7 9.53V8.013h7z"></svg:path>`,
})
export class CodiconEditorLayoutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
