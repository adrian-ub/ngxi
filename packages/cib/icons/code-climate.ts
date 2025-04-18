import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibCodeClimateIcon],svg[cib-code-climate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.396 6.719L32 17.323l-3.609 3.615l-6.995-6.995l-2.458 2.469l-3.62-3.615zm-7.193 7.198l3.609 3.62l3.396 3.385l-3.62 3.609l-6.984-6.984l-5.568 5.568l-1.427 1.417L0 20.923l10.604-10.604z"></svg:path>`,
})
export class CibCodeClimateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
