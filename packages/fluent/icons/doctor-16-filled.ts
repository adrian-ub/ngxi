import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoctor16FilledIcon],svg[fluent-doctor-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 1.766a1.5 1.5 0 0 0-1.5 1.5v1.75H3.5a1.5 1.5 0 0 0-1.5 1.5v2.985a1.5 1.5 0 0 0 1.5 1.5H5v1.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H11V3.266a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class FluentDoctor16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
