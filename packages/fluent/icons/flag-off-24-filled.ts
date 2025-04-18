import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagOff24FilledIcon],svg[fluent-flag-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 2.5l18 18a.75.75 0 0 1-1.06 1.062L14.377 16.5H4.5v4.75a.75.75 0 0 1-.648.744L3.75 22a.75.75 0 0 1-.743-.648L3 21.25V5.122l-1.56-1.56A.75.75 0 1 1 2.5 2.5m2.617.498h15.137a.75.75 0 0 1 .6 1.2L16.69 9.75l4.164 5.55a.75.75 0 0 1-.6 1.2h-1.633z"></svg:path>`,
})
export class FluentFlagOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
