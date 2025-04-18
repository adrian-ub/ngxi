import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppSpacesIcon],svg[oui-app-spaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h6v2H4zm18 0h6v2h-6zM4 22h6v2H4z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M0 14h14V0H0zM2 2h10v10H2zm16-2v14h14V0zm12 12H20V2h10zM0 32h14V18H0zm2-12h10v10H2zm16 12h14V18H18zm2-12h10v10H20z"></svg:path><svg:path fill="currentColor" d="M22 22h6v2h-6z" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiAppSpacesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
