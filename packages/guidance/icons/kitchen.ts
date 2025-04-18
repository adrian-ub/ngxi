import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceKitchenIcon],svg[guidance-kitchen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 22.5H1.5v-20s2-1 5.25-1s5.25 1 5.25 1zm0 0v-10h.25s1.75 1 5 1s5-1 5-1h.25v10zM1.5 9.5s2-1 5.25-1s5.25 1 5.25 1m-8-5v2M4 11v2m14.5.449V9.75a1.25 1.25 0 1 0-2.5 0V10"></svg:path>`,
})
export class GuidanceKitchenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
