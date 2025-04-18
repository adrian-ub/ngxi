import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsModeNightIcon],svg[material-symbols-mode-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2q2.075 0 3.9.788t3.175 2.137T18.713 8.1T19.5 12t-.788 3.9t-2.137 3.175t-3.175 2.138T9.5 22q-1.325 0-2.588-.337T4.5 20.65Q6.825 19.3 8.163 17T9.5 12T8.162 7T4.5 3.35q1.15-.675 2.413-1.012T9.5 2"></svg:path>`,
})
export class MaterialSymbolsModeNightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
