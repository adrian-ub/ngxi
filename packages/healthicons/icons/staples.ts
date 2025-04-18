import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaplesIcon],svg[healthicons-staples-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 39v5h2v-5h5v1h2v-4h-2v1h-5v-7h5v1h2v-4h-2v1h-5v-8h5v1h2v-4h-2v1h-5v-7h5v1h2V8h-2v1h-5V4h-2v5h-5V8h-2v4h2v-1h5v7h-5v-1h-2v4h2v-1h5v8h-5v-1h-2v4h2v-1h5v7h-5v-1h-2v4h2v-1z"></svg:path>`,
})
export class HealthiconsStaplesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
