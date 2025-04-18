import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phKeyholeFillIcon],svg[ph-keyhole-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m29.52 146.39a4 4 0 0 1-3.66 5.61h-51.72a4 4 0 0 1-3.66-5.61L112 139.72a32 32 0 1 1 32 0Z"></svg:path>`,
})
export class PhKeyholeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
