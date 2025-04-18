import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHusdIcon],svg[token-branded-husd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1A61F0" d="M18.75 21h-3.375v-5.693c0-.912-.82-1.62-1.766-1.62H8.678c-1.892 0-3.428-1.513-3.428-3.338V3.002h3.375v5.694c0 .912.82 1.617 1.766 1.617h4.93c1.892.001 3.426 1.516 3.427 3.341zM8.625 21H5.25v-5.625c1.893 0 3.375 1.552 3.375 3.379zm6.75-18h3.375v5.625c-1.895 0-3.375-1.55-3.375-3.376z"></svg:path>`,
})
export class TokenBrandedHusdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
