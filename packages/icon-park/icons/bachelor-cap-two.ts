import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBachelorCapTwoIcon],svg[icon-park-bachelor-cap-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 21V36.0388C11 36.6463 11.2744 37.2188 11.7852 37.5478C13.4863 38.6433 17.8594 41 24 41C30.1406 41 34.5137 38.6433 36.2148 37.5478C36.7256 37.2188 37 36.6463 37 36.0388V21"></svg:path><svg:path stroke-linecap="round" d="M43 24L43 32"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M5 17L24 7L43 17L24 27L5 17Z"></svg:path></svg:g>`,
})
export class IconParkBachelorCapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
