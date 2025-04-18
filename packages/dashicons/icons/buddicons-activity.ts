import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsBuddiconsActivityIcon],svg[dashicons-buddicons-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v7h2V6c0-1.52 1.45-3 3-3v.86c.55-.52 1.26-.86 2-.86v3h1c1.1 0 2 .9 2 2s-.9 2-2 2h-1v6c0 .55-.45 1-1 1s-1-.45-1-1v-2.18c-.31.11-.65.18-1 .18v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H8v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c-.35 0-.69-.07-1-.18V16c0 .55-.45 1-1 1s-1-.45-1-1v-4H2v-1c0-1.66 1.34-3 3-3h2V1zm5 7c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class DashiconsBuddiconsActivityIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
