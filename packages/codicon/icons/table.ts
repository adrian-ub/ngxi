import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTableIcon],svg[codicon-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2h-12l-.5.5v11l.5.5h12l.5-.5v-11zM2 3h11v1H2zm7 4H6V5h3zm0 1v2H6V8zM2 5h3v2H2zm0 3h3v2H2zm0 5v-2h3v2zm4 0v-2h3v2zm7 0h-3v-2h3zm0-3h-3V8h3zm-3-3V5h3v2z"></svg:path>`,
})
export class CodiconTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
