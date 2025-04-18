import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStarCancelledFilledIcon],svg[ix-star-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m79.12 70.168l297.214 297.213l65.453 65.454l-30.17 30.17l-16.381-16.382l.316 1.325l-139.516-85.216l-139.517 85.216l37.932-159.021L30.293 182.572l93.402-7.489l-74.744-74.745zM256.037 18.56l62.782 150.947l162.96 13.065L357.942 288.65l-151.31-151.31z"></svg:path>`,
})
export class IxStarCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
