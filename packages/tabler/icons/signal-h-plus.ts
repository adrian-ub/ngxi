import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignalHPlusIcon],svg[tabler-signal-h-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V8m4 0v8m-4-4h4m3 0h4m-2-2v4"></svg:path>`,
})
export class TablerSignalHPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
