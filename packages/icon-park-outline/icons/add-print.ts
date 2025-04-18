import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAddPrintIcon],svg[icon-park-outline-add-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M12 19H6V6h36v13h-6"></svg:path><svg:path stroke-linejoin="round" d="M12 12h24v32l-6-4.444L24 44l-6-4.444L12 44z"></svg:path><svg:path d="M20 26h8m-4-4v8"></svg:path></svg:g>`,
})
export class IconParkOutlineAddPrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
