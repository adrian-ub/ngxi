import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsKeyIcon],svg[majesticons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 9a7 7 0 1 1 5.562 6.852L12 17.414a2 2 0 0 1-1.414.586H10a2 2 0 0 1-2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.586A2 2 0 0 1 2.586 16l5.562-5.562A7 7 0 0 1 8 9m7-3a1 1 0 1 0 0 2a1 1 0 0 1 1 1a1 1 0 1 0 2 0a3 3 0 0 0-3-3" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
