import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClock28RegularIcon],svg[fluent-clock-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 14C3.5 8.201 8.201 3.5 14 3.5S24.5 8.201 24.5 14S19.799 24.5 14 24.5S3.5 19.799 3.5 14M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2m-.007 5.648a.75.75 0 0 0-1.493.102v7l.007.102a.75.75 0 0 0 .743.648h5l.102-.007A.75.75 0 0 0 18.25 14H14V7.75z"></svg:path>`,
})
export class FluentClock28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
