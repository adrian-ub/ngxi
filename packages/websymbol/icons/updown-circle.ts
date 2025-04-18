import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolUpdownCircleIcon],svg[websymbol-updown-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 500q0 136-67 251T751 933t-251 67t-251-67T67 751T0 500t67-251T249 67T500 0t251 67t182 182t67 251M647 794l162-236H706V265H588v293H485zM412 441h103L353 176L191 441h103v294h118z"></svg:path>`,
})
export class WebsymbolUpdownCircleIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
