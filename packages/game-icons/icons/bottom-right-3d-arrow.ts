import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBottomRight3dArrowIcon],svg[game-icons-bottom-right-3d-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m126.47 18.25l273.81 229.344l39.314-39.313l23.47 205.095l-205.095-23.438l37.467-37.468L20.594 58.655v99.28l195.25 235.126l5.437 6.532l-6.03 6.03l-45.97 45.97l323.033 38.344l-38.375-323l-48.313 48.312l-6 6l-6.563-5.438L155.032 18.25z"></svg:path>`,
})
export class GameIconsBottomRight3dArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
