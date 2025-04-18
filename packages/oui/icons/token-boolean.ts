import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenBooleanIcon],svg[oui-token-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m-2.828-2.172a4 4 0 0 1 5.656-5.656c.004.013-5.645 5.674-5.656 5.656"></svg:path>`,
})
export class OuiTokenBooleanIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
