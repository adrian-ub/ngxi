import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSignalMediumIcon],svg[system-uicons-signal-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path fill="currentColor" d="M5.5 16.5v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0m4 0v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-2 0"></svg:path><svg:path d="M13.5 16.5v-9a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0"></svg:path></svg:g>`,
})
export class SystemUiconsSignalMediumIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
