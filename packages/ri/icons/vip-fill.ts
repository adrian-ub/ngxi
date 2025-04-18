import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVipFillIcon],svg[ri-vip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 5.5v7h2v-7zm-.285 0H8.606l-1.497 4.113L5.612 8.5H3.498l2.611 6.964h2zm5.285 5h1.5a2.5 2.5 0 0 0 0-5h-3.5v7h2zm0-2v-1h1.5a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class RiVipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
