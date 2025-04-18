import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEnulsIcon],svg[token-enuls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.525 14.767l1.477 2.048V21L6.6 18.688V7.791c0-.394.156-.773.432-1.052a1.47 1.47 0 0 1 1.044-.436l5.204 7.22l2.647 1.626v-8.98L13.478 5.12v6.148l-1.476-2.05V3L17.4 5.315v10.106c0 .394-.155.773-.432 1.052a1.47 1.47 0 0 1-1.044.437l-3.755-2.397l-4.09-5.677v8.996l2.446 1.046z"></svg:path>`,
})
export class TokenEnulsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
