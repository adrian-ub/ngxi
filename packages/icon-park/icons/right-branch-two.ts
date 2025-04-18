import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRightBranchTwoIcon],svg[icon-park-right-branch-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24H14"></svg:path><svg:path d="M44 8C40.7164 8.46377 35.0448 10.7826 29.2239 16.3478C23.9021 21.4358 17.4328 23.7681 14 24"></svg:path><svg:path d="M14 24C17.2836 24.4638 22.9552 26.7826 28.7761 32.3478C34.0979 37.4358 40.5672 39.7681 44 40"></svg:path></svg:g>`,
})
export class IconParkRightBranchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
