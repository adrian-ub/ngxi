import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSafeIcon],svg[vaadin-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v16h3v-1h8v1h3V0zm13 10h-1V5h1zm0-7h-1V2H3v11h10v-1h1v2H2V1h12zM8.5 7.5c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2"></svg:path><svg:path fill="currentColor" d="M7.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinSafeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
