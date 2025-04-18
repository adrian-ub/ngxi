import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCubeEscapeCollectionIcon],svg[arcticons-cube-escape-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.727 13.803L23.887 3.5L6.163 13.729l17.84 10.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.003 24.032L6.163 13.729v20.468L24.003 44.5zm17.724-10.229L24.003 24.032V44.5l17.724-10.229zm-21.674-8.09c1.994 5.672 6.142 5.612 9.389 5.904c5.92.533 6.595 5.233 6.595 5.233m-21.64-7.873c1.2 5.44 4.184 7.966 9.337 7.418c4.267-.455 6.92-1.17 9.886 2.086"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.862 22.382c-2.04-2.223-4.44-.8-7.361-.95"></svg:path>`,
})
export class ArcticonsCubeEscapeCollectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
