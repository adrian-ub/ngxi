import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPlrIcon],svg[token-branded-plr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00FF24" d="M18.188 6.375L14.813 3v11.25h-9v3.375L9.187 21v-3.375h9zM10.313 5.25h-4.5v4.5h4.5z"></svg:path>`,
})
export class TokenBrandedPlrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
