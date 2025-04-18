import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRobloxIcon],svg[arcticons-roblox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.265 12.672L14.712 5.557a1.666 1.666 0 0 0-2.04 1.178L5.557 33.288a1.666 1.666 0 0 0 1.178 2.04l26.553 7.114a1.666 1.666 0 0 0 2.04-1.178l7.114-26.552a1.666 1.666 0 0 0-1.178-2.04Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.32 20.51l-8.182-2.192a.513.513 0 0 0-.628.363l-2.192 8.18a.513.513 0 0 0 .363.63l8.18 2.191a.513.513 0 0 0 .63-.363l2.191-8.18a.513.513 0 0 0-.363-.629"></svg:path>`,
})
export class ArcticonsRobloxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
