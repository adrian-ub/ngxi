import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInstanceLineIcon],svg[ri-instance-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653L12 3.311zM12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM6.499 9.97L11 12.577v5.049h2v-5.049l4.501-2.605l-1.002-1.731L12 10.845L7.501 8.24z"></svg:path>`,
})
export class RiInstanceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
