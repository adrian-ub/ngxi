import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsErase16Icon],svg[qlementine-icons-erase-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.85 5.15a.5.5 0 0 0-.707.707l2.15 2.15l-2.15 2.15a.5.5 0 0 0 .707.707L10 8.714l2.15 2.15a.5.5 0 0 0 .707-.707l-2.15-2.15l2.15-2.15a.5.5 0 0 0-.707-.707L10 7.3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.78 3c-.376 0-.739.141-1.02.396l-4.6 4.24a.5.5 0 0 0 0 .736l4.6 4.24c.277.255.64.396 1.02.396h6.72a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H6.78zm-1.69-.339A2.5 2.5 0 0 1 6.78 2h6.72A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5H6.78a2.5 2.5 0 0 1-1.69-.661l-4.6-4.24a1.504 1.504 0 0 1 0-2.21l4.6-4.24z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsErase16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
