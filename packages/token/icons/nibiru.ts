import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNibiruIcon],svg[token-nibiru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.225 3L6.19 7.244l11.66 8.475V6.957zm4.52 10.504L8.156 7.26l4.09-2.878l4.5 3.165zM6.15 8.281v8.767L11.92 21l5.88-4.25zm1.146 8.167v-5.952l8.597 6.252l-3.97 2.87z"></svg:path>`,
})
export class TokenNibiruIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
