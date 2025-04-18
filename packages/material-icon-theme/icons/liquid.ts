import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeLiquidIcon],svg[material-icon-theme-liquid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#29b6f6" d="M12 21.669a6.927 6.927 0 0 1-6.927-6.927C5.073 10.124 12 2.33 12 2.33s6.927 7.793 6.927 12.41A6.927 6.927 0 0 1 12 21.67z"></svg:path>`,
})
export class MaterialIconThemeLiquidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
