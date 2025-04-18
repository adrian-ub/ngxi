import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSelectInverseIcon],svg[mdi-select-inverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h2v2h2V3h2v2h2V3h2v2h2V3h2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2z"></svg:path>`,
})
export class MdiSelectInverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
