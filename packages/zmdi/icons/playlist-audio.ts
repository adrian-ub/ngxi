import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPlaylistAudioIcon],svg[zmdi-playlist-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64v43H0V64zm0 85v43H0v-43zM0 277v-42h171v42zM299 64h106v43h-64v192q0 26-18.5 45t-45 19t-45.5-19t-19-45.5t19-45t45-18.5q11 0 22 4z"></svg:path>`,
})
export class ZmdiPlaylistAudioIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
