import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDistributeHorizontalSpacingIcon],svg[icon-park-solid-distribute-horizontal-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M8 43V5m32 38V5"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M20 14h8v20h-8z"></svg:path></svg:g>`,
})
export class IconParkSolidDistributeHorizontalSpacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
