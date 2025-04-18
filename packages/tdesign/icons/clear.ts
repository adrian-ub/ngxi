import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignClearIcon],svg[tdesign-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1h6v8.5h6V23H3V9.5h6zm2 2v8.5H5V14h14v-2.5h-6V3zm8 13H5v5h9v-3h2v3h3z"></svg:path>`,
})
export class TdesignClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
