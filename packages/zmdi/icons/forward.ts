import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiForwardIcon],svg[zmdi-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 107V21l170 171l-170 171v-86H0V107z"></svg:path>`,
})
export class ZmdiForwardIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
