import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMusicNoteSolidIcon],svg[bubbles-music-note-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.423 3.566L12.566.137a1.286 1.286 0 0 0-1.852 1.149v13.148a.45.45 0 0 1-.188.36a.48.48 0 0 1-.377 0a4.8 4.8 0 0 0-1.578-.223a4.714 4.714 0 1 0 4.715 4.715V7.492a.43.43 0 0 1 .205-.378a.5.5 0 0 1 .412 0L18.29 9.31a1.25 1.25 0 0 0 1.235 0a1.27 1.27 0 0 0 .617-1.097v-3.43a1.29 1.29 0 0 0-.72-1.217"></svg:path>`,
})
export class BubblesMusicNoteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
