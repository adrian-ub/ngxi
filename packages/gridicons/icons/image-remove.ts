import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsImageRemoveIcon],svg[gridicons-image-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.587 3.423l1.414 1.414L20 6.84V18a2 2 0 0 1-2 2H6.839l-2.006 2.006l-1.414-1.414zM12.42 14.42l1.001 1.001l1-1a1.59 1.59 0 0 1 2.11.11L18 16V8.839zM15.162 6H6v6.38l2.19-2.19l1.391 1.391L4 17.162V6a2 2 0 0 1 2-2h11.162z"></svg:path>`,
})
export class GridiconsImageRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
