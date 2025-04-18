import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsVideoRemoveIcon],svg[gridicons-video-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.42 4.59l1.167-1.167l1.414 1.414L20 6.84V18a2 2 0 0 1-2 2v-2h-2v2H6.839l-2.006 2.006l-1.414-1.414L4.59 19.42l-.01-.01L8 16L18 6l1.41-1.42zM15.84 11H18V8.839zM16 8.01l.01-.01H16zM6 15.17l-2 2V6a2 2 0 0 1 2-2v2h2V4h9.17l-9 9H6zM6 8v3h2V8zm12 8v-3h-2v3z"></svg:path>`,
})
export class GridiconsVideoRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
