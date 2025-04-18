import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStairsBoxIcon],svg[mdi-stairs-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm9 4h5v2h-3v3h-3v3h-3v3H5v-2h3v-3h3v-3h3z"></svg:path>`,
})
export class MdiStairsBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
