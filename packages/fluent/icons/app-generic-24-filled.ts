import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppGeneric24FilledIcon],svg[fluent-app-generic-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 8h15v9.75a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75zM6 10.35c0-.47.38-.85.85-.85h3.3c.47 0 .85.38.85.85v6.8c0 .47-.38.85-.85.85h-3.3a.85.85 0 0 1-.85-.85zm1.5.65v5.5h2V11zm5.25-1.5h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5M12 13.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentAppGeneric24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
