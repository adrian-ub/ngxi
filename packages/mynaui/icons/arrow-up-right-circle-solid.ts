import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiArrowUpRightCircleSolidIcon],svg[mynaui-arrow-up-right-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m7.232-3.182a.75.75 0 0 1 .75-.75h4.95a.75.75 0 0 1 .75.75v4.95a.75.75 0 1 1-1.5 0v-3.14l-5.084 5.084a.75.75 0 1 1-1.06-1.06l5.083-5.084h-3.139a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiArrowUpRightCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
