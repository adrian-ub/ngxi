import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMortarPestleIcon],svg[mdi-mortar-pestle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 7l-2 6l2 6v2H3v-2l2-6l-2-6V5h12.7l1.5-4l2.3.8L18.3 5H21z"></svg:path>`,
})
export class MdiMortarPestleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
