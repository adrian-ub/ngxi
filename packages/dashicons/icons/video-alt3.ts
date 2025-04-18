import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsVideoAlt3Icon],svg[dashicons-video-alt3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2M8 14V6l6 4z"></svg:path>`,
})
export class DashiconsVideoAlt3Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
