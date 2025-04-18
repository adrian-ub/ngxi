import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGrimacingIcon],svg[hugeicons-grimacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 15c0-1.405.7-2 2-2h6c1.3 0 2 .595 2 2s-.7 2-2 2H9c-1.3 0-2-.595-2-2m1.009-6H8m8 0h-.009"></svg:path></svg:g>`,
})
export class HugeiconsGrimacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
