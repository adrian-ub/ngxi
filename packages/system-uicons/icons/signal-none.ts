import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSignalNoneIcon],svg[system-uicons-signal-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 16.5v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0m4 0v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0m4 0v-9a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0"></svg:path>`,
})
export class SystemUiconsSignalNoneIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
