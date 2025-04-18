import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity5Icon],svg[tdesign-city-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.72L15 4.52v5.108a4.124 4.124 0 0 1-6 0V4.519l-3.5-2.8L2 4.52V22h20V4.52zM9 12.14a6.15 6.15 0 0 0 6 0V20h-2v-5h-2v5H9zM7 20H4V5.48l1.5-1.2L7 5.48zm10 0V5.48l1.5-1.2l1.5 1.2V20z"></svg:path>`,
})
export class TdesignCity5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
