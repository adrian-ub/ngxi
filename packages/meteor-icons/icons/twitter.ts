import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTwitterIcon],svg[meteor-icons-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.5a4.5 4.5 0 0 1 8-3Q22 4 23 3q0 2-2 4A13 13 0 0 1 1 19q5 0 7-2q-8-4-5-13q4 5 9 5Z"></svg:path>`,
})
export class MeteorIconsTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
