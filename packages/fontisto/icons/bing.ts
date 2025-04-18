import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoBingIcon],svg[fontisto-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l4.795 1.686V18.56l6.753-3.9l-3.31-1.555l-2.09-5.2l10.64 3.738v5.435L4.795 24l-4.8-2.67V0z"></svg:path>`,
})
export class FontistoBingIcon {
  readonly viewBox = input("0 0 17 24")
  readonly width = input("0.71em")
  readonly height = input("1em")
}
