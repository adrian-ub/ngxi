import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity4Icon],svg[tdesign-city-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.72L15 4.52v3.862l-3-1.5l-3 1.5V4.519l-3.5-2.8L2 4.52V22h20V4.52zM9 10.617l3-1.5l3 1.5V20h-2v-4h-2v4H9zM7 20H4V5.48l1.5-1.2L7 5.48zm10 0V5.48l1.5-1.2l1.5 1.2V20zm-3-8h-4v2h4z"></svg:path>`,
})
export class TdesignCity4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
