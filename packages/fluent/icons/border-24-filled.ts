import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorder24FilledIcon],svg[fluent-border-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M14 4a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1z" fill="currentColor"></svg:path><svg:path d="M5 11a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2z" fill="currentColor"></svg:path><svg:path d="M19 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2z" fill="currentColor"></svg:path><svg:path d="M13 21a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2z" fill="currentColor"></svg:path><svg:path d="M7 4a1 1 0 0 0-1-1a3 3 0 0 0-3 3a1 1 0 0 0 2 0a1 1 0 0 1 1-1a1 1 0 0 0 1-1z" fill="currentColor"></svg:path><svg:path d="M18 3a1 1 0 1 0 0 2a1 1 0 0 1 1 1a1 1 0 1 0 2 0a3 3 0 0 0-3-3z" fill="currentColor"></svg:path><svg:path d="M7 20a1 1 0 0 1-1 1a3 3 0 0 1-3-3a1 1 0 1 1 2 0a1 1 0 0 0 1 1a1 1 0 0 1 1 1z" fill="currentColor"></svg:path><svg:path d="M18 21a1 1 0 1 1 0-2a1 1 0 0 0 1-1a1 1 0 1 1 2 0a3 3 0 0 1-3 3z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentBorder24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
