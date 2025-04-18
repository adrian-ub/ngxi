import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiLetterLIcon],svg[twemoji-letter-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#FFF" d="M12.792 9.156c0-1.55.992-2.418 2.325-2.418s2.325.868 2.325 2.418V24.72h5.52c1.58 0 2.263 1.179 2.232 2.232c-.061 1.025-.868 2.048-2.231 2.048H15.21c-1.519 0-2.418-.992-2.418-2.543z"></svg:path>`,
})
export class TwemojiLetterLIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
