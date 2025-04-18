import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLightingBrightness4BrightAdjustBrightnessAdjustmentSunRaiseControlsDotIcon],svg[streamline-interface-lighting-brightness-4-bright-adjust-brightness-adjustment-sun-raise-controls-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="3.25"></svg:circle><svg:path d="M7 .5v1m0 11v1M13.5 7h-1m-11 0h-1m11.1-4.6l-.71.71m-7.78 7.78l-.71.71m9.2 0l-.71-.71M3.11 3.11L2.4 2.4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLightingBrightness4BrightAdjustBrightnessAdjustmentSunRaiseControlsDotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
