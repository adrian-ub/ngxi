import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLightingBrightness2BrightAdjustBrightnessAdjustmentSunRaiseControlsHalfIcon],svg[streamline-interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v1m0 11v1M1.5 7h-1m2.61 3.89l-.71.71m.71-8.49L2.4 2.4M7 3.5a3.5 3.5 0 0 0 0 7ZM12.5 7h1m-2.61 3.89l.71.71m-.71-8.49l.71-.71"></svg:path>`,
})
export class StreamlineInterfaceLightingBrightness2BrightAdjustBrightnessAdjustmentSunRaiseControlsHalfIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
