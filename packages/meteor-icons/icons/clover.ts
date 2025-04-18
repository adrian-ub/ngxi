import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCloverIcon],svg[meteor-icons-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7a1 1 0 0 0-5-5a1 1 0 0 0-5 5l10 10a1 1 0 0 1-5 5a1 1 0 0 1-5-5ZM7 17a1 1 0 0 1-5-5a1 1 0 0 1 5-5l10 10a1 1 0 0 0 5-5a1 1 0 0 0-5-5Z"></svg:path>`,
})
export class MeteorIconsCloverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
