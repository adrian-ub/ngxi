import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGradingIcon],svg[material-symbols-light-grading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.964 19.994l-2.133-2.132l.688-.689l1.425 1.425l3.348-3.348l.708.708zM4 20v-1h8v1zm0-3.75v-1h8v1zm0-3.75v-1h16v1zm0-3.75v-1h16v1zM4 5V4h16v1z"></svg:path>`,
})
export class MaterialSymbolsLightGradingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
