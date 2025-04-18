import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMortarPestlePlusIcon],svg[mdi-mortar-pestle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h-3v3h-2v-3H8v-2h3V9h2v3h3m5-7h-2.65l1.15-3.15L17.15 1l-1.46 4H3v2l2 6l-2 6v2h18v-2l-2-6l2-6z"></svg:path>`,
})
export class MdiMortarPestlePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
