import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCoffeeIcon],svg[meteor-icons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2v3m4-3v3m4-3v3m4 4v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9h17a1 1 0 0 1 0 8h-1"></svg:path>`,
})
export class MeteorIconsCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
