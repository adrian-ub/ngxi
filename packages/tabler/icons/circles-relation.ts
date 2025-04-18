import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCirclesRelationIcon],svg[tabler-circles-relation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.183 6.117a6 6 0 1 0 4.511 3.986"></svg:path><svg:path d="M14.813 17.883a6 6 0 1 0-4.496-3.954"></svg:path></svg:g>`,
})
export class TablerCirclesRelationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
