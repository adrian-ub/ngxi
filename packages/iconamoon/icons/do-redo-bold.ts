import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDoRedoBoldIcon],svg[iconamoon-do-redo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.884 5.116a1.25 1.25 0 0 0-1.768 1.768zM19 9l.884.884a1.25 1.25 0 0 0 0-1.768zm-3.884 2.116a1.25 1.25 0 0 0 1.768 1.768zM19 18.25a1.25 1.25 0 1 0 0-2.5zM15.116 6.884l3 3l1.768-1.768l-3-3zm3 1.232l-3 3l1.768 1.768l3-3zM19 7.75H8v2.5h11zM2.75 13c0 2.9 2.35 5.25 5.25 5.25v-2.5A2.75 2.75 0 0 1 5.25 13zM8 7.75A5.25 5.25 0 0 0 2.75 13h2.5A2.75 2.75 0 0 1 8 10.25zm11 8H8v2.5h11z"></svg:path>`,
})
export class IconamoonDoRedoBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
