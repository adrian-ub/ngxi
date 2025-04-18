import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAddPrintIcon],svg[icon-park-solid-add-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAddPrint0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="M12 19H6V6h36v13h-6"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M12 12h24v32l-6-4.444L24 44l-6-4.444L12 44z"></svg:path><svg:path stroke="#000" d="M20 26h8m-4-4v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAddPrint0)"></svg:path>`,
})
export class IconParkSolidAddPrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
