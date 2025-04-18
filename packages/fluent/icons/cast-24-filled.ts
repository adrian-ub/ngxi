import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCast24FilledIcon],svg[fluent-cast-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 4A2.25 2.25 0 0 0 2 6.25v11.5A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75V6.25A2.25 2.25 0 0 0 19.75 4zm1.496 4.994A7.254 7.254 0 0 1 13 16.248a.75.75 0 1 1-1.5 0a5.754 5.754 0 0 0-5.754-5.754a.75.75 0 0 1 0-1.5m-.75 3.757a.75.75 0 0 1 .75-.75a4.247 4.247 0 0 1 4.247 4.247a.75.75 0 0 1-1.5 0A2.747 2.747 0 0 0 5.746 13.5a.75.75 0 0 1-.75-.75m2 3.245a.998.998 0 1 1-1.996 0a.998.998 0 0 1 1.996 0"></svg:path>`,
})
export class FluentCast24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
