import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTawakkalnaIcon],svg[arcticons-tawakkalna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.942 39.992a7.4 7.4 0 0 1-5.251-2.176l-7.016-7.015a7.426 7.426 0 0 1 10.503-10.502l1.764 1.764l11.88-11.88a7.427 7.427 0 0 1 10.503 10.503L24.193 37.817a7.4 7.4 0 0 1-5.251 2.175"></svg:path>`,
})
export class ArcticonsTawakkalnaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
