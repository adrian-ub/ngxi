import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentXboxConsole20RegularIcon],svg[fluent-xbox-console-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M4 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zm4 7V17h7V3H5v14h2V9.5a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentXboxConsole20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
