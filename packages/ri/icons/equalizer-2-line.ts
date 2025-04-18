import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEqualizer2LineIcon],svg[ri-equalizer-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-3.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M12 8h8V6h-8zm4 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-3.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M4 16v2h8v-2z"></svg:path>`,
})
export class RiEqualizer2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
