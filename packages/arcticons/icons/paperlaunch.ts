import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPaperlaunchIcon],svg[arcticons-paperlaunch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.5v29a4 4 0 0 0 4 4H24V24h18.5V9.5a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4m18.5 33L42.5 24"></svg:path>`,
})
export class ArcticonsPaperlaunchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
