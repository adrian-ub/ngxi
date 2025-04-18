import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers61Icon],svg[tdesign-numbers-6-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.42 3.5h2.31l-3.473 6.052Q11.621 9.5 12 9.5a5.25 5.25 0 1 1-4.316 2.261zm-3.4 9.953a3.25 3.25 0 1 0 .354-.617z"></svg:path>`,
})
export class TdesignNumbers61Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
