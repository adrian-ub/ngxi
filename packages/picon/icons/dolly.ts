import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDollyIcon],svg[picon-dolly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 7l4-2V4L4 6L2 2H0v1h2m1 0l2-1l1 2l-2 1m1 2L4 6L3 7l1 1"></svg:path>`,
})
export class PiconDollyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
