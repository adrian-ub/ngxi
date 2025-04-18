import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDiskIcon],svg[ix-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m328.832 85.333l97.834 97.835v243.498H85.333V85.333zM298.666 320h-85.333v64.021h85.333zm-128-192H128v256h42.666V277.333h170.667V384H384V200.832l-42.667-42.646v76.48H170.666zm128 0h-85.333v64.021h85.333z"></svg:path>`,
})
export class IxDiskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
