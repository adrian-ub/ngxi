import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDistributeVerticalSpacingIcon],svg[icon-park-solid-distribute-vertical-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M5 8h38M5 40h38"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M14 20h20v8H14z"></svg:path></svg:g>`,
})
export class IconParkSolidDistributeVerticalSpacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
