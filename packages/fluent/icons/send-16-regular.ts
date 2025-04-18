import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSend16RegularIcon],svg[fluent-send-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.177 1.119a.5.5 0 0 1 .547-.066l13 6.5a.5.5 0 0 1 0 .894l-13 6.5a.5.5 0 0 1-.702-.594L2.977 8L1.022 1.647a.5.5 0 0 1 .155-.528M3.869 8.5l-1.547 5.03L13.382 8L2.322 2.47L3.869 7.5H9.5a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class FluentSend16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
