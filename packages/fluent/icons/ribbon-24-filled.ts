import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbon24FilledIcon],svg[fluent-ribbon-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.002 15.244L17 21.245a.75.75 0 0 1-1.182.613L12 19.171l-3.817 2.687a.75.75 0 0 1-1.181-.613l-.002-6A7.97 7.97 0 0 0 12 17a7.97 7.97 0 0 0 5.002-1.756M12 2a7 7 0 1 1 0 14a7 7 0 0 1 0-14"></svg:path>`,
})
export class FluentRibbon24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
