import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibHotjarIcon],svg[cib-hotjar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.931 10.094C23.262 1.813 9.569 0 9.569 0s6.319 6.9-1.756 12.356C2.707 15.8.688 20.275 2.875 25.162c1.675 3.744 5.219 5.269 9.038 5.837c-1.825-3.444-.413-7.65-.256-8.1c3.569 5.4 10.313 0 6.925-5.869c4.438.962 5.1 8.663 1.694 13.469c5.031-1.581 8.381-5.556 9.3-9.1c.969-3.706.231-7.994-1.644-11.306z"></svg:path>`,
})
export class CibHotjarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
