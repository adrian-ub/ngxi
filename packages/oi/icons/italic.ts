import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiItalicIcon],svg[oi-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v1h1.63l-.06.13l-2 5l-.34.88H.01v1h5v-1H3.38l.06-.13l2-5L5.78 1H7V0z"></svg:path>`,
})
export class OiItalicIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
