import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsProgressIcon],svg[lets-icons-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V3m0 18v-2m7-7h2M3 12h3m11.657-5.657l.707-.707M5.636 18.364L7.05 16.95m9.9 0l1.414 1.414M5.636 5.636l2.121 2.121"></svg:path>`,
})
export class LetsIconsProgressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
