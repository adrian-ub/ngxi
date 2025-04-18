import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWifiOff1FilledIcon],svg[tdesign-wifi-off-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.671 1.59l-.004-.004L2.253 3l2.143 2.143a17 17 0 0 0-2.35 1.582l-.78.625L12.667 21.6l3.638-4.547l5.361 5.361l1.41-1.41l-19.41-19.41zm15.145 12.325l5.252-6.565l-.78-.625c-4.267-3.423-9.8-4.487-14.854-3.192z"></svg:path>`,
})
export class TdesignWifiOff1FilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
