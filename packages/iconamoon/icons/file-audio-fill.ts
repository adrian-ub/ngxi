import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFileAudioFillIcon],svg[iconamoon-file-audio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2a1 1 0 0 0-1 1v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2zm9 2.414L17.586 8H14zM11 15v-3a.997.997 0 0 1 1-1a1 1 0 0 1 .707.293l2 2a1 1 0 0 1-1.414 1.414L13 14.414V17a2 2 0 1 1-2-2" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonFileAudioFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
