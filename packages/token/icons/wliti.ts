import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWlitiIcon],svg[token-wliti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.062 12.872v5.738L3 15.825zm3.246-1.912l-1.558.927V15.6l4.787-2.784z"></svg:path><svg:path fill="currentColor" d="M14.537 12.815L9.75 15.6v-3.713L8.063 12.9v5.704l3.245-2.076l4.843-2.784z"></svg:path><svg:path fill="currentColor" d="M8.062 7.472v5.45L3 15.826V4.688zm1.688.703v3.712l1.558-.928l3.223 1.857V5.39zm6.401 5.569l-4.843 2.784l4.843 2.785L21 16.528z"></svg:path><svg:path fill="currentColor" d="m9.693 8.175l6.464 3.712L21 9.103l-6.463-3.712z"></svg:path>`,
})
export class TokenWlitiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
