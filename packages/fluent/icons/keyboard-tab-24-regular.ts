import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardTab24RegularIcon],svg[fluent-keyboard-tab-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.03 11.47l-6.5-6.5a.75.75 0 0 0-1.133.976l.073.084l5.22 5.22H3.75a.75.75 0 0 0-.743.648L3 12c0 .38.282.694.648.743l.102.007h11.94l-5.22 5.22a.75.75 0 0 0-.073.976l.073.084a.75.75 0 0 0 .976.073l.084-.073l6.5-6.5a.75.75 0 0 0 .073-.976zl-6.5-6.5zM21 18.5v-13a.75.75 0 0 0-1.5 0v13a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class FluentKeyboardTab24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
