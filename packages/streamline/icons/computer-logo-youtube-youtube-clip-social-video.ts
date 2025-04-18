import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoYoutubeYoutubeClipSocialVideoIcon],svg[streamline-computer-logo-youtube-youtube-clip-social-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="10" x=".5" y="2" rx="2"></svg:rect><svg:path d="M5.31 9.32v-4.2a.39.39 0 0 1 .6-.34l3.6 2.1a.4.4 0 0 1 0 .69l-3.6 2.1a.4.4 0 0 1-.6-.35Z"></svg:path></svg:g>`,
})
export class StreamlineComputerLogoYoutubeYoutubeClipSocialVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
