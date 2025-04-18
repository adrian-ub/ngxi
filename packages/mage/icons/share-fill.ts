import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageShareFillIcon],svg[mage-share-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.96 17.977a4 4 0 1 1-7.94-.7l-4.9-2.22a4 4 0 0 1-3.11 1.49a4 4 0 1 1 0-8a4 4 0 0 1 2.92 1.28l5.16-2.8a3.6 3.6 0 0 1-.13-1a4 4 0 1 1 1.09 2.74l-5.16 2.81q.135.491.13 1a4 4 0 0 1-.06.7l4.9 2.22a4 4 0 0 1 7.13 2.52z"></svg:path>`,
})
export class MageShareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
