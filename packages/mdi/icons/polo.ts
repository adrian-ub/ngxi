import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPoloIcon],svg[mdi-polo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0M11 17V3H8v14H2l4 4h7v-4zm5 0h-2v4h2z"></svg:path>`,
})
export class MdiPoloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
