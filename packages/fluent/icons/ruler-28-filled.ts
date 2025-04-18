import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler28FilledIcon],svg[fluent-ruler-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.628A2.74 2.74 0 0 1 10.75 2h6.5A2.75 2.75 0 0 1 20 4.75v18.5A2.75 2.75 0 0 1 17.25 26h-6.5A2.75 2.75 0 0 1 8 23.25V4.75a2.74 2.74 0 0 1 1-2.122m.5 3.122v1.5h2.75a.75.75 0 0 0 0-1.5zm0 3.75V11h4.75a.75.75 0 0 0 0-1.5zm0 3.75v1.5h2.75a.75.75 0 0 0 0-1.5zm0 3.75v1.5h4.75a.75.75 0 0 0 0-1.5zm0 3.75v1.5h2.75a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentRuler28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
