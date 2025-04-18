import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIdCardIcon],svg[mdi-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 2h16v4H4zm0 6h4v2H4zm6 0h10v2H10zm-6 4h10v2H4zm12 0h4v2h-4z"></svg:path>`,
})
export class MdiIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
