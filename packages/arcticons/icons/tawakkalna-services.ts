import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTawakkalnaServicesIcon],svg[arcticons-tawakkalna-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.215-1.784 4-4 4h-29c-2.216 0-4-1.785-4-4v-29c0-2.217 1.784-4 4-4m23.448 9.552a8.92 8.92 0 1 1-17.84 0a8.92 8.92 0 0 1 17.84 0M5.5 24.028h19.141c9.287 0 17.125-8.446 17.235-16.68M5.5 24.028c11.802.006 18.648 8.947 18.468 18.473"></svg:path>`,
})
export class ArcticonsTawakkalnaServicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
