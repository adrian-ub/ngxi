import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXplaIcon],svg[token-xpla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.052 13.02l-1.014 1.008l6.948 6.954L21 19.968l-6.948-6.954zM4.008 3L3 4.014l6.948 6.948l1.008-1.008zm15.966.012l-6.936 6.96l1.008 1.008l6.942-6.96zM9.966 13.032l-6.942 6.96L4.032 21l6.948-6.96z"></svg:path>`,
})
export class TokenXplaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
