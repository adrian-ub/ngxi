import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCheckboxActiveIcon],svg[fontisto-checkbox-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24H0V0h18.4v2.4h-16v19.2h20v-8.8h2.4V24zM4.48 11.58l1.807-1.807l5.422 5.422l13.68-13.68L27.2 3.318L11.709 18.809z"></svg:path>`,
})
export class FontistoCheckboxActiveIcon {
  readonly viewBox = input("0 0 27 24")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
