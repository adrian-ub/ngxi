import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpViewAgendaIcon],svg[ic-sharp-view-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h18v8H3zM3 3h18v8H3z"></svg:path>`,
})
export class IcSharpViewAgendaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
