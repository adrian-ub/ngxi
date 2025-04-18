import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBracketsCurlyIcon],svg[meteor-icons-brackets-curly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20H7a3 3 0 0 1-3-3a4 5 0 0 0-3-5a4 5 0 0 0 3-5a3 3 0 0 1 3-3h2m6 16h2a3 3 0 0 0 3-3a4 5 0 0 1 3-5a4 5 0 0 1-3-5a3 3 0 0 0-3-3h-2"></svg:path>`,
})
export class MeteorIconsBracketsCurlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
