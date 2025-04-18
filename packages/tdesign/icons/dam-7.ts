import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam7Icon],svg[tdesign-dam-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.22 1h11.56l1 4H21v15h1v2H2v-2h1V5h2.22zm1.06 4h9.44l-.5-2H7.78zM5 20h3v-8h8v8h3V7H5zm9 0v-6h-4v6z"></svg:path>`,
})
export class TdesignDam7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
