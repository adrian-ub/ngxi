import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal16RegularIcon],svg[fluent-flip-horizontal-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.925 12.763A.5.5 0 0 1 14.5 13h-5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .947-.224l5 10a.5.5 0 0 1-.022.487M10 4.618V12h3.691zM1.5 13a.5.5 0 0 1-.447-.724l5-10A.5.5 0 0 1 7 2.5v10a.5.5 0 0 1-.5.5z"></svg:path>`,
})
export class FluentFlipHorizontal16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
