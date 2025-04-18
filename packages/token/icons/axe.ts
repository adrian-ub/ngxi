import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAxeIcon],svg[token-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.91 10.774L7.332 3l4.578 4.804L16.742 3z"></svg:path><svg:path fill="currentColor" d="M12.018 10.61L16.742 3l-1.715 1.71zM9.131 4.884L7.332 3l4.5 7.633zm2.779 8.343L7.332 21l4.578-4.804L16.742 21z"></svg:path><svg:path fill="currentColor" d="M12.018 13.39L16.742 21l-1.715-1.71l-3.01-5.906zm-2.886 5.726L7.332 21l4.5-7.633z"></svg:path><svg:path fill="currentColor" d="M7.742 12.05L3 7.248l4.09-4.145l4.87 7.683l4.95-7.683L21 7.247l-4.742 4.804L21 16.854L16.91 21l-4.95-7.706L7.09 21L3 16.854z"></svg:path>`,
})
export class TokenAxeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
