import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLightingBrightness3BrightAdjustBrightnessAdjustmentSunRaiseControlsDotSmallIcon],svg[streamline-interface-lighting-brightness-3-bright-adjust-brightness-adjustment-sun-raise-controls-dot-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r=".5"></svg:circle><svg:path d="M7 12.5v-1m3.89-.61l-.71-.71M12.5 7h-1m-.61-3.89l-.71.71M7 1.5v1m-3.89.61l.71.71M1.5 7h1m.61 3.89l.71-.71"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLightingBrightness3BrightAdjustBrightnessAdjustmentSunRaiseControlsDotSmallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
