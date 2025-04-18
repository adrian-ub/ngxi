import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCheckboxPassiveIcon],svg[fontisto-checkbox-passive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24H0V0h24.8v24zm-1.6-2.4V2.4h-20v19.2z"></svg:path>`,
})
export class FontistoCheckboxPassiveIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
