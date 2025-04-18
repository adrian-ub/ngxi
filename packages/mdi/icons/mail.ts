import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMailIcon],svg[mdi-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-3 13H7v-2h10m0-2H7v-2h10m3-2h-3V6h3"></svg:path>`,
})
export class MdiMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
