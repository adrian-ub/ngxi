import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenKeyIcon],svg[oui-token-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.667 6.542A3.208 3.208 0 0 1 8.86 9.694l-.438.492a.44.44 0 0 1-.327.147h-.678v.73a.437.437 0 0 1-.438.437H6.25v.73a.437.437 0 0 1-.437.437H3.77a.437.437 0 0 1-.438-.438v-1.423a.44.44 0 0 1 .128-.31l2.95-2.949a3.208 3.208 0 0 1 3.047-4.214a3.2 3.2 0 0 1 3.209 3.209m-3.209-.875a.875.875 0 1 0 1.75 0a.875.875 0 0 0-1.75 0"></svg:path>`,
})
export class OuiTokenKeyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
