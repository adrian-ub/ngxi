import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbonOff16RegularIcon],svg[fluent-ribbon-off-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.38 4.086L1.145 1.854a.5.5 0 1 1 .708-.708l13 13a.5.5 0 0 1-.708.708L11 11.707V14.5a.5.5 0 0 1-.757.429L8 13.583L5.757 14.93A.5.5 0 0 1 5 14.5V10a5 5 0 0 1-2-4c0-.678.135-1.324.38-1.914m6.534 6.535A5 5 0 0 1 8 11a5 5 0 0 1-2-.416v3.033l1.743-1.046a.5.5 0 0 1 .514 0L10 13.617v-2.91zm-.783-.783L4.162 4.869a4 4 0 0 0 4.969 4.969M12 6a4 4 0 0 1-1.112 2.767l.708.707a5 5 0 0 0-7.07-7.07l.707.708A4 4 0 0 1 12 6"></svg:path>`,
})
export class FluentRibbonOff16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
