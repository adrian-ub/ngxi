import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShapeIcon],svg[mdi-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13.5v8H3v-8zM12 2l5.5 9h-11zm5.5 11c2.5 0 4.5 2 4.5 4.5S20 22 17.5 22S13 20 13 17.5s2-4.5 4.5-4.5"></svg:path>`,
})
export class MdiShapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
