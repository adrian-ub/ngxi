import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMenuIcon],svg[codicon-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H0V4h16zm0 8H0v-1h16zm0-4.008H0V8h16z"></svg:path>`,
})
export class CodiconMenuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
