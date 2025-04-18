import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowExpandLeftIcon],svg[mdi-arrow-expand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22h2V2h-2v9H5.83l5.5-5.5l-1.41-1.42L2 12l7.92 7.92l1.41-1.42l-5.5-5.5H20z"></svg:path>`,
})
export class MdiArrowExpandLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
