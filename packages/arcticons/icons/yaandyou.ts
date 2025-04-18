import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYaandyouIcon],svg[arcticons-yaandyou-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.231 21.78h25.538M23.385 4.5h1.23c4.844 0 8.743 3.861 8.743 8.658v21.684c0 4.797-3.9 8.658-8.742 8.658h-1.231c-4.843 0-8.742-3.861-8.742-8.658V13.158c0-4.797 3.899-8.658 8.742-8.658"></svg:path>`,
})
export class ArcticonsYaandyouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
