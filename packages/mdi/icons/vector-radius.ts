import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorRadiusIcon],svg[mdi-vector-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h2V2h6v2a10 10 0 0 1 10 10h2v6h-2v2h-2v-2h-2v-6h2a8 8 0 0 0-8-8v2H4V6H2zm16 12v2h2v-2zM6 4v2h2V4z"></svg:path>`,
})
export class MdiVectorRadiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
