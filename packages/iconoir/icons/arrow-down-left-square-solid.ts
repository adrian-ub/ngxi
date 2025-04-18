import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownLeftSquareSolidIcon],svg[iconoir-arrow-down-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.4 21.75a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35H3.6A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35zm-6.278-6.171h-4.95a.747.747 0 0 1-.75-.75v-4.95a.75.75 0 1 1 1.5 0v3.139l4.376-4.377a.75.75 0 0 1 1.061 1.061l-4.376 4.377h3.139a.75.75 0 1 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirArrowDownLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
