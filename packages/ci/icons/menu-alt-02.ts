import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMenuAlt02Icon],svg[ci-menu-alt-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17h8M5 12h14m-8-5h8"></svg:path>`,
})
export class CiMenuAlt02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
