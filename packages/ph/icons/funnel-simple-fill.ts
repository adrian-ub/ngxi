import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleFillIcon],svg[ph-funnel-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-72 136h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m32-40H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m32-40H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFunnelSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
