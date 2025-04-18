import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDoNotStepIcon],svg[ic-sharp-do-not-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.39 4.22l8.24 8.24l-.69.72l-2.07-2.08c-.11.4-.26.78-.45 1.12l1.75 1.75l-.69.72l-1.63-1.63c-.24.29-.5.56-.77.8l1.63 1.63l-.7.72l-1.74-1.74c-1.44.96-2.93 1.35-3.27 1.45V20h9.5l3.33-3.33l5.94 5.94l1.41-1.41L2.81 2.81zm17.12 11.46l-1.41-1.41l4.48-4.48L23 11.2zm2.37-6.6l-4.48 4.48l-7.1-7.09L13.8 2z"></svg:path>`,
})
export class IcSharpDoNotStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
