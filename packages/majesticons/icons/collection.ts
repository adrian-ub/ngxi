import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCollectionIcon],svg[majesticons-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 21a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2H8zm-4-5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2H4zm0-1a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCollectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
