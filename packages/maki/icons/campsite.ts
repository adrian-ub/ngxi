import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCampsiteIcon],svg[maki-campsite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h.25l4.782-7.742a.55.55 0 0 1 .936 0L12.75 9H13a1 1 0 0 1 1 1m-3.5-1l-3-5l-3 5z"></svg:path>`,
})
export class MakiCampsiteIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
