import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbonOff24FilledIcon],svg[fluent-ribbon-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.454 6.515a7 7 0 0 0 9.031 9.031l.766.766A8 8 0 0 1 12 17a7.97 7.97 0 0 1-5-1.754l.003 6a.75.75 0 0 0 1.181.612l3.817-2.687l3.818 2.687a.75.75 0 0 0 1.182-.613v-3.183l3.718 3.718a.75.75 0 0 0 1.061-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06zM7.142 3.96l9.898 9.898A7 7 0 0 0 7.142 3.96"></svg:path>`,
})
export class FluentRibbonOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
