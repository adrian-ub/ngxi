import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlance16FilledIcon],svg[fluent-glance-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12.25A1.75 1.75 0 0 1 12.25 14h-2.5A1.75 1.75 0 0 1 8 12.25v-3.5C8 7.784 8.784 7 9.75 7h2.5c.966 0 1.75.784 1.75 1.75zm-7-5A1.75 1.75 0 0 1 5.25 9h-1.5A1.75 1.75 0 0 1 2 7.25v-3.5C2 2.784 2.784 2 3.75 2h1.5C6.216 2 7 2.784 7 3.75zm0 5A1.75 1.75 0 0 1 5.25 14h-1.5A1.75 1.75 0 0 1 2 12.25v-.5c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75zm7-8A1.75 1.75 0 0 1 12.25 6h-2.5A1.75 1.75 0 0 1 8 4.25v-.5C8 2.784 8.784 2 9.75 2h2.5c.966 0 1.75.784 1.75 1.75z"></svg:path>`,
})
export class FluentGlance16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
