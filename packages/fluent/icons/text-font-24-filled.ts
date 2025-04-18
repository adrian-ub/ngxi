import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFont24FilledIcon],svg[fluent-text-font-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a1 1 0 0 1 .94.658l2.882 7.926l-1.11 2.798L9.209 12H4.792l-.852 2.342a1 1 0 0 1-1.88-.684l4.001-11A1 1 0 0 1 7.001 2m-1.48 8h2.962L7 5.926zm9.848-3.472a1 1 0 0 0-1.86 0L8.151 20.022h-.15a1 1 0 1 0 0 2H11a1 1 0 0 0 0-2h-.697L11.106 18h6.653l.8 2.023H18a1 1 0 0 0 0 2h3.009a1 1 0 0 0 0-2h-.298zM16.967 16H11.9l2.537-6.39z"></svg:path>`,
})
export class FluentTextFont24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
