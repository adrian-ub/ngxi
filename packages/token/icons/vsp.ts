import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVspIcon],svg[token-vsp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.968 3.871H3l1.164 3.484H7.29l4.419 12.774h3.484L21 3.871h-3.774l-3.774 11.032z"></svg:path>`,
})
export class TokenVspIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
