import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxKnifeIcon],svg[bx-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.66 3.6a3 3 0 0 0-4.24 0l-.71.71l-7.07 7.07l2.12 2.12l-6.36 6.36l1.41 1.42L19.66 6.43c1.1-1.1 1.1-1.73.71-2.12z"></svg:path>`,
})
export class BxKnifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
