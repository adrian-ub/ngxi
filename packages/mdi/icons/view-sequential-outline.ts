import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewSequentialOutlineIcon],svg[mdi-view-sequential-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14h18V5zm16 2v2H5V7zm0 4v2H5v-2zM5 17v-2h14v2z"></svg:path>`,
})
export class MdiViewSequentialOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
