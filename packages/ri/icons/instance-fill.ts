import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInstanceFillIcon],svg[ri-instance-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM6.499 9.97L11 12.578v5.048h2v-5.048l4.501-2.606l-1.002-1.731L12 10.845L7.501 8.24z"></svg:path>`,
})
export class RiInstanceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
