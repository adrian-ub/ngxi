import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiExitIcon],svg[oui-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.535 12.493a.47.47 0 0 1 .468.468v2.564a.473.473 0 0 1-.466.475H3V0h9.595a.45.45 0 0 1 .398.463v2.565a.47.47 0 0 1-.468.467h-.065a.47.47 0 0 1-.467-.467V1H4v14h8.01l-.007-2.04c0-.257.21-.467.467-.467zm-1.096-7.59l2.121 2.122a1.5 1.5 0 0 1 0 2.121l-2.12 2.122a.5.5 0 1 1-.708-.708l2.121-2.12a.5.5 0 0 0 0-.708l-2.121-2.121a.5.5 0 0 1 .707-.707"></svg:path>`,
})
export class OuiExitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
