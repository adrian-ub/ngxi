import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBorderAllIcon],svg[cil-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 472h400a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v400a16 16 0 0 0 16 16M272 72h168v168H272Zm0 200h168v168H272ZM72 72h168v168H72Zm0 200h168v168H72Z"></svg:path>`,
})
export class CilBorderAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
