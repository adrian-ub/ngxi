import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIudOutline24pxIcon],svg[healthicons-iud-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.876c0-.5.373-.923.87-.985l5.145-.643A1.766 1.766 0 0 1 12 4c0-1.062.93-1.884 1.985-1.752l5.146.643a.992.992 0 1 1-.246 1.97L13 4.125v12.046a3.001 3.001 0 1 1-2 0V4.125l-5.885.736A.992.992 0 0 1 4 3.876M13 19a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsIudOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
