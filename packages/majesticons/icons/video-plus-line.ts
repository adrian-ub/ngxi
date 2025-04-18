import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsVideoPlusLineIcon],svg[majesticons-video-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zm0 0l4-4v8zm-7-3v3m0 3v-3m0 0h3m-3 0H7"></svg:path>`,
})
export class MajesticonsVideoPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
