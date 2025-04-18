import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownRightSquareSolidIcon],svg[iconoir-arrow-down-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm6.102 6.391a.75.75 0 1 0-1.06 1.06l4.376 4.377h-3.14a.75.75 0 0 0 0 1.5h4.95a.747.747 0 0 0 .75-.75v-4.95a.75.75 0 0 0-1.5 0v3.14z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowDownRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
