import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGasIcon],svg[icon-park-twotone-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGas0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M23.049 9.789c1.626-.436 3.291.508 3.72 2.109s-.541 3.25-2.167 3.686S6.708 17 6.708 17s14.715-6.776 16.34-7.211Zm.058 28.658c1.625.435 3.291-.509 3.72-2.11s-.542-3.25-2.168-3.686c-1.625-.436-17.893-1.647-17.893-1.647s14.715 7.007 16.34 7.443Z"></svg:path><svg:path stroke-linecap="round" d="M34 16.004a5 5 0 1 1 4 8H16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGas0)"></svg:path>`,
})
export class IconParkTwotoneGasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
