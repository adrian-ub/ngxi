import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFolderSpecialIcon],svg[ic-twotone-folder-special-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.17 8l-2-2H4v12h16V8zM15 9l1.19 2.79l3.03.26l-2.3 1.99l.69 2.96L15 15.47L12.39 17l.69-2.96l-2.3-1.99l3.03-.26z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-6.92-3.96L12.39 17L15 15.47L17.61 17l-.69-2.96l2.3-1.99l-3.03-.26L15 9l-1.19 2.79l-3.03.26z"></svg:path>`,
})
export class IcTwotoneFolderSpecialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
