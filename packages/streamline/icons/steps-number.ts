import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStepsNumberIcon],svg[streamline-steps-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.967h13m-2.5 2.5l2.5-2.5l-2.5-2.5m-8.8-2.69V1.511c0 .589-.478 1.066-1.067 1.066H.778m2.844 3.201H.778m7.644-.001H5.578v-.606c0-.423.25-.807.639-.977L7.8 3.502a1.04 1.04 0 0 0-.417-1.991h-.739c-.464 0-.86.296-1.006.71m6.545 1.245c.59 0 1.067.478 1.067 1.067v.178c0 .589-.478 1.067-1.067 1.067h-.71c-.465 0-.86-.297-1.007-.712m.154-2.844a.98.98 0 0 1 .941-.712h.533a.978.978 0 1 1 0 1.956h-.088"></svg:path>`,
})
export class StreamlineStepsNumberIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
