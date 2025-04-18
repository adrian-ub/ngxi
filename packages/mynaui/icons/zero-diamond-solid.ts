import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiZeroDiamondSolidIcon],svg[mynaui-zero-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0v3a1.75 1.75 0 1 1-3.5 0z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M12 7.25a3.25 3.25 0 0 0-3.25 3.25v3a3.25 3.25 0 0 0 6.5 0v-3A3.25 3.25 0 0 0 12 7.25"></svg:path></svg:g>`,
})
export class MynauiZeroDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
