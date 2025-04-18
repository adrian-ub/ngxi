import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riReplay10FillIcon],svg[ri-replay-10-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2m2.5 6.25a2.5 2.5 0 0 0-2.5 2.5v2.5a2.5 2.5 0 0 0 5 0v-2.5a2.5 2.5 0 0 0-2.5-2.5m1 2.5v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0M10 8.5H8.5v7H10z"></svg:path>`,
})
export class RiReplay10FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
