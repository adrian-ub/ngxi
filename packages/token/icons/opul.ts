import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenOpulIcon],svg[token-opul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.352 10.545v2.912L12 14.913l2.647-1.456v-2.912L12 9.09z"></svg:path><svg:path fill="currentColor" d="M4.059 7.5v9l2.647 1.498v-8.91L12 6.176l5.294 2.912v5.824L12 17.823l-3.706-2.038v3.113L12 21l7.941-4.5v-9L12 3z"></svg:path>`,
})
export class TokenOpulIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
