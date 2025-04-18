import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEntertainmentControlButtonPlayCircleControlsMediaMultiPlayMultimediaButtonCircleIcon],svg[streamline-entertainment-control-button-play-circle-controls-media-multi-play-multimedia-button-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m5.5 4.5l4 2.5l-4 2.5v-5z"></svg:path></svg:g>`,
})
export class StreamlineEntertainmentControlButtonPlayCircleControlsMediaMultiPlayMultimediaButtonCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
