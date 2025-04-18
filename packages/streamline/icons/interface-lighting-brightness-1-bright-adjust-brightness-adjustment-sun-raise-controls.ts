import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLightingBrightness1BrightAdjustBrightnessAdjustmentSunRaiseControlsIcon],svg[streamline-interface-lighting-brightness-1-bright-adjust-brightness-adjustment-sun-raise-controls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="2.5"></svg:circle><svg:path d="M7 .5v2m-4.6-.1l1.42 1.42M.5 7h2m-.1 4.6l1.42-1.42M7 13.5v-2m4.6.1l-1.42-1.42M13.5 7h-2m.1-4.6l-1.42 1.42"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLightingBrightness1BrightAdjustBrightnessAdjustmentSunRaiseControlsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
