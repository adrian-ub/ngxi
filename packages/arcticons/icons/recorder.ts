import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRecorderIcon],svg[arcticons-recorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5a7.61 7.61 0 0 1 7.61 7.61v9.42A7.61 7.61 0 0 1 24 29.14h0a7.61 7.61 0 0 1-7.61-7.61v-9.42A7.61 7.61 0 0 1 24 4.5m2.94 28.65v9.71a.64.64 0 0 1-.63.64h-4.62a.64.64 0 0 1-.63-.64v-9.71"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.23 23.79a12 12 0 0 0 23.54 0"></svg:path>`,
})
export class ArcticonsRecorderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
