import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFirstAidKitIcon],svg[icon-park-twotone-first-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFirstAidKit0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 20v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20"></svg:path><svg:path fill="#555" d="M5 14h38v6H5zm26-6H17v6h14z"></svg:path><svg:path stroke-linecap="round" d="M20 30h8m-4-4v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFirstAidKit0)"></svg:path>`,
})
export class IconParkTwotoneFirstAidKitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
