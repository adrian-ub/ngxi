import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrightnessLowIcon],svg[mynaui-brightness-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0M3 12h1m1-7l.707.707M19 5l-.707.707M5 19l.707-.707M19 19l-.707-.707M12 3v1m0 17v-1m8-8h1"></svg:path>`,
})
export class MynauiBrightnessLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
