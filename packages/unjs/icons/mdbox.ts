import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[unjsMdboxIcon],svg[unjs-mdbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#427687" d="M29 1H3c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2"></svg:path><svg:path fill="#8CAFBF" d="M27.425 1H2.875C1.85 1 1 1.85 1 2.875V27.35c0 1.05.85 1.875 1.875 1.875H27.4c1.05 0 1.875-.85 1.875-1.875V2.875C29.325 1.85 28.45 1 27.425 1"></svg:path><svg:path fill="#FAFAFA" d="m22.75 20.15l-6 6c-.4.45-1.1.45-1.5 0l-6-6c-.575-.65-.1-1.65.75-1.65h3.5c.275 0 .5-.225.5-.5V6.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1V18c0 .275.225.5.5.5H22c.85 0 1.325 1.025.75 1.65"></svg:path><svg:path fill="#B4E1ED" d="M9.925 3.225c0-.575-.4-.75-2.7-.675c-1.925.075-2.875.3-3.45 1s-.725 2.125-.75 3.825c0 1.2 0 2.325.625 2.325c.85 0 .85-1.975 1.55-3.075c1.35-2.175 4.725-2.65 4.725-3.4" opacity=".5"></svg:path></svg:g>`,
})
export class UnjsMdboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
