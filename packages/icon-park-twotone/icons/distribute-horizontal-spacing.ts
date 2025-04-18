import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDistributeHorizontalSpacingIcon],svg[icon-park-twotone-distribute-horizontal-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDistributeHorizontalSpacing0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path d="M8 43V5m32 38V5"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M20 14h8v20h-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDistributeHorizontalSpacing0)"></svg:path>`,
})
export class IconParkTwotoneDistributeHorizontalSpacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
