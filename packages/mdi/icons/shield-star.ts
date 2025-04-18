import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldStarIcon],svg[mdi-shield-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm3.08 15L12 14.15L8.93 16l.81-3.5l-2.71-2.34l3.58-.31L12 6.55l1.39 3.29l3.58.31l-2.71 2.35z"></svg:path>`,
})
export class MdiShieldStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
