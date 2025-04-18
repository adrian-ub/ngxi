import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetzclubIcon],svg[arcticons-netzclub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.65 34.496H9.5v-9.88c1.973-1.45 5.044-2.055 7.15-2.055zm10.925 0h-7.15V20.384c1.973-1.898 5.044-2.052 7.15-2.052zm10.925 0h-7.15V15.999c1.974-2.384 5.044-2.495 7.15-2.495z"></svg:path>`,
})
export class ArcticonsNetzclubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
