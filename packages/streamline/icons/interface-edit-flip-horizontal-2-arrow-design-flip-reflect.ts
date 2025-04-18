import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipHorizontal2ArrowDesignFlipReflectIcon],svg[streamline-interface-edit-flip-horizontal-2-arrow-design-flip-reflect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 3.75l2.93 3.07a.27.27 0 0 1 0 .36L1.5 10.25m11-6.5L9.57 6.82a.27.27 0 0 0 0 .36l2.93 3.07M7 .5v1m0 2v1m0 2v1m0 2v1m0 2v1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipHorizontal2ArrowDesignFlipReflectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
