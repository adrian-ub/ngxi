import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineKettleIcon],svg[icon-park-outline-kettle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6.778 37h36v7h-36zm32-1l-2-26h-32l6.566 7.55a3 3 0 0 1 .727 2.206L10.778 36m16-18h-5m5 6h-5m5 6h-5m15-20h8v16h-6m-19-17V4h9v5"></svg:path>`,
})
export class IconParkOutlineKettleIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
