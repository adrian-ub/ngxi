import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRoadmapIcon],svg[material-icon-theme-roadmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#26a69a" d="M2 2h2v18h18v2H2zm5 8h10v3H7zm4 5h10v3H11zM6 4h16v4h-2V6H8v2H6z"></svg:path>`,
})
export class MaterialIconThemeRoadmapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
