import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCreditsIcon],svg[material-icon-theme-credits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9ccc65" d="M4 2h24v4H4zm6 6h12v4H10zm-6 6h24v4H4zm6 6h12v4H10zm-6 6h24v4H4z"></svg:path>`,
})
export class MaterialIconThemeCreditsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
