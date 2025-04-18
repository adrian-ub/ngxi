import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFluent48FilledIcon],svg[fluent-fluent-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.17 4.163a1.5 1.5 0 0 0-1.34 0l-12 6a1.5 1.5 0 0 0-.83 1.342v23.456c0 .516.265.996.702 1.27l12 7.54A1.5 1.5 0 0 0 26 42.5V30.432l11.17-5.585a1.5 1.5 0 0 0 0-2.684l-9.316-4.658l9.317-4.658a1.5 1.5 0 0 0 0-2.684z"></svg:path>`,
})
export class FluentFluent48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
