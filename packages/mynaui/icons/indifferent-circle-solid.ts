import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiIndifferentCircleSolidIcon],svg[mynaui-indifferent-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m6 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m2-5.5v.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiIndifferentCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
