import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiShuffleTracksButtonIcon],svg[twemoji-shuffle-tracks-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M12.953 15.717c.549-1.394 1.234-2.861 2.175-4.142C13.95 10.064 12.351 9 10 9H7v4h3c1.307 0 2.119.896 2.953 2.717m6.527 5.424c-.478 1.314-1.059 2.777-1.852 4.132C18.718 26.318 20.117 27 22 27h3v-4h-3c-1.082 0-1.822-.62-2.52-1.859"></svg:path><svg:path fill="#FFF" d="M10 27H7v-4h3c1.884 0 2.739-1.816 4.117-5.673C15.441 13.617 17.09 9 22 9h3v4h-3c-1.885 0-2.739 1.817-4.117 5.673C16.559 22.383 14.91 27 10 27"></svg:path><svg:path fill="#FFF" d="M30.2 11L23 5v12zm0 14L23 19v12z"></svg:path>`,
})
export class TwemojiShuffleTracksButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
