import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCatsAreLiquidIcon],svg[arcticons-cats-are-liquid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.63 23.36l10.057-10.056l7.1 8.446m21.843 1.61L33.576 13.304l-7.1 8.446M4.9 30.827s4.32 5.689 8.377 6.443c4.46.83 6.418-3.866 10.954-3.866s6.495 4.696 10.955 3.866c4.058-.754 8.377-6.443 8.377-6.443"></svg:path>`,
})
export class ArcticonsCatsAreLiquidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
