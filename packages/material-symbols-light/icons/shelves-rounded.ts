import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShelvesRoundedIcon],svg[material-symbols-light-shelves-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 22.096q-.214 0-.357-.143T4 21.596V2.423q0-.213.144-.356t.357-.144t.356.144t.143.356v1.596h14V2.423q0-.213.144-.356t.357-.144t.356.144t.143.356v19.173q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356V20H5v1.596q0 .213-.144.357t-.357.143M5 11h2.616V8.039q0-.344.232-.576t.575-.232h3.154q.343 0 .576.232t.232.576V11H19V5.02H5zm0 8h6.616v-2.962q0-.343.232-.575t.575-.232h3.154q.343 0 .576.232t.232.576V19H19v-7H5z"></svg:path>`,
})
export class MaterialSymbolsLightShelvesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
