import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsX24Icon],svg[qlementine-icons-x-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 2h3l-7.68 9.03l7.68 11h-6l-4.97-7.1L5 22.03H2L9.68 13L2 2h6l4.97 7.1zm1.08 19L7.48 3H3.92l12.6 18z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsX24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
