import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNinePointsConnectedIcon],svg[icon-park-outline-nine-points-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m26.829 37.172l10.343-10.343m-16 0L10.829 37.172m16-16l10.343-10.343M10.829 21.172l10.343-10.343M12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0-16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m16 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class IconParkOutlineNinePointsConnectedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
