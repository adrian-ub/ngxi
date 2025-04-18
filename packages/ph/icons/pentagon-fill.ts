import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPentagonFillIcon],svg[ph-pentagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m231.26 105.19l-32 107.54l-.06.17A15.94 15.94 0 0 1 184 224H72a15.94 15.94 0 0 1-15.2-11.1l-.06-.17l-32-107.54a16 16 0 0 1 5.7-17.63l87.92-68.31l.18-.14a15.93 15.93 0 0 1 18.92 0l.18.14l87.92 68.31a16 16 0 0 1 5.7 17.63"></svg:path>`,
})
export class PhPentagonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
