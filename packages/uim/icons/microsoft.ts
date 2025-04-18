import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimMicrosoftIcon],svg[uim-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9.503v9.503H2zm10.493 0h9.503v9.503h-9.503zM2 12.497h9.503V22H2zm10.493 0h9.503V22h-9.503z"></svg:path>`,
})
export class UimMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
