import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUser2FillIcon],svg[ri-user-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8 8 0 0 1 7-7.938M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6"></svg:path>`,
})
export class RiUser2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
