import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCarrotIcon],svg[meteor-icons-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 23q10-2 14-6a1 1 0 0 0-8-8q-4 4-6 14m3-9l2 2m9 1l-3-3m3-13a1 1 0 0 0 8 8q-4-4-8 0q4-4 0-8"></svg:path>`,
})
export class MeteorIconsCarrotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
