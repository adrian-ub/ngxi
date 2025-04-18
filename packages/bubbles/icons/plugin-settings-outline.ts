import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginSettingsOutlineIcon],svg[bubbles-plugin-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.046 2.938a1.957 1.957 0 0 0 2.908 0L14.9 1.9a1.959 1.959 0 0 1 3.41 1.413l-.071 1.4a1.96 1.96 0 0 0 2.051 2.054l1.4-.071a1.96 1.96 0 0 1 1.41 3.41l-1.042.94a1.96 1.96 0 0 0 0 2.909l1.042.94a1.96 1.96 0 0 1-1.413 3.41l-1.4-.071a1.96 1.96 0 0 0-2.056 2.056l.071 1.4A1.96 1.96 0 0 1 14.9 23.1l-.941-1.041a1.96 1.96 0 0 0-2.908 0l-.945 1.041A1.96 1.96 0 0 1 6.7 21.692l.072-1.4a1.96 1.96 0 0 0-2.056-2.056l-1.4.071A1.957 1.957 0 0 1 1.9 14.9l1.041-.94a1.96 1.96 0 0 0 0-2.909L1.9 10.106A1.958 1.958 0 0 1 3.309 6.7l1.4.071a1.96 1.96 0 0 0 2.058-2.06L6.7 3.31a1.959 1.959 0 0 1 3.406-1.41z"></svg:path><svg:path d="M8 12.501a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0"></svg:path></svg:g>`,
})
export class BubblesPluginSettingsOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
