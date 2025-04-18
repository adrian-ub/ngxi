import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDbnavigatorAltIcon],svg[arcticons-dbnavigator-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 31.5v-16h2.6c4.4 0 8 3.6 8 8h0c0 4.4-3.6 8-8 8zm22.023-8.16c2.07 0 3.762 1.693 3.762 3.762s-1.693 3.762-3.762 3.762h-6.208v-15.05h6.208c2.07 0 3.762 1.694 3.762 3.763s-1.693 3.762-3.762 3.762Zm0 0h-6.208"></svg:path>`,
})
export class ArcticonsDbnavigatorAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
