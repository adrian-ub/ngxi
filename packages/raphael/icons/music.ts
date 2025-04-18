import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelMusicIcon],svg[raphael-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 8.042v15.903c-.676-.45-1.635-.736-2.707-.736c-2.048 0-3.708 1.024-3.708 2.29s1.66 2.292 3.708 2.292s3.708-1.026 3.708-2.29V13.785l10.916-3.24v9.565c-.678-.45-1.635-.735-2.708-.735c-2.048 0-3.708 1.025-3.708 2.292c0 1.265 1.66 2.29 3.708 2.29s3.708-1.025 3.708-2.29V4.207z"></svg:path>`,
})
export class RaphaelMusicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
