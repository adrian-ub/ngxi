import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFhcodeIcon],svg[arcticons-fhcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 30.577V17.423h6.713M4.5 24h4.364m4.561-.025h8.895m0-6.552v13.154m-8.895-13.154v13.154m11.631-2.22L33.448 24l-8.392-4.357m10.053 10.934H43.5"></svg:path>`,
})
export class ArcticonsFhcodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
