import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignatureIcon],svg[mdi-signature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zM2.26 16.83L5.09 14l-2.83-2.83l1.41-1.41l2.83 2.83l2.83-2.83l1.41 1.41L7.91 14l2.83 2.83l-1.41 1.41l-2.83-2.83l-2.83 2.83z"></svg:path>`,
})
export class MdiSignatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
