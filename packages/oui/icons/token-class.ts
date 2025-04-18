import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenClassIcon],svg[oui-token-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.333 7.027H9.375c-.056-.708-.48-1.187-1.222-1.187c-.972 0-1.5.806-1.5 2.16c0 1.43.545 2.16 1.486 2.16c.708 0 1.139-.415 1.236-1.08l1.958.015C11.236 10.418 10.181 12 8.097 12c-1.958 0-3.43-1.41-3.43-4c0-2.6 1.514-4 3.43-4c1.792 0 3.084 1.095 3.236 3.027"></svg:path>`,
})
export class OuiTokenClassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
