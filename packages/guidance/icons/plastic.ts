import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePlasticIcon],svg[guidance-plastic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10 .5h4M6.5 10H7l1.027.171a24.2 24.2 0 0 0 7.946 0L17 10h.5m-11 7H7l1.027-.171a24.2 24.2 0 0 1 7.946 0L17 17h.5m-4-13.5h-3a7.24 7.24 0 0 0-4 6.472V21.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9.972a7.24 7.24 0 0 0-4-6.472Z"></svg:path>`,
})
export class GuidancePlasticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
