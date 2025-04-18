import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosedRibbon20FilledIcon],svg[fluent-lock-closed-ribbon-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a3 3 0 0 1 6 0v1h1a3 3 0 0 1 3 3v.126a4 4 0 0 0-4 6.52V18H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1zm3-2a2 2 0 0 0-2 2v1h4V5a2 2 0 0 0-2-2m-1 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0m7 4c.768 0 1.47-.289 2-.764A3 3 0 1 0 16 16m-2 2.5v-2.035c.588.34 1.271.535 2 .535s1.412-.195 2-.535V18.5a.5.5 0 0 1-.8.4L16 18l-1.2.9a.5.5 0 0 1-.8-.4"></svg:path>`,
})
export class FluentLockClosedRibbon20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
