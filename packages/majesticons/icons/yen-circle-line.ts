import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsYenCircleLineIcon],svg[majesticons-yen-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8.5 7l3.5 5m0 0l3.5-5M12 12H9m3 0v3m0-3h3m-3 6v-3m0 0h3m-3 0H9"></svg:path>`,
})
export class MajesticonsYenCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
