import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolBlockIcon],svg[websymbol-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 501q0 136-67 251T751 934t-251 67t-251-67T67 752T0 501t67-251T249 68T500 1t251 67t182 182t67 251m-117 0q0-158-112.5-270.5T500 118q-126 0-226 74l535 535q74-100 74-226M726 810L191 275q-74 100-74 226q0 158 112.5 270.5T500 884q126 0 226-74"></svg:path>`,
})
export class WebsymbolBlockIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
