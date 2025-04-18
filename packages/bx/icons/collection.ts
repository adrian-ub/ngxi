import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCollectionIcon],svg[bx-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2M5 20v-8h14l.002 8zM5 6h14v2H5zm2-4h10v2H7z"></svg:path>`,
})
export class BxCollectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
