import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasUnstageAllIcon],svg[pajamas-unstage-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.75a.75.75 0 0 1 1.5 0v.943a5 5 0 1 1 .67 7.246a.75.75 0 1 1 .924-1.182A3.5 3.5 0 1 0 2.088 6.5H4.25a.75.75 0 0 1 0 1.5H0zm12 0a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M12 8a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 12 8m.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasUnstageAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
