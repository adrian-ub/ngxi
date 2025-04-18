import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAppleIcon],svg[meteor-icons-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3q2 0 2-2q-2 0-2 2M8 6C0 6 3 22 8 22q2 0 3-.5t2 0t3 .5q3 0 4.5-6a1 1 0 0 1-.5-7.5Q19 6 16 6q-1 0-2.5.5t-3 0T8 6"></svg:path>`,
})
export class MeteorIconsAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
