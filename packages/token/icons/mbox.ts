import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMboxIcon],svg[token-mbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11L8.5 9.022l3.5-2.02l3.5 2.02zm-9 1.624l4.5-2.625v4.375L3 16.999zm9 0l4.5-2.625v4.375L12 16.999zm9 0l-4.5-2.625v4.375l4.5 2.625zm-9 0L7.5 9.999v4.375l4.5 2.625z"></svg:path>`,
})
export class TokenMboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
