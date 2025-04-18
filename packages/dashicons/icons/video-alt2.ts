import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsVideoAlt2Icon],svg[dashicons-video-alt2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13V7c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2m1-2.5l6 4.5V5l-6 4.5z"></svg:path>`,
})
export class DashiconsVideoAlt2Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
