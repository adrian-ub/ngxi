import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAdjustVerticalAltSolidIcon],svg[teenyicons-adjust-vertical-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v8.05a2.5 2.5 0 0 0 0 4.9V15h1v-2.05a2.5 2.5 0 0 0 0-4.9V0zm8 0v2.05a2.5 2.5 0 0 0 0 4.9V15h1V6.95a2.5 2.5 0 0 0 0-4.9V0z"></svg:path>`,
})
export class TeenyiconsAdjustVerticalAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
