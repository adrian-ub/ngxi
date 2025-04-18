import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDislikeFillIcon],svg[ri-dislike-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.808 1.393l18.385 18.385l-1.415 1.414l-3.746-3.747L12 21.485l-8.478-8.492a6 6 0 0 1 .033-8.023L1.394 2.808zm17.435 3.364a6 6 0 0 1 .236 8.236l-1.635 1.636L7.26 3.046a6 6 0 0 1 4.741 1.483a6 6 0 0 1 8.242.228"></svg:path>`,
})
export class RiDislikeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
