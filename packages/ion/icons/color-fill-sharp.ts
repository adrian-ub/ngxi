import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionColorFillSharpIcon],svg[ion-color-fill-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 320s-64 48-64 99.84c0 33.28 28.67 60.16 64 60.16s64-27 64-60.16C480 368 416 320 416 320M144 32l-76 76l70 70L32 280l176 184l152.8-148.3L416 304Zm24 116l-39.6-41l15.88-15.89L184 132Z"></svg:path>`,
})
export class IonColorFillSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
