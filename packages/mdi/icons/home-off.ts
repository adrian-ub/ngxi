import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeOffIcon],svg[mdi-home-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L18.11 20H14v-4.11L12.11 14H10v6H5v-8H2l4.27-3.84L1.11 3l1.28-1.27l19.72 19.73zM19 12h3L12 3L8.95 5.75L19 15.8z"></svg:path>`,
})
export class MdiHomeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
