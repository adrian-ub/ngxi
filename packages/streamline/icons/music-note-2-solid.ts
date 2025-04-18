import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicNote2SolidIcon],svg[streamline-music-note-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.781.23a1.2 1.2 0 0 0-.555.02h-.006L4.587 2.369a1.23 1.23 0 0 0-.905 1.177V9.04a2.477 2.477 0 1 0 1.5 2.277V6.076l7.09-1.97V6.57a2.477 2.477 0 1 0 1.5 2.345V1.402a1.226 1.226 0 0 0-.99-1.172Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMusicNote2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
