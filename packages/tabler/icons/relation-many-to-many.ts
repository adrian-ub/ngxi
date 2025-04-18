import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRelationManyToManyIcon],svg[tabler-relation-many-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M15 14v-4l3 4v-4M6 14v-4l3 4v-4m3 .5v.01m0 2.99v.01"></svg:path></svg:g>`,
})
export class TablerRelationManyToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
