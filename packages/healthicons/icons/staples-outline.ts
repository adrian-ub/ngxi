import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaplesOutlineIcon],svg[healthicons-staples-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18v-7h-5v1h-2V8h2v1h5V4h2v5h5V8h2v4h-2v-1h-5v7h5v-1h2v4h-2v-1h-5v8h5v-1h2v4h-2v-1h-5v7h5v-1h2v4h-2v-1h-5v5h-2v-5h-5v1h-2v-4h2v1h5v-7h-5v1h-2v-4h2v1h5v-8h-5v1h-2v-4h2v1z"></svg:path>`,
})
export class HealthiconsStaplesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
