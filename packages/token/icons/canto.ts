import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCantoIcon],svg[token-canto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.536 3h14.142v18H6.536v-3.214H3.32V6.214h3.215zm10.928 3.214H9.75V9.43H6.536v5.143H9.75v3.214h7.714V14.57H9.75V9.43h7.714z"></svg:path>`,
})
export class TokenCantoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
