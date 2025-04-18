import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentMusicNote1MusicAudioNoteIcon],svg[streamline-entertainment-music-note-1-music-audio-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="4.25" cy="11" r="2.5"></svg:circle><svg:path d="M6.75 11V.5h0a5.5 5.5 0 0 1 5.5 5.5h0"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentMusicNote1MusicAudioNoteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
