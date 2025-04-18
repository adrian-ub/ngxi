import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAxeIcon],svg[mdi-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l10 6c0 4-2 6-6 7l-3-5l-4-4zM4.11 19.84l-1.99-1.51L9.19 9L11 10.81z"></svg:path>`,
})
export class MdiAxeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
