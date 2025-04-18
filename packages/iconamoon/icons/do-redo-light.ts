import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDoRedoLightIcon],svg[iconamoon-do-redo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 5.47a.75.75 0 1 0-1.06 1.06zM19 9l.53.53a.75.75 0 0 0 0-1.06zm-3.53 2.47a.75.75 0 1 0 1.06 1.06zM19 17.75a.75.75 0 0 0 0-1.5zM15.47 6.53l3 3l1.06-1.06l-3-3zm3 1.94l-3 3l1.06 1.06l3-3zm.53-.22H8v1.5h11zM3.25 13A4.75 4.75 0 0 0 8 17.75v-1.5A3.25 3.25 0 0 1 4.75 13zM8 8.25A4.75 4.75 0 0 0 3.25 13h1.5A3.25 3.25 0 0 1 8 9.75zm11 8H8v1.5h11z"></svg:path>`,
})
export class IconamoonDoRedoLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
