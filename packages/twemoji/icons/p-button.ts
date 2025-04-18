import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPButtonIcon],svg[twemoji-p-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#269" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M11 9.496C11 7.992 11.896 7 13.496 7h5.665c4.703 0 8.191 2.944 8.191 7.52c0 4.67-3.617 7.48-8 7.48H16v5.479c0 1.6-1.024 2.496-2.4 2.496s-2.6-.897-2.6-2.496zM16 18h3.062c2.018 0 3.297-1.465 3.297-3.385s-1.279-3.392-3.297-3.392H16z"></svg:path>`,
})
export class TwemojiPButtonIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
