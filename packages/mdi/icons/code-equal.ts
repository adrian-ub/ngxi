import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCodeEqualIcon],svg[mdi-code-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13h5v2H6m7-2h5v2h-5m0-6h5v2h-5M6 9h5v2H6M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
