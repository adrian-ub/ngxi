import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemePawnIcon],svg[material-icon-theme-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef6c00" d="M6 28h20v2H6zm8-18h4l4 14H10z"></svg:path><svg:path fill="#ef6c00" d="M10 12h12v2H10z"></svg:path><svg:circle cx="16" cy="7" r="4" fill="#ef6c00"></svg:circle>`,
})
export class MaterialIconThemePawnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
