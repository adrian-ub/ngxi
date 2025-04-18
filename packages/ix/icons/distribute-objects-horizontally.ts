import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDistributeObjectsHorizontallyIcon],svg[ix-distribute-objects-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 448V64h42.667v384zm341.333 0V64H448v384zM192 128h-21.333v256h170.666V128zm21.333 213.333V170.667h85.334v170.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxDistributeObjectsHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
