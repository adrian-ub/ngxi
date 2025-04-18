import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCrossIcon],svg[tabler-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h4v-9h5V8h-5V3h-4v5H5v4h5z"></svg:path>`,
})
export class TablerCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
