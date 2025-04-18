import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorRectangleIcon],svg[mdi-vector-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h6v2h8V4h6v6h-2v4h2v6h-6v-2H8v2H2v-6h2v-4H2zm14 6V8H8v2H6v4h2v2h8v-2h2v-4zM4 6v2h2V6zm14 0v2h2V6zM4 16v2h2v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class MdiVectorRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
