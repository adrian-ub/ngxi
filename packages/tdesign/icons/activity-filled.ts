import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignActivityFilledIcon],svg[tdesign-activity-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v9h-4.554l-2.021 3.233l-5.865-7.82L5.546 11H2z"></svg:path><svg:path fill="currentColor" d="M2 13v9h20v-9h-3.446l-2.979 4.767l-6.135-8.18L6.454 13z"></svg:path>`,
})
export class TdesignActivityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
