import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineLeaveBagsAtHomeIcon],svg[ic-outline-leave-bags-at-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 8H17v6.17l2 2V8c0-1.1-.9-2-2-2h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3h-.17zM11 4h2v2h-2zm.83 5h.92v.92zm9.36 12.19L2.81 2.81L1.39 4.22l3.63 3.63c0 .05-.02.1-.02.15v11c0 1.1.9 2 2 2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c.34 0 .65-.09.93-.24l1.85 1.85zM7 19V9.83l1 1V18h1.5v-5.67l1.75 1.75V18h1.5v-2.42l1.75 1.75V18h.67l1 1zm9-10v4.17l-1.5-1.5V9z"></svg:path>`,
})
export class IcOutlineLeaveBagsAtHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
