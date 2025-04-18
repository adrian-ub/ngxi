import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsControlsSkipbackIcon],svg[dashicons-controls-skipback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.98 7.63l6-3.6v12l-6-3.6v3.6l-8-4.8v4.8h-2v-12h2v4.8l8-4.8z"></svg:path>`,
})
export class DashiconsControlsSkipbackIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
