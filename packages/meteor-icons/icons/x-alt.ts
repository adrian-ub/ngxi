import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsXAltIcon],svg[meteor-icons-x-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 2a7 7 0 0 0 0 10L7 14.5L1.5 20a7 7 0 0 0 10 0L22 9.5L19.5 7a3.5 3.5 0 0 0-5 0L12 9.5ZM12 19.5l.5.5a7 7 0 0 0 10 0L17 14.5"></svg:path>`,
})
export class MeteorIconsXAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
