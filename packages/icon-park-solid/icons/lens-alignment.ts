import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLensAlignmentIcon],svg[icon-park-solid-lens-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M14 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 10a4 4 0 0 1-4 4m4-4a4 4 0 1 0-4 4m4-4h6m-10 4v6"></svg:path><svg:path fill="currentColor" d="M14 38a4 4 0 1 0-8 0a4 4 0 0 0 8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 38a4 4 0 0 0-4-4m4 4a4 4 0 1 1-4-4m4 4h6m-10-4v-6"></svg:path><svg:path fill="currentColor" d="M34 38a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 38a4 4 0 0 1 4-4m-4 4a4 4 0 1 0 4-4m-4 4h-6m10-4v-6"></svg:path><svg:path fill="currentColor" d="M34 10a4 4 0 1 0 8 0a4 4 0 0 0-8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 10a4 4 0 0 0 4 4m-4-4a4 4 0 1 1 4 4m-4-4h-6m10 4v6m-21 4h14m-7 7V17"></svg:path></svg:g>`,
})
export class IconParkSolidLensAlignmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
