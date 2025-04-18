import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCreativeIcon],svg[icon-park-twotone-creative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCreative0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M42 39V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3Z"></svg:path><svg:path fill="#555" d="m24 18.316l-2.896 5.91l-6.578.954l4.765 4.658l-1.139 6.478L24 33.199l5.849 3.117l-1.13-6.478l4.756-4.658l-6.541-.954z"></svg:path><svg:path stroke-linecap="round" d="M18.316 12.632h11.368"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCreative0)"></svg:path>`,
})
export class IconParkTwotoneCreativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
