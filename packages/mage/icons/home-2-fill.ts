import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHome2FillIcon],svg[mage-home-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.205 7.765a2.93 2.93 0 0 0-1.16-1.28l-6.47-4a3 3 0 0 0-3.16 0l-6.47 4a3 3 0 0 0-1.12 1.29a2.9 2.9 0 0 0-.24 1.7l1.68 10a2.94 2.94 0 0 0 1 1.79a3 3 0 0 0 1.9.7h9.62a3 3 0 0 0 1.94-.7a2.9 2.9 0 0 0 1-1.79l1.68-10a3 3 0 0 0-.2-1.71m-5.86 9.7h-6.69a1 1 0 0 1 0-2h6.69a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageHome2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
