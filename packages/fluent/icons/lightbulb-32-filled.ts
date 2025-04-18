import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLightbulb32FilledIcon],svg[fluent-lightbulb-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C10.477 2 6 6.477 6 12a9.98 9.98 0 0 0 3.365 7.482c.343.304.561.645.64.986L10.82 24h10.36l.815-3.532c.079-.34.297-.682.64-.986A9.98 9.98 0 0 0 26 12c0-5.523-4.477-10-10-10m4.719 24H11.28l.297 1.287A3.5 3.5 0 0 0 14.988 30h2.023a3.5 3.5 0 0 0 3.41-2.713z"></svg:path>`,
})
export class FluentLightbulb32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
