import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenDenseVectorIcon],svg[oui-token-dense-vector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.154 12V4h2.713v1.14H5.658v5.72h1.21V12zm7.692-8v8H9.133v-1.14h1.209V5.14h-1.21V4z"></svg:path>`,
})
export class OuiTokenDenseVectorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
