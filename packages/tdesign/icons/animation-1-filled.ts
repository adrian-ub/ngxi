import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAnimation1FilledIcon],svg[tdesign-animation-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.41.06l3.716 6.174l7.019 1.626l-4.723 5.44l.623 7.18l-6.635-2.812l-6.634 2.811l.623-7.178L.676 7.86l7.019-1.626zm9.453 13.951l2.475 2.475l-1.414 1.414l-2.475-2.474zm-8.297 6.116l2.475 2.475l-1.414 1.414l-2.475-2.475zm6.578 0l2.475 2.475l-1.414 1.414l-2.475-2.475z"></svg:path>`,
})
export class TdesignAnimation1FilledIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
