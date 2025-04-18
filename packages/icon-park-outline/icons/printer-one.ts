import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePrinterOneIcon],svg[icon-park-outline-printer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 33h10a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2H32M16 33H6a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h10"></svg:path><svg:path d="M12 13v6h24v-6m-20 0V5h16v8M16 29v14h16V29m-10 6h4m-13-8h22"></svg:path></svg:g>`,
})
export class IconParkOutlinePrinterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
