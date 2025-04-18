import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHerIcon],svg[arcticons-her-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M11.65 19.319v10.362M18.169 19v11m-7.288-5.5h7.288m3.712 5.5h5.5m-5.5-11h5.5m-5.5 3.781h3.575m-3.575 3.438h3.575M21.881 19v11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.131 30V19h3.575c2.063 0 3.713 1.65 3.713 3.713s-1.65 3.712-3.713 3.712h-3.575m3.839-.012L37.419 30"></svg:path>`,
})
export class ArcticonsHerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
