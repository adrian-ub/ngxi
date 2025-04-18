import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBicepIcon],svg[material-icon-theme-bicep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M3 18S4.15 6.885 7 3l5 1l-1 3H9v7h1c1.9-2.915 5.783-3.98 8.157-2.915c4.475 1.915 2.998 5.967.148 7.905C16.025 20.548 10.113 23.05 3 18"></svg:path>`,
})
export class MaterialIconThemeBicepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
