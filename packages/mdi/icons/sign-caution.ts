import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignCautionIcon],svg[mdi-sign-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v10h-4v8h-2v-8H8v8H6v-8H2zm16.97 8L20 9.97V7.15L16.15 11zm-5.65 0l6-6H16.5l-6 6zm-5.66 0l6-6h-2.83l-6 6zM5.18 5L4 6.18V9l4-4z"></svg:path>`,
})
export class MdiSignCautionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
