import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHonourLineIcon],svg[ri-honour-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03l-8.702-3.85A.5.5 0 0 1 3 18.722V4H1V2h22v2zM5 4v13.745l7 3.1l7-3.1V4zm3 4h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class RiHonourLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
