import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsCreditCardIcon],svg[simple-line-icons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.144 176H95.856c-53.024 0-96 42.976-96 96v480c0 53.024 42.976 96 96 96h832.288c53.024 0 96-42.976 96-96V272c0-53.024-42.976-96-96-96M95.856 240h832.288c17.664 0 32 14.336 32 32v64H63.856v-64c0-17.664 14.351-32 32-32m832.288 544H95.856c-17.664 0-32-14.336-32-32V464h896.288v288c0 17.664-14.352 32-32 32"></svg:path>`,
})
export class SimpleLineIconsCreditCardIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
