import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTriforceIcon],svg[mdi-triforce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 21L12 3.5L22.5 21zM12 21l5-9H7z"></svg:path>`,
})
export class MdiTriforceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
