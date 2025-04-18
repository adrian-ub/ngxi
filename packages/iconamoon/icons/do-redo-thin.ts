import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDoRedoThinIcon],svg[iconamoon-do-redo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.354 5.646a.5.5 0 0 0-.708.708zM19 9l.354.354a.5.5 0 0 0 0-.708zm-3.354 2.646a.5.5 0 0 0 .708.708zM19 17.5a.5.5 0 0 0 0-1zM15.646 6.354l3 3l.708-.708l-3-3zm3 2.292l-3 3l.708.708l3-3zM19 8.5H8v1h11zM3.5 13A4.5 4.5 0 0 0 8 17.5v-1A3.5 3.5 0 0 1 4.5 13zM8 8.5A4.5 4.5 0 0 0 3.5 13h1A3.5 3.5 0 0 1 8 9.5zm11 8H8v1h11z"></svg:path>`,
})
export class IconamoonDoRedoThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
