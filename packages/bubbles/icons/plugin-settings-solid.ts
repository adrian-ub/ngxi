import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginSettingsSolidIcon],svg[bubbles-plugin-settings-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.046 2.938a1.957 1.957 0 0 0 2.908 0L14.9 1.9a1.959 1.959 0 0 1 3.41 1.413l-.071 1.4a1.96 1.96 0 0 0 2.051 2.054l1.4-.071a1.96 1.96 0 0 1 1.41 3.41l-1.042.94a1.96 1.96 0 0 0 0 2.909l1.042.94a1.96 1.96 0 0 1-1.413 3.41l-1.4-.071a1.96 1.96 0 0 0-2.056 2.056l.071 1.4A1.96 1.96 0 0 1 14.9 23.1l-.941-1.041a1.96 1.96 0 0 0-2.908 0l-.945 1.041A1.96 1.96 0 0 1 6.7 21.692l.072-1.4a1.96 1.96 0 0 0-2.056-2.056l-1.4.071A1.957 1.957 0 0 1 1.9 14.9l1.041-.94a1.96 1.96 0 0 0 0-2.909L1.9 10.106A1.958 1.958 0 0 1 3.309 6.7l1.4.071a1.96 1.96 0 0 0 2.058-2.06L6.7 3.31a1.959 1.959 0 0 1 3.406-1.41z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.704 3.416a2 2 0 0 1-.658-.478l-.94-1.038A1.96 1.96 0 0 0 6.7 3.31l.067 1.401a1.96 1.96 0 0 1-2.058 2.06l-1.4-.071A1.958 1.958 0 0 0 1.9 10.106l1.041.945a1.96 1.96 0 0 1 0 2.909L1.9 14.9a1.958 1.958 0 0 0 1.416 3.407l1.4-.071a1.96 1.96 0 0 1 2.056 2.056l-.072 1.4a1.959 1.959 0 0 0 3.406 1.408l.945-1.041a1.96 1.96 0 0 1 2.908 0L14.9 23.1a1.959 1.959 0 0 0 3.402-1.41l-.071-1.4a1.956 1.956 0 0 1 2.056-2.056l1.4.071a1.958 1.958 0 0 0 1.413-3.41l-1.042-.94a1.96 1.96 0 0 1 0-2.909l1.042-.94a1.959 1.959 0 0 0-1.41-3.41l-1.4.071a1.96 1.96 0 0 1-2.051-2.054l.071-1.4A1.96 1.96 0 0 0 14.9 1.9l-.946 1.038a1.96 1.96 0 0 1-2.25.478M9.318 15.683a4.5 4.5 0 1 1 6.364-6.364a4.5 4.5 0 0 1-6.364 6.364" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class BubblesPluginSettingsSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
