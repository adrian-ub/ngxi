import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxAlignBottomLeft20FilledIcon],svg[fluent-textbox-align-bottom-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3zm1 7h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentTextboxAlignBottomLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
