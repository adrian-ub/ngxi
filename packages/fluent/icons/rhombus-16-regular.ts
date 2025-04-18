import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRhombus16RegularIcon],svg[fluent-rhombus-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.892 4.069A1.75 1.75 0 0 1 5.504 3h7.748a1.75 1.75 0 0 1 1.611 2.431l-2.747 6.502a1.75 1.75 0 0 1-1.612 1.069H2.756a1.75 1.75 0 0 1-1.612-2.432zM5.504 4a.75.75 0 0 0-.691.458L2.065 10.96a.75.75 0 0 0 .69 1.042h7.749a.75.75 0 0 0 .69-.458l2.748-6.502A.75.75 0 0 0 13.252 4z"></svg:path>`,
})
export class FluentRhombus16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
