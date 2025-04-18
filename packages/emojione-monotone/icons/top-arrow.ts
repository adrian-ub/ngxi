import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneTopArrowIcon],svg[emojione-monotone-top-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2L16 18h10v15h12V18h10zm0 60c-3.308 0-6-2.848-6-6.348v-9.307C26 42.848 28.692 40 32 40s6 2.848 6 6.346v9.307C38 59.152 35.308 62 32 62m0-18.617c-1.654 0-3 1.33-3 2.963v9.307c0 1.633 1.346 2.965 3 2.965s3-1.332 3-2.965v-9.307c0-1.633-1.346-2.963-3-2.963M22 40H10v3h4.5v19h3V43H22zm26 0h-6v22h3v-9.309h3c3.308 0 6-2.848 6-6.348C54 42.846 51.308 40 48 40m0 9.309h-3v-5.926h3c1.654 0 3 1.328 3 2.961s-1.346 2.965-3 2.965"></svg:path>`,
})
export class EmojioneMonotoneTopArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
