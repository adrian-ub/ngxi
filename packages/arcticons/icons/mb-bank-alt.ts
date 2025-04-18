import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMbBankAltIcon],svg[arcticons-mb-bank-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.912 33.884V43.5m0-31.52v9.616M15.619 33.174l-9.146 2.972m29.977-9.742l-9.145 2.972M11.057 20.56l-5.652-7.78m18.527 25.502l-5.652-7.78m4.274-18.222l5.653-7.78M9.679 30l5.652-7.779m18.119-1.337l9.145 2.971m-29.978-9.739l9.146 2.972"></svg:path>`,
})
export class ArcticonsMbBankAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
