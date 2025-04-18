import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUngroupIcon],svg[mdi-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4v1h7V2h4v4h-1v3h2V8h4v4h-1v6h1v4h-4v-1h-6v1H8v-4h1v-2H6v1H2v-4h1V6H2zm16 10v-1h-2v2h1v4h-4v-1h-2v2h1v1h6v-1h1v-6zm-5-6V5H6v1H5v7h1v1h3v-2H8V8h4v1h2V6zm-1 6h-1v2h2v-1h1v-2h-2z"></svg:path>`,
})
export class MdiUngroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
