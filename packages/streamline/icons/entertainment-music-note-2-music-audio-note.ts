import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentMusicNote2MusicAudioNoteIcon],svg[streamline-entertainment-music-note-2-music-audio-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.5" cy="11.42" r="2"></svg:circle><svg:circle cx="11.5" cy="8.92" r="2"></svg:circle><svg:path d="M13.5 8.92V1.08a.5.5 0 0 0-.63-.48l-8 2.22a.5.5 0 0 0-.37.48v8.12m0-5.5l9-2.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentMusicNote2MusicAudioNoteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
