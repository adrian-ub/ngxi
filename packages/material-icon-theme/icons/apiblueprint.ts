import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeApiblueprintIcon],svg[material-icon-theme-apiblueprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12" height="12" x="10" y="2" fill="#42a5f5" rx="6"></svg:rect><svg:rect width="12" height="12" x="18" y="18" fill="#42a5f5" rx="6"></svg:rect><svg:rect width="12" height="12" x="2" y="18" fill="#42a5f5" rx="6"></svg:rect><svg:path fill="none" stroke="#42a5f5" stroke-miterlimit="10" stroke-width="3" d="m16 8l8 16M16 8L8 24"></svg:path>`,
})
export class MaterialIconThemeApiblueprintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
