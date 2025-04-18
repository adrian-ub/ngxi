import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMenuIcon],svg[proicons-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 4.75h18.5M2.75 12h18.5m-18.5 7.25h18.5"></svg:path>`,
})
export class ProiconsMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
