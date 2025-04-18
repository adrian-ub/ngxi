import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFilterFramesIcon],svg[zmdi-filter-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 85q18 0 30.5 12.5T427 128v299q0 17-12.5 29.5T384 469H43q-18 0-30.5-12.5T0 427V128q0-18 12.5-30.5T43 85h85l85-85l86 85zm0 342V128h-96l-74-75l-75 75H43v299zm-43-256H85v213h256z"></svg:path>`,
})
export class ZmdiFilterFramesIcon {
  readonly viewBox = input("0 0 432 472")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
