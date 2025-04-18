import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsKeyReturnNoframe16Icon],svg[qlementine-icons-key-return-noframe-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.5a.5.5 0 0 0-1 0V8H1.7l3.15-3.15a.5.5 0 0 0-.707-.707l-4 4a.5.5 0 0 0 0 .707l4 4a.5.5 0 0 0 .707-.707L1.7 8.993H15a1 1 0 0 0 1-1v-3.5z"></svg:path>`,
})
export class QlementineIconsKeyReturnNoframe16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
