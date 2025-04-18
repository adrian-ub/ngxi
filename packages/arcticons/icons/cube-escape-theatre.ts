import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeTheatreIcon],svg[arcticons-cube-escape-theatre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zm-3.568-2.061L20.435 21.971m14.156-12.29L16.867 19.91M31.023 7.621L13.299 17.85M27.455 5.561L9.731 15.79"></svg:path>`,
})
export class ArcticonsCubeEscapeTheatreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
