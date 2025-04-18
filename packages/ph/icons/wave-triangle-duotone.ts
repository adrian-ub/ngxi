import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleDuotoneIcon],svg[ph-wave-triangle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m76 56l52 72H24Zm156 72H128l52 72Z" opacity=".2"></svg:path><svg:path d="m238.48 132.68l-52 72a8 8 0 0 1-13 0L76 69.66l-45.51 63a8 8 0 1 1-13-9.36l52-72a8 8 0 0 1 13 0l97.51 135l45.51-63a8 8 0 1 1 13 9.36Z"></svg:path></svg:g>`,
})
export class PhWaveTriangleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
