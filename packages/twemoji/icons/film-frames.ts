import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFilmFramesIcon],svg[twemoji-film-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BBDDF5" d="M29 11h6v14h-6zM1 11h6v14H1zm8 0h18v14H9z"></svg:path><svg:path fill="#231F20" d="M35 11V6H1v5h6v14H1v5h34v-5h-6V11zm-8 14H9V11h18z"></svg:path><svg:path fill="#F5F8FA" d="M31 7h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zM7 7h2v3H7zM3 7h2v3H3zm28 19h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3H7zm-4 0h2v3H3z"></svg:path><svg:path fill="#88C9F9" d="M29 25V11h1v14zM9 25V11h1v14z"></svg:path>`,
})
export class TwemojiFilmFramesIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
