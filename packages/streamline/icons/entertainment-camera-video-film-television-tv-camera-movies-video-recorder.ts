import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentCameraVideoFilmTelevisionTvCameraMoviesVideoRecorderIcon],svg[streamline-entertainment-camera-video-film-television-tv-camera-movies-video-recorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3.5" cy="3.5" r="3"></svg:circle><svg:circle cx="10.5" cy="4.5" r="2"></svg:circle><svg:rect width="7.5" height="4.5" x="3.5" y="9" rx="1"></svg:rect><svg:path d="M13.5 10v2.5"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentCameraVideoFilmTelevisionTvCameraMoviesVideoRecorderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
