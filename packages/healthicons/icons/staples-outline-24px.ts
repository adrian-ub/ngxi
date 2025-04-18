import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsStaplesOutline24pxIcon],svg[healthicons-staples-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6.75v4.5h-2.5V10h-1.5v4h1.5v-1.25h2.5v4.5h-2.5V16h-1.5v4h1.5v-1.25h2.5V22h1.5v-3.25h2.5V20h1.5v-4h-1.5v1.25h-2.5v-4.5h2.5V14h1.5v-4h-1.5v1.25h-2.5v-4.5h2.5V8h1.5V4h-1.5v1.25h-2.5V2h-1.5v3.25h-2.5V4h-1.5v4h1.5V6.75z"></svg:path>`,
})
export class HealthiconsStaplesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
