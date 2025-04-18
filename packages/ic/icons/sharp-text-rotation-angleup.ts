import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTextRotationAngleupIcon],svg[ic-sharp-text-rotation-angleup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.76 9l1.41 1.41l-9.19 9.19l1.41 1.41l9.19-9.19L21 13.24V9zm-8.28 3.75l3.54-3.54l2.19.92l1.48-1.48L4.56 4.23L3.5 5.29l4.42 11.14l1.48-1.48zm-.82-1.72L5.43 6.16l4.87 2.23z"></svg:path>`,
})
export class IcSharpTextRotationAngleupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
