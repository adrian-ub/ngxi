import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignDirectionRemoveIcon],svg[mdi-sign-direction-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20h.09a5.5 5.5 0 0 0 .72 2H9a2 2 0 0 1 2-2v-8H3.5L6 9.5L3.5 7H11V3l1-1l1 1v4h5l2.5 2.5L18 12h-5m8.12 3.46L19 17.59l-2.12-2.13l-1.42 1.42L17.59 19l-2.13 2.12l1.42 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12Z"></svg:path>`,
})
export class MdiSignDirectionRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
