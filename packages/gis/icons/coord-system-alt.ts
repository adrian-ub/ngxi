import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisCoordSystemAltIcon],svg[gis-coord-system-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m81.946 81.775l6.08 8.922L81.702 100h4.92l4.225-6.227l4.26 6.227H100l-6.322-9.303l6.078-8.922h-4.932l-3.978 5.871l-3.992-5.87zM0 0l6.946 10.547v7.678h4.701v-7.678L18.593 0H13.44L9.29 6.494L5.14 0Zm7.001 28v65h65v-5h-60V28z" color="currentColor"></svg:path>`,
})
export class GisCoordSystemAltIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
