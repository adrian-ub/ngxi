import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMlIcon],svg[token-ml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 3l3.6 1.512v15.066L3 21zm4.8 7.2l3.6 1.512v6.066L7.8 19.2zM21 21l-3.6-1.512V4.422L21 3zm-4.8-7.2l-3.6-1.512V6.222L16.2 4.8z"></svg:path>`,
})
export class TokenMlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
