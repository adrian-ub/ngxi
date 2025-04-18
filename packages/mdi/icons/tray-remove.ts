import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrayRemoveIcon],svg[mdi-tray-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-2v5H4v-5H2m12.12-6.54l1.42 1.42L13.41 9l2.13 2.12l-1.42 1.42L12 10.41l-2.12 2.13l-1.42-1.42L10.59 9L8.46 6.88l1.42-1.42L12 7.59Z"></svg:path>`,
})
export class MdiTrayRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
