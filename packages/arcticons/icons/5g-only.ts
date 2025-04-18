import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons5gOnlyIcon],svg[arcticons-5g-only-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 29.769c.958.803 1.888 1.17 4.211 1.17h.4A3.89 3.89 0 0 0 22 27.05h0a3.89 3.89 0 0 0-3.89-3.891H13.5V17.06H22m12.5 4.598a4.6 4.6 0 0 0-4.598-4.598h0a4.6 4.6 0 0 0-4.597 4.598v4.684a4.6 4.6 0 0 0 4.597 4.598h0a4.6 4.6 0 0 0 4.598-4.598h-4.598"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class Arcticons5gOnlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
