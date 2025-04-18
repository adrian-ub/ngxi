import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestWifiRouterIcon],svg[material-symbols-light-nest-wifi-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.73 20q-1.578 0-2.818-.937t-1.716-2.447h15.608q-.477 1.511-1.716 2.448T15.269 20zm-4.71-4.384Q4 15.519 4 15.442V8.731q0-1.962 1.385-3.346Q6.768 4 8.73 4h6.538q1.962 0 3.347 1.385Q20 6.768 20 8.73v6.711q0 .077-.02.174z"></svg:path>`,
})
export class MaterialSymbolsLightNestWifiRouterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
