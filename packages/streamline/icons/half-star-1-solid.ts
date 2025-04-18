import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHalfStar1SolidIcon],svg[streamline-half-star-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.518.5a.5.5 0 0 0-.503-.5a1.04 1.04 0 0 0-.941.61L4.486 3.966l-.007.016a.02.02 0 0 1-.016.012l-.006.001l-3.54.51l-.009.001a1.08 1.08 0 0 0-.57 1.851L2.89 8.98l.002.002a.08.08 0 0 1 .022.068l-.638 3.693v.002a1.06 1.06 0 0 0 1.53 1.125l3.199-1.739a.1.1 0 0 1 .04-.01a.5.5 0 0 0 .483-.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHalfStar1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
