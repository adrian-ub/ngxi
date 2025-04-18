import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSmallLongLeftIcon],svg[ci-small-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16v-3h16v-2H6V8l-4 4l4 4Z"></svg:path>`,
})
export class CiSmallLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
