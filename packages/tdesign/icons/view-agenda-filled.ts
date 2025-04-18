import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignViewAgendaFilledIcon],svg[tdesign-view-agenda-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v8H2zm0 10h20v8H2z"></svg:path>`,
})
export class TdesignViewAgendaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
