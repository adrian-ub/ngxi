import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasQuickActionsIcon],svg[pajamas-quick-actions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5M1 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm8.717 1.97a.75.75 0 1 0-1.434-.44l-2 6.5a.75.75 0 0 0 1.434.44z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasQuickActionsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
