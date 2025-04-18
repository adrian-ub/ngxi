import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPlanimetryIcon],svg[iconoir-planimetry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11 16v-5H3m18-3h-6v2m0 8v3m-4-2v2m0-18v3m10 9h-6v-2m-4-4v2"></svg:path><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirPlanimetryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
