import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineAppShortcutIcon],svg[ic-baseline-app-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zm3.38-8.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"></svg:path><svg:path fill="currentColor" d="m16 8l-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5l-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"></svg:path>`,
})
export class IcBaselineAppShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
