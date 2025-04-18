import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersFillIcon],svg[ph-frame-corners-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M88 192H56a8 8 0 0 1-8-8v-32a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16m120-88a8 8 0 0 1-16 0V80h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhFrameCornersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
