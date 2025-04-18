import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenArrayIcon],svg[oui-token-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.392 12V4h2.713v1.14h-1.21v5.72h1.21V12zm7.692-8v8H9.37v-1.14h1.209V5.14H9.37V4z"></svg:path>`,
})
export class OuiTokenArrayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
