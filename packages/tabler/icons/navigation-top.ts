import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNavigationTopIcon],svg[tabler-navigation-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.54 19.977a.34.34 0 0 0 .357-.07a.33.33 0 0 0 .084-.35L12 9L7.018 19.557a.33.33 0 0 0 .084.35a.34.34 0 0 0 .357.07L12 18.5zM12 3v2"></svg:path>`,
})
export class TablerNavigationTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
