import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOneplusIcon],svg[arcticons-oneplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.222 20.109V6.5m-7.331 6.278H44.5m-6.278 11.876V41.5H9.5V12.778h16.846m-1.838 21.816V20.109"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.508 20.109a4.19 4.19 0 0 1-4.191 4.192h0"></svg:path>`,
})
export class ArcticonsOneplusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
