import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAudioIcon],svg[token-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.578 15.533c-.45 0-.726-.469-.494-.842L9.897 3.597a.59.59 0 0 1 .996 0L20.92 19.833c.225.373-.051.842-.508.842H6.362c-.45 0-.733-.475-.502-.848l1.749-2.738a.58.58 0 0 1 .495-.27h4.756a.559.559 0 0 0 .489-.855l-2.475-4.024a.567.567 0 0 0-.964 0l-2.038 3.343a.59.59 0 0 1-.495.25z"></svg:path>`,
})
export class TokenAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
