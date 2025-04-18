import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMarkupIcon],svg[ooui-markup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3.5L0 10l1.5 1.5l5 5L8 15l-5-5l5-5zm7 0L12 5l5 5l-5 5l1.5 1.5L20 10z"></svg:path>`,
})
export class OouiMarkupIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
