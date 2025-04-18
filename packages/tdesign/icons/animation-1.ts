import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAnimation1Icon],svg[tdesign-animation-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.41.06l3.716 6.174l7.02 1.626l-4.724 5.44l.623 7.18l-6.635-2.812l-6.634 2.811l.623-7.178L.676 7.86l7.02-1.626zm0 3.88L8.972 7.99L4.365 9.058l3.1 3.572l-.41 4.711l4.355-1.845l4.355 1.845l-.409-4.711l3.1-3.572l-4.607-1.067zm9.453 10.071l2.475 2.475l-1.414 1.414l-2.475-2.474zm-8.296 6.116l2.474 2.475l-1.414 1.414l-2.475-2.475zm6.578 0l2.474 2.475l-1.414 1.414l-2.475-2.475z"></svg:path>`,
})
export class TdesignAnimation1Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
