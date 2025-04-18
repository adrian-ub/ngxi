import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riReplay10LineIcon],svg[ri-replay-10-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4m3.5 11.25a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0zm-1-5a2.5 2.5 0 0 0-2.5 2.5v2.5a2.5 2.5 0 0 0 5 0v-2.5a2.5 2.5 0 0 0-2.5-2.5m-6 7.25v-7H10v7z"></svg:path>`,
})
export class RiReplay10LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
