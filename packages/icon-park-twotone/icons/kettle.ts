import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneKettleIcon],svg[icon-park-twotone-kettle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTKettle0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M6.778 37h36v7h-36z"></svg:path><svg:path d="m38.778 36l-2-26h-32l6.566 7.55a3 3 0 0 1 .727 2.206L10.778 36m16-18h-5m5 6h-5m5 6h-5m15-20h8v16h-6m-19-17V4h9v5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h49v48H0z" mask="url(#ipTKettle0)"></svg:path>`,
})
export class IconParkTwotoneKettleIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
