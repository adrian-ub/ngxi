import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLightbulb28FilledIcon],svg[fluent-lightbulb-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a9 9 0 0 0-5.79 15.89c.402.339.679.736.78 1.158l.35 1.452h9.322l.349-1.452c.101-.422.378-.819.78-1.158A9 9 0 0 0 14 2m4.301 20H9.7l.362 1.508A3.25 3.25 0 0 0 13.22 26h1.558a3.25 3.25 0 0 0 3.16-2.492z"></svg:path>`,
})
export class FluentLightbulb28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
