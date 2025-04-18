import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMenuLeftIcon],svg[oui-menu-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.014 7.382a.5.5 0 0 0-.013.152c-.014.4.133.806.439 1.112l2.12 2.122a.5.5 0 1 0 .708-.708L2.208 8H14.5a.5.5 0 0 0 0-1H2.379l1.889-1.89a.5.5 0 0 0-.707-.706L1.44 6.524a1.5 1.5 0 0 0-.426.858M14.5 3h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1m0 8h-7a.5.5 0 1 0 0 1h7a.5.5 0 1 0 0-1"></svg:path>`,
})
export class OuiMenuLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
