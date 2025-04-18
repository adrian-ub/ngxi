import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightNotePlusIcon],svg[mdi-light-note-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12a3 3 0 0 1-3-3V5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6zm-2-3a2 2 0 0 0 2 2h3.59L14 5.41zM5 4h9l7 7v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m2 14v-2H5v-1h2v-2h1v2h2v1H8v2z"></svg:path>`,
})
export class MdiLightNotePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
