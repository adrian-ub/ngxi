import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeTheMillIcon],svg[arcticons-cube-escape-the-mill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zm-24.281 3.678l12.998-7.504m-13.039-.024l13.08 7.552"></svg:path><svg:ellipse cx="23.945" cy="13.729" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.701" ry="4.678" transform="rotate(-89.689 23.945 13.729)"></svg:ellipse>`,
})
export class ArcticonsCubeEscapeTheMillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
