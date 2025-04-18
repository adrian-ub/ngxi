import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentRadioAntennaAudioMusicRadioIcon],svg[streamline-entertainment-radio-antenna-audio-music-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9.5" x=".5" y="4" rx="1"></svg:rect><svg:path d="M2 4L13.5.5"></svg:path><svg:circle cx="4.5" cy="10" r="1.5"></svg:circle><svg:path d="M9.5 8.75H11m-1.5 2.5H11M.5 6.5h13"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentRadioAntennaAudioMusicRadioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
