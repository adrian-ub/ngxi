import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCreditScoreIcon],svg[material-symbols-light-credit-score-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.74 19H4.617q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v4.576h-1.802l-4.556 4.556l-2.85-2.839l-4.07 4.072zm4.902 1.539l-3.557-3.558l.707-.708l2.85 2.839l5.689-5.689l.708.72zM4 8.808v2.384h16V8.808z"></svg:path>`,
})
export class MaterialSymbolsLightCreditScoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
