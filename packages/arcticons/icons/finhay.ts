import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinhayIcon],svg[arcticons-finhay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.389 14.703c1.002.218 2.036 1.16 2.177 2.177c1.15 8.344-2.982 31.077-21.771 20.32c-1.64-.94-2.985-2.578-3.629-4.355c-4.665-12.88 4.985-22.115 23.223-18.142"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.645 8.897c1.003.219 2.037 1.16 2.177 2.177c1.152 8.344-2.981 31.078-21.77 20.32c-1.64-.939-2.986-2.578-3.629-4.354c-4.665-12.881 4.985-22.115 23.222-18.143"></svg:path>`,
})
export class ArcticonsFinhayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
