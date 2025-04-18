import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory32LightIcon],svg[fluent-history-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.693V3.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H6.252C8.43 5.972 11.985 4 16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16q0-.72.083-1.419A.516.516 0 0 0 3.579 14a.484.484 0 0 0-.484.422A13 13 0 0 0 3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3C11.98 3 8.385 4.825 6 7.693M15.5 8a.5.5 0 0 1 .5.5V16h5.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentHistory32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
