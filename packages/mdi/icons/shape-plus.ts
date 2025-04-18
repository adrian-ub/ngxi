import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShapePlusIcon],svg[mdi-shape-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v9H2zm15.5 0C20 2 22 4 22 6.5S20 11 17.5 11S13 9 13 6.5S15 2 17.5 2m-11 12l4.5 8H2zM19 17h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"></svg:path>`,
})
export class MdiShapePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
