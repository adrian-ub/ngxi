import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisTableIcon],svg[oui-vis-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-1 0V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1zm0 1H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM4.5 6a.5.5 0 0 1 0 1H2.496a.5.5 0 1 1 0-1zm9 0a.5.5 0 1 1 0 1h-6a.5.5 0 0 1 0-1zm-9 3a.5.5 0 0 1 0 1H2.496a.5.5 0 1 1 0-1zm9 0a.5.5 0 1 1 0 1h-6a.5.5 0 0 1 0-1zm-9 3a.5.5 0 1 1 0 1H2.496a.5.5 0 1 1 0-1zm9 0a.5.5 0 1 1 0 1h-6a.5.5 0 1 1 0-1z"></svg:path>`,
})
export class OuiVisTableIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
