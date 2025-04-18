import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolDownCircleIcon],svg[websymbol-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 501q0 136-67 251T751 934t-251 67t-251-67T67 752T0 501t67-251T249 68T500 1t251 67t182 182t67 251M500 687l232-233l-71-71l-161 161l-161-161l-71 71z"></svg:path>`,
})
export class WebsymbolDownCircleIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
