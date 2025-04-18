import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignalLteIcon],svg[tabler-signal-lte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8h-4v8h4m-4-4h2.5M4 8v8h4m2-8h4m-2 0v8"></svg:path>`,
})
export class TablerSignalLteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
