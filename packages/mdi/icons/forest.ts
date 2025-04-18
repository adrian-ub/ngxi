import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiForestIcon],svg[mdi-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12L9 2L2 12h1.86L0 18h7v4h4v-4h7l-3.86-6zm4.14 0H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"></svg:path>`,
})
export class MdiForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
