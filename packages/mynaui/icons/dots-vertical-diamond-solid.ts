import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsVerticalDiamondSolidIcon],svg[mynaui-dots-vertical-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m.96 9.76a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM11 8c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5A.75.75 0 0 0 11 8m.75 7.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiDotsVerticalDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
