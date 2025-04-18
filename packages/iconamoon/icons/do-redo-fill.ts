import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDoRedoFillIcon],svg[iconamoon-do-redo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.617 5.076a1 1 0 0 1 1.09.217l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 15 12v-2H8a3 3 0 1 0 0 6h11a1 1 0 1 1 0 2H8A5 5 0 0 1 8 8h7V6a1 1 0 0 1 .617-.924" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonDoRedoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
