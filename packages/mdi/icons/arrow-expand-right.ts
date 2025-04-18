import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowExpandRightIcon],svg[mdi-arrow-expand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v20h2v-9h14.17l-5.5 5.5l1.41 1.42L22 12l-7.92-7.92l-1.41 1.42l5.5 5.5H4z"></svg:path>`,
})
export class MdiArrowExpandRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
